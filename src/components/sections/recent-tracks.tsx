"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { TRACKS_CONSTANTS, ANIMATION_CONSTANTS } from "@/lib/constants/portfolio";
import { RECENT_TRACK } from "@/lib/constants/data";
import { RECENT_NOTES_POSITIONS } from "@/lib/constants/animations";

export function RecentTracksSection() {
  const t = useTranslations("tracks");
  const locale = useLocale();
  const isRTL = locale === "he";


  const openYouTube = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="recent-tracks"
      className={cn(
        "py-24 lg:py-40",
        isRTL ? "rtl" : "ltr"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t("recentTitle")}
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        {/* Single Track - Centered Layout */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONSTANTS.DURATION_NORMAL }}
            viewport={{ once: true }}
            className="group max-w-md w-full"
          >
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border cursor-pointer transform hover:-translate-y-2">
              {/* Track Image - Slightly larger */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={RECENT_TRACK.image}
                  alt={RECENT_TRACK.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => openYouTube(RECENT_TRACK.youtubeUrl)}
                    className="w-20 h-20 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
                    aria-label={`${t("playTrack")} ${RECENT_TRACK.name}`}
                  >
                    <Play className="h-7 w-7 ml-1" />
                  </motion.button>
                </div>
              </div>

              {/* Track Info - More padding */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {RECENT_TRACK.name}
                </h3>

                <Button
                  variant="outline"
                  size="default"
                  onClick={() => openYouTube(RECENT_TRACK.youtubeUrl)}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 py-3"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t("viewOnYoutube")}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Music Notes Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {RECENT_NOTES_POSITIONS.map((position, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/10 text-5xl"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              animate={{
                y: [0, -50, 0],
                rotate: [0, 360],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: position.duration,
                repeat: Infinity,
                delay: position.delay,
              }}
            >
              ♪
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
