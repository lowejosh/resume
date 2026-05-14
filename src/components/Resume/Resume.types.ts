export interface ResumeData {
  basics: {
    name: string;
    location: { address: string };
    website: string;
    linkedin: string;
  };
  education: Array<{
    institution: string;
    studyType: string;
    area: string;
    location: string;
    startDate: string;
    endDate: string;
  }>;
  work: Array<{
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    highlights: string[];
  }>;
  skills: Array<{
    name: string;
    keywords: string[];
  }>;
  projects: Array<{
    name: string;
    keywords: string[];
    url: string;
    description: string;
  }>;
}
