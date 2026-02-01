import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export const Divider: React.FC = () => (
  <div className="w-full max-w-[200px] h-[1px] bg-warm-gray-300 mx-auto my-12" />
);

export const Badge: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <span className="inline-block py-1 px-3 border border-warm-gray-300 rounded-full text-xs font-medium uppercase tracking-widest text-warm-gray-800 mb-6">
    {children}
  </span>
);

export const Heading: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = "" }) => (
  <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl text-warm-gray-900 leading-[1.1] mb-8 ${className}`}>
    {children}
  </h2>
);

export const Subtext: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = "" }) => (
  <p className={`font-sans text-lg md:text-xl text-warm-gray-800 leading-relaxed font-light max-w-prose ${className}`}>
    {children}
  </p>
);
