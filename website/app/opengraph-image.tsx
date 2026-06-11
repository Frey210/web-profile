import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050816",
          color: "#F8FAFC",
          padding: 72,
          fontFamily: "Inter"
        }}
      >
        <div style={{ fontSize: 28, color: "#67e8f9", letterSpacing: 3, textTransform: "uppercase" }}>
          Airport Infrastructure + IoT Systems
        </div>
        <div style={{ marginTop: 32, maxWidth: 920, fontSize: 78, fontWeight: 800, lineHeight: 1.02 }}>
          Fariz Achmad Faizal
        </div>
        <div style={{ marginTop: 28, maxWidth: 920, fontSize: 34, lineHeight: 1.35, color: "#CBD5E1" }}>
          Complete technology systems from sensors to production deployment.
        </div>
        <div style={{ marginTop: 54, display: "flex", gap: 18, fontSize: 24, color: "#A7F3D0" }}>
          <span>ESP32</span>
          <span>MQTT</span>
          <span>PLC/SCADA</span>
          <span>Docker</span>
          <span>ROS</span>
        </div>
      </div>
    ),
    size
  );
}
