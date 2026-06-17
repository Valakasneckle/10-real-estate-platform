import Link from "next/link";

const explore = [
  { href: "/properties", label: "Properties" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/agents", label: "Agents" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-estate-warm bg-estate-cream">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl text-estate-charcoal">
              EstateFlow
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-estate-charcoal/65">
              A premium real estate platform for property discovery, neighborhood
              insights, and trusted agent connections.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-estate-charcoal/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-estate-charcoal/70 hover:text-estate-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-estate-warm bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-estate-charcoal/50">
              Portfolio Project
            </p>
            <p className="mt-2 text-sm leading-6 text-estate-charcoal/65">
              Demonstrates real estate platform UX, listing architecture, and
              conversion-focused frontend development.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-estate-warm pt-6 text-xs text-estate-charcoal/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} EstateFlow. Portfolio demonstration.</span>
          <a
            href="https://real-estate-platform-website-three.vercel.app/"
            className="hover:text-estate-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </footer>
  );
}
