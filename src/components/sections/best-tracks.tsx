"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { TRACKS_CONSTANTS, ANIMATION_CONSTANTS } from "@/lib/constants/portfolio";
import { TRACKS } from "@/lib/constants/data";
import { FLOATING_NOTES_POSITIONS } from "@/lib/constants/animations";

export function BestTracksSection() {
  const t = useTranslations("tracks");
  const locale = useLocale();
  const isRTL = locale === "he";

  const openYouTube = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="tracks" 
      className={cn(
        "py-20 lg:py-32 bg-background",
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRACKS.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_CONSTANTS.DURATION_NORMAL, delay: index * TRACKS_CONSTANTS.ANIMATION_DELAY_MULTIPLIER }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border cursor-pointer">
                {/* Track Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={track.image}
                    alt={track.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openYouTube(track.youtubeUrl)}
                      className="w-16 h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
                      aria-label={`${t("playTrack")} ${track.name}`}
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </motion.button>
                  </div>

                </div>

                {/* Track Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {track.name}
                  </h3>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openYouTube(track.youtubeUrl)}
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("viewOnYoutube")}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Music Notes Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {FLOATING_NOTES_POSITIONS.map((position, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/10 text-4xl"
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
