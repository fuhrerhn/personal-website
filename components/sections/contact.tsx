import { MessageForm } from "./message-form";

export function Contact() {
  return (
    <>
      <p className="type-body max-w-md text-fg-secondary">
        Have a question, a project idea, or just want to say hi? Leave a message and I will get
        back to you.
      </p>
      <div className="mt-6">
        <MessageForm />
      </div>
    </>
  );
}
