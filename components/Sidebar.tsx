import { cn } from "@/lib/utils";

interface SidebarProps {
    className?: string;
}

export function Sidebar({className}: SidebarProps) {
    return (
        <div className={cn(className, "bg-blue-500 h-full lg:w-[16rem] lg:fixed top-0 left-0 border-r-2 flex-col")}>
            Sidebar
        </div>
    )
}