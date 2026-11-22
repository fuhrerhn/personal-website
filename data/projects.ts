import type { Project } from "./types";

// `featured` projects show on the home page; every project appears in /archive.
// Screenshots (`image`) and PadiCare's live demo (`links.demo`) are still to be added.
export const projects: Project[] = [
  {
    id: "olist-dashboard",
    title: "Olist E-Commerce Delivery & Customer Experience Dashboard",
    year: 2026,
    summary:
      "Built a 3-layer (bronze, silver, gold) ETL pipeline in Python and PostgreSQL for 99K orders, with 10 data-quality audit reports and 4 delivery and customer-satisfaction KPIs. A 3-page Tableau dashboard is in progress.",
    tags: ["PostgreSQL", "Python", "Tableau"],
    links: { github: "https://github.com/fuhrerhn/olist-dashboard" },
    featured: true,
  },
  {
    id: "padicare-ai",
    title: "PadiCare AI: Rice Disease Detection",
    year: 2026,
    summary:
      "A 10-class rice disease classifier using EfficientNet-B0 transfer learning, reaching 93.66% test accuracy and 93.57% macro F1. Deployed as a bilingual Streamlit app with top-3 predictions and agronomic recommendations.",
    tags: ["PyTorch", "EfficientNet-B0", "Streamlit"],
    links: { github: "https://github.com/fuhrerhn/padicare-streamlit" },
    featured: true,
  },
  {
    id: "drowseguard",
    title: "DrowseGuard: Real-Time Drowsiness Detection",
    year: 2026,
    summary:
      "Group project. A CNN trained on the MRL Eye Dataset, with MediaPipe Face Mesh and OpenCV for eye detection. Triggers a visual and audio alert after 2 seconds of continuous eye closure.",
    tags: ["PyTorch", "OpenCV", "MediaPipe", "Gradio"],
    links: { github: "https://github.com/fuhrerhn/drowsiness-detection" },
    featured: true,
  },
  {
    id: "sentimen-gibran-mundur",
    title: "YouTube Comment Stance Analysis on Gibran's Resignation",
    year: 2026,
    summary:
      "An ongoing NLP project on how people reacted in YouTube comments to Gibran Rakabuming Raka's resignation as Vice President. Collects comments from 10 news channels (12K+ after de-duplication), then compares a lexicon baseline, TF-IDF with logistic regression, and IndoBERTweet to classify stance.",
    tags: ["Python", "NLP", "IndoBERTweet", "YouTube Data API"],
    links: { github: "https://github.com/fuhrerhn/sentimen-gibran-mundur" },
    featured: false,
  },
  {
    id: "central-java-dashboard",
    title: "Central Java Education & Unemployment Dashboard",
    year: 2026,
    summary:
      "An interactive Power BI dashboard analyzing 175 city-year observations across 35 regencies and cities (2021-2025), comparing mean years of schooling and open unemployment against national averages.",
    tags: ["Power BI", "Excel"],
    links: {},
    featured: false,
  },
];
