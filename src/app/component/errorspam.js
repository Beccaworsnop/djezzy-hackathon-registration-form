'use client';
import { useState } from 'react';
import { XCircle, X } from 'lucide-react';

export default function ErrorModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#261b1e] text-white p-6 rounded-lg shadow-lg w-80 relative text-center">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-300 hover:text-white"
          >
            <X size={18} />
          </button>
          
          {/* Error Icon */}
          <div className="flex justify-center mb-4">
            <XCircle size={40} className="text-red-500" />
          </div>

          {/* Message */}
          <h2 className="text-lg font-bold">SOMETHING WENT WRONG</h2>
          <p className="text-gray-400 text-sm mt-2">Oops! Something went wrong.</p>
          
          {/* Buttons */}
          <div className="mt-4 flex gap-2">
            <button className="border border-gray-500 text-gray-300 px-4 py-2 rounded-lg w-1/2 hover:bg-gray-700">
              HOME PAGE
            </button>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg w-1/2 hover:bg-red-600">
              TRY AGAIN
            </button>
          </div>
        </div>
      </div>
    )
  );
}