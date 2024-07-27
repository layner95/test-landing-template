// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import {PropsWithChildren} from "react";

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        loaded: (posthog) => {
            posthog.debug() // debug mode in development
        },
    })
}
export function CSPostHogProvider({ children }: PropsWithChildren) {
    console.log(process.env.NODE_ENV, 1)
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
