import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { AgentCard } from "@/components/real-estate/AgentCard";
import { agents } from "@/data/agents";
import { Button } from "@/components/ui/Button";

export function Agents() {
  return (
    <Section
      eyebrow="Our agents"
      title="Work with trusted advisors"
      description="Licensed professionals who know their markets and prioritize your goals."
      className="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {agents.map((a) => (
          <AgentCard key={a.id} agent={a} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/agents">
          <Button variant="outline">Meet all agents</Button>
        </Link>
      </div>
    </Section>
  );
}
