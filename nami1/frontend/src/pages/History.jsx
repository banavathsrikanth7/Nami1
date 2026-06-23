import { useState, useEffect } from "react";
import { getMyChats } from "../services/historyService";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
export default function History() {
  const [history, setHistory] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  if (!auth.currentUser) {
    navigate("/login");
  }
}, []);

useEffect(() => {

  const loadChats =
    async () => {

      try {

        const chats =
          await getMyChats();

        console.log(chats);

        setHistory(chats);

      } catch(error) {

        console.log(error);

      }

    };

  loadChats();

}, []);

  return (
    <div className ="bg-gray-300 -ml-6 -mr-4">
    <div className="min-h-screen p-6 text-white space-y-6">
      <h1 className="text-3xl text-black font-bold">Chat History</h1>
      <p className="text-black">
        Here you’ll be able to view your past conversations with Nami.
      </p>

      <div className="bg-black/40 rounded-lg p-4 space-y-3">
        {history.length === 0 ? (
          <p className="text-gray-400">No history yet. Start chatting!</p>
        ) : (
          history.map((chat) => (
            <div key={chat.id} className="p-3 bg-black/50 rounded-lg">
              <p>Chat #{chat.id}</p>
              <p className="text-green-400">
                Nami: {chat.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
