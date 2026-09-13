import { useEffect, useState } from "react";

const links = [
    { label: "Karya", href: "#karya" },
    { label: "Tentang", href: "#tentang" },
    { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
                scrolled
                    ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            }`}>
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
                <a
                    href="#top"
                    className="font-display text-xl tracking-wide text-paper">
                    ISHA
                </a>

                <ul className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="font-sans text-sm text-paper/80 hover:text-violet transition-colors duration-300">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#kontak"
                    className="btn-alive hidden md:inline-block font-sans text-sm font-medium bg-violet text-ink px-4 py-1.5 rounded-full hover:bg-paper transition-colors duration-300">
                    Hubungi
                </a>
            </nav>
        </header>
    );
}
