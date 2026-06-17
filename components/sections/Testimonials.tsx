"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="What clients say"
      description="Feedback from buyers, renters, and agency partners."
      className="bg-estate-cream"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full p-6">
              <div className="flex gap-0.5 text-estate-gold">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-estate-charcoal/75">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-estate-warm pt-4">
                <p className="text-sm font-medium text-estate-charcoal">
                  {t.author}
                </p>
                <p className="text-xs text-estate-charcoal/55">
                  {t.role} · {t.location}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
