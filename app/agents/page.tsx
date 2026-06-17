import { AgentCard } from "@/components/real-estate/AgentCard";
import { agents } from "@/data/agents";

export const metadata = {
  title: "Agents",
};

export default function AgentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-10">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl tracking-tight text-estate-charcoal">
          Our agents
        </h1>
        <p className="mt-3 text-base leading-7 text-estate-charcoal/70">
          Licensed professionals with deep local expertise. Each advisor brings
          market knowledge, negotiation skill, and a client-first approach to
          every transaction.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {agents.map((a) => (
          <AgentCard key={a.id} agent={a} />
        ))}
      </div>
    </div>
  );
}
