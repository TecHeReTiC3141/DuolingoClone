import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "@/components/SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import LoaderSpinner from "@/components/LoaderSpinner";

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    return (
        <div className={cn(className, "h-full lg:w-[16rem] lg:fixed top-0 left-0 border-r-2 px-4 flex-col")}>
            <Link href="/learn">
                <div className="pt-8 pl-6 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.svg" height={40} width={40} alt="Maskot Logo"/>
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg"/>
                <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg"/>
                <SidebarItem label="quests" href="/quests" iconSrc="/quests.svg"/>
                <SidebarItem label="shop" href="/shop" iconSrc="/shop.svg"/>
            </div>
            <div className="max-lg:absolute max-lg:bottom-0 max-lg:left-4 p-4">
                <ClerkLoading>
                    <LoaderSpinner />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/"/>
                </ClerkLoaded>
            </div>
        </div>
    )
}