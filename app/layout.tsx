import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataTecHub - Nền tảng huấn luyện phân tích dữ liệu",
  description:
    "Nâng cao kỹ năng phân tích dữ liệu của bạn với các khóa học chuyên sâu",
  generator: "v0.dev",
  icons: "/images/logo-ld.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const formatLinkImage = (link: string | undefined) => {
    if (!link) return "";
    return link.replace(
      "github.com/MrTrongDo/DataTecHub/blob/main/",
      "raw.githubusercontent.com/MrTrongDo/DataTecHub/main/"
    );
  };
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                    <img
                      src={formatLinkImage(
                        "https://github.com/MrTrongDo/DataTecHub/blob/main/Logo.png"
                      )}
                      alt="Logo DataTecHup"
                      className="h-10 w-auto"
                    />
                  </div>

                  <div className="space-y-3 text-gray-300">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      CÔNG TY TNHH FINPAL
                    </h3>

                    <div className="space-y-2">
                      <p className="leading-relaxed">
                        <span className="font-medium">Địa chỉ:</span> Văn phòng
                        02, tầng 08, tòa nhà Pearl Plaza, số 561A Điện Biên Phủ,
                        phường 25, quận Bình Thạnh, TP Hồ Chí Minh, Việt Nam
                      </p>

                      <p>
                        <span className="font-medium">Email:</span>{" "}
                        <a
                          href="mailto:cskh@finpal.com.vn"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          cskh@finpal.com.vn
                        </a>
                      </p>

                      <p>
                        <span className="font-medium">Số điện thoại:</span>{" "}
                        <a
                          href="tel:0918774118"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          0918 774 118
                        </a>
                      </p>

                      <p className="text-sm text-gray-400 mt-4">
                        <span className="font-medium">Giấy CNĐKKD:</span>{" "}
                        0318509744 - Ngày cấp: 13/06/2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
