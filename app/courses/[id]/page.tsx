"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BarChart3,
  Calendar,
  Monitor,
  Users,
  Award,
  CheckCircle,
  GraduationCap,
  User,
  Check,
} from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
import { useSubmitForm } from "@/hooks/use-saveInfoUser";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

type ColorScheme = {
  primary: string;
  gradient: string;
  light: string;
  border: string;
  text: string;
};

type Course = {
  title: string;
  duration: string;
  logo?: string; // Optional logo for the course
  format: string;
  tools: string[];
  certificates: string[];
  instructor: {
    name: string;
    title: string;
    company: string;
    experience: string;
    achievements: string[];
    image: string;
  };
  curriculum: {
    title: string;
    items: string[];
  }[];
  colorScheme?: ColorScheme;
};

const options = [
  { label: "Excel", value: "excel" },
  { label: "Power BI", value: "powerbi" },
  { label: "Tableau", value: "tableau" },
  { label: "SQL", value: "sql" },
  { label: "Python", value: "python" },
  { label: "Chưa biết gì", value: "none" },
];

const courses: Record<string, Course> = {
  "business-intelligence": {
    title: "BIA - Business Intelligence Analytics",
    duration: "24 buổi (2 tiếng / buổi)",
    logo: "/images/storytelling-logo.svg",
    format: "Online & Offline",
    tools: ["Power BI", "SQL", "Power Query", "Advanced Excel"],
    certificates: ["Certificate", "Professional Profile"],
    colorScheme: {
      primary: "bg-blue-600",
      gradient: "from-blue-500 to-blue-600",
      light: "bg-blue-50",
      border: "border-blue-600",
      text: "text-blue-600",
    },
    instructor: {
      name: "Trong Do Xuan, CMA, FMVA",
      title: "Performance Management & Analysis Manager",
      company: "Prudential Vietnam",
      experience:
        "8 năm kinh nghiệm phân tích trong các lĩnh vực Tài chính ngân hàng, Bảo hiểm, Sản xuất",
      achievements: [
        "CEO & Founder của FINPAL - Fintech phần tích tài chính",
        "Finpal.com.vn",
        "Founder của DataTecHub - Nền tảng giáo dục và tư vấn Business Intelligence",
        "Anh đã phát triển kỹ thuật tự động hóa nhờ phần mềm dùng các công cụ BI từ dòng hóa RPA - robotic process automation) lên tới 90% công việc xử lý dữ liệu",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    curriculum: [
      {
        title: "Giới thiệu và Cơ bản",
        items: [
          "Giới thiệu về Business Intelligence và các công cụ sử dụng",
          "Tổng quan về Advanced Excel - Các hàm cơ bản và nâng cao",
          "Thực hành Advanced Excel - PivotTables và PivotCharts",
        ],
      },
      {
        title: "Làm sạch và Biến đổi Dữ liệu",
        items: [
          "Giới thiệu về Power Query - Kết nối và nhập dữ liệu",
          "Làm sạch dữ liệu với Power Query - Các kỹ thuật cơ bản",
          "Biến đổi dữ liệu với Power Query - Các kỹ thuật nâng cao",
          "Thực hành Power Query - Tích hợp dữ liệu từ nhiều nguồn",
        ],
      },
      {
        title: "Truy vấn và Phân tích Dữ liệu với SQL",
        items: [
          "Giới thiệu về SQL - Các khái niệm cơ bản và cú pháp",
          "Truy vấn cơ bản với SQL - SELECT, WHERE, JOIN",
          "Truy vấn nâng cao với SQL - GROUP BY, HAVING, SUBQUERIES",
          "Thực hành SQL - Tạo và quản lý cơ sở dữ liệu",
        ],
      },
      {
        title: "Tạo Báo cáo và Dashboard với Power BI",
        items: [
          "Giới thiệu về Power BI - Tổng quan về các đặc",
          "Kết nối dữ liệu trong Power BI - Các nguồn dữ liệu phổ biến",
          "Tạo báo cáo cơ bản với Power BI - Các biểu đồ cơ bản",
          "Tạo dashboard tương tác với Power BI - Các kỹ thuật nâng cao",
          "Thực hành Power BI - Tích hợp dữ liệu từ Power Query và SQL",
        ],
      },
      {
        title: "Dự báo và Phân tích Xu hướng",
        items: [
          "Phân tích xu hướng với Power BI - Các công cụ và kỹ thuật",
          "Dự báo dữ liệu với Power BI - Các mô hình dự báo",
          "Thực hành dự báo và phân tích xu hướng",
          "Tối ưu hóa quy trình kinh doanh với BI",
        ],
      },
      {
        title: "Ứng dụng Thực tế và Tổng kết",
        items: [
          "Ứng dụng BI trong các ngành công nghiệp khác nhau - Case studies",
          "Thực hành dự án BI - Phân tích và báo cáo dữ liệu thực tế",
          "Tổng kết và đánh giá khóa học - Thảo luận và phản hồi",
          "(Extra) Ứng dụng Analytical Thinking trong phân tích business cases",
        ],
      },
    ],
  },
  "power-bi-analytics": {
    title: "BIA - Power BI for Analytics",
    duration: "24 buổi (2 tiếng / buổi)",
    logo: "/images/powerbi-logo.svg",
    format: "Online & Offline",
    tools: ["Power BI"],
    certificates: ["Certificate", "Professional Profile"],
    instructor: {
      name: "Trong Do Xuan, CMA, FMVA",
      title: "Performance Management & Analysis Manager",
      company: "Prudential Vietnam",
      experience:
        "8 năm kinh nghiệm phân tích trong các lĩnh vực Tài chính ngân hàng, Bảo hiểm, Sản xuất",
      achievements: [
        "CEO & Founder của FINPAL - Fintech phần tích tài chính",
        "Finpal.com.vn",
        "Founder của DataTecHub - Nền tảng giáo dục và tư vấn Business Intelligence",
        "Anh có kinh nghiệm kiến trúc sư dữ liệu cũng như ứng dụng các công cụ BI từ dòng hóa (RPA - robotic process automation) lên tới 90% công việc xử lý dữ liệu",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    curriculum: [
      {
        title: "Tạo Báo cáo và Dashboard với Power BI",
        items: [
          "Giới thiệu về Power BI - Tổng quan về các đặc",
          "Kết nối dữ liệu trong Power BI - Các nguồn dữ liệu phổ biến",
          "Tạo báo cáo cơ bản với Power BI - Các biểu đồ cơ bản",
          "Tạo dashboard tương tác với Power BI - Các kỹ thuật nâng cao",
          "Thực hành Power BI - Tích hợp dữ liệu từ Power Query và SQL",
        ],
      },
      {
        title: "Dự báo và Phân tích Xu hướng",
        items: [
          "Phân tích xu hướng với Power BI - Các công cụ và kỹ thuật",
          "Dự báo dữ liệu với Power BI - Các mô hình dự báo",
          "Thực hành dự báo và phân tích xu hướng",
          "Tối ưu hóa quy trình kinh doanh với BI",
        ],
      },
      {
        title: "Ứng dụng Thực tế và Tổng kết",
        items: [
          "Ứng dụng BI trong các ngành công nghiệp khác nhau - Case studies",
          "Thực hành dự án BI - Phân tích và báo cáo dữ liệu thực tế",
          "Tổng kết và đánh giá khóa học - Thảo luận và phản hồi",
          "(Extra) Ứng dụng Analytical Thinking trong phân tích business cases",
        ],
      },
    ],
    colorScheme: {
      primary: "bg-orange-600",
      gradient: "from-[#FEA409] to-[#986205]",
      light: "bg-orange-50",
      border: "border-orange-600",
      text: "text-orange-600",
    },
  },
  "sql-analytics": {
    title: "BIA - SQL for Analytics",
    duration: "24 buổi (2 tiếng / buổi)",
    format: "Online & Offline",
    logo: "/images/sql-logo.svg",
    tools: ["Power BI"],
    certificates: ["Certificate", "Professional Profile"],
    instructor: {
      name: "Trong Do Xuan, CMA, FMVA",
      title: "Performance Management & Analysis Manager",
      company: "Prudential Vietnam",
      experience:
        "8 năm kinh nghiệm phân tích trong các lĩnh vực Tài chính ngân hàng, Bảo hiểm, Sản xuất",
      achievements: [
        "CEO & Founder của FINPAL - Fintech phần tích tài chính",
        "Finpal.com.vn",
        "Founder của DataTecHub - Nền tảng giáo dục và tư vấn Business Intelligence",
        "Anh có kinh nghiệm kiến trúc sư dữ liệu cũng như ứng dụng các công cụ BI từ dòng hóa (RPA - robotic process automation) lên tới 90% công việc xử lý dữ liệu",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    curriculum: [
      {
        title: "Giới thiệu và Cơ bản",
        items: [
          "Giới thiệu về Business Intelligence và các công cụ sử dụng",
          "Tổng quan về Advanced Excel - Các hàm cơ bản và nâng cao",
          "Thực hành Advanced Excel - PivotTables và PivotCharts",
        ],
      },
      {
        title: "Truy vấn và Phân tích Dữ liệu với SQL",
        items: [
          "Giới thiệu về SQL - Các khái niệm cơ bản và cú pháp",
          "Truy vấn cơ bản với SQL - SELECT, WHERE, JOIN",
          "Truy vấn nâng cao với SQL - GROUP BY, HAVING, SUBQUERIES",
          "Thực hành SQL - Tạo và quản lý cơ sở dữ liệu",
        ],
      },
    ],
    colorScheme: {
      primary: "bg-purple-600",
      gradient: "from-purple-500 to-purple-600",
      light: "bg-purple-50",
      border: "border-purple-600",
      text: "text-purple-600",
    },
  },
  "advanced-excel": {
    title: "BIA - Advanced Excel",
    duration: "24 buổi (2 tiếng / buổi)",
    logo: "/images/excel-logo.svg",
    format: "Online & Offline",
    tools: ["Power BI"],
    certificates: ["Certificate", "Professional Profile"],
    instructor: {
      name: "Trong Do Xuan, CMA, FMVA",
      title: "Performance Management & Analysis Manager",
      company: "Prudential Vietnam",
      experience:
        "8 năm kinh nghiệm phân tích trong các lĩnh vực Tài chính ngân hàng, Bảo hiểm, Sản xuất",
      achievements: [
        "CEO & Founder của FINPAL - Fintech phần tích tài chính",
        "Finpal.com.vn",
        "Founder của DataTecHub - Nền tảng giáo dục và tư vấn Business Intelligence",
        "Anh có kinh nghiệm kiến trúc sư dữ liệu cũng như ứng dụng các công cụ BI từ dòng hóa (RPA - robotic process automation) lên tới 90% công việc xử lý dữ liệu",
      ],
      image: "/placeholder.svg?height=200&width=200",
    },
    curriculum: [
      {
        title: "Giới thiệu và Cơ bản",
        items: [
          "Giới thiệu về Business Intelligence và các công cụ sử dụng",
          "Tổng quan về Advanced Excel - Các hàm cơ bản và nâng cao",
          "Thực hành Advanced Excel - PivotTables và PivotCharts",
        ],
      },
      {
        title: "Truy vấn và Phân tích Dữ liệu với SQL",
        items: [
          "Giới thiệu về SQL - Các khái niệm cơ bản và cú pháp",
          "Truy vấn cơ bản với SQL - SELECT, WHERE, JOIN",
          "Truy vấn nâng cao với SQL - GROUP BY, HAVING, SUBQUERIES",
          "Thực hành SQL - Tạo và quản lý cơ sở dữ liệu",
        ],
      },
    ],
    colorScheme: {
      primary: "bg-green-600",
      gradient: "from-green-500 to-green-600",
      light: "bg-green-50",
      border: "border-green-600",
      text: "text-green-600",
    },
  },
};

export default function CoursePage({ params }: { params: { id: string } }) {
  const courseId = params.id;
  const course = courses[courseId as keyof typeof courses];
  const { submit, status, error } = useSubmitForm();

  const [formError, setFormError] = React.useState<string | null>(null);

  type FormData = {
    fullName: string;
    phone: string;
    email: string;
    birthYear: string;
    industry: string;
    learningMode: string;
    officeUsageRate: string;
    appKnowledge: string[];
    learningGoals: string;
  };

  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    birthYear: "",
    industry: "",
    learningMode: "",
    officeUsageRate: "",
    appKnowledge: [],
    learningGoals: "",
  });

  console.log("Course ID:", course);

  if (!course) {
    notFound();
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "appKnowledge") {
      const newValue = value.split(",").map((v) => v.trim());
      setFormData((prev) => {
        // prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        return {
          ...prev,
          appKnowledge: prev.appKnowledge.includes(value)
            ? prev.appKnowledge.filter((v) => v !== value)
            : [...prev.appKnowledge, value],
        };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.birthYear ||
      !formData.industry ||
      !formData.learningMode ||
      !formData.officeUsageRate ||
      formData.appKnowledge.length === 0 ||
      !formData.learningGoals
    ) {
      setFormError("Vui lòng điền đầy đủ thông tin bắt buộc.");
      return;
    }

    setFormError(null);

    submit({
      ...formData,
      appKnowledge: formData.appKnowledge.join(", "),
      formType: courseId,
    });
  };
  const colorScheme = course.colorScheme || {
    primary: "bg-blue-600",
    gradient: "from-blue-600 to-blue-800",
    light: "bg-blue-50",
    border: "border-blue-600",
    text: "text-blue-600",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Course Information */}
          <div className="space-y-6">
            {/* Course Card */}
            <Card className="overflow-hidden border-0 shadow-lg relative">
              <CardHeader
                className={` text-white h-64 flex flex-col justify-between`}
                style={{
                  backgroundImage: `url(${course.logo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <Image
                      src={"/images/logo.png"}
                      width={150}
                      height={100}
                      alt="Logo"
                    />
                  </div>
                </div>

                {/* Overlay gradient trắng từ dưới lên */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent h-full"></div>

                {/* Title nằm phía trên */}
                <div className="relative z-10 p-4 flex items-center gap-4">
                  <div
                    className={`h-6 border-4 w-1 ${course.colorScheme?.border}`}
                  ></div>
                  <h2
                    className={`text-2xl font-bold ${course.colorScheme?.text}`}
                  >
                    {course.title}
                  </h2>
                </div>
              </CardHeader>
            </Card>

            {/* Course Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className={`h-5 w-5 ${colorScheme.text}`} />
                <span className="font-medium">Thời lượng:</span>
                <span className="text-gray-700">{course.duration}</span>
              </div>

              <div className="flex items-center gap-3">
                <Monitor className="h-5 w-5 text-orange-500" />
                <span className="font-medium">Hình thức:</span>
                <span className="text-gray-700">{course.format}</span>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <span className="font-medium">Công cụ:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {course.tools.map((tool, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-gray-50"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <span className="font-medium">Chứng nhận:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {course.certificates.map((cert, index) => (
                      <Badge
                        key={index}
                        className="bg-green-100 text-green-800 border-green-200"
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <BarChart3 className={`h-5 w-5 ${colorScheme.text}`} />
                  Chi tiết lộ trình khóa học
                </h2>
              </CardHeader>
              <CardContent className="space-y-6">
                {course.curriculum.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div
                        className={`w-2 h-2 ${colorScheme.primary} rounded-full`}
                      ></div>
                      {section.title}
                    </h3>
                    <ol className="space-y-2 ml-4">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm text-gray-700 flex gap-3"
                        >
                          <span
                            className={`${colorScheme.text} font-medium min-w-[20px]`}
                          >
                            {(courseId === "sql-analytics" ||
                              courseId === "advanced-excel") &&
                            sectionIndex === 1
                              ? 8 + itemIndex
                              : sectionIndex * 4 + itemIndex + 1}
                            .
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Instructor Information */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <User className={`h-5 w-5 ${colorScheme.text}`} />
                  Thông tin Giảng viên
                </h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <Image
                      src={"/images/avarTrong.svg"}
                      width={150}
                      height={150}
                      alt={course.instructor.name}
                      className="rounded-full border-4 border-blue-100"
                    />
                    <div className="absolute -bottom-2 -right-2">
                      <div
                        className={`${colorScheme.primary} text-white p-2 rounded-full`}
                      >
                        <Award className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {course.instructor.name}
                  </h3>

                  <p className={`${colorScheme.text} font-medium mb-2`}>
                    {course.instructor.title}
                  </p>

                  <p className="text-gray-600 mb-4">
                    tại {course.instructor.company}, với hơn{" "}
                    {course.instructor.experience}
                  </p>

                  <div className="text-left w-full space-y-2">
                    <p className="text-sm text-gray-700 mb-2">
                      Ngoài ra anh là:
                    </p>
                    <ul className="space-y-1">
                      {course.instructor.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <div
                              className={`w-1 h-1 ${colorScheme.primary} rounded-full mt-2 flex-shrink-0`}
                            ></div>
                            <span>{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Registration Form */}
          <div className="lg:sticky lg:top-6 h-fit">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div
                className={`bg-gradient-to-br ${colorScheme.gradient} text-white p-8`}
              >
                <h2 className="text-2xl font-bold mb-6">Form Đăng ký</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Input
                      placeholder="Họ tên"
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 h-12 rounded-full ${
                        status === "error" && !formData.fullName
                          ? "border-red-500"
                          : ""
                      }`}
                      value={formData.fullName}
                      onChange={handleChange}
                      name="fullName"
                      required
                    />
                    {status === "error" && !formData.fullName && (
                      <span className="text-red-200 text-xs">
                        Vui lòng nhập họ tên
                      </span>
                    )}
                  </div>

                  <div>
                    <Input
                      placeholder="Số điện thoại"
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 h-12 rounded-full ${
                        status === "error" && !formData.phone
                          ? "border-red-500"
                          : ""
                      }`}
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                      required
                    />
                    {status === "error" && !formData.phone && (
                      <span className="text-red-200 text-xs">
                        Vui lòng nhập số điện thoại
                      </span>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 h-12 rounded-full ${
                        status === "error" && !formData.email
                          ? "border-red-500"
                          : ""
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      required
                    />
                    {status === "error" && !formData.email && (
                      <span className="text-red-200 text-xs">
                        Vui lòng nhập email
                      </span>
                    )}
                  </div>

                  <div>
                    <Input
                      placeholder="Năm sinh (VD: 1993 → Nhập 1993)"
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 h-12 rounded-full ${
                        status === "error" && !formData.birthYear
                          ? "border-red-500"
                          : ""
                      }`}
                      value={formData.birthYear}
                      onChange={handleChange}
                      name="birthYear"
                      required
                    />
                    {status === "error" && !formData.birthYear && (
                      <span className="text-red-200 text-xs">
                        Vui lòng nhập năm sinh
                      </span>
                    )}
                  </div>

                  <div>
                    <Input
                      placeholder="Lĩnh vực anh chị đang làm"
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 h-12 rounded-full ${
                        status === "error" && !formData.industry
                          ? "border-red-500"
                          : ""
                      }`}
                      value={formData.industry}
                      onChange={handleChange}
                      name="industry"
                      required
                    />
                    {status === "error" && !formData.industry && (
                      <span className="text-red-200 text-xs">
                        Vui lòng nhập lĩnh vực
                      </span>
                    )}
                  </div>

                  <div>
                    <Select
                      value={formData.learningMode}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          learningMode: value,
                        }))
                      }
                      name="learningMode"
                      required
                    >
                      <SelectTrigger
                        className={`bg-white/10 border-white/20 text-white h-12 rounded-full ${
                          status === "error" && !formData.learningMode
                            ? "border-red-500"
                            : ""
                        }`}
                      >
                        <SelectValue placeholder="Anh chị ưu tiên hình thức học" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="offline">Offline</SelectItem>
                        <SelectItem value="any">
                          Hình thức nào cũng được
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {status === "error" && !formData.learningMode && (
                      <span className="text-red-200 text-xs">
                        Vui lòng chọn hình thức học
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <p className="text-white/90 text-sm">
                      Để hiểu hơn công nghệ chuẩn bị nội dung phù hợp hơn với
                      các anh chị. Mong anh chị giúp trả lời 3 câu hỏi dưới đây.
                    </p>

                    <p className="text-white/90 text-sm">
                      Anh chị đánh giá mức độ của mình phải sử dụng các ứng dụng
                      Microsoft office (Word, Excel, PowerPoint...) trên công
                      thời gian làm việc của anh chị như thế nào
                    </p>

                    <div>
                      <Select
                        value={formData.officeUsageRate}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            officeUsageRate: value,
                          }))
                        }
                        name="officeUsageRate"
                        required
                      >
                        <SelectTrigger
                          className={`bg-white/10 border-white/20 text-white h-12 rounded-full ${
                            status === "error" && !formData.officeUsageRate
                              ? "border-red-500"
                              : ""
                          }`}
                        >
                          <SelectValue placeholder="Chọn mức độ sử dụng" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="continuous">
                            Liên tục (trên 5 tiếng/ngày)
                          </SelectItem>
                          <SelectItem value="frequent">
                            Thường xuyên (3-5 tiếng/ngày)
                          </SelectItem>
                          <SelectItem value="occasional">
                            Thỉnh thoảng (1-3 tiếng/ngày)
                          </SelectItem>
                          <SelectItem value="rare">
                            Hiếm khi (dưới 1 tiếng/ngày)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {status === "error" && !formData.officeUsageRate && (
                        <span className="text-red-200 text-xs">
                          Vui lòng chọn mức độ sử dụng
                        </span>
                      )}
                    </div>

                    <p className="text-white/90 text-sm">
                      Anh chị có biết có khả năng tự sử dụng ứng dụng nào dưới
                      đây
                    </p>

                    <div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full justify-between bg-white/10 border-white/20 text-white h-12 rounded-full ${
                              status === "error" &&
                              formData.appKnowledge.length === 0
                                ? "border-red-500"
                                : ""
                            }`}
                          >
                            {formData.appKnowledge.length > 0
                              ? formData.appKnowledge
                                  .map(
                                    (v) =>
                                      options.find((o) => o.value === v)?.label
                                  )
                                  .join(", ")
                              : "Chọn kỹ năng"}
                            <Check className="ml-2 h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] bg-white text-black rounded-lg">
                          <div className="flex flex-col space-y-2">
                            {options.map((option) => (
                              <label
                                key={option.value}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <Checkbox
                                  checked={formData.appKnowledge.includes(
                                    option.value
                                  )}
                                  onCheckedChange={() => {
                                    setFormData((prev) => {
                                      if (option.value === "none") {
                                        return {
                                          ...prev,
                                          appKnowledge: ["none"],
                                        };
                                      }
                                      if (prev.appKnowledge.includes("none")) {
                                        return {
                                          ...prev,
                                          appKnowledge: [option.value],
                                        };
                                      }
                                      if (
                                        prev.appKnowledge.includes(option.value)
                                      ) {
                                        return {
                                          ...prev,
                                          appKnowledge:
                                            prev.appKnowledge.filter(
                                              (v) => v !== option.value
                                            ),
                                        };
                                      }
                                      return {
                                        ...prev,
                                        appKnowledge: [
                                          ...prev.appKnowledge,
                                          option.value,
                                        ],
                                      };
                                    });
                                  }}
                                />
                                <span>{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                      {status === "error" &&
                        formData.appKnowledge.length === 0 && (
                          <span className="text-red-200 text-xs">
                            Vui lòng chọn kỹ năng
                          </span>
                        )}
                    </div>

                    <div>
                      <Textarea
                        placeholder="Liệt kê 3 mục đích anh chị muốn đạt được qua khóa học này"
                        name="learningGoals"
                        value={formData.learningGoals}
                        onChange={handleChange}
                        className={`bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40 rounded-2xl min-h-[100px] resize-none ${
                          status === "error" && !formData.learningGoals
                            ? "border-red-500"
                            : ""
                        }`}
                        required
                      />
                      {status === "error" && !formData.learningGoals && (
                        <span className="text-red-200 text-xs">
                          Vui lòng nhập mục tiêu học tập
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold h-12 rounded-full text-lg mt-8"
                  >
                    Đăng ký
                  </Button>
                  {formError && (
                    <div className="text-red-200 text-sm mt-2">{formError}</div>
                  )}
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
