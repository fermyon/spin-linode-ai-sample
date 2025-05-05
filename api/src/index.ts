import { AutoRouter } from 'itty-router';
import { loadConfig, parseLlmResponse, PersonalizationRequest } from './models';
import { PromptTemplate } from "@langchain/core/prompts";
import { Ollama } from '@langchain/ollama';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';

const decoder = new TextDecoder();
const systemPrompt = `<context>
You're an expert in creating personalized and engaging product descriptions working at personaliZon. For the personaliZon webshop, you must create product descriptions to drive sales. 
Given information about the customer and a generalized product description, generate a tailored and personalized product description.
Generate an engaging product description to drive product sales. 
You may not use placeholders in the resulting product description.
You may not address the customer directly in the product description or use their name.
</context>
<personalization>
- Customer Name: {firstName} {lastName}
- Customer Nationality: {nationality}
- Customer speaks: English
- Customer Gender: {gender}
- Customer Age: {age}
- Recent Purchases: {recentPurchases}
</personalization>
<user>Personalize the following product description:
{userPrompt}
</user>`;

let router = AutoRouter();
router
  .post("/api/personalize", async (req) => personalization(await req.arrayBuffer()))
  .post("/api/personalize-with-streaming", async (req) => streamPersonalization(await req.arrayBuffer()));

const streamPersonalization = async (requestBody: ArrayBuffer): Promise<Response> => {
  let model;
  try {
    model = JSON.parse(decoder.decode(requestBody)) as PersonalizationRequest;
  } catch (error) {
    return new Response("Bad Request", { status: 400 });
  }
  const config = loadConfig();
  const llm = new Ollama({
    baseUrl: config.ollamaBaseUrl,
    model: config.ollamaModel,
    temperature: config.temperature,
  });
  let prompt = PromptTemplate.fromTemplate(systemPrompt);
  const chain = prompt.pipe(llm);
  const stream = await chain.stream({
    ...model.customer,
    ...{ userPrompt: model.productDescription }
  });
  const encoder = new TransformStream({
    transform(chunk, controller) {
      const enc = new TextEncoder();
      controller.enqueue(enc.encode(chunk));
    }
  });
  const transformed = (stream as ReadableStream).pipeThrough(encoder);
  return new Response(transformed, {
    status: 200, headers: {
      "Content-Encoding": "none",
      "Content-Type": "text/event-stream; charset=utf-8"
    }
  })
}
const personalization = async (requestBody: ArrayBuffer): Promise<Response> => {
  let model;
  try {
    model = JSON.parse(decoder.decode(requestBody)) as PersonalizationRequest;
  } catch (error) {
    return new Response("Bad Request", { status: 400 });
  }
  const config = loadConfig();
  const llm = new Ollama({
    baseUrl: config.ollamaBaseUrl,
    model: config.ollamaModel,
    temperature: config.temperature,
  });
  let prompt = PromptTemplate.fromTemplate(systemPrompt);
  const chain = prompt.pipe(llm);
  const llmResponse = await chain.invoke({
    ...model.customer,
    ...{ userPrompt: model.productDescription }
  });
  const response = parseLlmResponse(llmResponse);
  return new Response(JSON.stringify(response), { status: 200, headers: { 'content-type': 'application/json' } })
}

//@ts-ignore
addEventListener('fetch', async (event: FetchEvent) => {
  event.respondWith(router.fetch(event.request));
});
