import { Button } from "@/components/ui/button";
import Image from "next/image";

interface FlagButton {
    src: string;
    name: string;
}

export function Footer() {

    const flags: FlagButton[] = [
        {
            src: "/Russia.svg",
            name: "Russian",
        },
        {
            src: "/es.svg",
            name: "Spanish",
        },
        {
            src: "/England.svg",
            name: "English",
        },
        {
            src: "/fr.svg",
            name: "French",
        },
        {
            src: "/it.svg",
            name: "Italian",
        },
        {
            src: "/jp.svg",
            name: "Japanese",
        },
        {
            src: "/Germany.svg",
            name: "German",
        },
    ];
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                {
                    flags.map(({src, name}) => (
                        <Button size="lg" variant="ghost" className="w-full">
                            <Image src={`/flags/${src}`} alt={name} height={32} width={40} className="rounded-md mr-4"/>
                            {name}
                        </Button>
                    ))
                }
            </div>
        </footer>
    )
}