import LoaderSpinner from "@/components/LoaderSpinner";

export default function Loading() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <LoaderSpinner />
        </div>
    )
}