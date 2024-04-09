import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
    key: number;
    id: number;
    title: string;
    imageSrc: string;
    onClick: (id: number) => void;
    disabled: false;
    active: boolean;
}

export function CourseCard({id, onClick, key, title, imageSrc, disabled, active}: CourseCardProps) {
    return (
        <div onClick={() => onClick(id)}
        className={cn(`h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer
            active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-52 min-w-50`,
            disabled && "pointer-events-auto opacity-50")}
        >
            <div className="w-full flex items-center justify-end min-w-6">
                {active && (
                    <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
                        <Check className="text-white stroke-[4] h-4 w-4" />
                    </div>
                )}
            </div>
            <Image src={imageSrc} alt={title} height={70} width={94}
                   className="rounded-lg drop-shadow-md border object-cover"/>
            <p className="text-neutral-700 text-center font-bold mt-3">
                {title}
            </p>
        </div>
    )
}