import { StickyWrapper } from "@/components/StickyWrapper";
import { FeedWrapper } from "@/components/FeedWrapper";
import { LearnHeader } from "@/app/(main)/learn/LearnHeader";
import { UserProgress } from "@/components/UserProgress";

export default function LearnPage() {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={{title: "Spanish", imageSrc: "/flags/es.svg"}}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={true}
                />
            </StickyWrapper>
            <FeedWrapper>
                <LearnHeader title="Spanish" />
                <div className="h-56 mb-4 w-full bg-blue-500" />
                <div className="h-56 pb-4 w-full bg-blue-500" />
                <div className="h-56 pb-4 w-full bg-blue-500" />
                <div className="h-56 pb-4 w-full bg-blue-500" />
                <div className="h-56 pb-4 w-full bg-blue-500" />
                <div className="h-56 pb-4 w-full bg-blue-500" />
                <div className="h-56 pb-4 w-full bg-blue-500" />
            </FeedWrapper>
        </div>
    )
}