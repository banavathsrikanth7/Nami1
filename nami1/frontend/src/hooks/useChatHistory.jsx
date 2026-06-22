import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export function useChatHistory(userId) {
  const [messages, setMessages] = useState([]);

  // Save chat
  const saveChat = async (userInput, botResponse) => {
    try {
      await addDoc(collection(db, "chatHistory", userId, "messages"), {
        userInput,
        botResponse,
        createdAt: serverTimestamp(),
      });
      console.log("Chat saved!");
    } catch (error) {
      console.error("Error saving chat:", error);
    }
  };

  // Fetch chat
  useEffect(() => {
    const q = query(
      collection(db, "chatHistory", userId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chats = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(chats);
    });

    return () => unsubscribe();
  }, [userId]);

  return { messages, saveChat };
}
