
"use client";

import { ContactInput, ContactInputSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactInputSchema),
  });

  const onSubmit = async (payload: ContactInput) => {
    console.log(payload);
  };

  return (
    <form
      id="contact-form"
      className="grid gap-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="meta">
            Name
          </label>

          <input
            id="name"
            {...register("name")}
            autoComplete="name"
            className="w-full border border-line bg-surface px-4 py-3 font-sans text-base normal-case tracking-normal text-fg transition-colors focus:border-signal focus:outline-none"
            aria-invalid={!!errors.name}
          />

          {errors.name && (
            <p className="text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="grid gap-2">
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
          />

          {errors.email && (
            <p className="text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="meta">
          Message
        </label>

        <textarea
          id="message"
          {...register("message")}
          rows={5}
          style={{ height: "182px" }}
          className="w-full border border-line bg-surface px-4 py-3 font-sans text-base normal-case tracking-normal text-fg transition-colors focus:border-signal focus:outline-none"
          aria-invalid={!!errors.message}
        />

        {errors.message && (
          <p className="text-xs text-red-500">
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

      <p
        id="form-status"
        role="status"
        aria-live="polite"
        className="meta text-signal"
      />
    </form>
  );
}
