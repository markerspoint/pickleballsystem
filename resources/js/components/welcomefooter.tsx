export function WelcomeFooter() {
    return (
        <footer
            id="about"
            className="scroll-mt-24 border-t border-rallix-dark/40 bg-[#071D33] py-12 text-xs text-slate-400"
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-200">
                        Rallix
                    </span>
                    <span className="text-slate-600">|</span>
                    <span>Smart Systems for Pickleball</span>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="transition-colors hover:text-rallix-lime"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="transition-colors hover:text-rallix-lime"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        className="transition-colors hover:text-rallix-lime"
                    >
                        Support
                    </a>
                </div>

                <div>
                    &copy; {new Date().getFullYear()} Rallix. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
