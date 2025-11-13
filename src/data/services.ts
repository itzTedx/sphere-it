import { IconAiGear } from "@/assets/icons";
import { IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons/services";

import { Service } from "@/types/service";

export const SERVICES: Service[] = [
  {
    id: "elevate",
    Icon: IconElevate,
    serviceTitle: "Elevate - Artificial Intelligence",
    title: "Powering Intelligent Transformation",
    description: "Enterprise AI built for speed, scale, and precision.",
    overview:
      "Unlock the power of enterprise-grade AI through reusable components and compliant practices. Our AI solutions are rigorously tested, scalable, and designed to integrate seamlessly into your existing systems. So you see faster, safer, and smarter outcomes.",
    image: "/images/services/elevate.png",
    tags: ["60+ Reusable Components", "ISO/IEC 42001 & AIAA Certified", "Agile & DevOps Practices"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature: "Enterprise grade Artificial Intelligence platform. ",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Development with 60+ reuse accelerators. ",
      },
    ],
    partners: ["/images/partners/grey-chain.svg", "/images/partners/ms-copilot.svg"],
  },
  {
    id: "automate",
    Icon: IconAutomate,
    serviceTitle: "Automate - Process Excellence",
    title: "Simplifying Processes, Amplifying Performance",
    description: "Technology enabled process engineering for measurable business outcomes.",
    overview:
      "Simplify critical processes with low-code automation tailored to regulated industries. By cutting cycle times, reducing errors, and ensuring compliance, we make operations more efficient and auditable-without unnecessary complexity.",
    image: "/images/services/automate.png",
    tags: ["Low-Code Frameworks", "Compliance-Ready for BFSI", "Reducing Errors"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature:
          "Business process re-engineering to streamline core workflows, demonstrate early value, and adopt best-fit technologies.",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Leverages RPA, low-code, and custom tools to automate and orchestrate rule-based processes.",
      },
    ],
    partners: ["/images/partners/power-automate.png", "/images/partners/ui-path.svg", "/images/partners/camunda.svg"],
  },
  {
    id: "evaluate",
    Icon: IconEvaluate,
    serviceTitle: "Evaluate - Data & Telemetry",
    title: "Turning Data into Decisive Action",
    description: "Master Data Management strategy with real-time, data-driven telemetry.",
    overview:
      "Turn data into action with real-time insights and proactive monitoring. Our telemetry-driven dashboards provide clarity for decision-makers, ensuring accurate reporting and early resolution of potential issues.",
    image: "/images/services/evaluate.png",
    tags: ["Real-Time Telemetry", "Executive Dashboards", "Proactive Monitoring"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature: "Real-time endpoint and application insights with proactive, data-driven telemetry.",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Trusted dashboards that deliver accurate real-time insights for executive decisions.",
      },
    ],
    partners: ["/images/partners/nexthink.svg", "/images/partners/strategy.svg", "/images/partners/snowflake.svg"],
  },
  {
    id: "assure",
    Icon: IconAssure,
    serviceTitle: "Assure - Managed Platforms",
    title: "Building Confidence through Continuity",
    description: "Implementation and managed services for core applications and infrastructure.",
    overview:
      "Keep your mission-critical platforms resilient, secure, and compliant. From stability and uptime to optimized infrastructure, we ensure systems perform at their best. So your business never misses a beat.",
    image: "/images/services/assure.png",
    tags: ["Mission-Critical Stability", "Security Benchmarks"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature: "Mission-critical banking platforms kept stable, secure, and compliant.",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Core infrastructure kept resilient, available, and optimized.",
      },
    ],
    partners: [
      "/images/partners/comarch.svg",
      "/images/partners/traydstream.webp",
      "/images/partners/yogosha.svg",
      "/images/partners/solarwinds.svg",
      "/images/partners/manage-engine.svg",
    ],
  },
  {
    id: "augment",
    Icon: IconAugment,
    serviceTitle: "Augment - Talent on Demand",
    title: "Expanding Capability, On Demand",
    description: "Outcome-driven technology talent that scales with your digital journey.",
    overview:
      "Scale your IT capabilities with flexible talent models. Whether you need niche expertise or long-term support, we provide outcome-aligned professionals who integrate seamlessly into your teams, reducing overhead and accelerating delivery.",
    image: "/images/services/augment.png",
    tags: ["On-Demand IT Specialists", "Flexible Engagement Models", "Outcome-Driven Contracts", "Scalable Talent"],
    lists: [
      {
        id: 1,
        Icon: IconAiGear,
        feature: "Technology talent augmentation to support CIO and CTO-led digital initiatives.",
      },
      {
        id: 2,
        Icon: IconAiGear,
        feature: "Flexible engagement models with outcome-aligned contracts.",
      },
    ],
  },
];
