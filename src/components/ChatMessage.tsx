import Image from "next/image";
import mePic from "../../../public/me.webp";
import botPic from "../../../public/bot.png";
import { Creator, MessageProps } from "@/types";

const ChatMessage = ({ text, from }: MessageProps) => {
  return (
    <>
      {from == Creator.Me && (
        <div className="bg-white p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <Image src={mePic} alt="Me" width={40} />
          <p className="text-gray-700">{text}</p>
        </div>
      )}
      {from == Creator.Bot && (
        <div className="bg-gray-100 p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <Image src={botPic} alt="Bot" width={40} />
          <p className="text-gray-700">{text}</p>
        </div>
      )}
    </>
  );
};

export default ChatMessage;
