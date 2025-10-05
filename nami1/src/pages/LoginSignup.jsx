import { useState } from "react";
import { signUp, login, loginWithGoogle } from "../authService"; // check path

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);

    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
        alert("✅ Logged in successfully");
      } else {
        await signUp(email, password);
        alert("✅ Account created successfully");
      }
    } catch (err) {
      alert("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google login handler
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      alert("✅ Logged in with Google");
    } catch (err) {
      alert("❌ " + err.message);
    }
  };

  return (
    <div className="min-h-screen -ml-4 -mr-4 -mb-10 flex items-center justify-center bg-gray-200 text-black">
      <div className="animate-gradient1 transition-all duration-1000 backdrop-blur-md p-8 rounded-xl width-full min-h-[450px] max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <form className="space-y-10" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none hover:border-black"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none hover:border-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none hover:border-black"
          />

          {/* Email/Password Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-bold py-3 rounded-lg border border-gray-900 transition-all duration-500 
              ${isClicked ? "scale-110 bg-purple-700" 
              : "bg-purple-600 hover:bg-purple-500 hover:scale-105"}`}
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="px-3 text-gray-600">OR</span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold py-3 rounded-lg border hover:bg-gray-100 transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

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
