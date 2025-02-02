import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Kris Reeck | DevOps & Cloud Portfolio",
  description: "Portfolio of Kris Reeck, showcasing expertise in DevOps, Cloud Architecture, and Security.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Kris Reeck | DevOps & Cloud Portfolio",
    description: "Showcasing expertise in DevOps, Cloud Automation, Security, and Cost Optimization.",
    url: "https://kris.reeck.dev",
    siteName: "Kris Reeck Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-neutral text-deep`}
      >
        {children}
      </body>
    </html>
  );
}
