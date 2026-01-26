import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1220",
          color: "white",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            width: "100%",
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
            Ayush Oswal
          </div>
          <div style={{ fontSize: 30, opacity: 0.9 }}>
            Backend Developer • Microservices • AI Agents
          </div>
          <div style={{ fontSize: 22, opacity: 0.75 }}>ayushoswal.com</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
