import { ContactForm } from "@/components/real-estate/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-10">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="font-display text-4xl tracking-tight text-estate-charcoal">
            Contact us
          </h1>
          <p className="mt-4 text-base leading-7 text-estate-charcoal/70">
            Request a viewing, ask about a neighborhood, or speak with an agent
            about your property goals. We typically respond within one business
            day.
          </p>

          <div className="mt-8 space-y-4">
            <Card className="flex items-start gap-3 p-5">
              <Mail className="mt-0.5 h-5 w-5 text-estate-gold" />
              <div>
                <p className="text-sm font-medium text-estate-charcoal">Email</p>
                <a
                  href="mailto:hello@estateflow.example"
                  className="text-sm text-estate-charcoal/65 hover:text-estate-gold"
                >
                  hello@estateflow.example
                </a>
              </div>
            </Card>
            <Card className="flex items-start gap-3 p-5">
              <Phone className="mt-0.5 h-5 w-5 text-estate-gold" />
              <div>
                <p className="text-sm font-medium text-estate-charcoal">Phone</p>
                <a
                  href="tel:+15550001234"
                  className="text-sm text-estate-charcoal/65 hover:text-estate-gold"
                >
                  +1 (555) 000-1234
                </a>
              </div>
            </Card>
            <Card className="flex items-start gap-3 p-5">
              <MapPin className="mt-0.5 h-5 w-5 text-estate-gold" />
              <div>
                <p className="text-sm font-medium text-estate-charcoal">
                  Coverage
                </p>
                <p className="text-sm text-estate-charcoal/65">
                  Nationwide portfolio markets — Boston, Austin, Chicago, and
                  more.
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm subject="EstateFlow — General Inquiry" />
        </div>
      </div>
    </div>
  );
}
