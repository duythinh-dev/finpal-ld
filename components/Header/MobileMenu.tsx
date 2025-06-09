"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <Button variant="ghost" size="sm" onClick={closeMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="p-4">
              <div className="space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-blue-600 py-2 text-base font-medium"
                  onClick={closeMenu}
                >
                  Trang chủ
                </Link>
                <Link
                  href="/#courses"
                  className="block text-gray-700 hover:text-blue-600 py-2 text-base font-medium"
                  onClick={closeMenu}
                >
                  Khóa học
                </Link>
                <Link
                  href="/#about"
                  className="block text-gray-700 hover:text-blue-600 py-2 text-base font-medium"
                  onClick={closeMenu}
                >
                  Năng lực phân tích
                </Link>
                <Link
                  href="/#member-project"
                  className="block text-gray-700 hover:text-blue-600 py-2 text-base font-medium"
                  onClick={closeMenu}
                >
                  Sản phẩm của học viên
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
