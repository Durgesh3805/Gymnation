
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "HYROX | The World Series of Fitness Racing",
  description: "HYROX is the fitness race for Every Body. Compete, train, and find your race.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-black text-white`}
      >
        <SmoothScrolling>
            {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
