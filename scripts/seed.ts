import "dotenv/config"
import {drizzle} from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";

import * as schema from "@/db/schema";


const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/flags/es.svg",
            },
            {
                id: 2,
                title: "Russian",
                imageSrc: "/flags/Russia.svg",
            },
            {
                id: 3,
                title: "French",
                imageSrc: "/flags/fr.svg",
            },
            {
                id: 4,
                title: "Germany",
                imageSrc: "/flags/Germany.svg",
            },
            {
                id: 5,
                title: "English",
                imageSrc: "/flags/England.svg",
            },
            {
                id: 6,
                title: "Italian",
                imageSrc: "/flags/it.svg",
            },
            {
                id: 7,
                title: "Japanese",
                imageSrc: "/flags/jp.svg",
            },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Spanish",
                order: 1,
            },
            {
                id: 2,
                courseId: 1,
                title: "Unit 2",
                description: "Basic grammar and articles",
                order: 2,
            },
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Verbs",
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Nouns",
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Adverbs",
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Adverbs",
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Adverbs",
            },
            {
                id: 6,
                unitId: 1,
                order: 6,
                title: "Adverbs",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                question: 'What of these  is "the man"?',
                order: 1,
            },
            {
                id: 2,
                lessonId: 1,
                type: "ASSIST",
                question: 'What of these  is "the woman"?',
                order: 2,
            },
            {
                id: 3,
                lessonId: 2,
                type: "SELECT",
                question: "What is apple?",
                order: 1,
            },
            {
                id: 4,
                lessonId: 2,
                type: "ASSIST",
                question: "What is apple?",
                order: 2,
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imageSrc: "/man.svg",
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                id: 2,
                challengeId: 1,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {
                id: 3,
                challengeId: 1,
                imageSrc: "/robot.svg",
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3",
            },
        ])

    } catch (err) {
        console.log("Error while seeding: ", err);
        throw new Error("Failed to seed the database");
    }
};

main().then(() => console.log("Seeding finished"));