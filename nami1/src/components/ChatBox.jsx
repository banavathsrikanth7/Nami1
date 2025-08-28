import { useState,useRef,useEffect } from "react";

export default function ChatBox({ messages }) {
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);
  return (
<div
  ref={chatRef}
  className=" w-full p-4 bg-black/40 rounded-2xl shadow-lg space-y-3"
>

      {messages.map((msg, i) => (
        <div
          key={i}
          className={`p-3 rounded-lg max-w-xs ${
            msg.startsWith("User:")
              ? "bg-green-400 text-black ml-auto"
              :  "bg-black/50 text-white"
          }`}
        >
          {msg}
        </div>
      ))}
    </div>
  );
}

