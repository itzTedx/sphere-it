import { z } from "zod";

import { workMode } from "@/modules/form/validators/job-application-schema";

export type RoleType = {
  id: number;
  department: string;
  title: string;
  description: string;
  location: string;
  time: string;
  workMode: z.infer<typeof workMode>;
  content: string;
};

export const ROLES: RoleType[] = [
  {
    id: 1,
    department: "Engineering",
    title: "AI Solutions Architect",
    description:
      "Lead the design and deployment of enterprise-grade AI solutions, integrating analytics and automation for BFSI clients.",
    location: "Dubai, UAE",
    time: "Full Time",
    workMode: "on-site",
    content: `
      ## Build the Future of Technology with Precision and Purpose

      At **Sphere IT**, we believe in empowering people who combine **clarity of thought** with the **courage to innovate**.  
      Whether you’re engineering intelligent platforms or delivering complex enterprise transformations, your work here shapes industries.

      Our teams work across **AI, BFSI, government, and enterprise ecosystems** — designing intelligent solutions that transform how businesses operate.  
      We’re not just building technology; we’re building **impact, trust, and global excellence**.

      ### Role Overview
      You’ll design and deploy intelligent, scalable systems that bring **machine learning and automation** to life across enterprise environments.  
      Your work bridges business strategy and advanced technology, helping clients unlock measurable value through AI.

      ### Key Responsibilities
      - Architect AI and data-driven platforms for BFSI and enterprise clients.  
      - Lead end-to-end delivery — from concept and data modeling to deployment and optimization.  
      - Collaborate across teams to integrate AI into existing digital ecosystems.  
      - Ensure compliance, data integrity, and system reliability.  
      - Research and implement emerging AI frameworks.

      ### Ideal Candidate Profile
      - 7+ years in AI/ML architecture or intelligent systems design.  
      - Proficient in **Python**, **TensorFlow/PyTorch**, and **cloud environments** (AWS/Azure/GCP).  
      - Strong grasp of data governance and security frameworks.  
      - Excellent communication and problem-solving skills.

      ### What You’ll Get
      - Opportunity to architect solutions used by **global enterprises**.  
      - Collaboration with **AIAA-certified experts** and industry leaders.  
      - Global project exposure and professional certifications.  
      - A culture built on precision, integrity, and innovation.
    `,
  },
  {
    id: 2,
    department: "Engineering",
    title: "Full Stack Engineer",
    description: "Develop robust and high-performing web applications powering our digital platforms.",
    location: "Remote / Hybrid",
    time: "Full Time",
    workMode: "hybrid",
    content: `
      ## Build the Future of Technology with Precision and Purpose

      At **Sphere IT**, we believe in empowering people who combine **clarity of thought** with the **courage to innovate**.  
      Whether you’re engineering intelligent platforms or delivering complex enterprise transformations, your work here shapes industries.

      Our teams work across **AI, BFSI, government, and enterprise ecosystems** — designing intelligent solutions that transform how businesses operate.  
      We’re not just building technology; we’re building **impact, trust, and global excellence**.

      #### Role Overview
      You’ll develop scalable, secure web applications that power Sphere IT’s products and client systems.  
      As part of a cross-functional engineering team, you’ll own both backend and frontend development to deliver flawless user experiences.

      #### Key Responsibilities
      - Build APIs, microservices, and responsive front-end interfaces.  
      - Implement CI/CD pipelines and testing automation.  
      - Collaborate with UI/UX teams to create intuitive, modern interfaces.  
      - Optimize performance, reliability, and security across deployments.

      #### Ideal Candidate Profile
      - 3–6 years of full-stack development experience.  
      - Skilled in **Next.js / React, Node.js, TypeScript**, and **PostgreSQL**.  
      - Familiarity with **Drizzle ORM** and **microservice architecture**.  
      - Strong debugging, collaboration, and system design skills.

      #### What You’ll Get
      - Ownership of production-grade enterprise applications.  
      - Learning opportunities from senior engineers and solution architects.  
      - Flexible hybrid work and global exposure.  
      - Growth-oriented culture with clear progression paths.
    `,
  },
  {
    id: 3,
    department: "Engineering",
    title: "Data Engineer",
    description: "Build and optimize data pipelines supporting AI and analytics systems.",
    location: "Remote",
    time: "Full Time",
    workMode: "hybrid",
    content: `
      # Build the Future of Technology with Precision and Purpose

      At **Sphere IT**, we believe in empowering people who combine **clarity of thought** with the **courage to innovate**.  
      Whether you’re engineering intelligent platforms or delivering complex enterprise transformations, your work here shapes industries.

      Our teams work across **AI, BFSI, government, and enterprise ecosystems** — designing intelligent solutions that transform how businesses operate.  
      We’re not just building technology; we’re building **impact, trust, and global excellence**.

      #### Role Overview
You’ll design and manage the data infrastructure that fuels our AI and analytics initiatives.  
Your role ensures the availability, reliability, and quality of data that drives intelligent decisions across enterprises.

#### Key Responsibilities
- Build and optimize **ETL/ELT pipelines** and data architectures.  
- Collaborate with ML and AI teams to operationalize models.  
- Maintain data quality, lineage, and compliance.  
- Automate data workflows and deploy scalable systems.

#### Ideal Candidate Profile
- 3–6 years of experience in data engineering.  
- Skilled in **Python, SQL, Airflow**, and **Azure Data Factory**.  
- Knowledge of cloud storage and streaming platforms.  
- Analytical mindset with strong problem-solving ability.

#### What You’ll Get
- Access to enterprise-level AI and data transformation projects.  
- Continuous learning through certifications and technical labs.  
- Inclusive, innovation-driven environment.  
- Impactful work across industries and geographies.
    `,
  },
  {
    id: 4,
    department: "PMO / Operations",
    title: "Project Delivery Manager",
    description: "Manage end-to-end delivery for transformation projects across BFSI and enterprise clients.",
    location: "Dubai, UAE",
    time: "Full Time",
    workMode: "remote",
    content: `
      ## Build the Future of Technology with Precision and Purpose

      At **Sphere IT**, we believe in empowering people who combine **clarity of thought** with the **courage to innovate**.  
      Whether you’re engineering intelligent platforms or delivering complex enterprise transformations, your work here shapes industries.

      Our teams work across **AI, BFSI, government, and enterprise ecosystems** — designing intelligent solutions that transform how businesses operate.  
      We’re not just building technology; we’re building **impact, trust, and global excellence**.

      #### Role Overview
You’ll lead the delivery of **enterprise transformation projects**, ensuring outcomes that exceed client expectations.  
This role balances delivery excellence, people management, and operational clarity.

#### Key Responsibilities
- Manage project timelines, budgets, and delivery quality.  
- Lead Agile ceremonies and align cross-functional teams.  
- Build strong client relationships and ensure satisfaction.  
- Monitor risks, KPIs, and project performance metrics.

#### Ideal Candidate Profile
- 6+ years in project or program management.  
- **PMP, Agile, or Scrum certification** preferred.  
- Proven ability to lead distributed teams and manage enterprise-scale programs.  
- Exceptional communication and analytical thinking.

#### What You’ll Get
- Strategic visibility across multi-sector projects.  
- Leadership mentorship and global coordination experience.  
- A people-first culture that emphasizes accountability and trust.  
- Recognition for delivery excellence.
    `,
  },
  {
    id: 5,
    department: "Human Resources",
    title: "HR & Talent Specialist",
    description: "Shape the culture of innovation by recruiting top-tier talent and building engagement initiatives.",
    location: "Bangalore, India",
    time: "Full Time",
    workMode: "hybrid",
    content: `
      # Build the Future of Technology with Precision and Purpose

      At **Sphere IT**, we believe in empowering people who combine **clarity of thought** with the **courage to innovate**.  
      Whether you’re engineering intelligent platforms or delivering complex enterprise transformations, your work here shapes industries.

      Our teams work across **AI, BFSI, government, and enterprise ecosystems** — designing intelligent solutions that transform how businesses operate.  
      We’re not just building technology; we’re building **impact, trust, and global excellence**.

      #### Role Overview
You’ll shape the people strategy that defines Sphere IT’s culture — hiring exceptional talent, nurturing development, and ensuring every team member thrives.

#### Key Responsibilities
- Manage full-cycle recruitment across technical and business roles.  
- Partner with leadership to define hiring plans and success metrics.  
- Execute onboarding, training, and engagement programs.  
- Promote diversity, inclusion, and a positive employee experience.

#### Ideal Candidate Profile
- 4+ years of HR or talent acquisition experience.  
- Strong skills in **ATS systems**, candidate experience, and communication.  
- Background in technology or consulting preferred.  
- Passion for growth, culture, and people development.

#### What You’ll Get
- Opportunity to build a people-first, globally connected culture.  
- Access to leadership mentorship and HR innovation programs.  
- Recognition for strategic and creative HR initiatives.  
- A collaborative team that values empathy, skill, and trust.
    `,
  },
];
