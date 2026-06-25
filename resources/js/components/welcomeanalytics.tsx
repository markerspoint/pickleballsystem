import { Award, BarChart2 } from 'lucide-react';
import { ratings } from '../utils/welcomeutils';

export function WelcomeAnalytics() {
    return (
        <section
            id="activity-stream"
            className="mx-auto max-w-7xl scroll-mt-24 border-t border-rallix-dark/40 px-4 py-24 sm:px-6 lg:px-8"
        >
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                {/* Column 1: Real-time logs */}
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-rallix-blue/15 bg-rallix-dark/40">
                            <BarChart2 className="h-5 w-5 text-rallix-blue" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-white">
                            Real-Time Club Activity
                        </h3>
                        <p className="mb-8 text-sm leading-relaxed font-normal text-slate-300">
                            Follow your club's pulse. See who is playing, view
                            match scores as they happen, and watch local
                            rankings update instantly. It's a live dashboard for
                            court check-ins, matches, and member milestones.
                        </p>
                    </div>

                    {/* Live Activity Stream */}
                    <div className="rounded-xl border border-rallix-blue/15 bg-rallix-navy p-5 text-xs text-slate-300 shadow-xl">
                        <div className="mb-4 flex items-center justify-between border-b border-rallix-blue/10 pb-3">
                            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                                Live Club Stream
                            </span>
                            <div className="flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rallix-lime" />
                                <span className="text-[10px] font-bold text-rallix-lime uppercase">
                                    Live Updates
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3.5">
                            <div className="flex items-start gap-3">
                                <span className="text-base leading-none">
                                    👋
                                </span>
                                <div>
                                    <p className="font-semibold text-white">
                                        Alex Carter checked in
                                    </p>
                                    <p className="mt-0.5 text-[10px] text-slate-400">
                                        Arrived at the front desk for Court 3
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-base leading-none">
                                    ✅
                                </span>
                                <div>
                                    <p className="font-semibold text-white">
                                        Court 3 is Ready
                                    </p>
                                    <p className="mt-0.5 text-[10px] text-slate-400">
                                        Booking checked in and active
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-base leading-none">
                                    🎾
                                </span>
                                <div>
                                    <p className="font-semibold text-white">
                                        Match complete: Court 3
                                    </p>
                                    <p className="mt-0.5 text-[10px] text-slate-400">
                                        Alex C. & Sarah J. finished play. Score:
                                        11-8, 11-9
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 border-t border-rallix-blue/10 pt-2.5">
                                <span className="text-base leading-none">
                                    🏆
                                </span>
                                <div>
                                    <p className="font-bold text-white">
                                        Rankings Updated!
                                    </p>
                                    <p className="mt-0.5 text-[10px] font-medium text-rallix-lime">
                                        Alex Carter rose to 4.85 (+0.05 skill
                                        change)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2: DUPR Hexagons */}
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-rallix-blue/15 bg-rallix-dark/40">
                            <Award className="h-5 w-5 text-rallix-blue" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-white">
                            Player Skill Divisions
                        </h3>
                        <p className="mb-8 text-sm leading-relaxed font-normal text-slate-300">
                            Group players naturally by skill level. Climb from
                            local recreational play all the way to advanced
                            divisions by participating in club matches,
                            tournaments, and friendly ladder challenges.
                        </p>
                    </div>

                    {/* Hexagonal list styling */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {ratings.map((rate, rIdx) => (
                            <div
                                key={rIdx}
                                className={`flex items-center gap-4 rounded-xl border border-rallix-blue/15 bg-rallix-dark/30 p-4 transition-all duration-300 hover:border-rallix-blue/30 ${rate.color}`}
                            >
                                {/* Hexagon shape using SVG */}
                                <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
                                    <svg
                                        viewBox="0 0 100 100"
                                        className="absolute inset-0 h-full w-full text-current"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="6"
                                    >
                                        <polygon points="50,5 93,30 93,80 50,95 7,80 7,30" />
                                    </svg>
                                    <span className="text-xs font-bold text-white">
                                        {rIdx + 1}
                                    </span>
                                </div>

                                <div>
                                    <div className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                                        Division {6 - rIdx}
                                    </div>
                                    <div className="mt-0.5 text-xs font-bold text-white">
                                        {rate.level}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
