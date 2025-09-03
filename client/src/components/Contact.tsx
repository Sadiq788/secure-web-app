import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      // Replace with your EmailJS credentials
      await emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_USER_ID");
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-300">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form ref={formRef} onSubmit={sendEmail} className="grid gap-3">
        <input name="from_name" placeholder="Your name" className="p-3 rounded bg-gray-800 border border-gray-700" />
        <input name="reply_to" placeholder="Email" className="p-3 rounded bg-gray-800 border border-gray-700" />
        <textarea name="message" placeholder="Message" rows={6} className="p-3 rounded bg-gray-800 border border-gray-700" />
        <button type="submit" className="bg-green-600 px-4 py-2 rounded">Send</button>
        {status === "sending" && <p className="text-sm text-yellow-300">Sending...</p>}
        {status === "sent" && <p className="text-sm text-green-300">Message sent. Thank you!</p>}
        {status === "error" && <p className="text-sm text-red-400">Failed to send. Try again later.</p>}
      </form>
    </div>
  );
}
