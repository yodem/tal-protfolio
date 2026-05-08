"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Music } from "lucide-react"; // Added Music icon
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FLOATING_ELEMENTS_POSITIONS } from "@/lib/constants/animations";
import { RECENT_TRACK } from "@/lib/constants/data"; // Import your track 7 data

export function HeroSection() {
    const t = useTranslations("hero");
    const tTracks = useTranslations("tracks"); // For "Latest Release" text
    const tProjects = useTranslations("projects"); // For "Track 7" name
    const locale = useLocale();
    const isRTL = locale === "he";

    const scrollToContact = () => {
        const element = document.querySelector("#collaborate");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            id="home"
            className={cn(
                "relative min-h-screen flex items-center justify-center overflow-hidden",
                isRTL ? "rtl" : "ltr"
            )}
            dir={isRTL ? "rtl" : "ltr"}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/studio.jpeg"
                    alt="Studio"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div className="space-y-6 -mt-12">

                    {/* NEW: Latest Release Badge (Track 7) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-4"
                    >
                        <Music className="h-4 w-4" />
                        <span className="text-sm font-medium uppercase tracking-wider">
                            {tTracks("latestRelease")}: {tProjects(RECENT_TRACK.nameKey)}
                        </span>
                    </motion.div>

                    <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-tight">
                        {t("title")}
                    </motion.h1>

                    <motion.p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
                        {t("subtitle")}
                    </motion.p>

                    <motion.div className="pt-8">
                        <Button
                            size="lg"
                            onClick={scrollToContact}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-xl font-bold rounded-full shadow-2xl transition-all group"
                        >
                            {t("collaborateButton")}
                            <Play className={cn("h-6 w-6 transition-transform group-hover:scale-110", isRTL ? "mr-3 rotate-180" : "ml-3")} />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Elements remain the same... */}
        </section>
    );
}