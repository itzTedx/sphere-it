import { JSX } from "react";

import { IconAiGear } from "@/assets/icons";
import { IconIso } from "@/assets/icons/iso";
import { IconPuzzle } from "@/assets/icons/puzzle";
import { IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons/services";

export interface Service {
  id: string;
  Icon: (props: SVGProps) => JSX.Element;
  image: string;
  title: string;
  description: string;
  overview: string;
  key: KeyFeature[];
  feature: {
    title: string;
    description: string;
    features: Feature[];
  };
}

export interface KeyFeature {
  id: number;
  Icon: (props: SVGProps) => JSX.Element;
  title: string;
  description: string;
}

export interface Feature {
  Icon: (props: SVGProps) => JSX.Element;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "elevate",
    Icon: IconElevate,
    image: "/svg/elevate.svg",
    title: "Enterprise-Grade Artificial Intelligence",
    description:
      "Harness AI that’s fast to deploy, compliant by design, and built for measurable outcomes. Powered by 60+ reusable components, ISO/IEC 42001 and AIAA-certified frameworks, and industry-recognized Agile and DevOps practices.",
    overview: `Elevate is Sphere IT’s AI-powered service that helps organizations adopt and scale Artificial Intelligence with precision and governance. Built in partnership with Grey Chain, Elevate runs on a weaved platform that integrates Retrieval-Augmented Generation (RAG) and vector technology to deliver context-rich insights and business-ready intelligence.
    Our platform connects people, data, and enterprise applications in a conversational way—bridging analytics, automation, and intelligence—so leaders can make faster, smarter, and safer decisions.`,
    key: [
      {
        id: 1,
        Icon: IconPuzzle,
        title: "Reusable Components",
        description:
          "Accelerate AI adoption with <strong>60+ reusable AI/ML modules,</strong> built for rapid customization and deployment across enterprise environments.",
      },
      {
        id: 2,
        Icon: IconIso,
        title: "Certified Frameworks",
        description:
          "Ensure governance, compliance, and ethical AI with <strong>ISO/IEC 42001, AIAA,</strong> and <strong>PMI CPMAI</strong> certifications, trusted by regulated industries like BFSI.",
      },
      {
        id: 3,
        Icon: IconAiGear,
        title: "Agile & DevOps Precision",
        description:
          "Deliver value faster with AI development built on <strong>Agile</strong> principles and continuous integration through <strong>DevOps pipelines.</strong>",
      },
    ],
    feature: {
      title: "Enterprise Automation and Optimization Framework",
      description:
        "From predictive analytics to intelligent workflow automation, Elevate provides a unified framework that empowers teams, streamlines operations, and uncovers opportunities for smarter, data-driven growth.",
      features: [
        {
          Icon: IconPuzzle,
          title: "Process Automation",
          description:
            "Automate repetitive workflows across finance, HR, logistics, and operations—freeing your teams to focus on higher-value initiatives.",
        },
        {
          Icon: IconPuzzle,
          title: "AI-Driven Insights",
          description:
            "Leverage predictive analytics to make faster, data-backed decisions that improve accuracy and business foresight.",
        },
        {
          Icon: IconPuzzle,
          title: "System Integration",
          description:
            "Connect your entire tech ecosystem seamlessly—CRMs, ERPs, and communication tools—for a single, cohesive flow of information.",
        },
        {
          Icon: IconPuzzle,
          title: "Performance Intelligence",
          description:
            "Gain total visibility with real-time dashboards and reporting that enhance performance, reliability, and accountability.",
        },
        {
          Icon: IconPuzzle,
          title: "Scalable Infrastructure",
          description:
            "Deploy modular automation that evolves with your business, supporting agility, growth, and long-term innovation.",
        },
      ],
    },
  },
  {
    id: "automate",
    Icon: IconAutomate,
    image: "/svg/automate.svg",
    title: "Simplifying Processes, Amplifying Performance",
    description: "Streamline critical processes with low-code automation that saves time and reduces errors.",
    overview:
      "Simplify critical processes with low-code automation tailored to regulated industries. By cutting cycle times, reducing errors, and ensuring compliance, we make operations more efficient and auditable-without unnecessary complexity.",
    key: [
      {
        id: 1,
        Icon: IconPuzzle,
        title: "Reusable Components",
        description:
          "Accelerate AI adoption with <strong>60+ reusable AI/ML modules,</strong> built for rapid customization and deployment across enterprise environments.",
      },
      {
        id: 2,
        Icon: IconPuzzle,
        title: "Certified Frameworks",
        description:
          "Ensure governance, compliance, and ethical AI with <strong>ISO/IEC 42001, AIAA,</strong> and <strong>PMI CPMAI</strong> certifications, trusted by regulated industries like BFSI.",
      },
      {
        id: 3,
        Icon: IconPuzzle,
        title: "Agile & DevOps Precision",
        description:
          "Deliver value faster with AI development built on <strong>Agile</strong> principles and continuous integration through <strong>DevOps pipelines.</strong>",
      },
    ],
  },
  {
    id: "evaluate",
    Icon: IconEvaluate,
    image: "/svg/evaluate.svg",
    title: "Turning Data into Decisive Action",
    description: "Gain real-time insights and dashboards to make confident, data-driven decisions.",
    overview:
      "Turn data into action with real-time insights and proactive monitoring. Our telemetry-driven dashboards provide clarity for decision-makers, ensuring accurate reporting and early resolution of potential issues.",
    key: [
      {
        id: 1,
        Icon: IconPuzzle,
        title: "Reusable Components",
        description:
          "Accelerate AI adoption with <strong>60+ reusable AI/ML modules,</strong> built for rapid customization and deployment across enterprise environments.",
      },
      {
        id: 2,
        Icon: IconPuzzle,
        title: "Certified Frameworks",
        description:
          "Ensure governance, compliance, and ethical AI with <strong>ISO/IEC 42001, AIAA,</strong> and <strong>PMI CPMAI</strong> certifications, trusted by regulated industries like BFSI.",
      },
      {
        id: 3,
        Icon: IconPuzzle,
        title: "Agile & DevOps Precision",
        description:
          "Deliver value faster with AI development built on <strong>Agile</strong> principles and continuous integration through <strong>DevOps pipelines.</strong>",
      },
    ],
  },
  {
    id: "assure",
    Icon: IconAssure,
    image: "/svg/assure.svg",
    title: "Building Confidence through Continuity",
    description: "Keep mission-critical platforms resilient, secure, and performing at their best.",
    overview:
      "Keep your mission-critical platforms resilient, secure, and compliant. From stability and uptime to optimized infrastructure, we ensure systems perform at their best. So your business never misses a beat.",
    key: [
      {
        id: 1,
        Icon: IconPuzzle,
        title: "Reusable Components",
        description:
          "Accelerate AI adoption with <strong>60+ reusable AI/ML modules,</strong> built for rapid customization and deployment across enterprise environments.",
      },
      {
        id: 2,
        Icon: IconPuzzle,
        title: "Certified Frameworks",
        description:
          "Ensure governance, compliance, and ethical AI with <strong>ISO/IEC 42001, AIAA,</strong> and <strong>PMI CPMAI</strong> certifications, trusted by regulated industries like BFSI.",
      },
      {
        id: 3,
        Icon: IconPuzzle,
        title: "Agile & DevOps Precision",
        description:
          "Deliver value faster with AI development built on <strong>Agile</strong> principles and continuous integration through <strong>DevOps pipelines.</strong>",
      },
    ],
  },
  {
    id: "augment",
    Icon: IconAugment,
    image: "/svg/augment.svg",
    title: "Expanding Capability, On Demand",
    description: "Scale your teams flexibly with the right tech talent, when you need it.",
    overview:
      "Scale your IT capabilities with flexible talent models. Whether you need niche expertise or long-term support, we provide outcome-aligned professionals who integrate seamlessly into your teams, reducing overhead and accelerating delivery.",
    key: [
      {
        id: 1,
        Icon: IconPuzzle,
        title: "Reusable Components",
        description:
          "Accelerate AI adoption with <strong>60+ reusable AI/ML modules,</strong> built for rapid customization and deployment across enterprise environments.",
      },
      {
        id: 2,
        Icon: IconPuzzle,
        title: "Certified Frameworks",
        description:
          "Ensure governance, compliance, and ethical AI with <strong>ISO/IEC 42001, AIAA,</strong> and <strong>PMI CPMAI</strong> certifications, trusted by regulated industries like BFSI.",
      },
      {
        id: 3,
        Icon: IconPuzzle,
        title: "Agile & DevOps Precision",
        description:
          "Deliver value faster with AI development built on <strong>Agile</strong> principles and continuous integration through <strong>DevOps pipelines.</strong>",
      },
    ],
  },
];
