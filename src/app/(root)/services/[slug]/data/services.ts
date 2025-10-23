import { JSX } from "react";

import { IconAiGear, IconBank } from "@/assets/icons";
import { IconIso } from "@/assets/icons/iso";
import { IconPuzzle } from "@/assets/icons/puzzle";
import { IconAssure, IconAugment, IconAutomate, IconElevate, IconEvaluate } from "@/assets/icons/services";

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

    transformation: {
      features: [
        {
          image: "/svg/growth.svg",
          title: "Accelerated Growth",
          description:
            "Deploy scalable AI solutions that reduce costs, boost operational efficiency, and unlock new revenue opportunities.",
        },
        {
          image: "/svg/data.svg",
          title: "Turn Data Into Action",
          description:
            "Transform raw data into predictive insights that help you make faster, smarter business decisions with measurable impact.",
        },
        {
          image: "/svg/scale.svg",
          title: "Scale Seamlessly",
          description:
            "Expand your AI architecture effortlessly as your business grows—ensuring agility, reliability, and long-term value.",
        },
      ],
      metrics: [
        {
          value: "30-60%",
          description: "Reduction in operational costs through process optimization and intelligent automation.",
        },
        {
          value: "Up to 2×",
          description: "Faster process turnaround, enabling teams to focus on innovation and strategic priorities.",
        },
        {
          value: "Improved",
          description: "Data accuracy and compliance, minimizing human error and strengthening governance.",
        },
        {
          value: "Greater",
          description: "Transparency across workflows for smarter, accountable decision-making.",
        },
      ],
    },
    industries: [
      {
        Icon: IconBank,
        title: "Banking",
        description:
          "Regulatory insights, compliance tracking, risk analytics, and customer intelligence to improve decisions and speed to value.",
      },
      {
        Icon: IconBank,
        title: "Insurance",
        description:
          "Claims analytics, fraud detection, and policy servicing powered by governed, reusable AI components.",
      },
      {
        Icon: IconBank,
        title: "Conglomerates <span>(Enterprise Groups)</span>",
        description:
          "Cross-unit knowledge access and decision support “ask once, know all” for leaders across diverse businesses.",
      },
      {
        Icon: IconBank,
        title: "Telecommunications",
        description:
          "AI-assisted service insights and network-operations decision support to improve performance and customer experience.",
      },
      {
        Icon: IconBank,
        title: "Energy & Utilities",
        description:
          "Forecasting and operations decisioning that supports reliability, safety, and compliance at scale.",
      },
    ],
  },
  {
    id: "automate",
    Icon: IconAutomate,
    image: "/svg/automate.svg",
    title: "Streamline Core Processes. Accelerate Growth.",
    description:
      "Simplify how work gets done with low-code and no-code automation designed for regulated industries. Built using UiPath, Camunda, and Microsoft Power Automate, Automate delivers precision, compliance, and scalability",
    overview:
      "Simplify critical processes with low-code automation tailored to regulated industries. By cutting cycle times, reducing errors, and ensuring compliance, we make operations more efficient and auditable-without unnecessary complexity.",
    key: [
      {
        id: 1,
        Icon: IconPuzzle,
        title: "Packaged Automation",
        description:
          "Industry-ready automation templates built for BFSI processes—loan processing, KYC, and compliance reporting.",
      },
      {
        id: 2,
        Icon: IconPuzzle,
        title: "Low-Code Efficiency",
        description:
          "Rapid configuration and deployment with minimal coding—reducing cycle times and freeing teams for high-value work.",
      },
      {
        id: 3,
        Icon: IconPuzzle,
        title: "Auditable & Scalable",
        description:
          "Transparent logs and traceability for every workflow; scalability without heavy development overhead.",
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

    transformation: {
      features: [
        {
          image: "/svg/growth.svg",
          title: "Accelerated Growth",
          description:
            "Deploy scalable AI solutions that reduce costs, boost operational efficiency, and unlock new revenue opportunities.",
        },
        {
          image: "/svg/data.svg",
          title: "Turn Data Into Action",
          description:
            "Transform raw data into predictive insights that help you make faster, smarter business decisions with measurable impact.",
        },
        {
          image: "/svg/scale.svg",
          title: "Scale Seamlessly",
          description:
            "Expand your AI architecture effortlessly as your business grows—ensuring agility, reliability, and long-term value.",
        },
      ],
      metrics: [
        {
          value: "30–50%",
          description: " Reduction in operational effort through process automation.",
        },
        {
          value: "2× Faster",
          description: "Turnaround for repetitive workflows like compliance reporting and claims processing.",
        },
        {
          value: "Zero-Error Tolerance",
          description: "Automation fine-tuned to industry regulations for accuracy and compliance.",
        },
        {
          value: "Scalable Frameworks",
          description: "Adapt quickly to changing business needs without over-engineering.",
        },
      ],
    },
    industries: [
      {
        Icon: IconBank,
        title: "Banking & Financial Services",
        description:
          "Regulatory insights, compliance tracking, risk analytics, and customer intelligence to improve decisions and speed to value.",
      },
      {
        Icon: IconBank,
        title: "Insurance",
        description: "Claims management and underwriting automation.",
      },
      {
        Icon: IconBank,
        title: "Fintech",
        description: "Scalable low-code frameworks for rapid growth.",
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

    transformation: {
      features: [
        {
          image: "/svg/growth.svg",
          title: "Accelerated Growth",
          description:
            "Deploy scalable AI solutions that reduce costs, boost operational efficiency, and unlock new revenue opportunities.",
        },
        {
          image: "/svg/data.svg",
          title: "Turn Data Into Action",
          description:
            "Transform raw data into predictive insights that help you make faster, smarter business decisions with measurable impact.",
        },
        {
          image: "/svg/scale.svg",
          title: "Scale Seamlessly",
          description:
            "Expand your AI architecture effortlessly as your business grows—ensuring agility, reliability, and long-term value.",
        },
      ],
      metrics: [
        {
          value: "30-60%",
          description: "Reduction in operational costs through process optimization and intelligent automation.",
        },
        {
          value: "Up to 2×",
          description: "Faster process turnaround, enabling teams to focus on innovation and strategic priorities.",
        },
        {
          value: "Improved",
          description: "Data accuracy and compliance, minimizing human error and strengthening governance.",
        },
        {
          value: "Greater",
          description: "Transparency across workflows for smarter, accountable decision-making.",
        },
      ],
    },
    industries: [
      {
        Icon: IconBank,
        title: "Banking",
        description:
          "Regulatory insights, compliance tracking, risk analytics, and customer intelligence to improve decisions and speed to value.",
      },
      {
        Icon: IconBank,
        title: "Insurance",
        description:
          "Claims analytics, fraud detection, and policy servicing powered by governed, reusable AI components.",
      },
      {
        Icon: IconBank,
        title: "Conglomerates <span>(Enterprise Groups)</span>",
        description:
          "Cross-unit knowledge access and decision support “ask once, know all” for leaders across diverse businesses.",
      },
      {
        Icon: IconBank,
        title: "Telecommunications",
        description:
          "AI-assisted service insights and network-operations decision support to improve performance and customer experience.",
      },
      {
        Icon: IconBank,
        title: "Energy & Utilities",
        description:
          "Forecasting and operations decisioning that supports reliability, safety, and compliance at scale.",
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

    transformation: {
      features: [
        {
          image: "/svg/growth.svg",
          title: "Accelerated Growth",
          description:
            "Deploy scalable AI solutions that reduce costs, boost operational efficiency, and unlock new revenue opportunities.",
        },
        {
          image: "/svg/data.svg",
          title: "Turn Data Into Action",
          description:
            "Transform raw data into predictive insights that help you make faster, smarter business decisions with measurable impact.",
        },
        {
          image: "/svg/scale.svg",
          title: "Scale Seamlessly",
          description:
            "Expand your AI architecture effortlessly as your business grows—ensuring agility, reliability, and long-term value.",
        },
      ],
      metrics: [
        {
          value: "30-60%",
          description: "Reduction in operational costs through process optimization and intelligent automation.",
        },
        {
          value: "Up to 2×",
          description: "Faster process turnaround, enabling teams to focus on innovation and strategic priorities.",
        },
        {
          value: "Improved",
          description: "Data accuracy and compliance, minimizing human error and strengthening governance.",
        },
        {
          value: "Greater",
          description: "Transparency across workflows for smarter, accountable decision-making.",
        },
      ],
    },
    industries: [
      {
        Icon: IconBank,
        title: "Banking",
        description:
          "Regulatory insights, compliance tracking, risk analytics, and customer intelligence to improve decisions and speed to value.",
      },
      {
        Icon: IconBank,
        title: "Insurance",
        description:
          "Claims analytics, fraud detection, and policy servicing powered by governed, reusable AI components.",
      },
      {
        Icon: IconBank,
        title: "Conglomerates <span>(Enterprise Groups)</span>",
        description:
          "Cross-unit knowledge access and decision support “ask once, know all” for leaders across diverse businesses.",
      },
      {
        Icon: IconBank,
        title: "Telecommunications",
        description:
          "AI-assisted service insights and network-operations decision support to improve performance and customer experience.",
      },
      {
        Icon: IconBank,
        title: "Energy & Utilities",
        description:
          "Forecasting and operations decisioning that supports reliability, safety, and compliance at scale.",
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

    transformation: {
      features: [
        {
          image: "/svg/growth.svg",
          title: "Accelerated Growth",
          description:
            "Deploy scalable AI solutions that reduce costs, boost operational efficiency, and unlock new revenue opportunities.",
        },
        {
          image: "/svg/data.svg",
          title: "Turn Data Into Action",
          description:
            "Transform raw data into predictive insights that help you make faster, smarter business decisions with measurable impact.",
        },
        {
          image: "/svg/scale.svg",
          title: "Scale Seamlessly",
          description:
            "Expand your AI architecture effortlessly as your business grows—ensuring agility, reliability, and long-term value.",
        },
      ],
      metrics: [
        {
          value: "30-60%",
          description: "Reduction in operational costs through process optimization and intelligent automation.",
        },
        {
          value: "Up to 2×",
          description: "Faster process turnaround, enabling teams to focus on innovation and strategic priorities.",
        },
        {
          value: "Improved",
          description: "Data accuracy and compliance, minimizing human error and strengthening governance.",
        },
        {
          value: "Greater",
          description: "Transparency across workflows for smarter, accountable decision-making.",
        },
      ],
    },
    industries: [
      {
        Icon: IconBank,
        title: "Banking",
        description:
          "Regulatory insights, compliance tracking, risk analytics, and customer intelligence to improve decisions and speed to value.",
      },
      {
        Icon: IconBank,
        title: "Insurance",
        description:
          "Claims analytics, fraud detection, and policy servicing powered by governed, reusable AI components.",
      },
      {
        Icon: IconBank,
        title: "Conglomerates <span>(Enterprise Groups)</span>",
        description:
          "Cross-unit knowledge access and decision support “ask once, know all” for leaders across diverse businesses.",
      },
      {
        Icon: IconBank,
        title: "Telecommunications",
        description:
          "AI-assisted service insights and network-operations decision support to improve performance and customer experience.",
      },
      {
        Icon: IconBank,
        title: "Energy & Utilities",
        description:
          "Forecasting and operations decisioning that supports reliability, safety, and compliance at scale.",
      },
    ],
  },
];

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
  transformation: {
    features: TransformationFeature[];
    metrics: TransformationMetrics[];
  };
  industries: Industries[];
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

export interface TransformationFeature {
  image: string;
  title: string;
  description: string;
}

export interface TransformationMetrics {
  value: string;
  description: string;
}

export interface Industries {
  Icon: (props: SVGProps) => JSX.Element;
  title: string;
  description: string;
}
