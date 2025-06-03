import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Heart, Share2, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardDetail() {
  const relatedDashboards = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van A",
      date: "12.10.2024",
      image: "/placeholder.svg?height=120&width=240&text=Sales+Dashboard",
    },
    {
      id: 2,
      title: "Sales Performance Dashboard",
      author: "Nguyen Van B",
      date: "10.10.2024",
      image: "/placeholder.svg?height=120&width=240&text=Sales+Dashboard",
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
                  Premium
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
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {/* This would be replaced with an actual Power BI iframe in production */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 p-4">
              {/* Mock Power BI Dashboard */}
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-white text-xs">BI</span>
                    </div>
                    <span className="text-white font-medium">
                      Sales Overview
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-white/70 text-xs">Overview</span>
                    <span className="text-white/70 text-xs">Products</span>
                    <span className="text-white/70 text-xs">Solutions</span>
                    <span className="text-white/70 text-xs">Customers</span>
                  </div>
                </div>

                <div className="text-white/80 text-xs mb-4">
                  All data is from 2020-2023 and is for demonstration purposes
                  only
                </div>

                {/* Filter bar */}
                <div className="flex justify-end gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-white/70 text-xs">Date Range:</span>
                    <div className="bg-blue-800/50 rounded px-2 py-1 text-white text-xs">
                      2020-2023
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-white/70 text-xs">Model:</span>
                    <div className="bg-blue-800/50 rounded px-2 py-1 text-white text-xs">
                      All Models
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="grid grid-cols-12 gap-4 flex-grow">
                  {/* Revenue chart */}
                  <div className="col-span-4 bg-blue-800/30 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs font-medium">
                        Revenue
                      </span>
                      <div className="w-4 h-4 bg-blue-700/50 rounded flex items-center justify-center">
                        <ChevronDown className="h-3 w-3 text-white/70" />
                      </div>
                    </div>
                    <div className="h-32 flex items-end">
                      <svg className="w-full h-24" viewBox="0 0 300 100">
                        <defs>
                          <linearGradient
                            id="areaGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#3b82f6"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="#3b82f6"
                              stopOpacity="0.05"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,80 C60,70 140,30 300,50 L300,100 L0,100 Z"
                          fill="url(#areaGradient)"
                          strokeWidth="0"
                        />
                        <path
                          d="M0,80 C60,70 140,30 300,50"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                        />
                        {[0, 60, 140, 220, 300].map((x, i) => (
                          <circle
                            key={i}
                            cx={x}
                            cy={
                              i === 0
                                ? 80
                                : i === 1
                                ? 70
                                : i === 2
                                ? 30
                                : i === 3
                                ? 40
                                : 50
                            }
                            r="3"
                            fill="#3b82f6"
                          />
                        ))}
                      </svg>
                    </div>
                  </div>

                  {/* Sales by Year chart */}
                  <div className="col-span-4 bg-blue-800/30 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs font-medium">
                        Sales by Fiscal Year
                      </span>
                      <div className="w-4 h-4 bg-blue-700/50 rounded flex items-center justify-center">
                        <ChevronDown className="h-3 w-3 text-white/70" />
                      </div>
                    </div>
                    <div className="h-32 flex items-end justify-between px-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                        <div key={month} className="flex flex-col items-center">
                          <div
                            className="w-3 bg-yellow-400"
                            style={{ height: `${Math.random() * 60 + 20}px` }}
                          ></div>
                          <div className="text-white/50 text-[8px] mt-1">
                            {month}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Summary */}
                  <div className="col-span-4 bg-blue-800/30 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs font-medium">
                        Category Summary
                      </span>
                      <div className="w-4 h-4 bg-blue-700/50 rounded flex items-center justify-center">
                        <ChevronDown className="h-3 w-3 text-white/70" />
                      </div>
                    </div>
                    <div className="h-32 flex items-center justify-center">
                      <svg className="w-24 h-24" viewBox="0 0 42 42">
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
                        <circle cx="21" cy="21" r="10" fill="#1e3a8a" />
                        <text
                          x="21"
                          y="21"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          fill="white"
                          fontSize="8"
                          fontWeight="bold"
                        >
                          $1.2M
                        </text>
                      </svg>
                    </div>
                  </div>

                  {/* Monthly data table */}
                  <div className="col-span-6 bg-blue-800/30 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs font-medium">
                        Monthly Data
                      </span>
                      <div className="w-4 h-4 bg-blue-700/50 rounded flex items-center justify-center">
                        <ChevronDown className="h-3 w-3 text-white/70" />
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[8px] text-white/90">
                        <thead>
                          <tr className="border-b border-blue-700/50">
                            <th className="text-left py-1">Month</th>
                            <th className="text-right py-1">Revenue</th>
                            <th className="text-right py-1">Expenses</th>
                            <th className="text-right py-1">Profit</th>
                            <th className="text-right py-1">Growth</th>
                          </tr>
                        </thead>
                        <tbody>
                          {["Jan", "Feb", "Mar", "Apr", "May"].map(
                            (month, i) => (
                              <tr
                                key={month}
                                className="border-b border-blue-700/30"
                              >
                                <td className="py-1">{month}</td>
                                <td className="text-right py-1">$123,456</td>
                                <td className="text-right py-1">$98,765</td>
                                <td className="text-right py-1">$24,691</td>
                                <td className="text-right py-1 text-green-400">
                                  +12.3%
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Revenue Target */}
                  <div className="col-span-3 bg-blue-800/30 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs font-medium">
                        Revenue Target
                      </span>
                      <div className="w-4 h-4 bg-blue-700/50 rounded flex items-center justify-center">
                        <ChevronDown className="h-3 w-3 text-white/70" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-white text-lg font-bold">
                        $985.5K
                      </div>
                      <div className="text-white/70 text-[8px]">
                        out of $1,250.0K
                      </div>
                    </div>
                    <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                    <div className="text-white/70 text-[8px]">
                      Annual Target
                    </div>
                  </div>

                  {/* Returns by Year */}
                  <div className="col-span-3 bg-blue-800/30 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs font-medium">
                        Returns by Fiscal Year
                      </span>
                      <div className="w-4 h-4 bg-blue-700/50 rounded flex items-center justify-center">
                        <ChevronDown className="h-3 w-3 text-white/70" />
                      </div>
                    </div>
                    <div className="h-20 flex items-end justify-between px-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                        <div key={month} className="flex flex-col items-center">
                          <div
                            className="w-2 bg-blue-400"
                            style={{ height: `${Math.random() * 30 + 10}px` }}
                          ></div>
                          <div className="text-white/50 text-[6px] mt-1">
                            {month}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Dashboard Description */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Dashboard Description
            </h2>
            <Accordion
              type="multiple"
              defaultValue={["overview", "business", "audience", "analytical"]}
            >
              <AccordionItem
                value="overview"
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-3 text-blue-600 hover:text-blue-700 font-medium">
                  Overview
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  This dashboard provides a comprehensive overview of sales
                  performance across different dimensions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="business"
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-3 text-gray-700 hover:text-blue-700 font-medium">
                  Business Objective
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>KPI tracking (monthly, quarterly)</li>
                    <li>Performance analysis (YoY, QoQ, MoM)</li>
                    <li>
                      Identify trends and patterns (seasonality, YOY, EOY)
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="audience"
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-3 text-gray-700 hover:text-blue-700 font-medium">
                  Audience
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  <ul className="list-disc pl-5">
                    <li>Sales Manager, Marketing Manager</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="analytical"
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-3 text-gray-700 hover:text-blue-700 font-medium">
                  Analytical Perspectives
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Time Analysis (Monthly, Quarterly, YOY, MOM)</li>
                    <li>Product Analysis (Categories, Products, Inventory)</li>
                    <li>Regional Analysis (Countries, Cities, Stores)</li>
                    <li>
                      Customer Analysis (Segments, Behavior, Satisfaction)
                    </li>
                    <li>Profitability</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="channel"
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-3 text-gray-700 hover:text-blue-700 font-medium">
                  Channel Performance/User Behavior
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Analysis of performance across different sales channels and
                  user behavior patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="email" className="border-b border-gray-200">
                <AccordionTrigger className="py-3 text-gray-700 hover:text-blue-700 font-medium">
                  Email Marketing
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Performance metrics for email marketing campaigns and their
                  impact on sales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="spending"
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-3 text-gray-700 hover:text-blue-700 font-medium">
                  Spending Efficiency
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Analysis of marketing spend efficiency and ROI across
                  different channels.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="customer"
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-3 text-gray-700 hover:text-blue-700 font-medium">
                  Customer Segmentation
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  Detailed breakdown of customer segments and their purchasing
                  behaviors.
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
