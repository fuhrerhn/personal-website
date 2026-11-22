import type { SkillGroup } from "./types";

// Grouped by what each skill is used for, led by the AI/ML focus.
// Every item comes from the CV.
export const skills: SkillGroup[] = [
  {
    label: "AI & Machine Learning",
    items: [
      "Regression",
      "Classification",
      "Time Series Forecasting",
      "Deep Learning (CNN)",
      "Transfer Learning",
      "Computer Vision",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    label: "Languages & Libraries",
    items: ["Python", "SQL (PostgreSQL)", "R", "Java", "PyTorch", "OpenCV", "MediaPipe", "Pandas"],
  },
  {
    label: "Deployment & Dev Tools",
    items: ["Streamlit", "FastAPI", "Git/GitHub", "Jupyter Notebook"],
  },
  {
    label: "Data Engineering & Systems",
    items: [
      "ETL / Data Pipeline",
      "Data Modeling (Fact and Dimension Tables)",
      "Data Quality Auditing",
      "SAP S/4HANA",
    ],
  },
  {
    label: "Data Analysis & BI",
    items: [
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning & Preprocessing",
      "Statistical Analysis",
      "Hypothesis Testing",
      "Data Visualization",
      "Dashboard Development",
      "KPI Design",
      "Business Intelligence",
      "Tableau",
      "Power BI",
      "Looker Studio",
      "Microsoft Excel",
    ],
  },
  {
    label: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Structured Problem-Solving",
      "Leadership",
      "Teamwork",
      "Public Speaking",
      "Communication",
    ],
  },
];
