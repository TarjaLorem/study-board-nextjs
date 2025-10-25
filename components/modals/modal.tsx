"use client"

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';

export default function Modal({ children }:
{
  children: ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  //The error is thrown because document is only available inside the browser and not on the server.
  //Next js executes this code on the server side and that's why the error is thrown.
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? ( createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 relative">
            <div className="flex justify-end p-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 font-bold text-xl"
              >
                ✕
              </Link>
            </div>
            <div className="px-6 pb-6">
              {children}
            </div>
          </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
        )) : (<></>)
      }
    </>
  );
}
