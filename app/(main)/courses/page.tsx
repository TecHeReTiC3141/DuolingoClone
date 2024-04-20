import { getCourseProgress, getCourses, getLesson, getLessonPercentage, getUserProgress } from "@/db/queries";
import { CoursesList } from "@/app/(main)/courses/CoursesList";
import { redirect } from "next/navigation";

export default async function CoursesPage() {

    const [courses, userProgress] = await Promise.all([
        getCourses(),
        getUserProgress(),

    ]);

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Language Courses
            </h1>
            <CoursesList courses={courses} activeCourseId={userProgress?.activeCourseId} />
        </div>
    );
}