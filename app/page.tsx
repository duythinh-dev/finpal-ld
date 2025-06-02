import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Check,
  BarChart3,
  Database,
  LineChart,
  PieChart,
  ArrowRight,
} from "lucide-react";
import CourseSlider from "@/components/slider";
import BusinessIntelligenceLanding from "@/components/Form";
import AnalyticsCapabilities from "@/components/AnalyticsCapabilities";
import StudentPortfolio from "@/components/StudentPortfolio";

export default function Home() {
  const courses = [
    {
      id: "data-storytelling",
      title: "Data Storytelling",
      description: "Học cách truyền đạt thông tin dữ liệu một cách hiệu quả",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
    },
    {
      id: "power-bi-analytics",
      title: "Power BI Analytics",
      description: "Chuyên sâu về Power BI cho phân tích dữ liệu",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
      icon: <LineChart className="h-8 w-8 text-white" />,
    },
    {
      id: "sql-analytics",
      title: "SQL Analytics",
      description: "Làm chủ SQL cho phân tích dữ liệu chuyên nghiệp",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      icon: <Database className="h-8 w-8 text-white" />,
    },
    {
      id: "advanced-excel",
      title: "Advanced Excel",
      description: "Thành thạo Excel nâng cao cho phân tích dữ liệu",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      icon: <PieChart className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="lg:min-h-screen relative bg-cover bg-center">
        <Image
          src={"/images/Landing-1.png"}
          alt="Landing Image"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover md:block hidden"
        />
        <Image
          src={"/images/Landing-1-mb.png"}
          alt="Landing Image"
          width={400}
          height={400}
          className="w-full h-auto object-cover md:hidden block"
        ></Image>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-white to-transparent h-[20%]"></div>
      </section>

      {/* Courses Section */}
      <section
        id="courses"
        className="bg-[url('/images/Landing-2.png')] lg:min-h-screen  relative bg-cover bg-center "
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-full z-10"></div>
        <div className="flex items-center gap-3 relative z-20 container mx-auto ">
          <div className="border-4 border-yellow-300 h-12 w-1"></div>
          <div>
            <h1 className="text-2xl font-bold text-yellow-300">
              Khóa Business Intelligence
            </h1>
            <p className="text-gray-500">Dành cho nhóm & Cá nhân</p>
          </div>
        </div>
        <div className="relative z-30 mt-12 container mx-auto">
          <CourseSlider />
        </div>
      </section>
      <section className="min-h-screen">
        <BusinessIntelligenceLanding />
      </section>
      {/* AnalyticsCapabilities */}
      <section>
        <AnalyticsCapabilities />
      </section>
      <section>
        <StudentPortfolio />
      </section>
      {/* Footer */}
    </main>
  );
}
