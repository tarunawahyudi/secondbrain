"use client";

import {useScrollTop} from "@/hooks/use-scroll-top";
import {cn} from "@/lib/utils";
import {Logo} from "./logo";
import {ModeToggle} from "@/components/mode-toggle";
import {useConvexAuth} from "convex/react";
import {SignInButton, UserButton} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/spinner";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    const { isAuthenticated, isLoading} = useConvexAuth();
    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Log In
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size="sm" className="hidden md:block">
                                Get Secondbrain Free
                            </Button>
                        </SignInButton>
                        <Link href="/" className="flex md:hidden items-center gap-x-2">
                            <Image
                              src="/logo.svg"
                              height="40"
                              width="40"
                              alt="Logo"
                              className="dark:hidden"
                            />
                            <Image
                              src="/logo-dark.svg"
                              height="40"
                              width="40"
                              alt="Logo"
                              className="hidden dark:block"
                            />
                            <p className={cn("font-semibold")}>
                                Secondbrain
                            </p>
                        </Link>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant="ghost" size="sm">
                            <Link href="/documents">
                                Enter Secondbrain
                            </Link>
                        </Button>
                        <UserButton afterSignOutUrl="/">

                        </UserButton>
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}
