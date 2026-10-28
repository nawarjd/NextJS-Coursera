import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/header/mode-toggle";
import {EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w xs gap-1">
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
      </nav>
      <nav className="md:hidden">
        <Sheet>
            <SheetTrigger><EllipsisVertical/></SheetTrigger>
            <SheetContent className="flex flex-col items-start p-4">
                <SheetTitle>Menu</SheetTitle>
                <ModeToggle/>
                <Button render={<Link href="/cart"/>} nativeButton={false} variant="ghost" size="default">
                    <ShoppingCart/> Cart
                </Button>
                <Button render={<Link href="/sign-in"/>} nativeButton={false} variant="default" size="default">
                    <UserIcon/> Sign In
                </Button>
                <SheetDescription></SheetDescription>
            </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
