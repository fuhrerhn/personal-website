type Profile = {
  name: string;
  nickname: string; // highlighted in the sidebar
  title: string;
  tagline: string;
  description: string; // for search results and link previews
  photo: string; // path under /public
  resume: string; // path under /public
  links: { github: string; linkedin: string; instagram: string; email: string };
  about: string[];
};

export const profile: Profile = {
  name: "Farhan Fitran Maulana",
  nickname: "Farhan",
  title: "Aspiring AI Engineer",
  tagline: "I turn raw data into insights, dashboards, and machine learning models.",
  description:
    "Portfolio of Farhan Fitran Maulana: Information Systems student at ITS Surabaya and aspiring AI engineer building machine learning, computer vision, and data projects.",
  photo: "/profile.jpg",
  resume: "/Farhan-Fitran-Maulana-CV.pdf",
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
