import { Head } from '@inertiajs/react';
import { WelcomeAnalytics } from '../components/welcomeanalytics';
import { WelcomeFooter } from '../components/welcomefooter';
import { WelcomeHeader } from '../components/welcomeheader';
import { WelcomeHero } from '../components/welcomehero';
import { WelcomeModules } from '../components/welcomemodules';
import { WelcomeOperations } from '../components/welcomeoperations';
import { useWelcomeState } from '../hooks/welcomehooks';

export default function Welcome() {
    const { mobileMenuOpen, setMobileMenuOpen, activeTab, setActiveTab } =
        useWelcomeState();

    return (
        <>
            <Head>
                <title>Rallix - Smart Systems for Pickleball</title>
                <meta
                    name="description"
                    content="A friendly and easy-to-use platform for court bookings, tournaments, and social ratings. Built to bring your pickleball community together."
                />
            </Head>

            {/* Main Background with subtle noise & gradients */}
            <div className="relative min-h-screen bg-rallix-navy font-sans text-rallix-light antialiased selection:bg-rallix-lime selection:text-rallix-navy">
                {/* Visual Accent Glows */}
                <div className="pointer-events-none absolute top-[-20%] left-[-10%] aspect-square w-[50%] rounded-full bg-rallix-blue/10 blur-[120px]" />
                <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] aspect-square w-[60%] rounded-full bg-rallix-lime/5 blur-[150px]" />

                {/* 1. Header Navigation */}
                <WelcomeHeader
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />

                {/* 2. Hero Section */}
                <WelcomeHero />

                {/* 3. System Modules Showcase */}
                <WelcomeModules />

                {/* 4. Interactive Reservation & Operations Section */}
                <WelcomeOperations
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {/* 5. Console & Rankings Split Grid */}
                <WelcomeAnalytics />

                {/* 6. Footer (About & Copyright) */}
                <WelcomeFooter />
            </div>
        </>
    );
}
