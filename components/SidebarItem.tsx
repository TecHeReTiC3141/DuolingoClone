"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SidebarItemProps {
    label: string;
    iconSrc: string;
    href: string;
}

export function SidebarItem({ label, iconSrc, href }: SidebarItemProps) {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Button variant={isActive ? "sidebarOutline" : "sidebar"} className="justify-start h-14" asChild>
            <Link href={href}>
                <Image src={iconSrc} alt={label}  className="mr-5" height={32} width={32} />
                {label}
            </Link>
        </Button>
    )
}