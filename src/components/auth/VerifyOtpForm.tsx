import { useState } from "react";
import type { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyOtpMutation } from "../../api/authApi";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/authSlice";

const VerifyOtpForm: React.FC = () => {
  const location = useLocation() as { state?: { email?: string } };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState(location.state?.email ?? "");
  const [otp, setOtp] = useState("");
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await verifyOtp({ email, otp }).unwrap();
      dispatch(setUser(res.user));
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Invalid OTP");
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
      <label className="block text-sm">
        OTP
        <input
          type="text"
          maxLength={6}
          className="mt-1 w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm tracking-[0.3em]"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
      </label>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-emerald-500 py-2 text-sm font-medium disabled:opacity-60"
      >
        {isLoading ? "Verifying…" : "Verify & Login"}
      </button>
    </form>
  );
};

export default VerifyOtpForm;
