import type { ResumeData } from "../Resume.types";
import SectionHeading from "./SectionHeading";
import TwoColumnRow from "./TwoColumnRow";

interface EducationSectionProps {
  education: ResumeData["education"];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section aria-labelledby="education-heading">
      <SectionHeading id="education-heading">Education</SectionHeading>
      {education.map((edu) => (
        <div key={edu.institution} className="entry">
          <TwoColumnRow
            left={<strong>{edu.institution}</strong>}
            right={edu.location}
          />
          <TwoColumnRow
            left={`${edu.studyType} ${edu.area}`}
            right={`${edu.startDate} - ${edu.endDate}`}
          />
        </div>
      ))}
    </section>
  );
}
