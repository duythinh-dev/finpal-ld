"use client";
import ProjectPost from "@/components/ProjectPost";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import React from "react";

export const formatLinkImage = (link: string | undefined) => {
  if (!link) return "";
  return link.replace(
    "github.com/MrTrongDo/DataTecHub/blob/main/",
    "raw.githubusercontent.com/MrTrongDo/DataTecHub/main/"
  );
};

export default function StudentProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  // Fetch profile information based on the ID from params
  const [profileInfo, setProfileInfo] = React.useState<Owner | null>(null);
  const [listProjects, setListProjects] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  interface Owner {
    Index: number;
    Owner_ID: string;
    Registered_at: string;
    Owner_Name: string;
    Certified_YN: string;
    Certified_name: string;
    Certified_date: string;
    Excel_skill: string;
    PowerQuery_skill: string;
    SQL_skill: string;
    PowerBI_skill: string;
    Python_skill: string;
    Owner_Title: string;
    Owner_Organization: string;
    Owner_Brief: string;
    Owner_AvatarLink: string;
    Owner_CertificateImage: string;
    Linkedin: string;
    [key: string]: any;
  }

  React.useEffect(() => {
    // raw.githubusercontent.com/MrTrongDo/DataTecHub/main/Master_dashboard.json
    setLoading(true);
    setProfileInfo(null);
    fetch(
      "https://raw.githubusercontent.com/MrTrongDo/DataTecHub/main/Master_dashboard.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        const prfInfo = data.dim_dbowner.find(
          (owner: Owner) => owner.Owner_ID === id
        );
        setProfileInfo(prfInfo);
        setListProjects(
          data.dim_dashboard.map((e: any) => {
            const linkAvatar = data.dim_dbowner.find(
              (el: any) => el.Owner_ID === e.Owner_ID
            ).Owner_AvatarLink;
            return {
              ...e,
              Owner_AvatarLink: linkAvatar,
            };
          })
        );
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching projects:", error);
      });
  }, []);

  const tools = () => {
    // Excel_skill
    const skills = [
      { name: "Power BI", color: "bg-yellow-500" },
      { name: "SQL", color: "bg-blue-500" },
      { name: "Power Query", color: "bg-green-500" },
      { name: "Advanced Excel", color: "bg-purple-500" },
      { name: "Python", color: "bg-red-500" },
    ];
    const result = [];
    if (profileInfo?.Excel_skill === "Y") {
      result.push(skills[3]);
    }
    if (profileInfo?.PowerQuery_skill === "Y") {
      result.push(skills[2]);
    }
    if (profileInfo?.SQL_skill === "Y") {
      result.push(skills[1]);
    }
    if (profileInfo?.PowerBI_skill === "Y") {
      result.push(skills[0]);
    }
    if (profileInfo?.Python_skill === "Y") {
      result.push(skills[4]);
    }
    return result;
  };

  const listProjectsOfOwner = listProjects.filter(
    (project) => project.Owner_ID === id
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <User className="h-5 w-5 text-blue-600" />
          <h1 className="text-xl font-semibold text-blue-600">
            Thông tin Thành viên
          </h1>
        </div>

        {/* Top Section - Profile and Certificate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left - Profile */}
          <div className="flex flex-col items-center text-center">
            {/* Profile Photo with Gradient Border */}
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                  <img
                    src={formatLinkImage(profileInfo?.Owner_AvatarLink)}
                    width={180}
                    height={180}
                    alt="Student Profile"
                    className="w-full h-full rounded-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 ">
                {profileInfo?.Owner_Name}
              </h2>
              <p className="text-gray-600">
                {profileInfo?.Owner_Title} | {profileInfo?.Owner_Organization}
              </p>
            </div>
          </div>

          {/* Right - Certificate */}
          <div className="flex items-center justify-center">
            <img
              src={formatLinkImage(profileInfo?.Owner_CertificateImage)}
              alt="Certificate"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Skills Section - Large Card */}
        <Card className="shadow-lg mb-8">
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Description and LinkedIn */}
            <div className="flex items-start justify-between flex-col ">
              <div className="flex items-center gap-2 mb-4 flex-1">
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl ">
                  Unlock your powerful analytics with advanced BI courses and
                  provide Business solutions services
                </p>
              </div>
              <a
                href={profileInfo?.Linkedin}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
              </a>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-col gap-8">
              {/* Tools */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="font-semibold text-gray-700">Công cụ</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools().map((tool, index) => (
                    <Badge
                      key={index}
                      className={`${tool.color} text-white border-0 px-3 py-1`}
                    >
                      {tool.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-gray-700">
                    Chứng nhận
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profileInfo?.Certified_YN === "Y" ? (
                    <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">
                      {profileInfo?.Certified_name}
                    </Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-800 border-red-200 px-3 py-1">
                      Chưa có chứng nhận
                    </Badge>
                  )}
                </div>
              </div>

              {/* Dashboard Count */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="font-semibold text-gray-700">
                    Số lượng dashboard: {listProjectsOfOwner.length}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Dashboards */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Related Dashboard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listProjectsOfOwner.map((dashboard) => {
              return (
                <ProjectPost
                  key={dashboard.Index}
                  dashboard={{
                    id: dashboard.Index,
                    title: dashboard.Dashboard_Name,
                    author: dashboard.Owner_Name,
                    date: new Date(dashboard.Created_at).toLocaleDateString(),
                    authorId: dashboard.Owner_ID,
                    thumbnail: dashboard.Dashboard_Thumbnail,
                    avatar: formatLinkImage(dashboard.Owner_AvatarLink),
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
