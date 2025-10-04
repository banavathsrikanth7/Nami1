import { useState } from "react";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen -ml-4 -mr-4 -mb-10  flex items-center justify-center bg-gray-200 text-black">
      <div className=" animate-gradient1  transition-all duration-1000 backdrop-blur-md p-8 rounded-xl width-full  min-h-[450px] max-w-md">
        <h1  className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <form className="space-y-10">
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
            className="w-full bg-#06beb6 text-black font-bold py-3 rounded-lg hover:bg-#48b1bf transition border border-gray-900 hover:border-black"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 text-black">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
