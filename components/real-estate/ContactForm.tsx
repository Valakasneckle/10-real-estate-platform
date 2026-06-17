"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";

type FormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  budget: string;
  propertyType: string;
  message: string;
};

const initial: FormData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  budget: "",
  propertyType: "",
  message: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function ContactForm({
  subject = "EstateFlow Inquiry",
}: {
  subject?: string;
}) {
  const [data, setData] = useState<FormData>(initial);
  const [sent, setSent] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) e.name = "Name is required.";
    if (!data.email.trim() || !isValidEmail(data.email))
      e.email = "Valid email required.";
    if (!data.message.trim()) e.message = "Message is required.";
    return e;
  }, [data]);

  const canSubmit = Object.keys(errors).length === 0;

  function update<K extends keyof FormData>(key: K, value: string) {
    setSent(false);
    setData((d) => ({ ...d, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSent(true);
  }

  return (
    <Card className="p-6 md:p-8">
      <h2 className="font-display text-2xl text-estate-charcoal">
        Property inquiry
      </h2>
      <p className="mt-1 text-sm text-estate-charcoal/60">
        Reference: {subject}
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-xs font-medium text-estate-charcoal/60">
              Name *
            </span>
            <Input
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your full name"
            />
            {errors.name ? (
              <span className="text-xs text-red-600">{errors.name}</span>
            ) : null}
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-medium text-estate-charcoal/60">
              Email *
            </span>
            <Input
              type="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@email.com"
            />
            {errors.email ? (
              <span className="text-xs text-red-600">{errors.email}</span>
            ) : null}
          </label>
        </div>

        <label className="grid gap-1.5">
          <span className="text-xs font-medium text-estate-charcoal/60">
            Phone (optional)
          </span>
          <Input
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 (555) 000-0000"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-xs font-medium text-estate-charcoal/60">
              Preferred location
            </span>
            <Input
              value={data.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="City or neighborhood"
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-medium text-estate-charcoal/60">
              Budget range
            </span>
            <Select
              value={data.budget}
              onChange={(e) => update("budget", e.target.value)}
            >
              <option value="">Select budget</option>
              <option value="under-500k">Under $500K</option>
              <option value="500k-1m">$500K – $1M</option>
              <option value="1m-2m">$1M – $2M</option>
              <option value="2m-5m">$2M – $5M</option>
              <option value="5m-plus">$5M+</option>
            </Select>
          </label>
        </div>

        <label className="grid gap-1.5">
          <span className="text-xs font-medium text-estate-charcoal/60">
            Property type
          </span>
          <Select
            value={data.propertyType}
            onChange={(e) => update("propertyType", e.target.value)}
          >
            <option value="">Any type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="penthouse">Penthouse</option>
            <option value="villa">Villa</option>
          </Select>
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-medium text-estate-charcoal/60">
            Message *
          </span>
          <Textarea
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us about your property goals, timeline, and preferences…"
          />
          {errors.message ? (
            <span className="text-xs text-red-600">{errors.message}</span>
          ) : null}
        </label>

        <Button type="submit" disabled={!canSubmit} className="w-full sm:w-auto">
          <Send className="h-4 w-4" />
          Send inquiry
        </Button>

        {sent ? (
          <p className="text-sm text-estate-charcoal/70">
            Thank you. Your inquiry has been received (demo — no backend
            connected).
          </p>
        ) : null}
      </form>
    </Card>
  );
}
