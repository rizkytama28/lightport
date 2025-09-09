import Section from "./Section";
import { profile } from "../data/site";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const body = encodeURIComponent(`Halo, saya ${name} (${email}).\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=Kontak Portfolio&body=${body}`;
    setStatus("sent");
  };

  return (
    <Section id="contact" title="Contact" className="py-16">
      <form onSubmit={onSubmit} className="max-w-xl space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Nama</label>
          <input id="name" name="name" required
            className="mt-1 w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required
            className="mt-1 w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Pesan</label>
          <textarea id="message" name="message" rows={5} required
            className="mt-1 w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700" />
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" disabled={status==="sending"}
            className="rounded-2xl px-5 py-2.5 text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90">
            {status==="sent" ? "Terkirim!" : "Kirim via Email"}
          </button>
          <a href={`mailto:${profile.email}`} className="text-sm underline underline-offset-4">
            {profile.email}
          </a>
        </div>
      </form>
    </Section>
  );
}
