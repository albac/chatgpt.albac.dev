"use client";

import awsconfig from "@/aws-exports";
import useState from "react-usestateref";
import { Amplify } from "aws-amplify";
import { notFound } from "next/navigation";
import { Creator, MessageProps } from "@/types";
import ChatInput from "@/components/ChatInput";
import ChatMessage from "@/components/ChatMessage";
import { postData } from "@/helpers";

Amplify.configure({
  ...awsconfig
});

const models = ["davinci", "turbo"];

export default function ChatGPTPage({ params }: { params: { model: string } }) {
  const { model } = params;
  if (!models.includes(model)) {
    notFound();
  }
  const [messages, setMessages, messagesRef] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);

  const callApi = async (input: string) => {
    if (!input.trim()) {
      return;
    }

    setLoading(true);

    const myMessage: MessageProps = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime()
    };

    setMessages([...messagesRef.current, myMessage]);

    const response = await postData(input, model).catch((e) => {
      console.log("Error: ", e);
    });

    setLoading(false);

    if (response && response.text) {
      const botMessage: MessageProps = {
        text: response.text,
        from: Creator.Bot,
        key: new Date().getTime()
      };
      setMessages([...messagesRef.current, botMessage]);
    } else {
      // Error message here
    }
  };

  return (
    <main className="relative max-w-2xl mx-auto">
      <div className="sticky top-0 w-full pt-10 px-4">
        <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
      </div>

      <div className="mt-10 px-4">
        {messages.map((msg: MessageProps) => (
          <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
        ))}
        {messages.length == 0 && (
          <p className="text-center text-gray-400">
            Hello there, this is albac.dev ChatGTP bot
          </p>
        )}
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [{ model: "turbo" }, { model: "davinci" }];
}
