import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
];

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <nav className={cn(
        "fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

<<<<<<< HEAD
    <div className="container flex items-center justify-between gap-8">
=======
    <div className="container flex items-center justify-between">
>>>>>>> fe36999b88ac93bf8d3b2dc91a98f2b1e590b2e4
        <a className="text-xl font-bold text-primary flex items-center" 
        href="#hero">
            <span className="relative z-10">
                <span className="text-glow text-foreground">Rahul's</span>{" "} 
                Portfolio
            </span>
        </a>

<<<<<<< HEAD
    {/* desktop nav + theme toggle */}
    <div className="hidden md:flex items-center gap-8">
        <div className="flex space-x-8">
            {navItems.map((item, key) => (
                <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    {item.name}
                </a>
            ))}
        </div>
        <div className="ml-4">
            {/* ThemeToggle will be rendered here if you want it in the navbar, otherwise remove this div */}
        </div>
=======
    {/* desktop nav */}
    
    <div className="hidden md:flex space-x-8">
        {navItems.map((item, key) => (
            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                {item.name}
            </a>
        ))}
>>>>>>> fe36999b88ac93bf8d3b2dc91a98f2b1e590b2e4
    </div>

    {/* mobile nav */}

    <button onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden p-2 text-foreground z-50"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        {" "}
    </button>

    <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
    <div className="flex flex-col space-y-8 text-xl">
        {navItems.map((item, key) => (
            <a 
            key={key} 
            href={item.href} 
<<<<<<< HEAD
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
            >
=======
            className="text-foreground/80 hover:text-primary transition-colors duration-300">
>>>>>>> fe36999b88ac93bf8d3b2dc91a98f2b1e590b2e4
                {item.name}
            </a>
        ))}
    </div>
    </div>
    </div>
    </nav>
    );
};