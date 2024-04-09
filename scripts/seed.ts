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
    } catch (err) {
        console.log("Error while seeding: ", err);
        throw new Error("Failed to seed the database");
    }
};

main().then(() => console.log("Seeding finished"));