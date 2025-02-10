import { Variables } from "@fermyon/spin-sdk"

export interface PersonalizationRequest {
  productDescription: string,
  customer: Customer,
}

export interface PersonalizationResponse {
  response: string,
  reasoning: string | undefined
}

/**
 * Parses a string response (received from the LLM) into {@link PersonalizationResponse}
 *
 * @param plain - The response received from the LLM
 */
export function parseLlmResponse(plain: string): PersonalizationResponse {
  if (plain.indexOf("<think>") > -1) {
    const match = plain.match(/<think>([\s\S]*?)<\/think>/);
    if (match) {
      console.log(`LLM thoughts: ${match[1].trim()}`);
      return {
        response: plain.replace(/<think>[\s\S]*?<\/think>\n?/g, ""),
        reasoning: match[1].trim()
      } as PersonalizationResponse;
    }
  }
  return {
    response: plain,
    reasoning: undefined
  } as PersonalizationResponse;
}

export interface Config {
  ollamaBaseUrl: string,
  ollamaModel: string,
  temperature: number,
}

/**
  * Returns the applicaition configuration as instance of {@link Config}
  *
  * @throws A general {@link Error} if either ollama_base_url or ollama_model is empty
  */
export function loadConfig(): Config {
  const baseUrl = Variables.get("ollama_base_url");
  const model = Variables.get("ollama_model");
  const tempeature = Variables.get("temperature")!;

  if (!baseUrl || !model) {
    throw new Error("Application configuration missing");
  }
  return {
    ollamaBaseUrl: baseUrl,
    ollamaModel: model,
    temperature: +tempeature
  } as Config;
}

export interface Customer {
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  recentPurchases: Array<string>
}

