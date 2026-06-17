"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import type { Agent } from "@/data/agents";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <Card className="h-full overflow-hidden">
        <div className="relative aspect-square bg-estate-beige">
          <Image
            src={agent.image}
            alt={agent.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg text-estate-charcoal">
            {agent.name}
          </h3>
          <p className="text-sm text-estate-charcoal/60">{agent.role}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-estate-charcoal/55">
            <MapPin className="h-3.5 w-3.5" />
            {agent.location}
          </p>

          <div className="mt-3 flex items-center gap-1 text-estate-gold">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium text-estate-charcoal">
              {agent.rating}
            </span>
            <span className="text-xs text-estate-charcoal/50">
              · {agent.listingsCount} listings
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {agent.specialties.slice(0, 2).map((s) => (
              <Badge key={s} variant="outline" className="text-[10px]">
                {s}
              </Badge>
            ))}
          </div>

          <p className="mt-3 line-clamp-2 text-xs leading-5 text-estate-charcoal/60">
            {agent.bio}
          </p>

          <div className="mt-4 space-y-2 border-t border-estate-warm pt-4">
            <a
              href={`mailto:${agent.email}`}
              className="flex items-center gap-2 text-xs text-estate-charcoal/70 hover:text-estate-gold"
            >
              <Mail className="h-3.5 w-3.5" />
              {agent.email}
            </a>
            <a
              href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 text-xs text-estate-charcoal/70 hover:text-estate-gold"
            >
              <Phone className="h-3.5 w-3.5" />
              {agent.phone}
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
