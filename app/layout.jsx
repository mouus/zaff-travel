import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata for better search engine indexing
export const metadata = {
  title: "Fuvahmulah Dive - Maldives Dive Adventures",
  description:
    "Experience the ultimate diving adventure in Fuvahmulah and the Maldives. Explore vibrant coral reefs, encounter rich marine life, and embark on an unforgettable underwater journey.",
  keywords:
    "fuvahmulah dive, maldives dive, diving in fuvahmulah, maldives diving, underwater adventure, coral reefs, marine life, Cruise Republic",
  openGraph: {
    title: "Fuvahmulah Dive - Maldives Dive Adventures",
    description:
      "Experience the ultimate diving adventure in Fuvahmulah and the Maldives. Explore vibrant coral reefs, encounter rich marine life, and embark on an unforgettable underwater journey.",
    url: "https://yourwebsite.com", // Replace with your actual website URL
    siteName: "Cruise Republic",
    images: [
      {
        url: "https://yourwebsite.com/path/to/your-image.jpg", // Replace with your actual image URL
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
    title: "Fuvahmulah Dive - Maldives Dive Adventures",
    description:
      "Experience the ultimate diving adventure in Fuvahmulah and the Maldives.",
    images: ["https://yourwebsite.com/path/to/your-image.jpg"], // Replace with your actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
