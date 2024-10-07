import Header from "@/component/header";
import { Inter, Marcellus_SC } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

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
  description:
    "Gilam Saray | gilam saray | GilamSaray | gilamsaray | Gilam Saray | Gilam Saray | Gilam Saray | Gilam Saray | Gilam Saray | Gilam Saray | Gilam Saray | Gilam Saray | Gilam Saray | Gilam Saray | Gilam Saray | Gilam Saray",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${marcellus.className} ${inter.variable}`}>
        <NextTopLoader
          color="#bd8e1f"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #bd8e1f,0 0 5px #bd8e1f"
          zIndex={1600}
          showAtBottom={false}
        />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
