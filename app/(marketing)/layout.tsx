import { Header } from "@/app/(marketing)/Header";
import { Footer } from "@/app/(marketing)/Footer";

interface MarketingLayoutProps {
    children: React.ReactNode,
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center">
                {children}
            </main>
            <Footer />
        </div>
    )
}