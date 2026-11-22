import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

// structured data for search engines (no email or phone in here)
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: profile.name,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        alternateName: profile.nickname,
        url: siteUrl,
        image: `${siteUrl}${profile.photo}`,
        jobTitle: profile.title,
        description: profile.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surabaya",
          addressCountry: "ID",
        },
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "Institut Teknologi Sepuluh Nopember",
          url: "https://www.its.ac.id",
        },
        knowsAbout: [
          "Machine Learning",
          "Computer Vision",
          "Deep Learning",
          "Data Analytics",
          "Business Intelligence",
        ],
        sameAs: [profile.links.github, profile.links.linkedin, profile.links.instagram],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // escape "<" so the JSON can't close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
