import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/ThemeContext";
// import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal developer portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
