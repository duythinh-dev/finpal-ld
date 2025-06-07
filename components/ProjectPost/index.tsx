"use client"; // Add this line if ProjectPost is a Client Component

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { formatLinkImage } from "@/app/member-profile/[id]/page";
import { Share2 } from "lucide-react";
import { toast, useToast } from "@/hooks/use-toast";
import Avatar from "../Avatar";

interface ProjectPostProps {
  dashboard: {
    id: string | number;
    title: string;
    author: string;
    authorId: string | number;
    date: string;
    thumbnail?: string;
    avatar: string;
  };
}

const ProjectPost: React.FC<{ dashboard: ProjectPostProps["dashboard"] }> = ({
  dashboard,
}) => {
  useToast();

  // ... bên trong hàm handleShare của bạn
  const handleShare = () => {
    const detailLink = `${window.location.origin}/detail/${dashboard.id}`;

    navigator.clipboard
      .writeText(detailLink)
      .then(() => {
        // Sử dụng toast ở đây
        toast({
          title: "Link copied!",
          description:
            "Liên kết chi tiết dự án đã được sao chép vào bảng tạm của bạn.",
          variant: "success",
        });
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        // Sử dụng toast cho lỗi
        toast({
          title: "Failed to copy link",
          description: "Đã xảy ra lỗi khi sao chép liên kết. Vui lòng thử lại.",
          variant: "destructive", // Nếu toast của bạn hỗ trợ các loại khác nhau
        });
      });
  };
  return (
    <Card
      key={dashboard.id}
      className="overflow-hidden hover:shadow-md transition-shadow"
    >
      <CardContent className="p-0">
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-t-lg overflow-hidden">
            <Image
              src={
                formatLinkImage(dashboard.thumbnail) ||
                "/images/image-detail.png"
              }
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
              href={`/detail/${dashboard.id}`}
              className="font-medium text-blue-600 text-sm hover:underline"
            >
              {dashboard.title}
            </Link>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <Link
              href={`/member-profile/${dashboard.authorId}`}
              className="flex items-center gap-2"
            >
              <Avatar name={dashboard.author} imageUrl={dashboard.avatar} />
              <span>{dashboard.author}</span>
            </Link>
            <div className="flex items-center gap-2">
              <span>{dashboard.date}</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare} // Attach the handleShare function here
                  className="text-gray-400 hover:text-blue-500"
                >
                  <Share2 className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectPost;
