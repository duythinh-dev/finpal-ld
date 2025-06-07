"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import React from "react";
import { useSubmitForm } from "@/hooks/use-saveInfoUser";

export default function BusinessIntelligenceLanding() {
  const features = [
    {
      title: "Hiểu rõ mô hình kinh doanh",
      description:
        "Trang bị kiến thức nền tảng và kỹ năng phân tích mô hình kinh doanh để đưa ra các chiến lược phù hợp và định hướng phát triển hiệu quả.",
    },
    {
      title: "Ứng dụng phân tích thông minh",
      description:
        "Áp dụng các phương pháp phân tích nâng cao nhằm khám phá các mô hình ẩn và những insights có thể tạo ra sự chuyển đổi trong hoạt động doanh nghiệp.",
    },
    {
      title: "Khai thác insight từ dữ liệu phức tạp",
      description:
        "Áp dụng các khung phân tích chuyên sâu để rút ra những hiểu biết có giá trị từ dữ liệu, hỗ trợ ra quyết định dựa trên bằng chứng rõ ràng.",
    },
    {
      title: "Kể chuyện bằng dữ liệu (Data Storytelling)",
      description:
        "Nâng cao kỹ năng truyền tải thông tin thông qua biểu đồ trực quan, giúp người xem dễ dàng hiểu và hành động dựa trên những gì dữ liệu thể hiện.",
    },
    {
      title: "Xây dựng dashboard phân tích nâng cao",
      description:
        "Tận dụng các công cụ phân tích thông minh hàng đầu để tự động hóa báo cáo, tối ưu hiệu suất và giảm thiểu thao tác thủ công nhờ vào khả năng tự động hóa thông minh.",
    },
  ];

  const { submit, status, error } = useSubmitForm();

  const [formData, setFormData] = React.useState({
    companyName: "",
    contactName: "",
    jobTitle: "",
    phone: "",
    email: "",
    formType: "doanh-nghiep",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(formData);
    if (status === "success") {
      setFormData({
        companyName: "",
        contactName: "",
        jobTitle: "",
        phone: "",
        email: "",
        formType: "doanh-nghiep",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 md:container">
      <div className="mx-auto px-4 space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="border-4 border-blue-600 h-12 w-1"></div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">
                Khóa Business Intelligence
              </h1>
              <p className="text-gray-500">Dành cho doanh nghiệp</p>
            </div>
          </div>

          <p className="text-gray-600 text-lg">
            Nâng cao đội ngũ của bạn để đạt được năng lực vượt trội
          </p>
        </div>
        <div className="space-y-8">
          {/* Header */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm italic leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:sticky lg:top-6 h-fit">
              <Card className="border-0 shadow-lg bg-whit">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-gray-700 mb-8 text-center">
                    Form Đăng ký
                  </h2>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <Input
                        placeholder="Tên Quý doanh nghiệp"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        placeholder="Tên người liên hệ"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        placeholder="Chức vụ công việc"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        placeholder="Số điện thoại liên hệ"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="Email liên hệ"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 rounded-full text-lg mt-8"
                    >
                      Đăng ký
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
