import { Link } from "react-router-dom";

const exploreLinks = [
    { label: "Beranda", to: "/" },
    { label: "Karya", to: "/#karya" },
    { label: "Tentang", to: "/#tentang" },
    { label: "Kontak", href: "#kontak" },
];

const elseLinks = [
    { label: "Email", href: "mailto:halo@isha.art" },
    { label: "Instagram", href: "https://www.instagram.com/prima.h.n/" },
    { label: "Cosmos", href: "https://www.cosmos.so/ishaastudio" },
];

const legalLinks = [
    { label: "Syarat Penggunaan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
];

const socials = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/prima.h.n/",
        path: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                />
            </svg>
        ),
    },
    {
        label: "X",
        href: "https://x.com/",
        path: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.244 2H21.5l-7.14 8.16L22.5 22h-6.51l-5.1-6.67L5.08 22H1.81l7.62-8.71L1.5 2h6.66l4.62 6.11L18.244 2Zm-1.12 18h1.7L7.06 3.74H5.25L17.124 20Z" />
            </svg>
        ),
    },
    {
        label: "Cosmos",
        href: "https://www.cosmos.so/ishaastudio",
        path: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5">
                <circle cx="12" cy="12" r="9" />
                <circle
                    cx="12"
                    cy="12"
                    r="3.5"
                    fill="currentColor"
                    stroke="none"
                />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer
            id="kontak"
            className="border-t border-white/10 bg-ink text-paper">
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
                <div className="flex flex-col md:flex-row md:justify-between gap-14">
                    <a
                        href="#top"
                        className="font-display text-5xl md:text-7xl leading-none text-paper hover:text-violet transition-colors duration-300">
                        ISHA
                    </a>

                    <div className="flex gap-16">
                        {[exploreLinks, elseLinks].map((links, g) => (
                            <ul key={g} className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="font-sans text-sm text-paper/70 hover:text-paper transition-colors duration-300">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>

                    <ul className="flex md:flex-col gap-5">
                        {socials.map((s) => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={s.label}
                                    className="inline-block text-paper/70 hover:text-violet transition-colors duration-300">
                                    {s.path}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <ul className="flex gap-6">
                        {legalLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="font-sans text-xs text-paper/50 hover:text-paper transition-colors duration-300">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="font-sans text-xs text-muted md:absolute md:left-1/2 md:-translate-x-1/2">
                        © {new Date().getFullYear()} ISHA. Seluruh karya
                        dilindungi hak cipta.
                    </p>

                    <p className="font-sans text-xs text-muted">
                        Developed by{" "}
                        <span className="text-paper/60">codex.project</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
