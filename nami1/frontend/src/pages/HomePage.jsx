import { useState, useEffect ,useRef} from "react";
import ChatBox from "../components/ChatBox";
import Loader from "../components/Loader";
import {createConversation} from "../services/conversationServices";
import {sendMessage} from"../services/messageServices";
export default function HomePage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState(""); // search bar input
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [movedToBottom, setMovedToBottom] = useState(true);
  const [conversationId,setConversationId]= useState(null);
  const chatEndRef = useRef(null);


  // Simulate chat loading + new messages
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      
    }, 1000); // loader for 2s
  }, []);
// Auto scroll to latest message (after 4th input)
  useEffect(() => {
    if (messages.length > 4 && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Stage conditions
  const stage = messages.length <= 1 ? "first" : messages.length <= 3 ? "expand" : "scroll";
  // Handle submit of search bar
const handleSubmit = async (e) => {

  e.preventDefault();

  if (!input.trim()) return;

  try {
    let currentId = conversationId;
   if (!currentId) {

  const conversation =
    await createConversation();
currentId = conversation.conversation_id;
  setConversationId(
   currentId
  );
}

 

    console.log(
      "Conversation ID:",
      currentId
    );

    const storedHistory =
      JSON.parse(
        localStorage.getItem(
          "searchHistory"
        )
      ) || [];

    storedHistory.push(input);

    localStorage.setItem(
      "searchHistory",
      JSON.stringify(
        storedHistory
      )
    );

  const response =
await sendMessage(
  currentId,
  input
);

setMessages((prev) => [
  ...prev,
  `User: ${input}`,
  `Nami: ${response.reply}`
]);

setInput("");

if (!movedToBottom) {
  setMovedToBottom(true);
}    if (!movedToBottom)
      setMovedToBottom(true);

  } catch(error) {

    console.log(error);

  }

};
 



  return (
    <div className="-ml-4 -pl-4 -mr-4 -mb-10 -pb-10 min-h-screen overflow-hidden animate-gradient transition-all duration-1000 text-white">
    <div className="min-h-screen w-screen flex flex-col text-white">
      {/* Hero + Features (only visible before movedToBottom) */}
   { /*  {!movedToBottom && (
        <div className="p-6 space-y-20">
          <section className="text-center space-y-4 relative z-10">
            <h2 className="text-5xl font-bold drop-shadow-lg">
              The Future of Conversations
            </h2>
            <p className="text-gray-100 max-w-xl mx-auto">
              Nami brings human-like interaction, lightning-fast responses, and deep knowledge.
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {["Smart Replies", "Multilingual", "Always Learning"].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-black/40 backdrop-blur-md hover:bg-black/60 transition"
              >
                <h3 className="text-xl font-bold mb-2">{feature}</h3>
                <p className="text-gray-200">{feature} with state-of-the-art AI technology.</p>
              </div>
            ))}
          </section>
        </div>
      )}*/}
        {messages.length === 0 && !loading && (
  <div className="flex flex-col items-center justify-center h-[70vh]">
    
    <h1 className="text-4xl font-bold mb-4">
      Hi, I'm Nami
    </h1>

    <p className="text-black">
      How can I help you today?
    </p>

  </div>
)}
      {/* Chat Section */}
      {movedToBottom && (
        <section
          className={`flex-1 px-4 transition-all duration-300 ${
            stage === "expand"
              ? "max-h-full" // expand full before scroll
              : "overflow-y-auto" // after 4th msg → scroll
          }`}
        >
          {loading ? (<Loader />) :( messages.length > 0 && <ChatBox messages={messages} /> )}
          <div ref={chatEndRef} />
        </section>
      )}

      {/* Search Bar (always visible at bottom once movedToBottom) */}
      <div
        className={` fixed bottom-0 left-0 right-0  p-4 bg-black ${
          movedToBottom ? "block" : "max-w-3xl mx-auto"
        }`}
      >
        <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Ask me something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-4 rounded-xl border-2 border-transparent 
                       hover:border-black bg-white text-black 
                       focus:outline-none placeholder-gray-600"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r 
                       from-pink-500 via-yellow-400 via-green-400 
                       via-blue-500 to-purple-600 text-white font-semibold shadow-lg"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  
    </div>
  );
};
