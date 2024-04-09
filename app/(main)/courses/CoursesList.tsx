"use client"

import { courses, userProgress } from "@/db/schema";
import { CourseCard } from "@/app/(main)/courses/Card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/userProgress";
import { toast } from "sonner";

interface CoursesListProps {
    courses: typeof courses.$inferSelect[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
}

export function CoursesList({courses, activeCourseId}: CoursesListProps) {

    const router = useRouter();
    const [pending, startTransition] = useTransition();

    function onClick(id: number) {
        if (pending) return;

        if (id === activeCourseId) {
            return router.push("/learn");
        }

        startTransition(() => {
            upsertUserProgress(id).catch(() => toast.error("Something went wrong"));
        })
    }

    return (
        <div className="pt-6 grid grid-cols-2 gap-y-4 gap-x-3 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
            {courses.map(course => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={() => onClick(course.id)}
                    disabled={pending}
                    active={course.id === activeCourseId}
                />

            ))}
        </div>
    );
}