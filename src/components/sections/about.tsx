"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ABOUT_CONSTANTS, ANIMATION_CONSTANTS } from "@/lib/constants/portfolio";

export function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRTL = locale === "he";

  return (
    <section 
      id="about" 
      className={cn(
        "py-20 lg:py-32 bg-background",
        isRTL ? "rtl" : "ltr"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={cn(
              "space-y-6",
              isRTL ? "lg:order-2" : "lg:order-1"
            )}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
              {t("title")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-primary rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t("description")}
            </motion.p>

            {/* Stats or highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_CONSTANTS.DURATION_NORMAL, delay: ANIMATION_CONSTANTS.DELAY_VERY_LONG }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{ABOUT_CONSTANTS.YEARS_EXPERIENCE}+</div>
                <div className="text-sm text-muted-foreground">{t("yearsExperience")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{ABOUT_CONSTANTS.TRACKS_PRODUCED}+</div>
                <div className="text-sm text-muted-foreground">{t("tracksProduced")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{ABOUT_CONSTANTS.COLLABORATIONS}+</div>
                <div className="text-sm text-muted-foreground">{t("collaborations")}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image with rotating animation */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={cn(
              "flex justify-center",
              isRTL ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div className="relative">
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: ANIMATION_CONSTANTS.ROTATION_FULL }}
                transition={{ duration: ABOUT_CONSTANTS.ROTATION_DURATION, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border-dashed border-primary/30"
                style={{
                  width: `${ABOUT_CONSTANTS.ROTATING_BORDER_SIZE}px`,
                  height: `${ABOUT_CONSTANTS.ROTATING_BORDER_SIZE}px`,
                  borderWidth: `${ABOUT_CONSTANTS.BORDER_WIDTH}px`,
                  left: `-${(ABOUT_CONSTANTS.ROTATING_BORDER_SIZE - ABOUT_CONSTANTS.ROTATING_IMAGE_SIZE) / 2}px`,
                  top: `-${(ABOUT_CONSTANTS.ROTATING_BORDER_SIZE - ABOUT_CONSTANTS.ROTATING_IMAGE_SIZE) / 2}px`
                }}
              />
              
              {/* Image container */}
              <motion.div
                whileHover={{ scale: ANIMATION_CONSTANTS.SCALE_HOVER }}
                transition={{ duration: ANIMATION_CONSTANTS.DURATION_FAST }}
                className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-2xl"
                style={{
                  width: `${ABOUT_CONSTANTS.ROTATING_IMAGE_SIZE}px`,
                  height: `${ABOUT_CONSTANTS.ROTATING_IMAGE_SIZE}px`,
                  borderWidth: `${ABOUT_CONSTANTS.BORDER_WIDTH}px`
                }}
              >
                <Image
                  src={`/tal.jpeg`}
                  alt="Tal Shimoni"
                  fill
                  className="object-cover scale-125"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </motion.div>

              {/* Floating elements around image */}
              {[...Array(ABOUT_CONSTANTS.FLOATING_ELEMENTS_COUNT)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary/40 rounded-full"
                  style={{
                    left: `${50 + 45 * Math.cos((i * Math.PI * 2) / ABOUT_CONSTANTS.FLOATING_ELEMENTS_COUNT)}%`,
                    top: `${50 + 45 * Math.sin((i * Math.PI * 2) / ABOUT_CONSTANTS.FLOATING_ELEMENTS_COUNT)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
