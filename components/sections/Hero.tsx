"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-estate-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(74,111,165,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-estate-gold">
            Premium Real Estate Platform
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-estate-charcoal md:text-5xl lg:text-6xl">
            Find your next home with a smarter real estate experience
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-estate-charcoal/70">
            EstateFlow helps buyers and renters explore curated properties,
            compare neighborhoods, view detailed listings, and connect with
            trusted agents — all through a clean, conversion-focused digital
            experience.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/properties">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Properties
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact an Agent
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
