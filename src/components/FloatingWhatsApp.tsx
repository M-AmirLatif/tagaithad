'use client';

import React from 'react';
import { siteConfig } from '@/data/site';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/923017696784?text=${encodeURIComponent(
    'Assalam-o-Alaikum, I want to inquire about Taga Ittehad Pakistan welfare initiatives.'
  )}`;

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1caa52] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat with Taga Ittehad Pakistan on WhatsApp at 0301-7696784"
      >
        {/* Subtle breathing radar ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Official SVG Logo */}
        <svg
          className="w-8 h-8 relative z-10 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.777.785 2.791.785 3.182 0 5.768-2.587 5.768-5.768 0-3.181-2.586-5.769-5.768-5.769zm3.364 8.163c-.144.405-.837.774-1.171.823-.312.046-.714.073-2.288-.584-1.378-.574-2.257-1.979-2.327-2.072-.069-.092-.553-.736-.553-1.403 0-.668.35-1.002.474-1.14.125-.138.273-.173.364-.173.092 0 .183.001.263.005.083.004.195-.032.304.232.115.28.392.956.426 1.026.035.07.058.152.012.245-.046.092-.069.15-.138.23-.07.081-.147.18-.21.242-.07.069-.143.144-.061.284.081.14.36 1.291 1.241 1.785.45.253.805.334.996.395.14.045.267.039.367-.078.127-.149.544-.634.69-.851.144-.218.29-.182.484-.11.196.072 1.24.585 1.453.691.213.106.356.158.408.249.052.091.052.529-.092.934zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.981-1.396C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.155-.494-4.425-1.341l-.317-.213-2.969.83.842-2.898-.234-.343A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
        </svg>

        {/* Hover/Focus Tooltip Pill */}
        <span className="hidden md:group-hover:flex absolute right-16 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap items-center gap-1.5 pointer-events-none">
          <span>WhatsApp Helpline: 0301-7696784</span>
        </span>
      </a>
    </aside>
  );
};
