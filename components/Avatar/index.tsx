import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Avatar({
  name,
  imageUrl,
  size = "sm",
  className,
}: AvatarProps) {
  // Size mapping
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  const sizeClass = sizeClasses[size];

  return (
    <div
      className={cn(
        `${sizeClass} rounded-full flex items-center justify-center overflow-hidden`,
        imageUrl ? "" : "bg-gray-300",
        className
      )}
    >
      {imageUrl ? (
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={size === "lg" ? 40 : size === "md" ? 32 : 24}
          height={size === "lg" ? 40 : size === "md" ? 32 : 24}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-medium">{name.split("")[0]}</span>
      )}
    </div>
  );
}
