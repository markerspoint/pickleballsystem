import { Check, ChevronRight, Ticket, ListTodo } from 'lucide-react';

interface WelcomeOperationsProps {
    activeTab: 'pass' | 'schedule';
    setActiveTab: (tab: 'pass' | 'schedule') => void;
}

export function WelcomeOperations({
    activeTab,
    setActiveTab,
}: WelcomeOperationsProps) {
    return (
        <section
            id="booking-showcase"
            className="mx-auto max-w-7xl scroll-mt-24 border-t border-rallix-dark/40 px-4 py-24 sm:px-6 lg:px-8"
        >
            <div className="flex flex-col items-center gap-16 lg:flex-row">
                {/* Left description */}
                <div className="flex-1 lg:max-w-xl">
                    <div className="mb-3 text-xs font-semibold tracking-wider text-rallix-blue uppercase">
                        Court Booking
                    </div>
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Simple Booking & Club Operations
                    </h2>
                    <p className="mb-8 leading-relaxed font-normal text-slate-300">
                        Manage player check-ins, book courts on the fly, and
                        keep play times running smoothly. The system handles
                        booking disputes, validates club memberships, and
                        updates group ladders automatically.
                    </p>

                    {/* Features list */}
                    <ul className="space-y-4">
                        {[
                            'Clear court schedules that prevent double-booking',
                            'Quick mobile check-in at the front desk',
                            'Simple billing and digital receipts',
                            'Automatic score posting to player leaderboards',
                        ].map((item, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-3 text-sm text-slate-200"
                            >
                                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-rallix-lime/30 bg-rallix-lime/10">
                                    <Check className="h-3 w-3 text-rallix-lime" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8">
                        <a
                            href="#"
                            className="group inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-rallix-blue hover:text-rallix-lime"
                        >
                            Discover Booking Flow
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Right interactive mockup */}
                <div className="w-full flex-1 overflow-hidden rounded-xl border border-rallix-blue/15 bg-rallix-dark/20 shadow-2xl">
                    {/* Mockup Header */}
                    <div className="flex items-center justify-between border-b border-rallix-blue/10 bg-[#0E2849] px-4 py-3">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-rallix-lime/80" />
                            <div className="h-3 w-3 rounded-full bg-rallix-blue/80" />
                            <div className="h-3 w-3 rounded-full bg-slate-600/80" />
                        </div>
                        <div className="text-[11px] font-semibold tracking-wider text-slate-300">
                            Court Booking Engine
                        </div>
                        <div className="h-4 w-4 text-slate-400" />
                    </div>

                    <div className="flex flex-col sm:flex-row">
                        {/* Form parameters (Left half) */}
                        <div className="flex-1 border-b border-rallix-blue/10 p-6 sm:border-r sm:border-b-0">
                            <div className="mb-4 text-xs font-bold tracking-wider text-rallix-lime uppercase">
                                Book a Court
                            </div>
                            <form
                                className="space-y-4"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div>
                                    <label className="mb-1 block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                                        Select Court
                                    </label>
                                    <select className="w-full rounded-lg border border-rallix-blue/15 bg-rallix-navy p-2 text-xs text-white focus:border-rallix-blue focus:outline-none">
                                        <option>Court 3 (Indoor)</option>
                                        <option>Court 1 (Outdoor)</option>
                                        <option>Court 2 (Outdoor)</option>
                                        <option>Court 4 (Indoor)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="mb-1 block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                                        Time Slot
                                    </label>
                                    <select className="w-full rounded-lg border border-rallix-blue/15 bg-rallix-navy p-2 text-xs text-white focus:border-rallix-blue focus:outline-none">
                                        <option>6:00 PM - 7:30 PM</option>
                                        <option>7:30 PM - 9:00 PM</option>
                                        <option>9:00 PM - 10:30 PM</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="mb-1 block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                                        Play Type
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="rounded-lg border border-rallix-blue/40 bg-rallix-blue/15 py-1.5 text-center text-[10px] font-semibold text-rallix-blue transition-all hover:bg-rallix-blue/25">
                                            Singles Play
                                        </button>
                                        <button className="rounded-lg border border-rallix-blue/10 bg-rallix-navy py-1.5 text-center text-[10px] font-semibold text-slate-400 transition-all hover:border-rallix-blue/30 hover:text-white">
                                            Doubles Play
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Visual Court Details (Right half) */}
                        <div className="flex flex-1 flex-col bg-rallix-navy">
                            {/* Tabs */}
                            <div className="flex border-b border-rallix-blue/10 bg-[#0E2849]/50">
                                <button
                                    onClick={() => setActiveTab('pass')}
                                    className={`flex items-center gap-1.5 border-r border-rallix-blue/10 px-4 py-2 text-[10px] font-semibold ${
                                        activeTab === 'pass'
                                            ? 'border-t-2 border-t-rallix-lime bg-rallix-navy text-rallix-lime'
                                            : 'text-slate-400 hover:text-slate-300'
                                    }`}
                                >
                                    <Ticket className="h-3.5 w-3.5" />
                                    Digital Pass
                                </button>
                                <button
                                    onClick={() => setActiveTab('schedule')}
                                    className={`flex items-center gap-1.5 border-r border-rallix-blue/10 px-4 py-2 text-[10px] font-semibold ${
                                        activeTab === 'schedule'
                                            ? 'border-t-2 border-t-rallix-lime bg-rallix-navy text-rallix-lime'
                                            : 'text-slate-400 hover:text-slate-300'
                                    }`}
                                >
                                    <ListTodo className="h-3.5 w-3.5" />
                                    Club Schedule
                                </button>
                            </div>

                            {/* Content Area */}
                            <div className="flex min-h-[220px] flex-1 flex-col justify-center">
                                {activeTab === 'pass' ? (
                                    <div className="flex flex-1 flex-col justify-center p-5">
                                        <div className="relative overflow-hidden rounded-xl border border-rallix-blue/20 bg-[#0E2849] p-4 shadow-lg">
                                            {/* Ticket cutout circles on the sides */}
                                            <div className="absolute top-1/2 left-[-10px] h-4 w-4 -translate-y-1/2 rounded-full border-r border-rallix-blue/20 bg-rallix-navy" />
                                            <div className="absolute top-1/2 right-[-10px] h-4 w-4 -translate-y-1/2 rounded-full border-l border-rallix-blue/20 bg-rallix-navy" />

                                            {/* Ticket Header */}
                                            <div className="mb-3 flex items-center justify-between border-b border-dashed border-rallix-blue/20 pb-3">
                                                <div>
                                                    <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                                                        Rallix Pass
                                                    </span>
                                                    <h4 className="mt-0.5 text-xs font-bold text-white">
                                                        Court Booking
                                                    </h4>
                                                </div>
                                                <div className="rounded bg-rallix-lime px-2 py-0.5 text-[9px] font-bold tracking-wider text-rallix-navy uppercase">
                                                    Confirmed
                                                </div>
                                            </div>

                                            {/* Ticket Body */}
                                            <div className="space-y-3.5 text-slate-300">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                                                            Court
                                                        </span>
                                                        <p className="mt-0.5 text-xs font-bold text-white">
                                                            Court 3 (Indoor)
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                                                            Time
                                                        </span>
                                                        <p className="mt-0.5 text-xs font-bold text-white">
                                                            6:00 PM - 7:30 PM
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                                                        Players
                                                    </span>
                                                    <div className="mt-1 flex items-center gap-1.5">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-rallix-blue" />
                                                        <span className="text-xs text-white">
                                                            Alex Carter
                                                        </span>
                                                        <span className="text-[9px] font-medium text-slate-500">
                                                            vs
                                                        </span>
                                                        <span className="h-1.5 w-1.5 rounded-full bg-rallix-lime" />
                                                        <span className="text-xs text-white">
                                                            Sarah Jenkins
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Barcode representation */}
                                                <div className="flex flex-col items-center border-t border-rallix-blue/15 pt-3">
                                                    <div className="flex h-6 w-full items-center justify-center gap-0.5 opacity-60">
                                                        {[
                                                            1, 3, 1, 4, 2, 1, 3,
                                                            2, 1, 4, 1, 2, 3, 1,
                                                            2, 1, 4, 2, 1, 3,
                                                        ].map((w, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="h-full rounded-sm bg-white"
                                                                style={{
                                                                    width: `${w}px`,
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="mt-1.5 font-mono text-[8px] tracking-[0.25em] text-slate-400">
                                                        RX-2026-BOOK981
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-1 flex-col justify-between p-5 text-slate-300">
                                        <div className="mb-3 flex items-center justify-between border-b border-rallix-blue/10 pb-2">
                                            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                                                Today's Schedule
                                            </span>
                                            <span className="text-[10px] font-medium text-rallix-lime">
                                                4 Courts Active
                                            </span>
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                {
                                                    court: 'Court 1',
                                                    label: 'League Play',
                                                    time: '5:30 PM - 7:00 PM',
                                                    active: false,
                                                },
                                                {
                                                    court: 'Court 2',
                                                    label: 'Coaching Session',
                                                    time: '6:00 PM - 7:00 PM',
                                                    active: false,
                                                },
                                                {
                                                    court: 'Court 3',
                                                    label: 'Alex C. vs Sarah J.',
                                                    time: '6:00 PM - 7:30 PM',
                                                    active: true,
                                                },
                                                {
                                                    court: 'Court 4',
                                                    label: 'Recreational Open',
                                                    time: '5:00 PM - 8:00 PM',
                                                    active: false,
                                                },
                                            ].map((sched, sIdx) => (
                                                <div
                                                    key={sIdx}
                                                    className={`flex items-center justify-between rounded-lg border p-2 text-xs transition-all ${
                                                        sched.active
                                                            ? 'border-rallix-lime/40 bg-rallix-lime/5 text-white'
                                                            : 'border-rallix-blue/10 bg-rallix-navy/60 text-slate-400'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-1.5">
                                                        <span
                                                            className={`h-1.5 w-1.5 rounded-full ${sched.active ? 'animate-pulse bg-rallix-lime' : 'bg-slate-600'}`}
                                                        />
                                                        <span
                                                            className={`font-semibold ${sched.active ? 'text-white' : 'text-slate-300'}`}
                                                        >
                                                            {sched.court}
                                                        </span>
                                                        <span className="text-slate-500">
                                                            |
                                                        </span>
                                                        <span className="max-w-[100px] truncate sm:max-w-none">
                                                            {sched.label}
                                                        </span>
                                                    </div>
                                                    <span className="shrink-0 text-[9px] font-medium text-slate-500">
                                                        {sched.time}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
