import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
}

export default function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <>
      <h2 id={id} className="section-heading">
        {children}
      </h2>
      <hr className="section-rule" aria-hidden="true" />
    </>
  );
}
