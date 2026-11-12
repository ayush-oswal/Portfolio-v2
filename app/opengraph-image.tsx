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
          background: "#101014",
          color: "#F2F1EE",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
            border: "1px solid rgba(242, 241, 238, 0.16)",
            padding: 48,
          }}
        >
          <div style={{ fontSize: 18, color: "#6B9EFF", letterSpacing: 4 }}>
            00 // PORTFOLIO   PUNE, IN
          </div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.95 }}>
            AYUSH OSWAL
          </div>
          <div style={{ fontSize: 28, color: "#85858D" }}>
            Backend Developer • Microservices • AI Agents
          </div>
          <div style={{ fontSize: 20, color: "#6B9EFF" }}>ayushoswal.com</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
