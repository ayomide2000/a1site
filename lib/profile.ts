// ============================================================================
// EDIT ME — this file is the single source of truth for the whole site.
// Replace the placeholder values below with your real details.
// ============================================================================

export const profile = {
  name: "Your Name",
  initials: "YN",
  role: "Data Scientist & Mechanical Engineer",
  tagline:
    "I turn messy data into decisions and physical ideas into working hardware — bridging machine learning, Python, and mechanical design.",
  location: "City, Country",
  available: true,
  email: "you@example.com",
  links: {
    github: "https://github.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
    kaggle: "https://kaggle.com/your-handle",
    resume: "/resume.pdf",
  },
} as const

export type Discipline = {
  title: string
  blurb: string
  icon: "brain" | "sigma" | "code" | "cog"
}

export const disciplines: Discipline[] = [
  {
    title: "Data Science",
    blurb:
      "Exploratory analysis, statistical modeling, and clear visual storytelling that makes data actionable.",
    icon: "sigma",
  },
  {
    title: "Machine Learning",
    blurb:
      "Building, evaluating, and shipping predictive models — from feature engineering to validation.",
    icon: "brain",
  },
  {
    title: "Python",
    blurb:
      "pandas, NumPy, scikit-learn, and clean, reproducible pipelines for real-world workflows.",
    icon: "code",
  },
  {
    title: "Mechanical Engineering",
    blurb:
      "CAD, 3D printing, and design-for-manufacture — grounding software in physical systems.",
    icon: "cog",
  },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages & Data",
    items: ["Python", "SQL", "R", "pandas", "NumPy"],
  },
  {
    group: "ML & Analytics",
    items: ["scikit-learn", "XGBoost", "PyTorch", "Matplotlib", "Seaborn"],
  },
  {
    group: "Engineering & CAD",
    items: ["SolidWorks", "Fusion 360", "FDM 3D Printing", "MATLAB", "GD&T"],
  },
  {
    group: "Tooling",
    items: ["Git", "Jupyter", "Docker", "Linux", "Kaggle"],
  },
]

export type Project = {
  title: string
  kind: string
  year: string
  summary: string
  highlights: string[]
  tags: string[]
  image: string
  imageAlt: string
  featured?: boolean
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: "3D-Printed Modular Drip Irrigation",
    kind: "Mechanical Engineering Thesis",
    year: "2024",
    summary:
      "My undergraduate thesis: a low-cost, field-repairable drip irrigation system with fully 3D-printed emitters and manifolds, designed for smallholder farms.",
    highlights: [
      "Designed parametric emitters in CAD and iterated across 20+ FDM prints",
      "Characterized flow uniformity and clogging under varying pressures",
      "Cut per-unit cost vs. commercial emitters while keeping ±10% flow variance",
    ],
    tags: ["SolidWorks", "FDM", "CFD", "DFM"],
    image: "/projects/irrigation-thesis.png",
    imageAlt:
      "3D-printed orange plastic drip irrigation emitters and manifold on an engineering workbench",
    featured: true,
    links: [{ label: "Read the thesis", href: "#" }],
  },
  {
    title: "Kaggle: Exploratory Data Analysis",
    kind: "Data Science Project",
    year: "2024",
    summary:
      "End-to-end EDA notebook uncovering trends and correlations in a public dataset, with reproducible cleaning and visualization pipelines.",
    highlights: [
      "Automated cleaning and feature engineering with pandas",
      "Interactive visual narrative highlighting key drivers",
      "Documented, notebook-first workflow shared publicly",
    ],
    tags: ["Python", "pandas", "Seaborn", "EDA"],
    image: "/projects/kaggle-eda.png",
    imageAlt: "Abstract data-science visualization with scatter plots and a correlation heatmap",
    featured: true,
    links: [{ label: "View notebook", href: "#" }],
  },
  {
    title: "Kaggle: Predictive Modeling Competition",
    kind: "Machine Learning Project",
    year: "2023",
    summary:
      "Trained and tuned gradient-boosted and neural models for a supervised prediction task, with careful cross-validation and error analysis.",
    highlights: [
      "Feature selection and hyperparameter tuning with cross-validation",
      "Compared tree ensembles against a neural baseline",
      "Analyzed the confusion matrix and ROC to guide iteration",
    ],
    tags: ["scikit-learn", "XGBoost", "PyTorch", "ML"],
    image: "/projects/ml-model.png",
    imageAlt: "Abstract machine-learning visualization of a neural network merging into a confusion matrix",
    featured: true,
    links: [{ label: "View notebook", href: "#" }],
  },
]
