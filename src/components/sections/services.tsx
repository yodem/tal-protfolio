"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Headphones, Volume2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    key: "musicProduction",
    icon: Music,
    color: "from-blue-500 to-purple-500"
  },
  {
    key: "soundDesign", 
    icon: Volume2,
    color: "from-green-500 to-teal-500"
  },
  {
    key: "mixing",
    icon: Headphones,
    color: "from-orange-500 to-red-500"
  },
  {
    key: "consultation",
    icon: Users,
    color: "from-pink-500 to-rose-500"
  }
];

export function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRTL = locale === "he";

  return (
    <section 
      id="services" 
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full bg-card hover:bg-accent transition-all duration-300 border-border hover:border-primary/50 hover:shadow-xl">
                  <CardHeader className="text-center pb-4">
                    {/* Icon with gradient background */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="mx-auto mb-4"
                    >
                      <div className={cn(
                        "w-20 h-20 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg",
                        service.color
                      )}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </motion.div>

                    <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {t(`${service.key}.title` as any)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {t(`${service.key}.description` as any)}
                    </CardDescription>

                    {/* Hover effect decoration */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="mt-6 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto w-0 group-hover:w-full transition-all duration-500"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
