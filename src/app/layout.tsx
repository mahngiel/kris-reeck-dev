import type { Metadata } from "next";
import LeftColumn from "@components/global/LeftColumn";
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
      <body className="antialiased">
        {/* Main DOM */}
        <div className="grid grid-rows-6 min-h-screen gap-1.5 p-1.5">

          {/* Primary Content */}
          <div className="row-span-5 grid grid-cols-6 gap-1.5">

            {/* Left Column */}
            <nav className="bg-paper col-span-1 rounded">
              <LeftColumn />
            </nav>

            {/* Center Column (Main Content) */}
            <main className="bg-paper col-span-4 flex justify-center items-center rounded overflow-hidden">
              {children}
            </main>

            {/* Right Column */}
            <aside className="bg-paper col-span-1 rounded">
            </aside>

          </div>

          {/* Footer */}
          <footer className="grid grid-cols-6 gap-1.5">
            {/* Column 1: */}
            <div className="bg-paper col-span-3 rounded">
            </div>

            {/* Column 2 */}
            <div className="bg-paper col-span-3 rounded">
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
