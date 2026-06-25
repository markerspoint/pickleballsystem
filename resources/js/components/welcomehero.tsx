import { Play } from 'lucide-react';
import { useState } from 'react';

export function WelcomeHero() {
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

    const hotspots = [
        {
            id: 1,
            title: 'Carbon Fiber Face',
            desc: 'Premium T700 raw carbon fiber for maximum spin and precise ball control.',
            x: '76%',
            y: '22%',
        },
        {
            id: 2,
            title: '16mm Honeycomb Core',
            desc: 'Polypropylene honeycomb core offers quiet power and a massive sweet spot.',
            x: '50%',
            y: '35%',
        },
        {
            id: 3,
            title: 'Tournament Approved',
            desc: 'Fully approved by USA Pickleball for competitive club and league play.',
            x: '48%',
            y: '55%',
        },
        {
            id: 4,
            title: 'Ergonomic Grip',
            desc: 'Ribbed, sweat-wicking grip designed for comfort during long rallies.',
            x: '34%',
            y: '80%',
        },
    ];

    return (
        <section className="relative w-full overflow-hidden px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-16 lg:px-8">
            <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-16 lg:flex-row lg:items-stretch">
                {/* Left Side: Product Image & Hotspots */}
                <div className="relative z-10 flex w-full flex-1 items-center justify-center">
                    <div className="animate-float relative -mt-12 flex aspect-[1/2] w-full max-w-[420px] items-center justify-center md:-mt-20">
                        <img
                            src="/img/asset/pickleball.png"
                            alt="Rallix Pickleball Paddle"
                            className="pointer-events-none h-full max-h-[580px] object-contain drop-shadow-[0_20px_50px_rgba(0,102,255,0.25)] select-none"
                        />

                        {/* Hotspots */}
                        {hotspots.map((h) => (
                            <div
                                key={h.id}
                                className="absolute"
                                style={{ top: h.y, left: h.x }}
                                onMouseEnter={() => setActiveHotspot(h.id)}
                                onMouseLeave={() => setActiveHotspot(null)}
                            >
                                <div className="relative flex items-center justify-center">
                                    {/* Hotspot Pulse Ring */}
                                    <span className="absolute h-10 w-10 scale-125 animate-ping rounded-full bg-rallix-lime/30" />

                                    {/* Hotspot Button */}
                                    <button className="relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-rallix-lime bg-rallix-lime text-xs font-black text-rallix-navy shadow-lg shadow-rallix-lime/25 transition-transform hover:scale-110 active:scale-95">
                                        +
                                    </button>

                                    {/* Tooltip */}
                                    {activeHotspot === h.id && (
                                        <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-48 -translate-x-1/2 rounded-xl border border-rallix-lime/30 bg-[#1F2937]/95 p-3 text-left text-xs text-white shadow-2xl backdrop-blur-sm transition-all">
                                            <h4 className="mb-0.5 font-bold text-rallix-lime">
                                                {h.title}
                                            </h4>
                                            <p className="text-[10px] leading-normal text-slate-300">
                                                {h.desc}
                                            </p>
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#1F2937]/95" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="z-10 -mt-36 flex flex-1 flex-col justify-center gap-8 text-center lg:max-w-lg lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl leading-none font-black tracking-tight text-white uppercase sm:text-5xl lg:leading-[1.1]">
                            Smart Systems <br />
                            <span className="text-rallix-lime">
                                For Pickleball
                            </span>
                        </h1>
                        <p className="mx-auto max-w-sm text-sm leading-relaxed font-normal text-slate-300 lg:mx-0">
                            Elevate your club play. Experience automated court
                            scheduling, smart scoreboard displays, and instant
                            digital skill ratings.
                        </p>
                    </div>

                    {/* Feature Checklist */}
                    <div className="my-4 space-y-3.5">
                        <div className="flex items-start gap-3 text-left">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-rallix-lime/20 bg-rallix-lime/10 text-rallix-lime">
                                <svg
                                    className="h-3 w-3"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold tracking-wider text-white uppercase">
                                    Automated Court Bookings
                                </h4>
                                <p className="mt-0.5 text-[11px] text-slate-400">
                                    Reservations, player matching, and
                                    split-payment billing simplified.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 text-left">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-rallix-blue/20 bg-rallix-blue/10 text-rallix-blue">
                                <svg
                                    className="h-3 w-3"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold tracking-wider text-white uppercase">
                                    Lobby Scoreboard Sync
                                </h4>
                                <p className="mt-0.5 text-[11px] text-slate-400">
                                    Cast active match scores and court occupancy
                                    straight to arena screens.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 text-left">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-rallix-lime/20 bg-rallix-lime/10 text-rallix-lime">
                                <svg
                                    className="h-3 w-3"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold tracking-wider text-white uppercase">
                                    Smart Skill Ratings
                                </h4>
                                <p className="mt-0.5 text-[11px] text-slate-400">
                                    Track matches, run club ladders, and
                                    auto-calculate player DUPR standings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Double CTA Buttons */}
                    <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                        <a
                            href="#booking-showcase"
                            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-rallix-lime px-8 py-3.5 text-sm font-bold tracking-wide text-rallix-navy shadow-lg shadow-rallix-lime/20 transition-all hover:scale-[1.02] hover:bg-rallix-lime/90 active:scale-[0.98]"
                        >
                            Book a Demo
                        </a>
                        <a
                            href="#features"
                            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-700/60 bg-rallix-navy/40 px-8 py-3.5 text-sm font-bold tracking-wide text-slate-200 transition-all hover:scale-[1.02] hover:border-rallix-lime/50 hover:bg-rallix-navy/60 active:scale-[0.98]"
                        >
                            Find a Club
                        </a>
                    </div>

                    {/* Social proof trust badge */}
                    <p className="text-[10px] font-medium text-slate-500">
                        Trusted by 100+ premium pickleball arenas nationwide.
                    </p>
                </div>
            </div>
        </section>
    );
}
