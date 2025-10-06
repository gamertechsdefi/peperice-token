
import { Gaegu } from "next/font/google";
import { McLaren } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "PepeRice",
  description: "EAT DIFFERENT",
};

const gaegu = Gaegu ({
  variable: "--font-gaegu",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mclaren = McLaren ({
  variable: "--font-mclaren",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gaegu.variable} ${mclaren.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
