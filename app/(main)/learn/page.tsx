import { StickyWrapper } from "@/components/StickyWrapper";
import { FeedWrapper } from "@/components/FeedWrapper";
import { LearnHeader } from "@/app/(main)/learn/LearnHeader";
import { UserProgress } from "@/components/UserProgress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "@/app/(main)/learn/Unit";

export default async function LearnPage() {

    const userProgressPromise = getUserProgress();
    const unitsPromise = getUnits();
    const courseProgressPromise = getCourseProgress();
    const lessonPercentagePromise = getLessonPercentage();

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage,
    ] = await Promise.all([
        userProgressPromise,
        unitsPromise,
        courseProgressPromise,
        lessonPercentagePromise,
    ]);

    if (!userProgress || !userProgress.activeCourse || !courseProgress) {
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
                <LearnHeader title={userProgress.activeCourse.title}/>
                {units.map(unit => (
                    <div key={unit.id} className="mb-10">
                        <Unit {...unit} activeLesson={courseProgress.activeLesson} activeLessonPercentage={lessonPercentage}/>
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}