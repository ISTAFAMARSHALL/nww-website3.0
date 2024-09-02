'use client';

import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Clean up the overflow style when the component is unmounted
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-6 rounded-lg max-w-2xl w-full text-white"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: 'white' }} // Dark background for modal
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black text-3xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
