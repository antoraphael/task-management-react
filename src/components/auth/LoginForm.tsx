import { useState } from "react";
import type { FormEvent } from "react";
import { useRequestOtpMutation } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [requestOtp, { isLoading }] = useRequestOtpMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await requestOtp({ email }).unwrap();
      navigate("/auth/verify-otp", { state: { email } });
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm">
        Email
        <input
          type="email"
          className="mt-1 w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-emerald-500 py-2 text-sm font-medium disabled:opacity-60"
      >
        {isLoading ? "Sending OTP…" : "Send OTP"}
      </button>
    </form>
  );
};

export default LoginForm;
