import type { ResumeData } from "../Resume.types";

interface ResumeHeaderProps {
  basics: ResumeData["basics"];
  email: string;
  phone: string;
}

export default function ResumeHeader({ basics, email, phone }: ResumeHeaderProps) {
  return (
    <header className="resume-header">
      <h1 className="resume-name">{basics.name}</h1>
      <p className="resume-contact">
        <span>{basics.location.address}</span>
        {email && (
          <>
            <span className="sep" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <a href={`mailto:${email}`}>{email}</a>
          </>
        )}
        {phone && (
          <>
            <span className="sep" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <span>{phone}</span>
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
  );
}
