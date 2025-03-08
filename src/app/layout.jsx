import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const geistSans = Playfair_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Playfair_Display({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kejari Sukoharjo",
  description:
    "Kejaksaan Negeri Sukoharjo adalah sebuah lembaga pemerintah yang melaksanakan kekuasaan negara di bidang penuntutan serta kewenangan lain berdasarkan Undang-Undang Republik Indonesia No. 16 tahun 2004 tentang Kejaksaan RI, yang memiliki wilayah hukum di wilayah Sukoharjo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
