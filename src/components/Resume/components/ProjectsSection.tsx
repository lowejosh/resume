import type { ResumeData } from "../Resume.types";
import SectionHeading from "./SectionHeading";

interface ProjectsSectionProps {
  projects: ResumeData["projects"];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      {projects.map((project) => (
        <div key={project.name} className="entry">
          <div className="project-header">
            <span>
              <strong>{project.name}</strong>{" "}
              <em className="project-keywords">{project.keywords.join(", ")}</em>
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
  );
}
