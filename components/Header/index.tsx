import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="top-0 z-40 bg-white/70 backdrop-blur-xl shadow-lg sticky">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-black.png"
            alt="logo DataTechub"
            height={100}
            width={300}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className=" md:flex items-center gap-6"></nav>
      </div>
    </header>
  );
}
