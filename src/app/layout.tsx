'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header, ModalAuth } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Provider from "./redux/provider";
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const notifyWarn = (mess: string) => toast.warn(mess);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ToastContainer />
          <ModalAuth notifyWarn={notifyWarn} />
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
