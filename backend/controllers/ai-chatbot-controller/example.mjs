import OpenAI from "openai";
const client = new OpenAI({apiKey: "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"});

const response = await client.responses.create({
    model: "gpt-5",
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log("Hi, my name's brandon, your AI chatbot advisor! How can I help you today?");
console.log(response.output_text);