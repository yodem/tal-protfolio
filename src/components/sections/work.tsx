"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { WORK_CONSTANTS, ANIMATION_CONSTANTS } from "@/lib/constants/portfolio";
import { WORK_ITEMS } from "@/lib/constants/data";

export function WorkSection() {
  const t = useTranslations("work");
  const locale = useLocale();
  const isRTL = locale === "he";

  return (
    <section 
      id="works" 
      className={cn(
        "py-20 lg:py-32 bg-muted/30",
        isRTL ? "rtl" : "ltr"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
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

        {/* Work Items */}
        <div className="space-y-20">
          {WORK_ITEMS.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_CONSTANTS.DURATION_SLOW, delay: index * ANIMATION_CONSTANTS.DELAY_NORMAL }}
              viewport={{ once: true }}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                (index % 2 === 1) && !isRTL ? "lg:grid-flow-col-dense" : "",
                (index % 2 === 0) && isRTL ? "lg:grid-flow-col-dense" : ""
              )}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative group overflow-hidden rounded-2xl shadow-2xl",
                  (index % 2 === 1) && !isRTL ? "lg:col-start-2" : "",
                  (index % 2 === 0) && isRTL ? "lg:col-start-2" : ""
                )}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={`/api/placeholder/${WORK_CONSTANTS.IMAGE_WIDTH}/${WORK_CONSTANTS.IMAGE_HEIGHT}`}
                    alt={t(`${item.key}.primary` as any)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-tr opacity-60 group-hover:opacity-80 transition-opacity duration-300",
                    item.gradient
                  )} />
                </div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto"
                    >
                      <div className="w-6 h-6 border-2 border-white rounded-full" />
                    </motion.div>
                    <p className="text-lg font-semibold">{t("explore")}</p>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className={cn(
                  "space-y-6",
                  (index % 2 === 1) && !isRTL ? "lg:col-start-1" : "",
                  (index % 2 === 0) && isRTL ? "lg:col-start-1" : "",
                  isRTL ? "text-right" : "text-left"
                )}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {t(`${item.key}.primary` as any)}
                  </h3>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(`${item.key}.secondary` as any)}
                </p>

                {/* Progress bar or feature list */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t("creativity")}</span>
                    <span className="text-sm text-primary font-semibold">{WORK_CONSTANTS.PROGRESS_CREATIVITY}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${WORK_CONSTANTS.PROGRESS_CREATIVITY}%` }}
                      transition={{ duration: ANIMATION_CONSTANTS.DURATION_VERY_SLOW, delay: ANIMATION_CONSTANTS.DELAY_LONG }}
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t("technicalSkill")}</span>
                    <span className="text-sm text-primary font-semibold">{WORK_CONSTANTS.PROGRESS_TECHNICAL}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${WORK_CONSTANTS.PROGRESS_TECHNICAL}%` }}
                      transition={{ duration: ANIMATION_CONSTANTS.DURATION_VERY_SLOW, delay: ANIMATION_CONSTANTS.DELAY_VERY_LONG }}
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
