"use client";

import { ContactInput, ContactInputSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { env } from "@/lib/env/client";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactInputSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      await emailjs.send(
        env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        {
          publicKey: env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <form
      id="contact-form"
      className="grid gap-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2 relative">
          <label htmlFor="name" className="meta">
            Name
          </label>

          <input
            id="name"
            {...register("name")}
            autoComplete="name"
            className="w-full border border-line bg-surface px-4 py-3 font-sans text-base normal-case tracking-normal text-fg transition-colors focus:border-signal focus:outline-none"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />

          {errors.name && (
            <p id="name-error" role="alert" className="text-xs text-red-500 absolute -bottom-5">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="grid gap-2 relative">
          <label htmlFor="email" className="meta">
            Email
          </label>

          <input
            id="email"
            {...register("email")}
            type="email"
            autoComplete="email"
            className="w-full border border-line bg-surface px-4 py-3 font-sans text-base normal-case tracking-normal text-fg transition-colors focus:border-signal focus:outline-none"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />

          {errors.email && (
            <p id="email-error" role="alert" className="text-xs text-red-500 absolute -bottom-5">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-2 relative my-2">
        <label htmlFor="message" className="meta">
          Message
        </label>

        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="h-45.5 w-full border border-line bg-surface px-4 py-3 font-sans text-base normal-case tracking-normal text-fg transition-colors focus:border-signal focus:outline-none"
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "message-error" : undefined
          }
        />

        {errors.message && (
          <p id="message-error" role="alert" className="text-xs text-red-500 absolute -bottom-5">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="meta h-12 bg-fg text-ink transition-colors hover:bg-signal disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
