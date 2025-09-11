import { useState, useEffect, useRef } from "react";
import { Bot, Send, X, LoaderCircle, MessageSquareWarning } from "lucide-react";
import { useChat, type Message } from "../hooks/useChat";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, isLoading, error, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  // REVISI #3: Tombol apung dibuat mirip tombol "Kontak Saya"
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 btn-invert inline-flex items-center gap-2"
        aria-label="Buka Asisten AI"
      >
        <Bot size={20} />
        <span>Asisten AI</span>
      </button>
    );
  }

  // REVISI #2: z-index dinaikkan agar tidak tertimpa navbar
  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-xl flex flex-col z-[9999]">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded-t-2xl">
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">Asisten AI</h3>
        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
          <X size={20} />
        </button>
      </div>

      {/* REVISI #1: Area pesan disesuaikan untuk mode gelap */}
      <div className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-950">
        <div className="space-y-4">
          {/* Pesan Awal */}
          <div className="flex gap-3">
            <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full h-fit"><Bot size={20} /></div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg max-w-xs">
              <p className="text-sm text-gray-800 dark:text-gray-200">Selamat datang! Saya asisten AI. Silakan ajukan pertanyaan tentang David.</p>
            </div>
          </div>

          {messages.map((msg, i) => (
            <ChatMessage key={i} message={msg} />
          ))}

          {isLoading && (
            <div className="flex justify-center">
              <LoaderCircle className="animate-spin text-gray-500 dark:text-gray-400" />
            </div>
          )}

          {error && (
             <div className="flex items-center gap-3 text-red-600">
                <MessageSquareWarning size={24} />
                <p className="text-sm font-medium">Maaf, terjadi kesalahan. Coba lagi nanti.</p>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Formulir Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-b-2xl">
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ketik pertanyaan Anda..."
            className="flex-1 p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
            disabled={isLoading}
          />
          <button type="submit" className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg disabled:bg-gray-400" disabled={isLoading}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

// REVISI #1: Komponen pesan disesuaikan untuk mode gelap
function ChatMessage({ message }: { message: Message }) {
  const isModel = message.role === 'model';
  return (
    <div className={`flex gap-3 ${!isModel && 'justify-end'}`}>
      {isModel && <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full h-fit"><Bot size={20} /></div>}
      <div className={`${isModel ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' : 'bg-black dark:bg-white text-white dark:text-black'} p-3 rounded-lg max-w-xs`}>
        <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{message.parts[0].text}</p>
      </div>
    </div>
  );
}

