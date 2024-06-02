import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

export const headers = { "accept-language": "en-US,en;q=0.5" };
export const languages = new Negotiator({ headers }).languages();
export const locales = ["en-US", "ro-RO"];
export const defaultLocale = "en-US";


// Get the preferred locale, similar to the above or using a library
export function getLocale(request: NextRequest) {
    return match(languages, locales, defaultLocale); // -> 'en-US'
  }