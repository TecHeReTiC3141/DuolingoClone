import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import LoaderSpinner from "@/components/LoaderSpinner";
import Link from "next/link";

export default function HomePage() {
    return (
        <div
            className="max-w-988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
            <div className="relative w-[240px] h-[240px] lg:w-[420px] lg:h-[420px] mb-8 lg:mb-0">
                <Image src="/hero.svg" fill alt="Hero"/>
            </div>
            <div className="flex flex-col items-center gap-y-8">
                <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 text-center max-w-[480px]">
                    Learn, practice and master new languages with Lingo.
                </h1>
                <div className="max-w-[20rem] w-full flex flex-col items-center gap-y-3">
                    <ClerkLoading>
                        <LoaderSpinner/>
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedOut>
                            <SignUpButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                                <Button size="lg" variant="secondary" className="w-full">
                                    Get Started
                                </Button>
                            </SignUpButton>
                            <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                                <Button size="lg" variant="primaryOutline" className="w-full">
                                    I already have an account
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <Button size="lg" variant="secondary" className="w-full" asChild>
                                <Link href="/learn">
                                    Continue learning
                                </Link>
                            </Button>
                        </SignedIn>
                    </ClerkLoaded>
                </div>
            </div>
        </div>
    );
}
