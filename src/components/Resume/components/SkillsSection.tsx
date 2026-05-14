import type { ResumeData } from "../Resume.types";
import SectionHeading from "./SectionHeading";

interface SkillsSectionProps {
  skills: ResumeData["skills"];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <div className="entry skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-row">
            <span className="skill-label">{skill.name}:</span>
            <span>{skill.keywords.join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
