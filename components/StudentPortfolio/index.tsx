"use client";
import React from "react";
import ProjectPost from "../ProjectPost";
import { formatLinkImage } from "@/app/member-profile/[id]/page";

export default function StudentPortfolio() {
  const [listProjects, setListProjects] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MrTrongDo/DataTecHub/main/Master_dashboard.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setListProjects(
          data.dim_dashboard.map((item: any) => {
            const linkAvatar = data.dim_dbowner.find(
              (el: any) => el.Owner_ID === item.Owner_ID
            ).Owner_AvatarLink;
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
              avatar: linkAvatar,
            };
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

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
                avatar: formatLinkImage(project.avatar),
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
