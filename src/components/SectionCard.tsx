import React from 'react';

type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionCard: React.FC<SectionCardProps> = ({ children, className = '' }) => {
  return (
    <section className={`my-12 rounded-2xl bg-white p-6 shadow-2xl shadow-teal-600/40 ring-1 ring-slate-900/5 sm:p-8 ${className}`}>
      {children}
    </section>
  );
};

export default SectionCard;