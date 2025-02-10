import { AutoRouter } from 'itty-router';
import { loadConfig, parseLlmResponse, PersonalizationRequest } from './models';
import { PromptTemplate } from "@langchain/core/prompts";
import { Ollama } from '@langchain/ollama';
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';

const decoder = new TextDecoder();
const systemPrompt = `<context>
You're an expert in creating personalized product descriptions. 
Given essential information about the potential customer and a generalized product description, generate a highly personalized variation 
of the text provided by the user. Directly address the potential customer. 
You may not use placeholders in resulting product description.
</context>
<personalization>
- Customer Name: {firstName} {lastName}
- Customer Gender: {gender}
- Customer Age: {age}
- Recent Purchases: {recentPurchases}
</personalization>
<user>Personalize the following product description:
{userPrompt}
</user>`;

let router = AutoRouter();
router
  .post("/personalize", async (req) => personalize(await req.arrayBuffer()));

const personalize = async (requestBody: ArrayBuffer): Promise<Response> => {
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
    temperature: config.temperature
  });
  let prompt = PromptTemplate.fromTemplate(systemPrompt);
  const chain = prompt.pipe(llm);
  const llmResponse = await chain.invoke({
    ...model.customer,
    ...{ recentPurchases: model.customer.recentPurchases.join(", ") },
    ...{ userPrompt: model.productDescription }
  });
  const response = parseLlmResponse(llmResponse);
  return new Response(JSON.stringify(response), { status: 200, headers: { 'content-type': 'application/json' } })
}

//@ts-ignore
addEventListener('fetch', async (event: FetchEvent) => {
  event.respondWith(router.fetch(event.request));
});
