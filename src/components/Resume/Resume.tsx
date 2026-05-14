import type { ResumeData } from "./Resume.types";
import resumeData from "../../data/resume.json";
import SectionHeading from "./components/SectionHeading";
import TwoColumnRow from "./components/TwoColumnRow";
import "./Resume.css";

const data = resumeData as ResumeData;

const CONTACT_EMAIL = import.meta.env.VITE_EMAIL ?? "";
const CONTACT_PHONE = import.meta.env.VITE_PHONE ?? "";

export default function Resume() {
  const { basics, education, work, skills, projects } = data;

  return (
    <main className="resume" aria-label="Resume">
      {/* Header */}
      <header className="resume-header">
        <h1 className="resume-name">{basics.name}</h1>
        <p className="resume-contact">
          <span>{basics.location.address}</span>
          {CONTACT_EMAIL && (
            <>
              <span className="sep" aria-hidden="true">
                {" "}
                ·{" "}
              </span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </>
          )}
          {CONTACT_PHONE && (
            <>
              <span className="sep" aria-hidden="true">
                {" "}
                ·{" "}
              </span>
              <span>{CONTACT_PHONE}</span>
            </>
          )}
          <span className="sep" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <a href={basics.website} target="_blank" rel="noopener noreferrer">
            {basics.website.replace("https://", "")}
          </a>
          <span className="sep" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <a href={basics.linkedin} target="_blank" rel="noopener noreferrer">
            {basics.linkedin.replace("https://", "")}
          </a>
        </p>
      </header>

      {/* Education */}
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

      {/* Work Experience */}
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

      {/* Skills */}
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

      {/* Projects */}
      <section aria-labelledby="projects-heading">
        <SectionHeading id="projects-heading">Projects</SectionHeading>
        {projects.map((project) => (
          <div key={project.name} className="entry">
            <div className="project-header">
              <span>
                <strong>{project.name}</strong>{" "}
                <em className="project-keywords">
                  {project.keywords.join(", ")}
                </em>
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-url"
              >
                {project.url.replace("https://", "")}
              </a>
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
