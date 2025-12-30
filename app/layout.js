
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
  metadataBase: new URL('https://gymnation.vercel.app'), // Placeholder, replace with actual domain if known
  title: {
    default: "Gymnation | Winter Arc Challenge",
    template: "%s | Gymnation"
  },
  description: "Join Gym Nation's Winter Arc Challenge - the flagship hybrid fitness event celebrating its third anniversary. A high-intensity competition combining powerlifting and circuit training. Test your strength, endurance, and discipline.",
  keywords: ["Gymnation", "Winter Arc Challenge", "Fitness Race", "Hyrox", "Powerlifting", "Circuit Training", "Gym Event", "Fitness Competition"],
  authors: [{ name: "Gymnation" }],
  openGraph: {
    title: "Gymnation | Winter Arc Challenge",
    description: "Join Gym Nation's Winter Arc Challenge. A high-intensity hybrid fitness event combining powerlifting and circuit training.",
    url: 'https://gymnation.vercel.app',
    siteName: 'Gymnation',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gym Nation | Winter Arc Challenge",
    description: "The ultimate test of strength and endurance. Join the Winter Arc Challenge.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
