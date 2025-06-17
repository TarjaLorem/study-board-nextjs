import styles from './header.module.scss';
import Image from 'next/image'

export default function Header() {
  return (
    <header className={`${styles.header} flex items-center justify-between px-6 w-screen h-24`}>
        <Image
          className="w-auto h-auto"
          src="/logo.svg"
          width={100}
          height={100}
          alt="Logo"
          loading={"lazy"}
        />
        <h1 className="text-3xl font-bold ml-4">Study board</h1>
    </header>
  );
}
