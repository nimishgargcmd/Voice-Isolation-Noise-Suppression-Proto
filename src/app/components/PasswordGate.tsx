import React, { useState, useEffect } from "react";

const SESSION_KEY = "app_authenticated";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<"checking" | "locked" | "unlocked">("checking");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check sessionStorage on mount
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setState("unlocked");
    } else {
      setState("locked");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.ok) {
        sessionStorage.setItem(SESSION_KEY, "true");
        setState("unlocked");
      } else {
        setError("Incorrect password");
        setPassword("");
      }
    } catch {
      setError("Unable to verify. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (state === "checking") return <div className="fixed inset-0 bg-black" />;
  if (state === "unlocked") return <>{children}</>;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center px-8">
      <form onSubmit={handleSubmit} className="w-full max-w-[300px] flex flex-col gap-4">
        <div className="text-center">
          <p className="text-white text-[17px] font-semibold" style={{ fontFamily: "var(--font-sf-pro)" }}>
            Enter password to continue
          </p>
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full h-[44px] rounded-[10px] bg-[#1c1c1e] text-white text-[16px] px-4 outline-none border border-[#38383a] focus:border-[#584BDF] transition-colors"
          style={{ fontFamily: "var(--font-sf-pro)", WebkitUserSelect: "text", userSelect: "text", touchAction: "auto" }}
        />

        {error && (
          <p className="text-[#ff453a] text-[13px] text-center" style={{ fontFamily: "var(--font-sf-pro)" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="w-full h-[44px] rounded-[10px] bg-[#584BDF] text-white text-[16px] font-semibold disabled:opacity-40 transition-opacity"
          style={{ fontFamily: "var(--font-sf-pro)" }}
        >
          {loading ? "Verifying..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
