"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronDown,
  ChevronUp,
  Expand,
  Heart,
  Lightbulb,
  Share2,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import ProjectPost from "@/components/ProjectPost";

export default function DashboardDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap params using React.use()
  const { id } = React.use(params);

  // State to manage open accordion items
  const [openItems, setOpenItems] = useState<string[]>(["overview"]);
  const [listProjects, setListProjects] = React.useState<any[]>([]);
  const [listMoreInfo, setListMoreInfo] = React.useState({
    overview: {
      businessObjective: [],
      analyticalLogic: [],
      analyticalPerspectives: [],
    },
    dashboardStructure: [],
  });
  const [loading, setLoading] = React.useState(true);

  const infoProject = listProjects.find(
    (project) => project.id.toString() === id
  );

  // Filter out the current project from the list for related projects and get 2 items
  // This is used to display other projects in the related section
  const otherProjects = listProjects
    .filter((project) => project.id.toString() !== id)
    .slice(0, 2);

  const handleMappingListMoreInfo = (data: any) => {
    const idDetail = data.dim_dashboard.find(
      (e: any) => e.Index == id
    ).Dashboard_ID;

    const bsnObjective = data.db_objective.filter(
      (e: any) => e.Dashboard_ID === idDetail
    );
    const bsnLogic = data.db_logic.filter(
      (e: any) => e.Dashboard_ID === idDetail
    );
    const bsnPerspective = data.db_perspective.filter(
      (e: any) => e.Dashboard_ID === idDetail
    );
    const dashboardStructure = data.db_structure.filter(
      (e: any) => e.Dashboard_ID === idDetail
    );

    setListMoreInfo({
      overview: {
        businessObjective: bsnObjective.map((e: any) => e.Business_Objective),
        analyticalLogic: bsnLogic.map((e: any) => e.Analytical_Logic),
        analyticalPerspectives: bsnPerspective.map(
          (e: any) => e.Analytical_Perspectives
        ),
      },
      dashboardStructure: dashboardStructure.map(
        (e: any) => e.Dashboard_Structure
      ),
    });
  };

  // Fetch projects data from the API
  React.useEffect(() => {
    // raw.githubusercontent.com/MrTrongDo/DataTecHub/main/Master_dashboard.json
    setLoading(true);
    setListProjects([]);
    fetch(
      "https://raw.githubusercontent.com/MrTrongDo/DataTecHub/main/Master_dashboard.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
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
              url: item.Dashboard_Link,
              description: item.Description || "No description available",
            };
          })
        );
        handleMappingListMoreInfo(data);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleValueChange = (value: string[]) => {
    setOpenItems(value);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
            <div>
              <h1 className="text-xl font-bold text-blue-600">
                {infoProject?.title || "Dashboard Title"}
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">N</span>
                </div>
                <Link href={`/student-profile/${infoProject?.authorId || ""}`}>
                  {infoProject?.author || ""}
                </Link>
                <span>•</span>
                <span>{infoProject?.date}</span>
                <Badge className="bg-yellow-500 text-black text-xs ml-1">
                  {"Power BI"}
                </Badge>
              </div>
            </div>
          </div>
          <Link href={"/"} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </Link>
        </div>

        {/* Dashboard Iframe */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {infoProject?.url ? (
            <iframe
              src={infoProject?.url}
              title="Sales Performance Dashboard"
              className="w-full h-[300px] md:h-[700px] border-0"
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-[700px] bg-gray-100">
              <p className="text-gray-500">No dashboard available</p>
            </div>
          )}
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Dashboard Description */}
          <div className="w-full md:col-span-2">
            <h2 className="text-xl font-medium text-gray-600 mb-6">
              Dashboard Description
            </h2>

            <Accordion
              type="multiple"
              value={openItems}
              onValueChange={handleValueChange}
              className="space-y-2"
            >
              {/* Overview Section */}
              <AccordionItem value="overview" className="border-none">
                <AccordionTrigger className="flex items-center gap-2 py-3 px-0 hover:no-underline group">
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    {openItems.includes("overview") ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    Overview
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="space-y-6 ml-6">
                    {/* Business Objective */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-1"></div>
                        <span className="font-medium text-gray-700">
                          Business Objective
                        </span>
                      </div>
                      <ul className="ml-6 space-y-2 text-gray-600">
                        {listMoreInfo.overview.businessObjective.length > 0 ? (
                          listMoreInfo.overview.businessObjective.map(
                            (item: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="text-gray-400 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            )
                          )
                        ) : (
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>{" "}
                            <span>Không có thông tin</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Analytical Logic */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium text-gray-700">
                          Analytical Logic
                        </span>
                      </div>
                      <ul className="ml-6 space-y-2 text-gray-600">
                        {listMoreInfo.overview.analyticalLogic.length > 0 ? (
                          listMoreInfo.overview.analyticalLogic.map(
                            (item: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="text-gray-400 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            )
                          )
                        ) : (
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Không có thông tin</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Analytical Perspectives */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Expand className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-gray-700">
                          Analytical Perspectives
                        </span>
                      </div>
                      <ul className="ml-6 space-y-2 text-gray-600">
                        {listMoreInfo.overview.analyticalPerspectives.length >
                        0 ? (
                          listMoreInfo.overview.analyticalPerspectives.map(
                            (item: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="text-gray-400 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            )
                          )
                        ) : (
                          <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>Không có thông tin</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Channel Performance/User Behavior */}
              <AccordionItem value="channel" className="border-none">
                <AccordionTrigger className="flex items-center gap-2 py-3 px-0 hover:no-underline">
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    {openItems.includes("channel") ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    Dashboard Structure
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <div className="ml-6 text-gray-600">
                    <ul className="space-y-2">
                      {listMoreInfo.dashboardStructure.length > 0 ? (
                        listMoreInfo.dashboardStructure.map(
                          (item: string, index: number) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-gray-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          )
                        )
                      ) : (
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Không có thông tin</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Right Column - Related Dashboards */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Related Dashboard
            </h2>
            <div className="space-y-4">
              {otherProjects.map((dashboard) => (
                <ProjectPost
                  key={dashboard.id}
                  dashboard={{
                    id: dashboard.id,
                    title: dashboard.title,
                    author: dashboard.author,
                    date: dashboard.date,
                    authorId: dashboard.authorId,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
