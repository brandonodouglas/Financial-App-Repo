import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { TransactionInput } from "../components/transactioninput";
import { Chatbot } from "~/components/chatbot";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <section>
    <Welcome />
    <Chatbot />

  </section>
  );
  
}
