import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { Eye, EyeOff, Lock, User } from "lucide-react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Password tidak cocok!");
      return;
    }

    setLoading(true);

    try {
      const res = await registerUser(username, password);
      if (res.status === "success") {
        navigate("/login");
      } else {
        setError(res.message || "Registrasi gagal, silakan coba lagi");
      }
    } catch (err) {
      setError("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Buat Akun Baru
          </h2>
          <p className="text-gray-600 mt-2">Bergabung dengan FlorAI sekarang</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm flex items-center">
            <span className="mr-1">⚠️</span> {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Buat username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Buat password"
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
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Konfirmasi Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Konfirmasi password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {loading ? "Memproses..." : "Daftar Sekarang"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p>
            Sudah punya akun?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-primary hover:text-primary/80 font-medium"
            >
              Masuk disini
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
