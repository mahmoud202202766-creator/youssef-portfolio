import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "easy-sakan",
    title: "Easy Sakan: AI-Powered Real Estate Platform",
    date: "May 2026",
    description:
      "End-to-end ML backend for a housing platform with a 6-vector fraud detection pipeline, an XGBoost pricing engine (R² 0.98), and a sub-5ms recommendation engine.",
    tech: ["Python", "FastAPI", "XGBoost", "YOLOv8", "Surya OCR", "OpenCV"],
    github: "https://github.com/Youssef-Mohamed4/easy-sakan-ai",
  },
  {
    id: "dropout-warning",
    title: "Student Dropout Early Warning System",
    date: "April 2026",
    description:
      "Predictive model that flags at-risk students, reaching 93.11% test accuracy and 0.97 ROC-AUC, with an interactive Streamlit dashboard.",
    tech: ["Python", "XGBoost", "Pandas", "Streamlit"],
    github: "https://github.com/Youssef-Mohamed4/student-dropout-risk-analysis",
  },
  {
    id: "posture-monitor",
    title: "Real-Time Posture & Attention Monitor",
    date: "April 2026",
    description:
      "Live computer vision system tracking posture and gaze with MediaPipe, stabilized with EMA smoothing and dynamic calibration.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    github: "https://github.com/Youssef-Mohamed4/smart-focus-assistant",
  },
  {
    id: "sentiment-analyzer",
    title: "NLP Sentiment Classifier & Analyzer",
    date: "May 2025",
    description:
      "3-class sentiment analyzer trained on a balanced 31K review dataset, combining TF-IDF features with VADER scores for 68.3% accuracy.",
    tech: ["Python", "Logistic Regression", "TF-IDF", "VADER"],
    github:
      "https://github.com/Youssef-Mohamed4/customer-review-sentiment-analysis",
  },
];
