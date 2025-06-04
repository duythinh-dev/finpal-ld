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
import { useState } from "react";

export default function DashboardDetail() {
  const [openItems, setOpenItems] = useState<string[]>(["overview"]);

  const handleValueChange = (value: string[]) => {
    setOpenItems(value);
  };
  const relatedDashboards = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "12.10.2024",
      image: "/images/image-detail.png",
    },
    {
      id: 2,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van B",
      date: "10.10.2024",
      image: "/images/image-detail.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
            <div>
              <h1 className="text-xl font-bold text-blue-600">
                Sales Performance Dashboard
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">N</span>
                </div>
                <span>Nguyen Van A</span>
                <span>•</span>
                <span>15/10/2024</span>
                <Badge className="bg-yellow-500 text-black text-xs ml-1">
                  Power BI
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
          {/* <iframe
            src="https://example.com/dashboard"
            title="Sales Performance Dashboard"
            className="w-full h-[600px] border-0"
          ></iframe> */}
          <Image
            src="/images/image-detail.png"
            alt="Dashboard Preview"
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
          />
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
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-gray-700">
                          Business Objective
                        </span>
                      </div>
                      <ul className="ml-4 space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Đối tượng: Marketing manager</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>
                            Key metrics: CTR, Conversion rate, CPA, CPC
                          </span>
                        </li>
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
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>What: chuyện gì đang xảy ra ?</span>
                        </li>
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
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Snapshot: CTR, Conversion rate, CPA, CPC</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>
                            Trend analysis: Clicks, Conversion by time series
                            (seasonality)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Contribution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>Detail table</span>
                        </li>
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
                    Channel Performance/User Behavior
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <div className="ml-6 text-gray-600">
                    <p>
                      Analysis of performance across different sales channels
                      and user behavior patterns.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Email Marketing */}
              <AccordionItem value="email" className="border-none">
                <AccordionTrigger className="flex items-center gap-2 py-3 px-0 hover:no-underline">
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    {openItems.includes("email") ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    Email Marketing
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <div className="ml-6 text-gray-600">
                    <p>
                      Performance metrics for email marketing campaigns and
                      their impact on conversions.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Spending Efficiency */}
              <AccordionItem value="spending" className="border-none">
                <AccordionTrigger className="flex items-center gap-2 py-3 px-0 hover:no-underline">
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    {openItems.includes("spending") ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    Spending Efficiency
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <div className="ml-6 text-gray-600">
                    <p>
                      Analysis of marketing spend efficiency and ROI across
                      different channels.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Customer Segmentation */}
              <AccordionItem value="customer" className="border-none">
                <AccordionTrigger className="flex items-center gap-2 py-3 px-0 hover:no-underline">
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    {openItems.includes("customer") ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    Customer Segmentation
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <div className="ml-6 text-gray-600">
                    <p>
                      Detailed breakdown of customer segments and their
                      purchasing behaviors.
                    </p>
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
              {relatedDashboards.map((dashboard) => (
                <Card
                  key={dashboard.id}
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-t-lg overflow-hidden">
                        <Image
                          src={dashboard.image || "/placeholder.svg"}
                          alt={dashboard.title}
                          width={240}
                          height={120}
                          className="w-full h-auto opacity-90"
                        />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                        <Link
                          href="#"
                          className="font-medium text-blue-600 text-sm hover:underline"
                        >
                          {dashboard.title}
                        </Link>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium">N</span>
                          </div>
                          <span>{dashboard.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{dashboard.date}</span>
                          <div className="flex items-center gap-3">
                            <button className="text-gray-400 hover:text-red-500">
                              <Heart className="h-3 w-3" />
                            </button>
                            <button className="text-gray-400 hover:text-blue-500">
                              <Share2 className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
