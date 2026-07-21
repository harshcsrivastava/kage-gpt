import "dotenv/config";
import { createOpenAI } from "@ai-sdk/openai";

// OpenRouter uses the format "provider/model-name"
export const DEFAULT_CHAT_MODEL = "openai/gpt-4o-mini";

// Create OpenAI client pointing to OpenRouter
const openai = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export function getChatModel(modelId?: string | null) {
  return openai(modelId || DEFAULT_CHAT_MODEL);
}