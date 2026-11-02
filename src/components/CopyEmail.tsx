"use client";

import { toast } from "sonner";

export default function CopyEmail() {
  const email = "flagahit00@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch {
      toast.error("Failed to copy email. Please try again.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="block break-all text-left font-display text-2xl font-bold tracking-tight transition-colors hover:text-signal"
      aria-label="Copy email address to clipboard"
    >
      {email}
    </button>
  );
}