import type { ReactNode } from "react";

interface TwoColumnRowProps {
  left: ReactNode;
  right: ReactNode;
}

export default function TwoColumnRow({ left, right }: TwoColumnRowProps) {
  return (
    <div className="two-col">
      <span>{left}</span>
      <span className="right">{right}</span>
    </div>
  );
}
