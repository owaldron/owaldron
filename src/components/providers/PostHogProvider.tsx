'use client';

import React, { ReactNode, useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as Provider } from '@posthog/react';

export default function PostHogProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
        if (!key) return; // not set in local dev
        posthog.init(key, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            defaults: '2026-01-30',
        });
    }, []);

    return <Provider client={posthog}>{children}</Provider>;
}
