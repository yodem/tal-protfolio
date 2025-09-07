"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "he" : "en";
    router.push(`/${newLocale}`);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
      aria-label={`Switch to ${locale === "en" ? "Hebrew" : "English"}`}
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">
        {locale === "en" ? "עב" : "EN"}
      </span>
    </Button>
  );
}
