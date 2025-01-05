import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Resetpass = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate sending reset link
    setMessage("A reset link has been sent to your email.");
    setEmail(""); // Clear the input field
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-emerald-200">
      <div className="bg-emerald-300 p-8 rounded-lg shadow-lg w-96">
        <div className="text-2xl font-semibold text-center mb-8">
          Reset Password
        </div>

        {/* Email Input */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-6">
            <FaEnvelope className="text-gray-600 mr-2 text-2xl" />
            <div className="flex-grow">
              <h2 className="text-lg font-medium mb-2">Email</h2>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Success Message */}
          {message && <div className="text-green-500 text-sm mb-4">{message}</div>}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-600"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resetpass;