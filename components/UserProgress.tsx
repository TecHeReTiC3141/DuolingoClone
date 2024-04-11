import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses, userProgress } from "@/db/schema";

interface UserProgressProps {
    activeCourse: typeof courses.$inferSelect;
    hearts: typeof userProgress.$inferSelect.hearts;
    points: typeof userProgress.$inferSelect.points;
    hasActiveSubscription: boolean;
}

export function UserProgress({activeCourse, hearts, points, hasActiveSubscription}: UserProgressProps) {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} className="rounded-md border" width={32} height={32}/>
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/points.svg" alt="Points" height={28} width={28} className="mr-2" />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image src="/heart.svg" alt="Hearts" height={28} width={28} className="mr-2" />
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts}
                </Button>
            </Link>
        </div>
    )
}