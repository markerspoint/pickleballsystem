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
        <section className="relative w-full overflow-hidden bg-rallix-navy px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-16 lg:px-8">
            <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row">
                {/* Large background text behind the paddle */}
                <div className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center select-none">
                    <div className="text-[12vw] leading-none font-black tracking-wider text-transparent uppercase opacity-40 [-webkit-text-stroke:1px_rgba(255,255,255,0.06)] lg:text-[10vw]">
                        RALLIX
                    </div>
                    <div className="mt-2 text-[8vw] leading-none font-black tracking-widest text-rallix-lime/[0.04] uppercase lg:text-[7vw]">
                        SYSTEMS
                    </div>
                </div>

                {/* Left Side: Product Image & Hotspots */}
                <div className="relative z-10 flex w-full flex-1 items-center justify-center">
                    <div className="relative -mt-12 flex aspect-[1/2] w-full max-w-[420px] items-center justify-center md:-mt-20">
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

                {/* Right Side: Slogan, Preview Card, and CTA */}
                <div className="z-10 flex flex-1 flex-col justify-end gap-8 text-center lg:max-w-md lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl leading-none font-black tracking-tight text-white uppercase sm:text-5xl">
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

                    {/* Preview Card (Video style) */}
                    <div className="group relative mx-auto flex max-w-[340px] gap-4 rounded-2xl border border-rallix-blue/15 bg-[#0E2849]/80 p-4 shadow-2xl backdrop-blur transition-all hover:border-rallix-lime/30 lg:mx-0">
                        <div className="relative flex h-16 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-rallix-blue/10 bg-rallix-navy">
                            <Play className="h-5 w-5 text-rallix-lime opacity-80 transition-transform group-hover:scale-110" />
                            <div className="absolute right-1 bottom-1 flex items-center gap-0.5 rounded bg-rallix-lime px-1 py-0.5 text-[8px] font-black text-rallix-navy">
                                <span className="h-1 w-1 animate-pulse rounded-full bg-rallix-navy" />
                                LIVE
                            </div>
                        </div>
                        <div className="flex flex-col justify-center text-left">
                            <span className="text-[9px] font-bold tracking-wider text-rallix-blue uppercase">
                                Play Demo
                            </span>
                            <h4 className="mt-0.5 text-xs font-bold text-white">
                                See the Rallix Arena Display
                            </h4>
                            <p className="mt-0.5 text-[10px] text-slate-400">
                                Automatic lobby screen sync
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center lg:justify-start">
                        <a
                            href="#features"
                            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-rallix-lime px-10 py-4 text-sm font-bold tracking-wide text-rallix-navy shadow-lg shadow-rallix-lime/20 transition-all hover:scale-[1.03] hover:bg-rallix-lime/90 active:scale-[0.97]"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
