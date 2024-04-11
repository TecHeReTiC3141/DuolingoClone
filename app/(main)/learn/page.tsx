import { StickyWrapper } from "@/components/StickyWrapper";
import { FeedWrapper } from "@/components/FeedWrapper";
import { LearnHeader } from "@/app/(main)/learn/LearnHeader";
import { UserProgress } from "@/components/UserProgress";
import { getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

export default async  function LearnPage() {

    const userProgressPromise = getUserProgress();
    const unitsPromise = getUnits();

    const [
        userProgress,
        units
    ] = await Promise.all([
        userProgressPromise,
        unitsPromise,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={true}
                />
            </StickyWrapper>
            <FeedWrapper>
                <LearnHeader title={userProgress.activeCourse.title} />
                {units.map(unit => (
                    <div key={unit.id} className="mb-10">
                        {JSON.stringify(unit)}
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}