import type { ResumeData } from "../Resume.types";
import SectionHeading from "./SectionHeading";
import TwoColumnRow from "./TwoColumnRow";

interface WorkSectionProps {
  work: ResumeData["work"];
}

export default function WorkSection({ work }: WorkSectionProps) {
  return (
    <section aria-labelledby="work-heading">
      <SectionHeading id="work-heading">Work Experience</SectionHeading>
      {work.map((job) => (
        <div key={`${job.company}-${job.startDate}`} className="entry">
          <TwoColumnRow
            left={<strong>{job.company}</strong>}
            right={job.location}
          />
          <TwoColumnRow
            left={<em>{job.position}</em>}
            right={`${job.startDate} - ${job.endDate}`}
          />
          <ul aria-label={`Highlights at ${job.company}`}>
            {job.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
