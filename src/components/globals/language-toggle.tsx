"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageToggle() {
    const locale = useLocale();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "he" : "en";
        let newPath = pathname;

        if (pathname.startsWith(`/${locale}`)) {
            newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
        } else {
            newPath = `/${nextLocale}`;
        }

        window.location.href = newPath;
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            // Added 'hover:brightness-75' for that ~20-25% darker look
            // Added 'transition-all' to make it feel smooth
            className="flex items-center gap-2 transition-all hover:brightness-75 active:scale-95"
            aria-label={locale === "en" ? "Switch to Hebrew" : "Switch to English"}
        >
            <Languages className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm font-medium">
                {locale === "en" ? "עב" : "EN"}
            </span>
        </Button>
    );
}