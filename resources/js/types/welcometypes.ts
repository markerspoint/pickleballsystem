import type { LucideIcon } from 'lucide-react';

export interface ModuleItem {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    tags: string[];
    color: string;
}

export interface RatingDivision {
    level: string;
    color: string;
}
