import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Karya", href: "#karya" },
    { label: "Tentang", href: "#tentang" },
    { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
                scrolled || open
                    ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            }`}>
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
                <a
                    href="#top"
                    onClick={() => setOpen(false)}
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

                <div className="flex items-center gap-3">
                    <a
                        href="#kontak"
                        className="btn-alive hidden md:inline-block font-sans text-sm font-medium bg-violet text-ink px-4 py-1.5 rounded-full hover:bg-paper transition-colors duration-300">
                        Hubungi
                    </a>

                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Tutup menu" : "Buka menu"}
                        aria-expanded={open}
                        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-paper bg-white/10 border border-white/10 hover:bg-white/20 transition-colors duration-300">
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            <div
                className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
                    open ? "max-h-96" : "max-h-0"
                }`}>
                <ul className="px-6 pb-6 space-y-1">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block font-display text-2xl text-paper/90 hover:text-violet py-2 transition-colors duration-300">
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="pt-4">
                        <a
                            href="#kontak"
                            onClick={() => setOpen(false)}
                            className="btn-alive inline-block font-sans text-sm font-medium bg-violet text-ink px-6 py-3 rounded-full hover:bg-paper transition-colors duration-300">
                            Hubungi
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}