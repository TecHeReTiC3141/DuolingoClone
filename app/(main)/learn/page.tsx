import { StickyWrapper } from "@/components/StickyWrapper";
import { FeedWrapper } from "@/components/FeedWrapper";

export default function LearnPage() {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                Sticky wrapper
            </StickyWrapper>
            <FeedWrapper>
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
                <div className="bg-blue-500 h-56 w-full" />
            </FeedWrapper>
        </div>
    )
}