import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-2 md:px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16 pt-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="Dentora Logo"
            width={32}
            height={32}
            className="w-11"
          />
          <span className="font-semibold text-lg">Dentora</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how_it_works"
            className="text-muted-foreground hover:text-foreground"
          >
            How it Works
          </a>

          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </a>

          <a
            href="#pricing"
            className="text-muted-foreground hover:text-foreground"
          >
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button
              className="border border-white/80 md:border-0 rounded-lg"
              variant={"ghost"}
              size={"sm"}
            >
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size={"sm"}>Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;
