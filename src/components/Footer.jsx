const exploreLinks = [
    { label: "Beranda", href: "#top" },
    { label: "Karya", href: "#karya" },
    { label: "Tentang", href: "#tentang" },
    { label: "Kontak", href: "#kontak" },
];

const elseLinks = [
    { label: "Email", href: "mailto:halo@isha.art" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Vimeo", href: "https://vimeo.com/" },
    { label: "Behance", href: "https://behance.net/" },
];

const legalLinks = [
    { label: "Syarat Penggunaan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
];

const socials = [
    {
        label: "Instagram",
        href: "https://instagram.com/",
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
        label: "Vimeo",
        href: "https://vimeo.com/",
        path: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.06 315.06 0 003.501-3.128C5.08 2.505 6.32 1.997 7.205 1.96c1.65-.176 2.668.972 3.053 3.44.414 2.659.703 4.312.866 4.958.48 2.083 1.008 3.124 1.587 3.124.45 0 1.123-.707 2.022-2.124.9-1.418 1.383-2.498 1.447-3.245.129-1.223-.353-1.836-1.446-1.836-.515 0-1.046.118-1.594.352 1.059-3.468 3.082-5.151 6.068-5.051 2.216.071 3.263 1.505 3.139 4.296z" />
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
        label: "Behance",
        href: "https://behance.net/",
        path: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M11.566 6.862c.968 0 1.845.077 2.635.229l.208.043v-1.35h4.118c.34.003.565.041.565.212 0 2.09.01 4.18.02 6.27.02.987-1.053 1.679-2.065 1.7-.873.017-2.98.003-2.98.003v-1.596s2.596-.045 2.685-.71c.03-.3.002-1.029.002-1.14h-1.992v.984c0 .324-.224.422-.69.422h-.364v-5.953c.02-.037.06-.064.102-.137-1.91-1.645-3.63-1.438-5.346-.414l-.35.34c-.392-.933-.738-1.568-2.601-1.384l-3.305 1.022v1.534l3.423-.4v6.55l-3.423.4v1.534l6.977-2.157c1.344-.523 2.568-1.28 3.642-2.36.364.67.53 1.336.503 2.013-.022.582-.168 1.027-.434 1.33.789.478 1.778.6 2.845.425 3.05-.498 4.26-2.363 4.23-4.317-.038-3.06-.009-6.12-.018-9.18-.002-.223-.186-.44-.447-.44h-3.778v.022l-3.239-1.761c-1.326-.72-2.784-.528-4.107-.264l-.3.05 2.68 1.44c.154.083.265.252.254.43" />
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

                <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
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

                    <p className="font-sans text-xs text-muted">
                        © {new Date().getFullYear()} ISHA. Seluruh karya
                        dilindungi hak cipta.
                    </p>
                </div>
            </div>
        </footer>
    );
}
