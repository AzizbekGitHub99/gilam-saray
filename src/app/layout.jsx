import Header from "@/component/header";
import { Inter, Marcellus_SC } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus_SC({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--marcellus",
});

const inter = Inter({
  weight: ["400"],
  style: "normal",
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gilam Saray",
  description: "Gilam Saray",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${marcellus.className} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
