import { TimelineCard } from "@/components/ui/timeline-card";
import { achievements } from "@/data/achievements";

export function Achievements() {
  const awards = achievements.filter((item) => item.kind === "award");
  const certificates = achievements.filter((item) => item.kind === "certificate");

  return (
    <>
      <ol className="flex flex-col gap-12">
        {awards.map((award) => (
          <TimelineCard
            key={award.id}
            entry={{
              id: award.id,
              period: award.date,
              title: award.title,
              org: award.issuer,
              summary: award.summary ?? "",
              tags: [],
            }}
          />
        ))}
      </ol>

      <h3 className="type-mono-section mt-16 text-fg-muted">Certifications</h3>
      <ul className="mt-6 flex flex-col gap-4">
        {certificates.map((certificate) => (
          <li key={certificate.id} className="flex flex-col gap-1 md:grid md:grid-cols-[9rem_1fr] md:gap-6">
            <p className="type-mono-meta pt-0.5 text-fg-muted">{certificate.date}</p>
            <p className="type-body-sm text-fg-secondary">
              <span className="text-fg">{certificate.title}</span> · {certificate.issuer}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
