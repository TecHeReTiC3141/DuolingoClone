import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="text-green-400">
            <h2>Home page</h2>
            <Button variant="destructive" size="sm">Buttons</Button>
        </div>
    );
}
