
import { useEffect, useState } from "react";


function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const links = [
        { href: "#home", label: "Home" },
        { href: "#our-work", label: "Work" },
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed inset-x-0 top-0 w-full bg-gray-950/70 backdrop-blur-md border-b border-gray-800 z-50">
            <div className="pg-container">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <a href="#home" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            Prince<span className="text-orange-500">Graphics</span>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((l) => (
                            <a key={l.href} href={l.href} className="text-gray-300 hover:text-white transition-colors">
                                {l.label}
                            </a>
                        ))}
                        <a href="#contact" className="pg-btn-primary px-4 py-2">
                            Request a Quote
                        </a>
                    </div>

                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-800 bg-gray-900/60 px-3 py-2 text-gray-200 hover:bg-gray-900 transition-colors"
                        aria-label="Open menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className="text-sm font-semibold">Menu</span>
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={[
                        "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
                        open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
                    ].join(" ")}
                >
                    <div className="pb-4 pt-2">
                        <div className="grid gap-2 rounded-2xl border border-gray-800 bg-gray-900/50 p-3">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    className="rounded-xl px-3 py-2 text-gray-200 hover:bg-gray-900 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="pg-btn-primary px-4 py-2.5"
                                onClick={() => setOpen(false)}
                            >
                                Request a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
