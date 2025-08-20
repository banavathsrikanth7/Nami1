import { useState } from "react";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-blue-400 backdrop-blur-md p-8 rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none hover:border-black"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none hover:border-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none hover:border-black"
          />
          <button
            type="submit"
            className="w-full bg-blue-800 text-black font-bold py-3 rounded-lg hover:bg-green-400 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-300">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-400 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
