import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "봄에 피어난 나",
  description: "봄에 피어난 나 - 나만의 유형을 찾아보세요! 나에 대해 더 알아가는 시간",
};

// @ts-ignore - Kakao 객체에 대한 타입을 무시
declare global {
  interface Window {
    Kakao: any;
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <div className="main-container">
          {children}
        </div>
      </body>
      
    </html>
  );
}
