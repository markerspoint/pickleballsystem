import { modules } from '../utils/welcomeutils';

export function WelcomeModules() {
    return (
        <section
            id="features"
            className="relative mx-auto max-w-7xl scroll-mt-24 border-t border-rallix-dark/40 px-4 py-24 sm:px-6 lg:px-8"
        >
            <div className="mx-auto mb-16 max-w-3xl text-center">
                <div className="mb-3 text-xs font-semibold tracking-wider text-rallix-blue uppercase">
                    Club Features
                </div>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Everything your pickleball club needs
                </h2>
                <p className="text-base leading-relaxed font-normal text-slate-300">
                    A friendly set of tools designed to make court booking,
                    score keeping, and community events simple for everyone.
                </p>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((m, index) => {
                    const IconComponent = m.icon;
                    const isSignature = m.id === 'Signature Feature';

                    return (
                        <div
                            key={index}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-rallix-blue/15 bg-rallix-dark/30 p-6 transition-all duration-300 ${m.color}`}
                        >
                            {/* Overlay light effects */}
                            {isSignature && (
                                <div className="pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-full bg-rallix-lime/10 blur-xl transition-all group-hover:bg-rallix-lime/15" />
                            )}

                            <div>
                                {/* Module Identifier & Icon */}
                                <div className="mb-4 flex items-center justify-between">
                                    <span
                                        className={`text-[10px] font-semibold tracking-wider uppercase ${isSignature ? 'font-bold text-rallix-lime' : 'text-slate-400'}`}
                                    >
                                        {m.id}
                                    </span>
                                    <div
                                        className={`rounded-lg border p-2.5 ${isSignature ? 'border-rallix-lime/30 bg-rallix-lime/10' : 'border-rallix-blue/15 bg-rallix-navy'}`}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="mb-2 flex items-center gap-1.5 text-lg font-bold text-white transition-colors group-hover:text-rallix-lime">
                                    {m.title}
                                    {isSignature && (
                                        <span className="rounded bg-rallix-lime px-1.5 py-0.5 text-[9px] font-semibold tracking-wide text-rallix-navy uppercase">
                                            Popular
                                        </span>
                                    )}
                                </h3>

                                {/* Description */}
                                <p className="mb-6 text-sm leading-relaxed font-normal text-slate-300">
                                    {m.description}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-auto flex flex-wrap gap-1.5 border-t border-rallix-blue/5 pt-2">
                                {m.tags.map((tag, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="rounded-md border border-rallix-blue/10 bg-rallix-navy/60 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
