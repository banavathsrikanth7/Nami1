// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/10 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-4xl font-bold m-0 p-0">Nami</h1>
        <ul className="flex gap-6">
        
          <li className = "border-2 p-4 border-black-600 bg-pink-400 rounded-3xl hover:border-yellow-400 "><a href="/">HomePage</a></li>
          <li className = "border-2 p-4 border-black-600 bg-pink-400 rounded-3xl  hover:border-yellow-400"><a href="/history">History</a></li>
          <li className = "border-2 p-4 border-black-600 bg-pink-400 rounded-3xl  hover:border-yellow-400"><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}
