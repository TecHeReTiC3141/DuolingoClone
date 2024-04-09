import { StickyWrapper } from "@/components/StickyWrapper";
import { FeedWrapper } from "@/components/FeedWrapper";
import { LearnHeader } from "@/app/(main)/learn/LearnHeader";
import { UserProgress } from "@/components/UserProgress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

export default async  function LearnPage() {

    const userProgressPromise = getUserProgress();

    const [
        userProgress
    ] = await Promise.all([
        userProgressPromise,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={true}
                />
            </StickyWrapper>
            <FeedWrapper>
                <LearnHeader title={userProgress.activeCourse.title} />
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