import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().min(1),
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().min(1),
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().min(1),
});

const clientEnv = {
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const result = clientEnvSchema.safeParse(clientEnv);

if (!result.success) {
  const { fieldErrors } = z.flattenError(result.error);

  throw new Error(
    `Invalid client environment variables:\n${Object.entries(fieldErrors)
      .map(([key, errors]) => `${key}: ${errors?.join(', ')}`)
      .join('\n')}`,
  );
}

export const env = result.data;