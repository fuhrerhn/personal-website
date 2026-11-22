// Rules for the contact form. The browser and the server action both use them,
// and the database repeats them as CHECK constraints (supabase/schema.sql).

export const MESSAGE_LIMITS = {
  name: 80,
  email: 120,
  messageMin: 10,
  messageMax: 1000,
} as const;

export type MessageInput = { name: string; email: string; message: string };
export type MessageErrors = Partial<Record<keyof MessageInput, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// drops control characters but keeps tabs and line breaks
const text = (value: unknown) =>
  typeof value === "string" ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim() : "";

export function cleanMessageInput(raw: { name?: unknown; email?: unknown; message?: unknown }): MessageInput {
  return {
    // name and email are single-line fields
    name: text(raw.name).replace(/\s+/g, " "),
    email: text(raw.email).replace(/\s+/g, ""),
    message: text(raw.message),
  };
}

export function validateMessage(input: MessageInput): MessageErrors {
  const errors: MessageErrors = {};

  if (input.name.length > MESSAGE_LIMITS.name) {
    errors.name = `Please keep your name under ${MESSAGE_LIMITS.name} characters.`;
  }
  if (input.email && (input.email.length > MESSAGE_LIMITS.email || !EMAIL_PATTERN.test(input.email))) {
    errors.email = "Please enter a valid email address, or leave it empty.";
  }
  if (input.message.length < MESSAGE_LIMITS.messageMin) {
    errors.message = `Please write at least ${MESSAGE_LIMITS.messageMin} characters.`;
  } else if (input.message.length > MESSAGE_LIMITS.messageMax) {
    errors.message = `Please keep your message under ${MESSAGE_LIMITS.messageMax} characters.`;
  }

  return errors;
}
