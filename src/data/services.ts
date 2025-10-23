import { IconAiGear } from "@/assets/icons";
import { IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons/services";

import { Service } from "@/types/service";

export const SERVICES: Service[] = [
  {
    id: "elevate",
    Icon: IconElevate,
    serviceTitle: "Elevate - Artificial Intelligence",
    title: "Powering Intelligent Transformation",
    description: "Unlock the power of AI with compliant, ready-to-use solutions that deliver results faster.",
    overview:
      "Unlock the power of enterprise-grade AI through reusable components and compliant practices. Our AI solutions are rigorously tested, scalable, and designed to integrate seamlessly into your existing systems. So you see faster, safer, and smarter outcomes.",
    image: "/svg/elevate.svg",
    tags: ["60+ Reusable Components", "ISO/IEC 42001 & AIAA Certified", "Agile & DevOps Practices"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature: "Accelerate AI adoption with 60+ reusable, compliant components.",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Deliver enterprise-grade intelligence powered by Agile and DevOps precision.",
      },
    ],
  },
  {
    id: "automate",
    Icon: IconAutomate,
    serviceTitle: "Automate - Process Excellence",
    title: "Simplifying Processes, Amplifying Performance",
    description: "Streamline critical processes with low-code automation that saves time and reduces errors.",
    overview:
      "Simplify critical processes with low-code automation tailored to regulated industries. By cutting cycle times, reducing errors, and ensuring compliance, we make operations more efficient and auditable-without unnecessary complexity.",
    image: "/svg/automate.svg",
    tags: ["Low-Code Frameworks", "Compliance-Ready for BFSI", "Reducing Errors"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature: "Streamline operations with low-code and no-code automation.",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Cut cycle times and reduce errors - without disrupting workflows.",
      },
    ],
  },
  {
    id: "evaluate",
    Icon: IconEvaluate,
    serviceTitle: "Evaluate - Data & Telemetry",
    title: "Turning Data into Decisive Action",
    description: "Gain real-time insights and dashboards to make confident, data-driven decisions.",
    overview:
      "Turn data into action with real-time insights and proactive monitoring. Our telemetry-driven dashboards provide clarity for decision-makers, ensuring accurate reporting and early resolution of potential issues.",
    image: "/svg/evaluate.svg",
    tags: ["Real-Time Telemetry", "Executive Dashboards", "Proactive Monitoring"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature: "Gain real-time visibility with trusted, telemetry-driven insights.",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Empower leaders to act fast with accurate, proactive data.",
      },
    ],
  },
  {
    id: "assure",
    Icon: IconAssure,
    serviceTitle: "Assure - Managed Platforms",
    title: "Building Confidence through Continuity",
    description: "Keep mission-critical platforms resilient, secure, and performing at their best.",
    overview:
      "Keep your mission-critical platforms resilient, secure, and compliant. From stability and uptime to optimized infrastructure, we ensure systems perform at their best. So your business never misses a beat.",
    image: "/svg/assure.svg",
    tags: ["Mission-Critical Stability", "Security Benchmarks", "Business Continuity"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature: "Keep mission-critical systems stable, secure, and compliant.",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Safeguard uptime and resilience with proactive monitoring.",
      },
    ],
  },
  {
    id: "augment",
    Icon: IconAugment,
    serviceTitle: "Augment - Talent on Demand",
    title: "Expanding Capability, On Demand",
    description: "Scale your teams flexibly with the right tech talent, when you need it.",
    overview:
      "Scale your IT capabilities with flexible talent models. Whether you need niche expertise or long-term support, we provide outcome-aligned professionals who integrate seamlessly into your teams, reducing overhead and accelerating delivery.",
    image: "/svg/augment.svg",
    tags: ["On-Demand IT Specialists", "Flexible Engagement Models", "Outcome-Driven Contracts"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature: "Scale your teams with certified, outcome-driven professionals.",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Access the right expertise, right when you need it.",
      },
    ],
  },
];
