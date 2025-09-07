"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FLOATING_ELEMENTS_POSITIONS } from "@/lib/constants/animations";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "he";

  const scrollToContact = () => {
    const element = document.querySelector("#collaborate");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[4px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 -mt-12"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-tight"
          >
            {t("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground font-light leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-4"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className=" bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:scale-105"
            >
              {isRTL ? (
                <>
                  {t("collaborateButton")}
                  <Play className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform rotate-180" />
                </>
              ) : (
                <>
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  {t("collaborateButton")}
                </>
              )}
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FLOATING_ELEMENTS_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: position.duration,
              repeat: Infinity,
              delay: position.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
