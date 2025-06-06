import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AnalyticsCapabilities() {
  const capabilities = [
    {
      title: "Xây dựng Dashboard phân tích chuyên sâu",
      subtitle: "Amazing Intelligence Tools",
      description:
        "Tận dụng các công cụ phân tích thông minh hàng đầu để tự động hóa báo cáo, tối ưu hiệu suất và giảm thiểu thao tác thủ công nhờ vào khả năng tự động hóa thông minh.",
      bgGradient: "from-cyan-100 via-purple-100 to-orange-100",
      image: "/images/ss-3-1.svg",
    },
    {
      title: "Kể chuyện bằng dữ liệu (Data Storytelling)",
      subtitle: "Visualized Charts",
      description:
        "Nâng cao kỹ năng truyền tải thông tin thông qua biểu đồ trực quan, giúp người xem dễ dàng hiểu và hành động dựa trên những gì dữ liệu thể hiện.",
      bgGradient: "from-blue-50 via-cyan-50 to-green-50",
      image: "/images/ss-3-2.svg",
    },
    {
      title: "Khai thác insight từ dữ liệu phức tạp",
      subtitle: "Analysis framework",
      description:
        "Áp dụng các khung phân tích chuyên sâu để rút ra những hiểu biết có giá trị từ dữ liệu, hỗ trợ ra quyết định dựa trên bằng chứng rõ ràng.",
      bgGradient: "from-purple-100 via-cyan-50 to-green-50",
      image: "/images/ss-3-3.svg",
    },
    {
      title: "Hiểu rõ mô hình kinh doanh",
      subtitle: "Business models",
      description:
        "Trang bị kiến thức nền tảng và kỹ năng phân tích mô hình kinh doanh để đưa ra các chiến lược phù hợp và định hướng phát triển hiệu quả.",
      bgGradient: "from-blue-50 via-cyan-50 to-green-50",
      image: "/images/ss-3-4.svg",
    },
  ];

  return (
    <div className="bg-white pb-20">
      <div className="contaier mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-600 mb-8">
            Nâng cao năng lực phân tích
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Illustration */}
                <Image
                  src={capability.image}
                  alt={capability.title}
                  width={400}
                  height={200}
                  className="w-full h-52x object-cover mb-4 rounded-md"
                />

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-blue-600">
                    {capability.title}
                  </h3>
                  <p className="text-gray-500 font-medium">
                    {capability.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
