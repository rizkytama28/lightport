import { useState, useEffect, useRef } from "react";
import { Bot, Send, X, LoaderCircle, MessageSquareWarning } from "lucide-react";
import { useChat, type Message } from "../hooks/useChat";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

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

  // Close on 'Escape' key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  // Animation variants for the chat window
  const chatVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
      transformOrigin: "bottom right",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      y: 40,
      scale: 0.8,
      transformOrigin: "bottom right",
      transition: {
        duration: 0.2,
      },
    },
  };
  
    const fabVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };


  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="chatbot"
          variants={chatVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-6 right-6 w-96 h-[600px] bg-white border border-slate-300 rounded-2xl shadow-xl flex flex-col z-[9999]"
        >
          {/* Header */}
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 rounded-t-2xl flex-shrink-0">
            <h3 className="font-bold text-lg text-[#0d9488]">Einzchat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-[#0d9488]"
            >
              <X size={20} />
            </button>
          </div>

          {/* Area Pesan */}
          <div className="flex-1 p-4 overflow-y-auto bg-white">
            <div className="space-y-4">
              {/* Pesan Awal */}
              <div className="flex gap-3">
                <div className="bg-[#0d9488] text-white p-2 rounded-full h-fit">
                  <Bot size={20} />
                </div>
                <div className="bg-slate-100 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-[#334155]">
                    Selamat datang! Saya Einzchat. Silakan ajukan pertanyaan
                    tentang David.
                  </p>
                </div>
              </div>

              {messages.map((msg, i) => (
                <ChatMessage key={i} message={msg} />
              ))}

              {isLoading && (
                <div className="flex justify-center">
                  <LoaderCircle className="animate-spin text-slate-500" />
                </div>
              )}

              {error && (
                <div className="flex items-center gap-3 text-red-600">
                  <MessageSquareWarning size={24} />
                  <p className="text-sm font-medium">
                    Maaf, terjadi kesalahan. Coba lagi nanti.
                  </p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Formulir Input */}
          <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl flex-shrink-0">
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik pertanyaan Anda..."
                className="flex-1 p-2 border border-slate-300 rounded-lg text-[#334155] focus:ring-2 focus:ring-[#0d9488] focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-[#0d9488] text-white p-3 rounded-lg disabled:bg-slate-400 hover:bg-[#0d9488]/90 transition"
                disabled={isLoading}
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      ) : (
        <motion.button
          key="fab"
          variants={fabVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[#0d9488] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-[#fb923c] transition-all duration-300 z-[9999]"
          aria-label="Buka Asisten AI"
        >
          <Bot size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Komponen pesan disesuaikan dengan palet warna
function ChatMessage({ message }: { message: Message }) {
  const isModel = message.role === "model";
  return (
    <div className={`flex gap-3 ${!isModel && "justify-end"}`}>
      {/* Ikon untuk pesan dari AI */}
      {isModel && (
        <div className="bg-[#0d9488] text-white p-2 rounded-full h-fit self-end">
          <Bot size={20} />
        </div>
      )}

      {/* Gelembung pesan */}
      <div
        className={`${
          isModel
            ? "bg-slate-100 text-[#334155]"
            : "bg-[#0d9488] text-white"
        } p-3 rounded-lg max-w-xs`}
      >
        <p className="text-sm" style={{ whiteSpace: "pre-wrap" }}>
          {message.parts[0].text}
        </p>
      </div>
    </div>
  );
}
