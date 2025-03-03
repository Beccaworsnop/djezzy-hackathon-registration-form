'use client';
import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#261b1e] text-white p-6 rounded-lg shadow-lg w-80 relative text-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-300 hover:text-white"
          >
            <X size={18} />
          </button>
          
          <div className="flex justify-center mb-4">
            <CheckCircle size={40} className="text-green-500" />
          </div>

          <h2 className="text-lg font-bold">REGISTRATION SUCCESSFUL</h2>
          <p className="text-gray-400 text-sm mt-2">Thank you for registering! See you there.</p>
          
          <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600">
            HOME PAGE
          </button>
        </div>
      </div>
    )
  );
}
