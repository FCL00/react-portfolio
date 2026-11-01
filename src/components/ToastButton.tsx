"use client";
import { toast } from "sonner";

type ToastButtonProps = {
    message: string;
    label: string;
}

export default function ToastButton({message, label}: ToastButtonProps) {
  return (
    <button
      className="cursor-pointer transition-colors hover:text-signal"
      onClick={() => toast.info(message)}
    >
      { label } ↗
    </button>
  );
}
