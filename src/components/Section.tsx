import type { ReactNode } from "react";

export default function Section({
  id, title, children, className = "",
}: { id: string; title?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={title ? `${id}-title` : undefined}
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 ${className}`}>
      {title && (
        <h2 id={`${id}-title`} className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
