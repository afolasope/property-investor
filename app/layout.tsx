import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Homely Realtor",
    description: "A modern real estate platform",
    generator: "Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
