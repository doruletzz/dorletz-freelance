'use client'

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from 'posthog-js/react';

export default function PostHogPageViewComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  // Track pageviews
  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture(
        '$pageview',
        {
          '$lib': 'web',
          '$current_url': url,
        }
      )
    }
  }, [pathname, searchParams, posthog])
  
  return null
}