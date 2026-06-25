import { Menu, X } from 'lucide-react';

interface WelcomeHeaderProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

export function WelcomeHeader({
    mobileMenuOpen,
    setMobileMenuOpen,
}: WelcomeHeaderProps) {
    return (
        <header className="fixed top-4 left-1/2 z-50 flex h-14 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 flex-col justify-center rounded-full border border-white/10 bg-rallix-navy/60 px-6 shadow-lg backdrop-blur-lg transition-all duration-300">
            <div className="flex w-full items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/img/rallix.png"
                        alt="Rallix Logo"
                        className="h-8 w-auto object-contain"
                    />
                </div>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden items-center gap-8 text-xs font-semibold text-slate-300 md:flex">
                    <a
                        href="#features"
                        className="transition-colors hover:text-rallix-lime"
                    >
                        Features
                    </a>
                    <a
                        href="#booking-showcase"
                        className="transition-colors hover:text-rallix-lime"
                    >
                        Court Booking
                    </a>
                    <a
                        href="#activity-stream"
                        className="transition-colors hover:text-rallix-lime"
                    >
                        Club Stream
                    </a>
                    <a
                        href="#about"
                        className="transition-colors hover:text-rallix-lime"
                    >
                        About Us
                    </a>
                </nav>

                {/* CTAs (Desktop) */}
                <div className="hidden items-center gap-4 md:flex">
                    <a
                        href="#"
                        className="text-xs font-medium text-slate-300 transition-colors hover:text-rallix-lime"
                    >
                        Log In
                    </a>
                    <a
                        href="#"
                        className="rounded-full bg-rallix-blue px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-rallix-blue/20 transition-all hover:scale-[1.02] hover:bg-rallix-blue/90 active:scale-[0.98]"
                    >
                        Join Rallix
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 text-slate-400 hover:text-white focus:outline-none md:hidden"
                >
                    {mobileMenuOpen ? (
                        <X className="h-5" />
                    ) : (
                        <Menu className="h-5" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-[calc(100%+0.5rem)] right-0 left-0 flex flex-col gap-4 rounded-2xl border border-white/10 bg-rallix-navy/95 px-6 py-6 shadow-2xl backdrop-blur-xl md:hidden">
                    <a
                        href="#features"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-medium text-slate-300 transition-colors hover:text-rallix-lime"
                    >
                        Features
                    </a>
                    <a
                        href="#booking-showcase"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-medium text-slate-300 transition-colors hover:text-rallix-lime"
                    >
                        Court Booking
                    </a>
                    <a
                        href="#activity-stream"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-medium text-slate-300 transition-colors hover:text-rallix-lime"
                    >
                        Club Stream
                    </a>
                    <a
                        href="#about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-medium text-slate-300 transition-colors hover:text-rallix-lime"
                    >
                        About Us
                    </a>
                    <div className="my-2 h-px bg-rallix-dark/40" />
                    <div className="flex flex-col gap-3">
                        <a
                            href="#"
                            className="rounded-lg border border-slate-700/60 py-2.5 text-center font-medium text-slate-300 hover:text-white"
                        >
                            Log In
                        </a>
                        <a
                            href="#"
                            className="rounded-lg bg-rallix-blue py-2.5 text-center font-semibold text-white shadow-lg shadow-rallix-blue/20 hover:bg-rallix-blue/90"
                        >
                            Join Rallix
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
