'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function LangSetter() {
    const pathname = usePathname();

    useEffect(() => {
        const lang = pathname.startsWith('/en') ? 'en' : 'pl';
        document.documentElement.lang = lang;
    }, [pathname]);

    return null;
}

