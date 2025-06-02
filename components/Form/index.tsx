import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function BusinessIntelligenceLanding() {
  const features = [
    {
      title: "Understanding business models",
      description:
        "Gain a deep understanding of business models and how to analyze them effectively to drive strategic decisions",
    },
    {
      title: "Implementing intelligence analysis",
      description:
        "Do advanced intelligence analysis methods to uncover hidden patterns and insights that can transform business operations",
    },
    {
      title: "Getting deep insights from data",
      description:
        "Develop the ability to extract meaningful insights from complex data sets, enabling data-driven decision-making",
    },
    {
      title: "Data Storytelling",
      description:
        "Hone your skills in data storytelling to communicate insights clearly and compellingly, making data accessible and actionable for stakeholders",
    },
    {
      title: "Building advanced analysis dashboard",
      description:
        "Utilize multiple amazing intelligence tools to automate reports, increasing efficiency and reducing manual effort through intelligent automation",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 container">
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
            Empowering your workforce to achieve higher levels of competence
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
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-gray-700 mb-8 text-center">
                    Form Đăng ký
                  </h2>

                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder="Tên Quy doanh nghiệp"
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        placeholder="Tên người liên hệ"
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        placeholder="Chức vụ công việc"
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        placeholder="Số điện thoại liên hệ"
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="Email liên hệ"
                        className="h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 rounded-full text-lg mt-8"
                    >
                      Đăng ký
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Registration Form */}
        </div>
      </div>
    </div>
  );
}
