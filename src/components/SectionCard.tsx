import React from 'react';

type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionCard: React.FC<SectionCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative my-12 group ${className}`}>
      <div
        className="absolute -inset-1 bg-gradient-to-r from-[#0d9488] to-[#fb923c] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition duration-300"
        aria-hidden="true"
      ></div>
      <section className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 sm:p-8">
        {children}
      </section>
    </div>
  );
};

export default SectionCard;