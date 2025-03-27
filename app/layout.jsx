import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cruise Republic | Maldives' Premier Floating Dive Center",
  description:
    "Explore the deep south of the Maldives, including Huvadhoo, Fuvahmulah, and Addu Atoll. Discover world-class dive sites, vibrant marine life, and thrilling encounters with apex predators. Book your adventure today!",
  icons: {
    icon: "/favicon.jpg",
  },
  keywords:
    "fuvahmulah dive, maldives dive, diving in fuvahmulah, maldives diving, underwater adventure, coral reefs, marine life, Cruise Republic",
  openGraph: {
    title: "Cruise Republic | Maldives' Premier Floating Dive Center",
    description:
      "Explore the deep south of the Maldives, including Huvadhoo, Fuvahmulah, and Addu Atoll. Discover world-class dive sites, vibrant marine life, and thrilling encounters with apex predators. Book your adventure today!",
    url: "http://www.cruiserepublicmaldives.com",
    siteName: "Cruise Republic",
    images: [
      {
        url: "http://www.cruiserepublicmaldives.com/boat-top.jpg",
        width: 1200,
        height: 630,
        alt: "Fuvahmulah Dive",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruise Republic | Maldives' Premier Floating Dive Center",
    description:
      "Explore the deep south of the Maldives, including Huvadhoo, Fuvahmulah, and Addu Atoll. Discover world-class dive sites, vibrant marine life, and thrilling encounters with apex predators. Book your adventure today!",
    images: ["http://www.cruiserepublicmaldives.com/boat-top.jpg"],
  },
};

export default function RootLayout({ children, ampMode = false }) {
  return (
    <html lang="en" amp={ampMode ? "" : undefined}>
      <head>
        {ampMode && (
          <script async src="https://cdn.ampproject.org/v0.js"></script>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      {!ampMode && <GoogleAnalytics gaId="G-XY3GP01QH6" />}
    </html>
  );
}
