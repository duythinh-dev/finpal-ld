// CourseSlider.jsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "React Cơ Bản",
    image: "Group1.png",
    color: "086CE8",
    path: "business-intelligence",
  },
  {
    id: 2,
    title: "NextJS Nâng Cao",
    image: "Group2.png",
    color: "FFC000",
    path: "power-bi-analytics",
  },
  {
    id: 3,
    title: "TypeScript Từ A-Z",
    image: "Group3.png",
    color: "B331E0",
    path: "sql-analytics",
  },
  {
    id: 4,
    title: "SEO Cho Front-End",
    image: "Group4.png",
    color: "34E031",
    path: "advanced-excel",
  },
];

const CourseSlider = () => {
  return (
    <div className="w-full px-4">
      <div className="hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="relative w-full">
                <img
                  src={`https://raw.githubusercontent.com/MrTrongDo/DataTecHub/main/${course.image}`}
                  alt={course.title}
                  className="h-fit w-full object-cover"
                />
                <Link
                  className={`absolute bottom-[5%] left-[27%] md:px-8 px-6 text-md md:text-xl py-2  text-white font-semibold rounded-full  transition-colors`}
                  style={{ backgroundColor: `#${course.color}` }}
                  href={`/courses/${course.path}`}
                >
                  Đăng ký
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center flex-wrap md:hidden">
        {courses.map((course) => (
          <div key={course.id} className="md:hidden mb-6">
            <div className="relative w-full">
              <img
                src={`https://raw.githubusercontent.com/MrTrongDo/DataTecHub/main/${course.image}`}
                alt={course.title}
                className="h-fit w-full object-cover"
              />
              <Link
                className={`absolute bottom-[5%] left-[27%] md:px-8 px-4 text-md md:text-xl py-1 text-white font-semibold rounded-full  transition-colors`}
                style={{ backgroundColor: `#${course.color}` }}
                href={`/courses/${course.path}`}
              >
                Đăng ký
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSlider;
