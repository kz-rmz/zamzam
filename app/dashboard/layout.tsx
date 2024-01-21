import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "ZamZam Dashboard",
  description: "Hajj and Umra tour operator CRM system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${inter.className} min-h-screen flex`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
