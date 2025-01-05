import React, { useState } from "react";
import { FaLock } from "react-icons/fa";

const Forgetpass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [strength, setStrength] = useState("");

  const calculateStrength = (password) => {
    let strengthValue = 0;

    if (password.length >= 8) strengthValue++;
    if (/[A-Z]/.test(password)) strengthValue++;
    if (/[a-z]/.test(password)) strengthValue++;
    if (/[0-9]/.test(password)) strengthValue++;
    if (/[@$!%*?&]/.test(password)) strengthValue++;

    switch (strengthValue) {
      case 0:
      case 1:
        setStrength("Weak");
        break;
      case 2:
      case 3:
        setStrength("Moderate");
        break;
      case 4:
      case 5:
        setStrength("Strong");
        break;
      default:
        setStrength("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    calculateStrength(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (strength === "Weak") {
      setError("Your password is too weak. Please make it stronger.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setMessage("Your password has been successfully reset.");
    setPassword("");
    setConfirmPassword("");
    setStrength("");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-emerald-200">
      <div className="bg-emerald-300 p-8 rounded-lg shadow-lg w-96">
        <div className="text-2xl font-semibold text-center mb-8">
          Set New Password
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="flex items-center">
              <FaLock className="text-gray-600 mr-2 text-xl" />
              <h2 className="text-lg font-medium mb-2">New Password</h2>
            </div>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            {strength && (
              <div
                className={`mt-2 text-sm ${
                  strength === "Weak"
                    ? "text-red-500"
                    : strength === "Moderate"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                Strength: {strength}
              </div>
            )}
          </div>
          <div className="mb-6">
            <div className="flex items-center">
              <FaLock className="text-gray-600 mr-2 text-xl" />
              <h2 className="text-lg font-medium mb-2">Confirm Password</h2>
            </div>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          {message && (
            <div className="text-green-500 text-sm mb-4">{message}</div>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgetpass;
