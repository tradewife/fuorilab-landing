"use client";

import { useState } from "react";

export const useWaitlist = () => {
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setWaitlistSuccess(false);

    try {
      const formData = new FormData(e.target);
      const email = formData.get("email");

      if (!email) {
        throw new Error("Email is required.");
      }

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Failed to join waitlist");
      }

      setWaitlistSuccess(true);
      e.target.reset();
    } catch (err) {
      console.error(err);
      setError(err.message || "Could not join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    waitlistSuccess,
    loading,
    error,
    handleWaitlistSubmit,
  };
};
