// blogs.js
import ImgBlog1 from "@/assets/temp/insight/imgblog1.svg";
import ImgBlog2 from "@/assets/temp/insight/imgblog2.svg";
import ImgBlog3 from "@/assets/temp/insight/imgblog3.svg";
import ImgBlog4 from "@/assets/temp/insight/imgblog4.svg";
import ImgBlog5 from "@/assets/temp/insight/imgblog5.svg";
import SalvionIcon from "@/assets/icons/salvion-icon.svg";

export const CATEGORIES = [
  { id: 1, label: "All" },
  { id: 2, label: "AI · Risk" },
  { id: 3, label: "Health Science" },
  { id: 4, label: "Insurance" },
  { id: 5, label: "Signal Science" },
  { id: 6, label: "Corporate Health" },
];

export const BLOG_DATA = [
  {
    id: 1,
    slug: "ai-future-risk-assessment",
    title:
      "AI and the Future of Risk Assessment: From Actuarial Tables to Physiological Signals",
    description:
      "How AI-derived physiological risk signals are beginning to replace actuarial models.",
    image: ImgBlog1,
    category_id: 2, // AI · Risk
    readTime: 11,
    author: {
      name: "Salvion Research Team",
      avatar: SalvionIcon,
    },
    publishedAt: "2026-01-01",
    isEditorsPick: true,
  },
  {
    id: 2,
    slug: "biometrics-information-asymmetry",
    title:
      "The Adverse Selection Correction: Objective Biometrics and the End of Information Asymmetry",
    description:
      "Adverse selection exists because insurers cannot verify applicant disclosures.",
    image: ImgBlog2,
    category_id: 4, // Insurance
    readTime: 11,
    author: {
      name: "Salvion Research Team",
      avatar: SalvionIcon,
    },
    publishedAt: "2026-02-01",
    isEditorsPick: true,
  },
  {
    id: 3,
    slug: "observation-to-prediction-healthcare",
    title:
      "From Observation to Prediction in Healthcare: The Data Infrastructure Problem",
    description: "Predictive medicine requires continuous data infrastructure.",
    image: ImgBlog3,
    category_id: 3, // Health Science
    readTime: 19,
    author: {
      name: "Salvion Research Team",
      avatar: SalvionIcon,
    },
    publishedAt: "2026-01-10",
    isEditorsPick: false,
  },
  {
    id: 4,
    slug: "decoding-physiology-through-light",
    title:
      "Decoding Physiology Through Light: A Primer on rPPG for Non-Technical Decision Makers",
    description:
      "A non-technical explanation of how remote photoplethysmography works.",
    image: ImgBlog4,
    category_id: 6, // Signal Science / Technology
    readTime: 19,
    author: {
      name: "Salvion Research Team",
      avatar: SalvionIcon,
    },
    publishedAt: "2026-01-15",
    isEditorsPick: false,
  },
  {
    id: 5,
    slug: "continuous-health-intelligence",
    title: "Continuous Health Intelligence as a Corporate Strategy Asset",
    description:
      "Why the next frontier of corporate advantage lies in workforce health insights.",
    image: ImgBlog5,
    category_id: 5, // Corporate Health
    readTime: 15,
    author: {
      name: "Salvion Research Team",
      avatar: SalvionIcon,
    },
    publishedAt: "2026-01-20",
    isEditorsPick: false,
  },
];
