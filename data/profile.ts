export type Profile = {
  name: string;
  /** Job title shown under the name. Proposed in the PRD, still open to change. */
  title: string;
  tagline: string;
  location: string;
  /** Path under /public (e.g. "/profile.jpg"). Leave undefined until the photo exists. */
  photo?: string;
  /** Path under /public (e.g. "/resume.pdf"). The link only shows once this is set. */
  resume?: string;
  links: { github: string; linkedin: string };
  about: string[];
};

export const profile: Profile = {
  name: "Farhan Fitran Maulana",
  title: "Information Systems @ ITS · Data & ML",
  tagline:
    "I turn raw data into insights, dashboards, and machine learning models.",
  location: "Surabaya, Indonesia",
  photo: undefined,
  resume: undefined,
  links: {
    github: "https://github.com/fuhrerhn",
    linkedin: "https://www.linkedin.com/in/farhanfitran",
  },
  about: [
    "I'm an Information Systems student at Institut Teknologi Sepuluh Nopember (ITS) who enjoys turning raw data into insight, from SQL pipelines and Tableau dashboards to machine learning models people can actually use.",
    "Lately I've been building an ETL pipeline for 99K e-commerce orders, a rice disease classifier with 93.66% test accuracy, and a real-time drowsiness detector. Outside class, I lead data teams for campus events, managing records for 7,100+ new students, and I teach Tableau as a practicum assistant.",
    "I'm currently looking for a Data Analyst, Business Intelligence, Data Scientist, or Machine Learning Engineer internship.",
  ],
};
