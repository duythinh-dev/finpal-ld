import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AnalyticsCapabilities() {
  const capabilities = [
    {
      title: "Building analysis dashboard",
      subtitle: "Amazing Intelligence Tools",
      description:
        "Utilize multiple amazing intelligence tools to automate reports, increasing efficiency and reducing manual effort through intelligent automation",
      bgGradient: "from-cyan-100 via-purple-100 to-orange-100",
      image: "/images/ss-3-1.svg",
    },
    {
      title: "Data Storytelling",
      subtitle: "Visualized Charts",
      description:
        "Hone your skills in data storytelling to communicate insights clearly and compellingly, making data accessible and actionable for stakeholders",
      bgGradient: "from-blue-50 via-cyan-50 to-green-50",
      image: "/images/ss-3-2.svg",
    },
    {
      title: "Getting deep insights from data",
      subtitle: "Analysis framework",
      description:
        "Develop the ability to extract meaningful insights from complex data sets, enabling data-driven decision-making",
      bgGradient: "from-purple-100 via-cyan-50 to-green-50",
      image: "/images/ss-3-3.svg",
    },
    {
      title: "Understanding business models",
      subtitle: "Business models",
      description:
        "Gain a deep understanding of business models and how to analyze them effectively to drive strategic decisions",
      bgGradient: "from-blue-50 via-cyan-50 to-green-50",
      image: "/images/ss-3-4.svg",
    },
  ];

  return (
    <div className="bg-white pb-20 ">
      <div className="contaier mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-600 mb-8">
            Nâng cao năng lực phân tích
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
