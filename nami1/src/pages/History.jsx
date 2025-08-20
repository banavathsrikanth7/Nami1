export default function History() {
  return (
    <div className="min-h-screen p-6 text-white space-y-6">
      <h1 className="text-3xl font-bold">Chat History</h1>
      <p className="text-gray-300">
        Here you’ll be able to view your past conversations with Nami.
      </p>

      <div className="bg-black/40 rounded-lg p-4 space-y-3">
        <div className="p-3 bg-black/50 rounded-lg">
          <p>User: What is AI?</p>
          <p className="text-green-400">Nami: Artificial Intelligence is...</p>
        </div>
        <div className="p-3 bg-black/50 rounded-lg">
          <p>User: Tell me a joke.</p>
          <p className="text-green-400">Nami: Why did the scarecrow...</p>
        </div>
      </div>
    </div>
  );
}
