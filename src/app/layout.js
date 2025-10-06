
import { Gaegu } from "next/font/google";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gaegu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
