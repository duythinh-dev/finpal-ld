"use client";
import { Badge } from "@/components/ui/badge";
import React from "react";
import ProjectPost from "../ProjectPost";

export default function StudentPortfolio() {
  const [listProjects, setListProjects] = React.useState<any[]>([]);
  React.useEffect(() => {
    // raw.githubusercontent.com/MrTrongDo/DataTecHub/main/Master_dashboard.json
    fetch(
      "https://raw.githubusercontent.com/MrTrongDo/DataTecHub/main/Master_dashboard.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setListProjects(
          data.dim_dashboard.map((item: any) => {
            return {
              id: item.Index,
              title: item.Dashboard_Name,
              author: item.Owner_Name,
              authorId: item.Owner_ID,
              date: new Date(item.Created_at).toLocaleDateString("vi-VN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              likes: 0,
              type: item.Challenge_Topic,
              image: `/placeholder.svg?height=200&width=350&text=${encodeURIComponent(
                item.Dashboard_Name
              )}`,
              thumbnail: item.Dashboard_Thumbnail,
            };
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const DashboardPreview = ({ type }: { type: string }) => {
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
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-600">
            Sản phẩm thực tế của học viên
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {listProjects.map((project) => (
            <ProjectPost
              key={project.id}
              dashboard={{
                id: project.id,
                title: project.title,
                author: project.author,
                date: project.date,
                authorId: project.authorId,
                thumbnail: project.thumbnail,
              }}
            />
          ))}
        </div>

        {/* Pagination
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
        </div> */}
      </div>
    </div>
  );
}
