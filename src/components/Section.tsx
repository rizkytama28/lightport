// / Mengimpor React untuk memberikan konteks pada tipe data seperti ReactNode
import { type ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  children: ReactNode;
};

// / Setiap section yang dibungkus komponen ini akan memiliki efek animasi
export default function Section({ id, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      // / Pengaturan animasi: muncul dari bawah (y: 50) ke posisi normal (y: 0)
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // / Animasi hanya berjalan sekali saat elemen masuk ke layar
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
