export type Profile = {
  name: string;
  /** The part of `name` people actually call him; highlighted in the sidebar. */
  nickname: string;
  /** Job title shown under the name. */
  title: string;
  tagline: string;
  location: string;
  /** Path under /public (e.g. "/profile.jpg"). Leave undefined to show initials. */
  photo?: string;
  /** Path under /public (e.g. "/resume.pdf"). The link only shows once this is set. */
  resume?: string;
  links: { github: string; linkedin: string; instagram: string; email: string };
  about: string[];
};

export const profile: Profile = {
  name: "Farhan Fitran Maulana",
  nickname: "Farhan",
  title: "Aspiring AI Engineer",
  tagline:
    "I turn raw data into insights, dashboards, and machine learning models.",
  location: "Surabaya, Indonesia",
  photo: "/profile.jpg",
  resume: undefined,
  links: {
    github: "https://github.com/fuhrerhn",
    linkedin: "https://www.linkedin.com/in/farhanfitran",
    instagram: "https://www.instagram.com/farhan.fitran",
    email: "farhanfitran123@gmail.com",
  },
  about: [
    "I'm an Information Systems student at Institut Teknologi Sepuluh Nopember (ITS), focused on machine learning and computer vision, with a solid base in data analytics and business intelligence.",
    "I've built an ETL pipeline for 99K e-commerce orders, deep learning models for rice disease and drowsiness detection, and placed 2nd on Kaggle and 3rd in a data science competition. I also lead data teams for campus events and teach Tableau as a practicum assistant.",
  ],
};
