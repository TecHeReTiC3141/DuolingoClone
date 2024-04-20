import { lessons, units } from "@/db/schema";
import { UnitBanner } from "@/app/(main)/learn/UnitBanner";
import { LessonButton } from "@/app/(main)/learn/LessonButton";

interface UnitProps {
    id: number;
    order: number;
    title: string;
    description: string;

    lessons: (typeof lessons.$inferSelect & {
        completed: boolean;
    })[];
    activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
    } | undefined;
    activeLessonPercentage: number;
};

export function Unit({id, order, title, description, lessons, activeLesson, activeLessonPercentage}: UnitProps) {
    return (
        <>
            <UnitBanner title={title} description={description} />
            <div className="flex items-center flex-col relative">
                {
                    lessons.map((lesson, index) => {
                        const isCurrent = true || lesson.id === activeLesson?.id;
                        const isLocked = !lesson.completed && !isCurrent;
                        return <LessonButton

                            key={lesson.id}
                            id={lesson.id}
                            index={index}
                            totalCount={lessons.length - 1}
                            current={isCurrent}
                            locked={isLocked}
                            percentage={activeLessonPercentage}
                        />;
                    })
                }
            </div>
        </>
    );
}