import { useState, useEffect } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  // Load history from localStorage when page opens
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <div className="min-h-screen p-6 text-white space-y-6">
      <h1 className="text-3xl font-bold">Chat History</h1>
      <p className="text-gray-300">
        Here you’ll be able to view your past conversations with Nami.
      </p>

      <div className="bg-black/40 rounded-lg p-4 space-y-3">
        {history.length === 0 ? (
          <p className="text-gray-400">No history yet. Start chatting!</p>
        ) : (
          history.map((query, idx) => (
            <div key={idx} className="p-3 bg-black/50 rounded-lg">
              <p>User: {query}</p>
              <p className="text-green-400">
                Nami: You asked "{query}". That's a great question!
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
