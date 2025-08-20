import { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import Loader from "../components/Loader";

export default function HomePage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate chat loading + new messages
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setMessages([
        "User: Hey ChatGPT, tell me a joke.",
        "Nami: Why don’t skeletons fight? They don’t have the guts.",
        "User: 😂 That’s good!",
        "Nami: Glad you liked it!"
      ]);
    }, 2000); // loader for 2s
  }, []);

  return (
    <div className="p-6 space-y-20 animate-gradient transition-all duration-1000 min-h-screen text-white">
      {/* Hero */}
      <section className="text-center space-y-4 relative z-10">
        <h2 className="text-5xl font-bold drop-shadow-lg">The Future of Conversations</h2>
        <p className="text-gray-100 max-w-xl mx-auto">
          Nami brings human-like interaction, lightning-fast responses, and deep knowledge to your fingertips.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {["Smart Replies", "Multilingual", "Always Learning"].map((feature, i) => (
          <div key={i} className="p-6 rounded-lg bg-black/40 backdrop-blur-md hover:bg-black/60 transition">
            <h3 className="text-xl font-bold mb-2">{feature}</h3>
            <p className="text-gray-200">
              {feature} with state-of-the-art AI technology.
            </p>
          </div>
        ))}
      </section>

      {/* Conversation Section */}
      <section className="max-w-2xl mx-auto space-y-4 relative z-10">
        {loading ? (
          <Loader />
        ) : (
          <ChatBox messages={messages} />
        )}
      </section>
    </div>
  );
}

