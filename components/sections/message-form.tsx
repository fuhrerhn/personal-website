"use client";

import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { sendMessage, type SendMessageResult } from "@/app/actions/send-message";
import { profile } from "@/data/profile";
import { MESSAGE_LIMITS, type MessageErrors } from "@/lib/message";

type Status = "idle" | "sending" | "success" | "error";
type Failure = Exclude<SendMessageResult, { ok: true }>;

const labelClass = "type-mono-meta mb-2 block text-fg-muted";
const inputClass =
  "w-full rounded-md border border-line bg-page px-3 py-2.5 type-body-sm text-fg placeholder:text-fg-muted transition-colors focus:border-accent aria-invalid:border-accent motion-reduce:transition-none";
const errorClass = "type-body-sm mt-1.5 text-accent";

export function MessageForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState<Failure | null>(null);
  const [message, setMessage] = useState("");
  const openedAt = useRef(0);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const countId = useId();

  // sent with the form so the server can drop instant bot submissions
  useEffect(() => {
    openedAt.current = performance.now();
  }, []);

  const sending = status === "sending";
  const tooShort = message.trim().length < MESSAGE_LIMITS.messageMin;
  const fieldErrors: MessageErrors = failure?.reason === "invalid" ? failure.errors : {};

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (tooShort || sending) return;

    setStatus("sending");
    setFailure(null);

    const formData = new FormData(event.currentTarget);
    formData.set("elapsed", String(Math.round(performance.now() - openedAt.current)));

    try {
      const result = await sendMessage(formData);
      if (result.ok) {
        setStatus("success");
      } else {
        setFailure(result);
        setStatus("error");
      }
    } catch {
      setFailure({ ok: false, reason: "unavailable" });
      setStatus("error");
    }
  }

  function reset() {
    setMessage("");
    setFailure(null);
    setStatus("idle");
    openedAt.current = performance.now();
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-line bg-surface p-6">
        <CheckCircle2 className="size-6 text-accent" aria-hidden="true" />
        <p className="type-card mt-3 text-fg">Message sent</p>
        <p className="type-body-sm mt-1 text-fg-secondary">
          Thank you. I will reply as soon as I can.
        </p>
        <button
          type="button"
          onClick={reset}
          className="type-link mt-4 cursor-pointer text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-line bg-surface p-5 md:p-6">
      {/* honeypot: hidden from people, bots fill it in */}
      <div aria-hidden="true" className="sr-only">
        <label>
          Leave this field empty
          <input type="text" name="contact_extra" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={nameId} className={labelClass}>
            Name (optional)
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            maxLength={MESSAGE_LIMITS.name}
            placeholder="Your name"
            aria-invalid={fieldErrors.name ? true : undefined}
            className={inputClass}
          />
          {fieldErrors.name ? <p className={errorClass}>{fieldErrors.name}</p> : null}
        </div>
        <div>
          <label htmlFor={emailId} className={labelClass}>
            Email for a reply (optional)
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={MESSAGE_LIMITS.email}
            placeholder="you@example.com"
            aria-invalid={fieldErrors.email ? true : undefined}
            className={inputClass}
          />
          {fieldErrors.email ? <p className={errorClass}>{fieldErrors.email}</p> : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={messageId} className={labelClass}>
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          minLength={MESSAGE_LIMITS.messageMin}
          maxLength={MESSAGE_LIMITS.messageMax}
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-describedby={countId}
          aria-invalid={fieldErrors.message ? true : undefined}
          placeholder="What would you like to talk about?"
          className={`${inputClass} resize-y`}
        />
        <div className="mt-2 flex items-start justify-between gap-4">
          {fieldErrors.message ? <p className={`${errorClass} mt-0`}>{fieldErrors.message}</p> : <span />}
          <p id={countId} className="type-mono-meta shrink-0 text-fg-muted">
            {message.length} / {MESSAGE_LIMITS.messageMax}
          </p>
        </div>
      </div>

      {status === "error" && failure ? (
        <p
          role="alert"
          className="type-body-sm mt-4 flex items-start gap-2 rounded-md border border-accent/40 bg-accent-soft p-3 text-fg"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>
            {failure.reason === "invalid" ? (
              "Please check the highlighted fields and try again."
            ) : (
              <>
                {failure.reason === "rate_limited"
                  ? "You have sent a few messages already. Please try again later, or "
                  : "Your message could not be sent right now. Please try again, or "}
                <a href={`mailto:${profile.links.email}`} className="underline hover:text-accent">
                  email me directly
                </a>
                .
              </>
            )}
          </span>
        </p>
      ) : null}

      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="type-body-sm max-w-sm text-fg-muted">
          Your message and email, if given, are only used to reply to you.
        </p>
        <button
          type="submit"
          disabled={sending || tooShort}
          className="type-link inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 whitespace-nowrap text-on-accent transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
        >
          {sending ? (
            <Loader2 className="size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {sending ? "Sending" : "Send message"}
        </button>
      </div>
    </form>
  );
}
