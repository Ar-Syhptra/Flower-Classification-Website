import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import BackToHome from "../components/Button/BackToHome";
import { LucideMessageSquareWarning } from "lucide-react";

function LoginPage() {
  const navigate = useNavigate();

  const rememberedUsername = localStorage.getItem("rememberedUsername") || "";

  const [username, setUsername] = useState(rememberedUsername);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(rememberedUsername !== "");

  useEffect(() => {
    if (rememberedUsername) {
      setUsername(rememberedUsername);
      setRememberMe(true);
    }
  }, [rememberedUsername]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser(username, password);
      localStorage.setItem("user", username);
      if (res.status === "success") {
        localStorage.setItem("token", res.token);

        if (rememberMe) {
          localStorage.setItem("rememberedUsername", username);
        } else {
          localStorage.removeItem("rememberedUsername");
        }

        navigate("/classification");
      } else {
        setError(res.message || "Login gagal, silakan coba lagi");
      }
    } catch (err) {
      setError("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackToHome />
      <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30 min-h-screen">
        <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg drop-shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border-b-6 border-primary/60">
          <div className="text-center mb-7">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-base-900">
              Selamat Datang
            </h2>
            <p className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-700 my-2">
              Masuk ke akun FlorAI Anda
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-4 bg-blue-100 mb-2 p-4 rounded-lg text-xs sm:text-md md:text-[14px] lg:text-[16px] text-gray-600">
              <span>
                <LucideMessageSquareWarning className="text-primary w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </span>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-xs sm:text-sm md:text-md lg:text-lg">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none bg-primary w-12 rounded-l-lg">
                  <User className="w-5 h-4 sm:w-5 sm:h-5 md:w-6 md:h-5 lg:w-6 lg:h-6 text-base-100 " />
                </div>
                <input
                  type="text"
                  className="w-full pl-14 sm:pl-14 md:pl-14 lg:pl-15 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-xs sm:text-sm md:text-[14px] lg:text-[16px]"
                  placeholder="Masukkan Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-xs sm:text-sm md:text-md lg:text-lg">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none bg-primary w-12 rounded-l-lg">
                  <Lock className="w-5 h-4 sm:w-5 sm:h-5 md:w-6 md:h-5 lg:w-6 lg:h-6 text-base-100" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-14 sm:pl-14 md:pl-14 lg:pl-15 p-3 border border-base-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-xs sm:text-sm md:text-[14px] lg:text-[16px]"
                  placeholder="Masukkan Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-primary" />
                  ) : (
                    <Eye className="h-5 w-5 text-primary/50" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-3 w-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 rounded-full checkbox checkbox-primary"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="remember"
                className="block text-xs sm:text-sm md:text-md lg:text-lg text-gray-700"
              >
                Ingat saya
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white btn btn-md sm:btn-md md:btn-lg lg:btn-xl rounded-md text-xs sm:text-sm md:text-md lg:text-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <div className="mt-6 text-center text-xs sm:text-sm md:text-[14px] lg:text-[16px]">
            <p>
              Belum punya akun?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-primary underline hover:text-base-primary/80 font-medium cursor-pointer"
              >
                Daftar sekarang
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
