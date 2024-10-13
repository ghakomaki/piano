"use client";

import Link from "next/link";
// import LocaleSwitcher from "./localeSwitcher";
import { Button } from "./button";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
};

export default function Header({ children }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <header className="relative z-20 bg-black bg-opacity-50 backdrop-blur-md ">
            <div className="container px-3 py-1 mx-auto flex justify-between items-center">

                <Link href="/" className="text-2xl font-bold h-[50px] items-center flex">
                    <Image src="/images/logo.png" alt="Logo" className="top-[50px]" width={75} height={75} />
                </Link>
                <nav className="hidden md:flex space-x-4 items-center">
                    <Link href="#biography" className="hover:text-primary-400 transition-colors">
                        Biography
                    </Link>
                    <Link href="#music" className="hover:text-primary-400 transition-colors">
                        Music
                    </Link>
                    <Link href="#contact" className="hover:text-primary-400 transition-colors">
                        Contact
                    </Link>
                    {children}
                </nav>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md py-3">
                    <nav className="flex flex-col items-center space-y-4">
                        <Link href="#about" className="hover:text-primary-400 transition-colors" >
                            About
                        </Link>
                        <Link href="#music" className="hover:text-primary-400 transition-colors">
                            Music
                        </Link>
                        <Link href="#contact" className="hover:text-primary-400 transition-colors" >
                            Contact
                        </Link>
                        {children}
                    </nav>
                </div>
            )}
        </header>
    );
};