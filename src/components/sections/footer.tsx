"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { FOOTER_CONSTANTS } from "@/lib/constants/portfolio";
import { SOCIAL_LINKS, QUICK_LINKS } from "@/lib/constants/data";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isRTL = locale === "he";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer 
      className={cn(
        "bg-card border-t border-border py-12",
        isRTL ? "rtl" : "ltr"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <Image src="/logo.jpeg" alt="Tal Shimoni Logo" width={32} height={32} className="h-9 w-9 rounded-full object-fill" />
              </div>
              <span className="text-xl font-bold text-card-foreground">
                {t("brandName")}
              </span>
            </div>
            <p className="text-muted-foreground">
              {t("brandDescription")}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-card-foreground">{t("quickLinks")}</h3>
            <div className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(link.name as any)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-card-foreground">
              {t("socialMedia")}
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "w-10 h-10 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300",
                      social.color
                    )}
                    aria-label={`Follow on ${social.name}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm"
            >
              {t("copyright")}
            </motion.p>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary group"
              >
                {t("backToTop")}
                <ExternalLink className="ml-2 h-4 w-4 rotate-180 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
      </div>

      {/* Floating Musical Notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(FOOTER_CONSTANTS.FLOATING_NOTES_COUNT)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/5 text-2xl"
            style={{
              left: `${20 + i * 20}%`,
              bottom: "20%",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: FOOTER_CONSTANTS.ANIMATION_DURATION_BASE,
              repeat: Infinity,
              delay: i * FOOTER_CONSTANTS.ANIMATION_DELAY_MAX,
            }}
          >
            ♪
          </motion.div>
        ))}
      </div>
    </footer>
  );
}
