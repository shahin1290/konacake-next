// import './globals.css'
// import Navbar from './components/Navbar'
// import MyProfilePic from './components/MyProfilePic'

// export const metadata = {
//   title: "Dave's Blog",
//   description: 'Created by Dave Gray',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="dark:bg-slate-800">
//         <Navbar />
//         <MyProfilePic />
//         {children}
//       </body>
//     </html>
//   )
// }


import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kona's Cake | Linköping",
  description: "Homemade fresh cake based on Linköping, Sweden",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
