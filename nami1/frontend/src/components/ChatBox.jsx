import { useRef, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ChatBox({ messages }) {
  const chatRef = useRef(null);
  const userId = "testUser"; // replace with Google Auth UID later

  // 🔹 Auto-scroll
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

 
 

  return (
    <div
      ref={chatRef}
      className=" w-full -mr-10 p-4 bg-black/40 rounded-2xl shadow-lg space-y-3"
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`p-3 rounded-lg max-w-xs ${
            msg.startsWith("User:")
              ? "bg-green-400 text-black ml-auto"
              : "bg-black/50 text-white"
          }`}
        >
          {msg}
        </div>
      ))}
    </div>
  );
}


