import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import getUserFromSession from "@/lib/sessions";
import Navbar from "./components/Navbar";
import ModalProvider from "../context/ModalContext";
import { redirect } from "next/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NewAItes",
  description: "New Age AI innovations",
};

export default async function RootLayout({ children }) {
  const user = await getUserFromSession()


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          <Navbar user={user} />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
