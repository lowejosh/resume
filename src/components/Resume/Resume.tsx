import type { ResumeData } from "./Resume.types";
import resumeData from "../../data/resume.json";
import ResumeHeader from "./components/ResumeHeader";
import EducationSection from "./components/EducationSection";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import "./Resume.css";

const data = resumeData as ResumeData;

const CONTACT_EMAIL = import.meta.env.VITE_EMAIL ?? "";
const CONTACT_PHONE = import.meta.env.VITE_PHONE ?? "";

export default function Resume() {
  const { basics, education, work, skills, projects } = data;

  return (
    <main className="resume" aria-label="Resume">
      <ResumeHeader basics={basics} email={CONTACT_EMAIL} phone={CONTACT_PHONE} />
      <EducationSection education={education} />
      <WorkSection work={work} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
    </main>
  );
}
