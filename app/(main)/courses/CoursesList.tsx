"use client"

import { courses, userProgress } from "@/db/schema";
import { CourseCard } from "@/app/(main)/courses/Card";

interface CoursesListProps {
    courses: typeof courses.$inferSelect[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
}

export function CoursesList({courses, activeCourseId}: CoursesListProps) {
    return (
        <div className="pt-6 grid grid-cols-2 gap-y-4 gap-x-3 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
            {courses.map(course => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={() => {}}
                    disabled={false}
                    active={course.id === activeCourseId}
                />

            ))}
        </div>
    );
}