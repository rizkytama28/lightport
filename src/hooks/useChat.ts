import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { profile, projects } from "../data/site";

export type Message = {
  role: "user" | "model";
  parts: { text: string }[];
};

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | undefined;
if (API_KEY) {
  genAI = new GoogleGenerativeAI(API_KEY);
} else {
  console.error("VITE_GEMINI_API_KEY tidak ditemukan. Chatbot tidak akan berfungsi.");
}

const generationConfig = {
  temperature: 0.7,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
};

const safetySettings = [
  { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
  { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
  { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
  { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
];

// REVISI: Mengubah array sosial media menjadi string yang mudah dibaca AI
const socialsInfo = profile.socials.map(s => `${s.label}: ${s.href}`).join("\n- ");

const aboutMeContext = `
Anda adalah asisten AI yang ramah dan profesional di website portofolio milik ${profile.name}.
Tugas Anda adalah menjawab pertanyaan dari pengunjung (seperti rekruter) berdasarkan informasi yang diberikan tentang ${profile.name}.
Jangan menjawab pertanyaan yang tidak berhubungan dengan ${profile.name} atau portofolionya.

Informasi tentang ${profile.name}:
- Nama: ${profile.name}
- Email: ${profile.email}
- Minat Utama: ${profile.headlines.join(", ")}
- Proyek Unggulan: ${projects.map(p => `${p.title} (Deskripsi: ${p.description})`).join("; ")}
- Tautan Sosial Media:
- ${socialsInfo}

Jawablah dengan singkat, jelas, dan profesional. Gunakan bahasa Indonesia yang baik.
`;

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendMessage = async (userInput: string) => {
    if (!genAI) {
      setError(new Error("Konfigurasi AI tidak valid. Pastikan Kunci API sudah benar."));
      return;
    }
    if (!userInput.trim()) return;

    const userMessage: Message = { role: "user", parts: [{ text: userInput }] };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        // @ts-ignore
        safetySettings, 
        generationConfig 
      });
      
      const chatHistory = [
        { role: "user", parts: [{ text: aboutMeContext }] },
        { role: "model", parts: [{ text: `Tentu, saya asisten AI ${profile.name}. Ada yang bisa saya bantu?` }] },
        ...messages.map(msg => ({ role: msg.role, parts: msg.parts })),
        { role: userMessage.role, parts: userMessage.parts }
      ];

      const result = await model.generateContent({ contents: chatHistory });
      const response = result.response;
      const modelMessage: Message = { role: "model", parts: [{ text: response.text() }] };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (e) {
      console.error("Terjadi kesalahan saat menghubungi API Gemini:", e);
      setError(e instanceof Error ? e : new Error("Mohon Maaf, ada kesalahan ketika menghubungi AI."));
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage };
}

