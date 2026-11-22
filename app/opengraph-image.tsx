import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// link preview image (LinkedIn, WhatsApp, X)
export default async function OpenGraphImage() {
  const photoFile = await readFile(join(process.cwd(), "public", profile.photo));
  const photo = `data:image/jpeg;base64,${photoFile.toString("base64")}`;
  const [first, ...rest] = profile.name.split(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 80,
          background: "#1a1a1d",
          backgroundImage: "radial-gradient(circle at 88% 12%, rgba(245,165,36,0.22), rgba(26,26,29,0) 55%)",
          color: "#f0ece4",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 660 }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#f5a524" }}>
            PORTFOLIO
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontSize: 88, fontWeight: 700, lineHeight: 1.02 }}>
            <span style={{ color: "#f5a524" }}>{first}</span>
            <span>{rest.join(" ")}</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 40, fontWeight: 600 }}>
            {profile.title}
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 28, lineHeight: 1.35, color: "#b8b2a6" }}>
            {profile.tagline}
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          width={300}
          height={300}
          style={{ width: 300, height: 300, borderRadius: 150, border: "6px solid #f5a524", objectFit: "cover" }}
        />
      </div>
    ),
    { ...size },
  );
}
