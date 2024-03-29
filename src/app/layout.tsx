import { LayoutComponentProps } from "@/types";
import { Metadata } from "next";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Albac.Dev - ChatGPT API Interfaces using OpenAI API",
  description:
    "ChatGPT is a specific implementation of GPT designed for interactive chatting and conversation. It utilizes natural language processing (NLP) and machine learning techniques to understand and generate human-like responses to user input.",
  keywords: [
    "react",
    "chatgpt",
    "openai",
    "next.js",
    "serverless",
    "gpt",
    "api",
    "nlp",
    "aws",
    "amplify",
    "developer",
    "devops",
    "fullstack",
    "alfredo",
    "alfredo baldoceda"
  ]
};

export default function RootLayout({ children }: LayoutComponentProps) {
  return (
    <html lang="en">
      <body className="bg-slate-100 dark:bg-slate-900">
        {children}
        <footer className="text-center text-slate-600 dark:text-slate-400 p-4">
          <p>
            All rights reserved &copy; albac.dev {new Date().getFullYear()}{" "}
          </p>
        </footer>
      </body>
    </html>
  );
}
