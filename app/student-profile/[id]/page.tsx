"use client";
import ProjectPost from "@/components/ProjectPost";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Share2, User, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  console.log("Profile ID:", id, "Profile Info:", profileInfo);
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
        setProfileInfo(
          data.dim_dbowner.find((owner: Owner) => owner.Owner_ID === id)
        );
        setListProjects(data.dim_dashboard);
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

  const relatedDashboards = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "15.10.2024",
      likes: 234,
      type: "sales",
    },
    {
      id: 2,
      title: "Investment Analysis Dashboard",
      author: "Nguyen Van A",
      date: "13.10.2024",
      likes: 189,
      type: "investment",
    },
    {
      id: 3,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "12.10.2024",
      likes: 156,
      type: "sales",
    },
    {
      id: 4,
      title: "Investment Analysis Dashboard",
      author: "Nguyen Van A",
      date: "10.10.2024",
      likes: 178,
      type: "investment",
    },
  ];

  const DashboardPreview = () => {
    return (
      <div className="relative w-full h-40 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg overflow-hidden">
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
          <Badge className="bg-yellow-500 text-black text-xs px-2 py-1">
            Power BI
          </Badge>
          <div className="text-white text-xs">Sales Overview</div>
        </div>
        <div className="absolute top-10 left-3 right-3 bottom-3 grid grid-cols-3 gap-2">
          <div className="bg-blue-800/50 rounded p-2">
            <svg className="w-full h-8" viewBox="0 0 60 20">
              <polyline
                fill="none"
                stroke="#fbbf24"
                strokeWidth="2"
                points="0,15 15,10 30,12 45,5 60,8"
              />
            </svg>
          </div>
          <div className="bg-blue-800/50 rounded p-2 flex items-end justify-between">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-2 bg-yellow-400"
                style={{ height: `${Math.random() * 20 + 8}px` }}
              ></div>
            ))}
          </div>
          <div className="bg-blue-800/50 rounded p-2 flex items-center justify-center">
            <svg className="w-8 h-8" viewBox="0 0 42 42">
              <circle
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke="#fbbf24"
                strokeWidth="3"
                strokeDasharray="60 40"
              />
            </svg>
          </div>
        </div>
      </div>
    );
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
    <div className="min-h-screen bg-gray-50 py-8">
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
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
              </Link>
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
            {listProjectsOfOwner.map((dashboard) => (
              <ProjectPost
                key={dashboard.Index}
                dashboard={{
                  id: dashboard.Index,
                  title: dashboard.Dashboard_Name,
                  author: dashboard.Owner_Name,
                  date: new Date(dashboard.Created_at).toLocaleDateString(),
                  authorId: dashboard.Owner_ID,
                  thumbnail: dashboard.Dashboard_Thumbnail,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
