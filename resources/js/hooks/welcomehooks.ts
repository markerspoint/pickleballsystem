import { useState } from 'react';

export function useWelcomeState() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'pass' | 'schedule'>('pass');

    return {
        mobileMenuOpen,
        setMobileMenuOpen,
        activeTab,
        setActiveTab,
    };
}
