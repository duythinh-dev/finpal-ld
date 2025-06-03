import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function StudentPortfolio() {
  const projects = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "15.10.2024",
      likes: 234,
      type: "sales",
      image: "/placeholder.svg?height=200&width=350&text=Sales+Dashboard",
    },
    {
      id: 2,
      title: "Investment Analysis Dashboard",
      author: "Nguyen Van A",
      date: "13.10.2024",
      likes: 189,
      type: "investment",
      image: "/placeholder.svg?height=200&width=350&text=Investment+Dashboard",
    },
    {
      id: 3,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "15.10.2024",
      likes: 156,
      type: "sales",
      image: "/placeholder.svg?height=200&width=350&text=Sales+Dashboard",
    },
    {
      id: 4,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "12.10.2024",
      likes: 298,
      type: "sales",
      image: "/placeholder.svg?height=200&width=350&text=Sales+Dashboard",
    },
    {
      id: 5,
      title: "Investment Analysis Dashboard",
      author: "Nguyen Van A",
      date: "12.10.2024",
      likes: 167,
      type: "investment",
      image: "/placeholder.svg?height=200&width=350&text=Investment+Dashboard",
    },
    {
      id: 6,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "15.10.2024",
      likes: 203,
      type: "sales",
      image: "/placeholder.svg?height=200&width=350&text=Sales+Dashboard",
    },
    {
      id: 7,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "13.10.2024",
      likes: 145,
      type: "sales",
      image: "/placeholder.svg?height=200&width=350&text=Sales+Dashboard",
    },
    {
      id: 8,
      title: "Investment Analysis Dashboard",
      author: "Nguyen Van A",
      date: "12.10.2024",
      likes: 178,
      type: "investment",
      image: "/placeholder.svg?height=200&width=350&text=Investment+Dashboard",
    },
    {
      id: 9,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "15.10.2024",
      likes: 267,
      type: "sales",
      image: "/placeholder.svg?height=200&width=350&text=Sales+Dashboard",
    },
  ];

  const DashboardPreview = ({ type }: { type: string }) => {
    if (type === "sales") {
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
            <Badge className="bg-yellow-500 text-black text-xs px-2 py-1">
              Power BI
            </Badge>
            <div className="text-white text-xs">Sales Overview</div>
          </div>

          {/* Main content area */}
          <div className="absolute top-12 left-3 right-3 bottom-3 space-y-3">
            {/* Charts area */}
            <div className="grid grid-cols-3 gap-2 h-20">
              {/* Line chart */}
              <div className="bg-blue-800/50 rounded p-2">
                <div className="text-white text-xs mb-1">Revenue</div>
                <svg className="w-full h-8" viewBox="0 0 60 20">
                  <polyline
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    points="0,15 15,10 30,12 45,5 60,8"
                  />
                </svg>
              </div>

              {/* Bar chart */}
              <div className="bg-blue-800/50 rounded p-2">
                <div className="text-white text-xs mb-1">Sales</div>
                <div className="flex items-end justify-between h-8 gap-1">
                  <div className="w-2 h-6 bg-yellow-400 rounded-t"></div>
                  <div className="w-2 h-4 bg-yellow-400 rounded-t"></div>
                  <div className="w-2 h-8 bg-yellow-400 rounded-t"></div>
                  <div className="w-2 h-3 bg-yellow-400 rounded-t"></div>
                  <div className="w-2 h-5 bg-yellow-400 rounded-t"></div>
                </div>
              </div>

              {/* Pie chart */}
              <div className="bg-blue-800/50 rounded p-2 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 42 42">
                  <circle
                    cx="21"
                    cy="21"
                    r="15.915"
                    fill="transparent"
                    stroke="#1e40af"
                    strokeWidth="3"
                  />
                  <circle
                    cx="21"
                    cy="21"
                    r="15.915"
                    fill="transparent"
                    stroke="#fbbf24"
                    strokeWidth="3"
                    strokeDasharray="60 40"
                    strokeDashoffset="25"
                  />
                  <circle
                    cx="21"
                    cy="21"
                    r="15.915"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="25 75"
                    strokeDashoffset="-35"
                  />
                </svg>
              </div>
            </div>

            {/* Data table simulation */}
            <div className="bg-blue-800/30 rounded p-2 space-y-1">
              <div className="flex justify-between text-white text-xs">
                <span>Product</span>
                <span>Sales</span>
              </div>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex justify-between text-blue-200 text-xs"
                >
                  <span>Item {i}</span>
                  <span>${(Math.random() * 1000).toFixed(0)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-purple-900 to-purple-700 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
            <Badge className="bg-yellow-500 text-black text-xs px-2 py-1">
              Premium
            </Badge>
            <div className="text-white text-xs">Financial Statement</div>
          </div>

          {/* Main content */}
          <div className="absolute top-12 left-3 right-3 bottom-3">
            {/* Investment cards */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-purple-800/50 rounded p-2">
                <div className="text-purple-200 text-xs">Portfolio</div>
                <div className="text-white text-sm font-bold">$125,430</div>
              </div>
              <div className="bg-purple-800/50 rounded p-2">
                <div className="text-purple-200 text-xs">Returns</div>
                <div className="text-green-400 text-sm font-bold">+12.5%</div>
              </div>
            </div>

            {/* Chart area */}
            <div className="bg-purple-800/30 rounded p-2 h-16 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 40">
                <defs>
                  <linearGradient
                    id="purpleGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,30 Q50,10 100,20 T200,15"
                  stroke="#a855f7"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0,30 Q50,10 100,20 T200,15 L200,40 L0,40 Z"
                  fill="url(#purpleGradient)"
                />
              </svg>
            </div>

            {/* Bottom indicators */}
            <div className="flex justify-between mt-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-600">
            Sản phẩm thực tế của học viên
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-0">
                {/* Project Preview */}
                <div className="relative">
                  <DashboardPreview type={project.type} />
                </div>

                {/* Project Info */}
                <div className="p-4 space-y-3">
                  {/* Title with icon */}
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                    <Link
                      href={"/detail/1"}
                      className="font-semibold text-blue-600 text-sm"
                    >
                      {project.title}
                    </Link>
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium">N</span>
                      </div>
                      <span>{project.author}</span>
                    </div>
                    <span>{project.date}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-xs">{project.likes}</span>
                      </button>
                      <button className="text-gray-500 hover:text-blue-500 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 text-blue-600 font-medium"
          >
            1
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 text-gray-500 hover:text-blue-600"
          >
            2
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 text-gray-500 hover:text-blue-600"
          >
            3
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 text-gray-500 hover:text-blue-600"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
