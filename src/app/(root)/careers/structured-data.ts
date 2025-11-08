import { BASE_URL, COMPANY_NAME } from "@/data/site-config";

import { ROLES } from "./data/mockup-roles";

function mapWorkModeToEmploymentType(workMode: string): string {
  const modeMap: Record<string, string> = {
    "on-site": "FULL_TIME",
    remote: "FULL_TIME",
    hybrid: "FULL_TIME",
  };
  return modeMap[workMode] || "FULL_TIME";
}

function parseLocation(location: string): { city?: string; country?: string } {
  const parts = location.split(",").map((part) => part.trim());
  if (parts.length >= 2) {
    return {
      city: parts[0],
      country: parts[1],
    };
  }
  if (location.toLowerCase().includes("remote")) {
    return {
      city: "Remote",
    };
  }
  return {
    city: location,
  };
}

export const jobPostingStructuredData = ROLES.map((role) => {
  const location = parseLocation(role.location);
  const isRemote = role.workMode === "remote" || role.location.toLowerCase().includes("remote");

  const jobLocation: {
    "@type": "Place";
    address: {
      "@type": "PostalAddress";
      addressLocality?: string;
      addressCountry: string;
      addressRegion?: string;
    };
    jobLocationType?: string;
  } = {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressCountry: location.country || "AE",
      ...(location.country && { addressRegion: location.country }),
    },
    ...(isRemote && { jobLocationType: "TELECOMMUTE" }),
  };

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.description,
    datePosted: new Date().toISOString(),
    employmentType: mapWorkModeToEmploymentType(role.workMode),
    jobLocation,
    hiringOrganization: {
      "@type": "Organization",
      name: COMPANY_NAME,
      sameAs: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
    },
    identifier: {
      "@type": "PropertyValue",
      name: COMPANY_NAME,
      value: role.id.toString(),
    },
    url: `${BASE_URL}/careers/${role.id}`,
    workHours: role.time,
  };
});

export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Careers",
      item: `${BASE_URL}/careers`,
    },
  ],
};

export const structuredData = [...jobPostingStructuredData, breadcrumbStructuredData];
