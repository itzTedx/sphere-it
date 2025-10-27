export const TEAMS: Team[] = [
  {
    name: "Akansha Saran",
    designation: "Technical Recruiter",
    image: "/images/team/akansha-saran.webp",
  },
  {
    name: "Avin Dcosta",
    designation: "Senior Techinical Recruiter",
    image: "/images/team/avin-dcosta.webp",
  },
  {
    name: "Bhakti Godbole",
    designation: "Technical IT Recruiter",
    image: "/images/team/bhakti-godbole.webp",
  },
  {
    name: "Karisma Krishnan",
    designation: "Technical IT Recruiter",
    image: "/images/team/karisma-krishnan.webp",
  },
  {
    name: "Abdul Rahman",
    designation: "Backend Engineer",
    image: "/images/team/abdul-rahman.webp",
  },
];

export type Team = {
  name: string;
  image: `/images/team/${string}`;
  designation: string;
  linkedin?: string;
};
