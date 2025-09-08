'use client'

import { cn } from '@/lib/utils'
import { Tag } from 'lucide-react'

type PromoBadgeProps = {
    className?: string
    variant?: 'onDark' | 'onLight'
    text?: string
}

export function PromoBadge({ className, variant = 'onDark', text }: PromoBadgeProps) {
    const isDark = variant === 'onDark'

    const base = 'inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-4 py-2 text-sm font-semibold shadow-sm'
    const theme = isDark
        ? 'bg-white/10 text-white border border-white/15'
        : 'bg-black/5 text-gray-900 border border-black/10'

    return (
        <div className={cn(base, theme, className)}>
            <span className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-bold',
                isDark ? 'bg-[#017da0] text-black' : 'bg-[#017da0] text-black'
            )}>
                <Tag className={cn('h-3.5 w-3.5', isDark ? 'text-black' : 'text-black')} />
                PROMOCJA
            </span>
            <span className={cn('tracking-tight', isDark ? 'text-white/90' : 'text-gray-800')}>
                {text ?? '250 zł / komplet — detektor + wskaźnik LED'}
            </span>
        </div>
    )
}


