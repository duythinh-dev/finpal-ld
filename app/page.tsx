import Image from "next/image";
import CourseSlider from "@/components/slider";
import BusinessIntelligenceLanding from "@/components/BusinessIntelligenceLanding";
import AnalyticsCapabilities from "@/components/AnalyticsCapabilities";
import StudentPortfolio from "@/components/StudentPortfolio";

export default function Home() {
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
      <section className="min-h-screen ">
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
