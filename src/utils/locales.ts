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

  
export const getBrowserLanguage = (req: NextRequest) => {
  return req.headers
    .get("accept-language")
    ?.split(",")
    .map((i) => i.split(";"))
    ?.reduce(
      (ac: { code: string; priority: string }[], lang) => [
        ...ac,
        { code: lang[0], priority: lang[1] },
      ],
      []
    )
    ?.sort((a, b) => (a.priority > b.priority ? -1 : 1))
    ?.find((i) => locales.includes(i.code.substring(0, 2)))
    ?.code?.substring(0, 2) ?? defaultLocale;
};