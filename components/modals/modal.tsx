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
        <div>
          <div>
            <Link href="/">Close</Link>
            {/*<button onClick={onCloseAction}>Close</button>*/}
            {children}
          </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
        )) : (<></>)
      }
    </>
  );
}
