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
  links: { github: string; linkedin: string; instagram: string; email: string };
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
    instagram: "https://www.instagram.com/farhan.fitran",
    email: "farhanfitran123@gmail.com",
  },
  about: [
    "I'm an Information Systems student at Institut Teknologi Sepuluh Nopember (ITS), building SQL pipelines, dashboards, and machine learning projects. Outside class, I lead data teams for campus events and teach Tableau as a practicum assistant.",
    "I'm looking for a Data Analyst, Business Intelligence, Data Scientist, or Machine Learning Engineer internship.",
  ],
};
