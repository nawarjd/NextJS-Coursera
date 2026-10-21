import {ShoppingCart, UserIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";

const Header = () => {
    return ( 
    <header className="w-full border-b">
        <div className="wrapper flex-between">
            <div className="flex-start">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/logo.svg" alt={`${APP_NAME} Logo`} width={48} height={48} priority={true} />
                    <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
                </Link>
            </div>
            <div className="space-x-2">
                <ModeToggle />
                <Button
                    variant="ghost"
                    size="default"
                    nativeButton={false}
                    render={<Link href="/cart" />}
                >
                    <ShoppingCart /> Cart
                </Button>
                <Button
                    variant="default"
                    size="default"
                    nativeButton={false}
                    render={<Link href="/sign-in" />}
                >
                    <UserIcon /> Sign In
                </Button>
            </div>
        </div>
    </header> );
}
 
export default Header;