import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const font = Nunito({ subsets: [ "latin" ] });

export const metadata: Metadata = {
    title: "Duolingo Clone",
    description: "Clone of duolingo",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={font.className}>
            {children}
            <Toaster/>
            </body>
            </html>
        </ClerkProvider>
    );
}
