import {
    Users,
    Calendar,
    Trophy,
    Activity,
    TrendingUp,
    Tv,
    Award,
    MessageSquare,
    Target,
    CreditCard,
    BarChart2,
    Smartphone,
} from 'lucide-react';
import type { ModuleItem, RatingDivision } from '../types/welcometypes';

export const modules: ModuleItem[] = [
    {
        id: 'Step 01',
        icon: Users,
        title: 'Player Profiles & Memberships',
        description:
            'Friendly digital profiles, check-in badges, and simple membership plans to welcome everyone to the court.',
        tags: ['Easy Profile', 'Digital Badges', 'Sign-ups'],
        color: 'border-rallix-blue/25 text-rallix-blue hover:border-rallix-blue/50 bg-rallix-blue/5',
    },
    {
        id: 'Step 02',
        icon: Calendar,
        title: 'Easy Court Booking',
        description:
            'Click, choose, and play. A clear schedule that prevents double-booking and keeps courts busy and active.',
        tags: ['Quick Reserve', 'Court Calendar'],
        color: 'border-rallix-lime/25 text-rallix-lime hover:border-rallix-lime/50 bg-rallix-lime/5',
    },
    {
        id: 'Step 03',
        icon: Trophy,
        title: 'Tournaments & Brackets',
        description:
            'Set up fun match-ups, round-robins, and challenge ladders in just a few clicks. No spreadsheet required.',
        tags: ['Fun Brackets', 'Round Robin', 'Ladders'],
        color: 'border-rallix-blue/25 text-rallix-blue hover:border-rallix-blue/50 bg-rallix-blue/5',
    },
    {
        id: 'Step 04',
        icon: Activity,
        title: 'Live Court Scoreboards',
        description:
            'Let players enter scores directly, updating court screens in real-time so spectators can cheer along.',
        tags: ['Live Scores', 'Tap to Update'],
        color: 'border-rallix-lime/25 text-rallix-lime hover:border-rallix-lime/50 bg-rallix-lime/5',
    },
    {
        id: 'Step 05',
        icon: TrendingUp,
        title: 'Leaderboards & Challenges',
        description:
            'Track friendly local ratings and easily challenge other players to match-ups to climb the club rankings.',
        tags: ['Friendly Rankings', 'Fun Challenges'],
        color: 'border-rallix-blue/25 text-rallix-blue hover:border-rallix-blue/50 bg-rallix-blue/5',
    },
    {
        id: 'Signature Feature',
        icon: Tv,
        title: 'Big Screen Displays',
        description:
            'Display live scores, court schedules, and fun announcements on TV screens around the club lobby.',
        tags: ['TV Screen Lobby', 'Live Stream', 'Bright Displays'],
        color: 'border-rallix-lime/40 text-rallix-lime hover:border-rallix-lime/75 bg-rallix-lime/5 ring-1 ring-rallix-lime/30 shadow-[0_0_20px_rgba(198,255,0,0.15)] col-span-1 md:col-span-2',
    },
    {
        id: 'Step 07',
        icon: Award,
        title: 'Club Hall of Fame',
        description:
            'Celebrate top players, longest winning streaks, active members, and unforgettable local club legends.',
        tags: ['Trophy Room', 'Club Streaks'],
        color: 'border-rallix-blue/25 text-rallix-blue hover:border-rallix-blue/50 bg-rallix-blue/5',
    },
    {
        id: 'Step 08',
        icon: MessageSquare,
        title: 'Club Feed & News',
        description:
            'Share news, match photos, tournament announcements, and local events to keep everyone in the loop.',
        tags: ['News Feed', 'Photo Gallery'],
        color: 'border-rallix-lime/25 text-rallix-lime hover:border-rallix-lime/50 bg-rallix-lime/5',
    },
    {
        id: 'Step 09',
        icon: Target,
        title: 'Coaching & Lessons',
        description:
            'Find local coaches, book personal training slots, and track your skills over serve, volley, and dinks.',
        tags: ['Book Lessons', 'Dink Practice'],
        color: 'border-rallix-blue/25 text-rallix-blue hover:border-rallix-blue/50 bg-rallix-blue/5',
    },
    {
        id: 'Step 10',
        icon: CreditCard,
        title: 'Simple Payments',
        description:
            'Secure, hassle-free payments for court bookings, memberships, coaching lessons, and tournament entry fees.',
        tags: ['Secure Pay', 'Split Bills'],
        color: 'border-rallix-lime/25 text-rallix-lime hover:border-rallix-lime/50 bg-rallix-lime/5',
    },
    {
        id: 'Step 11-12',
        icon: BarChart2,
        title: 'Friendly Alerts & Reports',
        description:
            'Get quick text or email reminders for your bookings, and see simple club reports to see how the club is growing.',
        tags: ['Text Alerts', 'Growth Charts'],
        color: 'border-rallix-blue/25 text-rallix-blue hover:border-rallix-blue/50 bg-rallix-blue/5',
    },
    {
        id: 'Step 13-14',
        icon: Smartphone,
        title: 'Member App & Manager Tools',
        description:
            'A beautiful, neat mobile app for players on the go, paired with a simple admin dashboard for club managers.',
        tags: ['Player App', 'Easy Admin Panel'],
        color: 'border-rallix-lime/25 text-rallix-lime hover:border-rallix-lime/50 bg-rallix-lime/5',
    },
];

export const ratings: RatingDivision[] = [
    {
        level: 'Pro Level (5.0+)',
        color: 'text-rallix-lime border-rallix-lime/40 shadow-[0_0_10px_rgba(198,255,0,0.15)] bg-rallix-lime/5',
    },
    {
        level: 'Advanced Player (4.5 - 4.9)',
        color: 'text-rallix-blue border-rallix-blue/40 bg-rallix-blue/5',
    },
    {
        level: 'Competitive (4.0 - 4.4)',
        color: 'text-slate-300 border-slate-700/60 bg-rallix-dark/45',
    },
    {
        level: 'Challenger (3.5 - 3.9)',
        color: 'text-slate-300 border-slate-700/60 bg-rallix-dark/45',
    },
    {
        level: 'Intermediate (3.0 - 3.4)',
        color: 'text-slate-300 border-slate-700/60 bg-rallix-dark/45',
    },
    {
        level: 'Recreational (2.0 - 2.9)',
        color: 'text-slate-400 border-slate-800 bg-rallix-dark/20',
    },
];
