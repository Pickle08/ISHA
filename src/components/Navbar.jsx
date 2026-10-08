import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
    { label: "Karya", to: "/#karya" },
    { label: "Tentang", to: "/#tentang" },
    { label: "Kontak", to: "#kontak", anchor: true },
];

function NavLink({ link, className, onClick }) {
    return link.anchor ? (
        <a href={link.to} onClick={onClick} className={className}>
            {link.label}
        </a>
    ) : (
        <Link to={link.to} onClick={onClick} className={className}>
            {link.label}
        </Link>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
                scrolled || open
                    ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            }`}>
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
                <Link
                    to="/"
                    className="font-display text-5xl md:text-7xl leading-none text-paper hover:text-copper transition-colors duration-300">
                    ISHA
                </Link>

                <ul className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <li key={link.label}>
                            {link.to ? (
                                <Link
                                    to={link.to}
                                    className="font-sans text-sm text-paper/70 hover:text-paper transition-colors duration-300">
                                    {link.label}
                                </Link>
                            ) : (
                                <a
                                    href={link.href}
                                    className="font-sans text-sm text-paper/70 hover:text-paper transition-colors duration-300">
                                    {link.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>

                <a
                    href="#kontak"
                    className="hidden md:inline-block font-sans text-sm border border-copper/60 text-copper px-4 py-1.5 rounded-full hover:bg-copper hover:text-ink transition-colors duration-300">
                    Hubungi
                </a>

                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Buka menu"
                    className="md:hidden relative w-7 h-5 flex flex-col justify-between">
                    <span
                        className={`h-px w-full bg-paper transition-transform duration-300 ${
                            open ? "translate-y-[9px] rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`h-px w-full bg-paper transition-opacity duration-300 ${
                            open ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`h-px w-full bg-paper transition-transform duration-300 ${
                            open ? "-translate-y-[9px] -rotate-45" : ""
                        }`}
                    />
                </button>
            </nav>

            <div
                className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
                    open ? "max-h-64" : "max-h-0"
                }`}>
                <ul className="flex flex-col px-6 pb-6 gap-4">
                    {links.map((link) => (
                        <li key={link.label}>
                            <NavLink
                                link={link}
                                onClick={closeMenu}
                                className="font-sans text-base text-paper/80 hover:text-copper transition-colors duration-300"
                            />
                        </li>
                    ))}
                    <li>
                        <a
                            href="#kontak"
                            onClick={closeMenu}
                            className="inline-block font-sans text-sm border border-copper/60 text-copper px-4 py-1.5 rounded-full">
                            Hubungi
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
