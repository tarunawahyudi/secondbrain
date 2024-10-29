import {Logo} from "./logo";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <Logo />
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
              <Link href="/about">
                <Button variant="ghost" size="sm">
                  About
                </Button>
              </Link>
              <Link href="/privacy-policy">
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>
              </Link>
              <Link href="/terms-and-conditions">
                <Button variant="ghost" size="sm">
                    Terms & Conditions
                </Button>
              </Link>
            </div>
        </div>
    )
}
