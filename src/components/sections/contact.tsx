"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CONTACT_CONSTANTS } from "@/lib/constants/portfolio";
import { CONTACT_INFO } from "@/lib/constants/data";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(CONTACT_CONSTANTS.VALIDATION_MIN_NAME_LENGTH, "validationName"),
  email: z.string().email("validationEmail"),
  message: z.string().min(CONTACT_CONSTANTS.VALIDATION_MIN_MESSAGE_LENGTH, "validationMessage"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRTL = locale === "he";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, CONTACT_CONSTANTS.FORM_TIMEOUT));
      console.log("Form submitted:", data);
      setSubmitSuccess(true);
      reset();

      // Reset success message after timeout
      setTimeout(() => setSubmitSuccess(false), CONTACT_CONSTANTS.SUCCESS_MESSAGE_TIMEOUT);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="collaborate" 
      className={cn(
        "py-20 lg:py-32 bg-background relative overflow-hidden",
        isRTL ? "rtl" : "ltr"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  {t("sendMessage")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">
                      {t("name")}
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder={t("namePlaceholder")}
                      className={cn(
                        "bg-background border-border",
                        errors.name && "border-destructive"
                      )}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{t("validationName")}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      {t("email")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder={t("emailPlaceholder")}
                      className={cn(
                        "bg-background border-border",
                        errors.email && "border-destructive"
                      )}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{t("validationEmail")}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground">
                      {t("message")}
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder={t("messagePlaceholder")}
                      rows={CONTACT_CONSTANTS.FORM_ROWS}
                      className={cn(
                        "bg-background border-border resize-none",
                        errors.message && "border-destructive"
                      )}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{t("validationMessage")}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t("send")}
                      </>
                    )}
                  </Button>

                  {/* Success Message */}
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-4 bg-green-100 text-green-800 rounded-lg border border-green-200"
                    >
                      {t("successMessage")}
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{t("emailLabel")}</h3>
                  <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{t("phoneLabel")}</h3>
                  <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{t("locationLabel")}</h3>
                  <p className="text-muted-foreground">{CONTACT_INFO.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Response Time Info */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3">{t("quickResponse")}</h3>
                <p className="text-muted-foreground">
                  {t("quickResponseText")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
