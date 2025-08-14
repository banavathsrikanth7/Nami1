export default function HomePage() {
  return (
    <div className="p-6 space-y-20 animate-gradient transition-all duration-1000 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 relative z-10">
        <h1 className="text-2xl font-bold">ChatGPT-5</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-green-300">Home</a>
          <a href="#" className="hover:text-green-300">Features</a>
          <a href="#" className="hover:text-green-300">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center space-y-4 relative z-10">
        <h2 className="text-5xl font-bold drop-shadow-lg">The Future of Conversations</h2>
        <p className="text-gray-100 max-w-xl mx-auto">
          ChatGPT-5 brings human-like interaction, lightning-fast responses, and deep knowledge to your fingertips.
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

      {/* Conversation */}
      <section className="max-w-2xl mx-auto space-y-4 relative z-10">
        <div className="bg-black/50 p-4 rounded-lg max-w-xs">
          <p>User: Hey ChatGPT, tell me a joke.</p>
        </div>
        <div className="bg-green-400 p-4 rounded-lg max-w-xs ml-auto text-black">
          <p>ChatGPT: Why don’t skeletons fight? They don’t have the guts.</p>
        </div>
        <div className="bg-black/50 p-4 rounded-lg max-w-xs">
          <p>User: 😂 That’s good!</p>
        </div>
        <div className="bg-green-400 p-4 rounded-lg max-w-xs ml-auto text-black">
          <p>ChatGPT: Glad you liked it!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-100 border-t border-white/30 pt-6 relative z-10">
        © 2025 ChatGPT-5. All rights reserved.
      </footer>
    </div>
  );
}
