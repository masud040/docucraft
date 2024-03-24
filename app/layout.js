import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingPage from "@/components/LoadingPage";
import { getDocuments } from "@/lib/doc";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docucraft - A Documentation Site by Protocol",
  description: "A Documentation Site by Protocol",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full lg:ml-72 xl:ml-80">
          <Suspense fallback={<LoadingPage />}>
            <Header docs={allDocuments} />
            <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
              <main className="flex-auto py-12">
                <div className="absolute inset-0 mx-0 overflow-hidden -z-10 max-w-none">
                  <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
                  </div>
                </div>
                {children}
              </main>

              <Footer />
            </div>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
