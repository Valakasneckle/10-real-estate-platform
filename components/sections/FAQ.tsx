"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <Section eyebrow="FAQ" title="Common questions" className="bg-white">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq) => {
          const open = openId === faq.id;
          return (
            <Card key={faq.id} className="overflow-hidden">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpenId(open ? null : faq.id)}
              >
                <span className="font-medium text-estate-charcoal">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-estate-charcoal/50 transition",
                    open && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {open ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-estate-warm px-5 pb-5 pt-3 text-sm leading-7 text-estate-charcoal/70">
                      {faq.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
