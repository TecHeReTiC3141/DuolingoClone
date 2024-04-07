import { Sidebar } from "@/components/Sidebar";
import { MobileHeader } from "@/components/MobileHeader";

interface MainLayoutInterface {
    children: React.ReactNode,
}

export default function MainLayout({ children }: MainLayoutInterface) {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex"/>
            <main className="lg:pl-[16rem] h-full max-lg:pt-12">
                <div className="bg-red-500 h-full">

                {children}
                </div>
            </main>
        </>
    );
}