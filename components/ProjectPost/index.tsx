import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { formatLinkImage } from "@/app/student-profile/[id]/page";

interface ProjectPostProps {
  dashboard: {
    id: string | number;
    title: string;
    author: string;
    authorId: string | number;
    date: string;
    thumbnail?: string;
  };
}

const ProjectPost: React.FC<{ dashboard: ProjectPostProps["dashboard"] }> = ({
  dashboard,
}) => (
  <Card
    key={dashboard.id}
    className="overflow-hidden hover:shadow-md transition-shadow"
  >
    <CardContent className="p-0">
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-t-lg overflow-hidden">
          {/* {dashboard.thumbnail ? (
            <img
              src={dashboard.thumbnail || "/images/image-detail.png"}
              alt={dashboard.title}
              width={240}
              height={120}
              className="w-full h-auto opacity-90"
            />
          ) : ( */}
          <Image
            src={
              formatLinkImage(dashboard.thumbnail) || "/images/image-detail.png"
            }
            alt={dashboard.title}
            width={240}
            height={120}
            className="w-full h-auto opacity-90"
          />
          {/* )} */}
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
            href={`/student-profile/${dashboard.authorId}`}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">
                {dashboard.author.split("")[0]}
              </span>
            </div>
            <span>{dashboard.author}</span>
          </Link>
          <div className="flex items-center gap-2">
            <span>{dashboard.date}</span>
            {/* <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-red-500">
                <Heart className="h-3 w-3" />
              </button>
              <button className="text-gray-400 hover:text-blue-500">
                <Share2 className="h-3 w-3" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ProjectPost;
