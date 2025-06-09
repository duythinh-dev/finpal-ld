import Link from "next/link";
import { BarChart3 } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-700 shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="logo DataTechub"
            height={100}
            width={300}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-50 hover:text-blue-600 transition-colors"
          >
            Trang chủ
          </Link>
          <Link
            href="#courses"
            className="text-sm font-medium text-gray-50 hover:text-blue-600 transition-colors"
          >
            Khóa học
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-gray-50 hover:text-blue-600 transition-colors"
          >
            Năng lực phân tích
          </Link>
          <Link
            href="#member-project"
            className="text-sm font-medium text-gray-50 hover:text-blue-600 transition-colors"
          >
            Sản phẩm của học viên
          </Link>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
