import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";

interface UnitBannerProps {
    title: string;
    description: string;
}

export function UnitBanner({ title, description }: UnitBannerProps) {
    return (
        <div
            className="w-full rounded-xl bg-green-500 p-5 text-white flex md:flex-row lg:flex-col xl:flex-row items-center justify-between">
            <div className="space-y-2.5">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-lg">{description}</p>
            </div>
            <Button size="lg" variant="secondary" className="hidden lg:flex md:mt-2" asChild>
                <Link href="/lesson">
                    <NotebookText className="mr-2"/>
                    Continue
                </Link>
            </Button>
        </div>
    )
}