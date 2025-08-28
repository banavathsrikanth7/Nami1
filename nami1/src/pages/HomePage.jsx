import { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import Loader from "../components/Loader";

export default function HomePage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState(""); // search bar input
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [movedToBottom, setMovedToBottom] = useState(false);



  // Simulate chat loading + new messages
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setMessages([
        "User: Hey ChatGPT, tell me a joke.",
        "Nami: Why don’t skeletons fight? They don’t have the guts.",
      ]);
    }, 2000); // loader for 2s
  }, []);

  // Handle submit of search bar
 const handleSubmit = (e) => {
  e.preventDefault();
  if (!input.trim()) return;

  // Save to history
  const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  storedHistory.push(input);
  localStorage.setItem("searchHistory", JSON.stringify(storedHistory));
  setMessages((prev) => [...prev, `User: ${input}`, "Nami: Here's a response."]); // you can give nami response logic here

  setInput("");
  if (!movedToBottom) setMovedToBottom(true);
};



  return (
    <div className="-ml-4 -pl-4 -mr-4 -mb-10 -pb-10 min-h-screen overflow-hidden animate-gradient transition-all duration-1000 text-white">
      <div className="p-6 space-y-20">
        
        {/* Hero */}
        <section className="text-center space-y-4 relative z-10">
          <h2 className="text-5xl font-bold drop-shadow-lg">
            The Future of Conversations
          </h2>
          <p className="text-gray-100 max-w-xl mx-auto">
            Nami brings human-like interaction, lightning-fast responses, and deep knowledge to your fingertips.
          </p>
        </section>

        {/* 🔎 Search Bar */}
{/* 🔎 Search Bar */}
{!movedToBottom ? (
  // Initial position (under hero)
  <section className="max-w-3xl mx-auto relative z-10">
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="relative p-[3px] rounded-xl overflow-hidden flex-1">
        <input
          type="text"
          placeholder="Ask me something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="relative w-full p-4 rounded-xl border-2 border-transparent hover:border-black transition-all bg-white text-black focus:outline-none placeholder-gray-600"
        />
      </div>
      <button
        type="submit"
        className={`transition-all duration-100 rounded-xl text-white font-semibold shadow-lg
          bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600
          hover:opacity-90 px-6 py-3`}
      >
        Ask
      </button>
    </form> 
  </section>
) : (
  // Fixed at bottom after first message
  <div className="fixed -bottom-15 right-2  left-6 w-full p-4 z-50">
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Ask me something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-4 rounded-xl border-2 border-transparent bg-white text-black focus:outline-none placeholder-gray-600"
      />
      <button
        type="submit"
        className="px-6 py-3  right-2 rounded-xl bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 text-white font-semibold shadow-lg"
      >
        Ask
      </button>
    </form>
  </div>
)}

        {/* Features */}
        <section className="grid overflow-hidden grid-cols-1 w-full md:grid-cols-3 gap-6 relative z-10">
          {["Smart Replies", "Multilingual", "Always Learning"].map((feature, i) => (
            <div
              key={i}
              className="p-6 overflow-hidden  w-full rounded-lg bg-black/40 backdrop-blur-md hover:bg-black/60 transition"
            >
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p className="text-gray-200">
                {feature} with state-of-the-art AI technology.
              </p>
            </div>
          ))}
        </section>
{/* Conversation Section */}
<section className="w-screen relative bottom-16 z-10">
  <div className="max-w-none">
    {loading ? <Loader /> : <ChatBox messages={messages} />}
  </div>
</section>


      </div>
    </div>
  );
}
