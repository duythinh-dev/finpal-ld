"use client";

import { Button } from "@/components/ui/button";

export default function FloatingRegisterButton() {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Button
        onClick={scrollToCourses}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg border border-white"
      >
        <span className="mr-2">ĐĂNG KÝ NGAY</span>
      </Button>
    </div>
  );
}
