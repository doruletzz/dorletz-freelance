'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

// app/providers.js

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
  })
}
export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}