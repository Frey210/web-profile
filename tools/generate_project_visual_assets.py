from __future__ import annotations

import math
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "generated"
PROMPTS = OUT / "prompts"

COLORS = {
    "bg": "#0A0E1A",
    "surface": "#111827",
    "surface2": "#0F172A",
    "border": "#1E2D3D",
    "primary": "#0EA5E9",
    "primary_light": "#38BDF8",
    "accent": "#06B6D4",
    "success": "#10B981",
    "warning": "#F59E0B",
    "text": "#F1F5F9",
    "muted": "#94A3B8",
    "dim": "#475569",
}


PROJECTS = [
    {
        "slug": "aquanotes",
        "name": "Aquanotes",
        "subtitle": "IoT Aquaculture Monitoring Platform",
        "domain": "Aquaculture / Smart Agriculture",
        "year": "2023-Present",
        "role": "Project Lead / Systems Architect / Lead Embedded Engineer",
        "motif": "shrimp pond water-quality telemetry with floating sensor nodes",
        "accent": "#06B6D4",
        "metrics": ["pH", "DO", "TDS", "Ammonia", "Temp"],
        "architecture": ["ESP32 sensor node", "MQTT telemetry", "Backend API", "PostgreSQL", "Web dashboard", "Mobile app"],
        "stack": ["ESP32", "C++", "MQTT", "Node.js", "FastAPI", "PostgreSQL", "Docker", "Nginx", "Cloudflare", "React", "React Native"],
    },
    {
        "slug": "ergoquipt",
        "name": "Ergoquipt",
        "subtitle": "Reaction Time and Physiological Measurement System",
        "domain": "Ergonomics / Healthcare Technology",
        "year": "2025-Present",
        "role": "Project Lead / Systems Architect / Embedded and Backend Engineer",
        "motif": "synchronized ergonomic test devices and live physiological dashboard",
        "accent": "#10B981",
        "metrics": ["Reaction ms", "Heart rate", "Ear temp", "Session sync"],
        "architecture": ["ESP32 test devices", "Sensor firmware", "REST API", "Realtime web admin", "Mobile app", "Research exports"],
        "stack": ["ESP32", "Arduino", "C++", "Node.js", "FastAPI", "Docker", "Nginx", "React", "React Native", "Flutter", "Cloudflare"],
    },
    {
        "slug": "dento-smart",
        "name": "Dento Smart",
        "subtitle": "Smart Dental Equipment Monitoring System",
        "domain": "Healthcare / Medical Equipment Monitoring",
        "year": "2026",
        "role": "Project Lead / Embedded Engineer / Backend Engineer",
        "motif": "dental chair equipment telemetry with clean clinical monitoring UI",
        "accent": "#38BDF8",
        "metrics": ["Runtime", "Pressure", "Status", "Alerts"],
        "architecture": ["Dental equipment sensors", "ESP32 firmware", "Backend API", "Cloud tunnel", "Web dashboard"],
        "stack": ["ESP32", "C++", "Arduino", "Node.js", "FastAPI", "Docker", "Nginx", "Cloudflare", "React"],
    },
    {
        "slug": "ybot",
        "name": "Y-BOT",
        "subtitle": "SLAM Mobile Robot",
        "domain": "Robotics / Computer Vision / Research",
        "year": "2023",
        "role": "Lead Researcher / Robot Designer / ROS Developer",
        "motif": "autonomous mobile robot mapping a dark lab with Kinect depth perception",
        "accent": "#A78BFA",
        "metrics": ["Depth", "Odometry", "SLAM map", "Path"],
        "architecture": ["Kinect depth sensor", "Raspberry Pi", "ROS II nodes", "SLAM algorithm", "Occupancy map", "Robot motors"],
        "stack": ["ROS II", "Python", "C++", "Raspberry Pi", "Arduino", "Kinect", "SLAM", "Ubuntu Linux"],
    },
    {
        "slug": "airport-project",
        "name": "Airport Project",
        "subtitle": "Electronic Quality Assurance for Airport Expansion",
        "domain": "Aviation / Industrial Electronics / Critical Infrastructure",
        "year": "2023-Present",
        "role": "Electronic Officer - Quality Assurance",
        "motif": "airport terminal mission-control wall supervising critical electronic systems",
        "accent": "#F59E0B",
        "metrics": ["FAT/SAT", "BHS", "FAS", "PAS", "HBS"],
        "architecture": ["Contractors", "Owner QA", "Cisco network", "PLC/SCADA BHS", "Fire alarm", "PA system", "X-Ray HBS"],
        "stack": ["Cisco", "CAT6A", "Fiber", "Allen-Bradley", "FactoryTalk", "Notifier", "TOA", "Bosch", "Leidos", "ICAO", "IEC"],
    },
    {
        "slug": "siwarga",
        "name": "SiWarga",
        "subtitle": "Citizen Reporting Platform",
        "domain": "Smart City / Civic Technology",
        "year": "2025",
        "role": "Lead Developer",
        "motif": "city issue reports flowing from citizens to municipal response dashboard",
        "accent": "#22C55E",
        "metrics": ["Reports", "Review", "Resolved", "Map"],
        "architecture": ["Citizen web form", "Location and photo", "Backend API", "PostgreSQL", "Admin dashboard", "Status feedback"],
        "stack": ["JavaScript", "Node.js", "Django/FastAPI", "PostgreSQL", "HTML", "CSS", "Docker"],
    },
    {
        "slug": "thermal-camera",
        "name": "Thermal Camera",
        "subtitle": "AC Temperature Control System",
        "domain": "Building Automation / Energy Efficiency",
        "year": "2023",
        "role": "Lead Developer",
        "motif": "thermal heat-map vision detecting human presence and adjusting air conditioning",
        "accent": "#EF4444",
        "metrics": ["Heat map", "Presence", "Setpoint", "Energy"],
        "architecture": ["Thermal IR camera", "Python OpenCV", "Human detection", "Control signal", "IR blaster", "Air conditioner"],
        "stack": ["Thermal IR", "MLX90640", "Python", "OpenCV", "Blob detection", "Raspberry Pi", "IR blaster", "Relay"],
    },
    {
        "slug": "radiolink-iot",
        "name": "RadioLink IoT",
        "subtitle": "Aviation Landing Instrument Temperature Monitoring",
        "domain": "Aviation / Air Navigation / IoT",
        "year": "2022",
        "role": "Lead Developer",
        "motif": "remote landing-system instrument cabinets sending radio temperature telemetry",
        "accent": "#60A5FA",
        "metrics": ["Temp", "RSSI", "Remote node", "Dashboard"],
        "architecture": ["Temperature sensor", "Embedded node", "Radio TX", "Radio RX", "Gateway", "Monitoring dashboard"],
        "stack": ["DS18B20", "NTC", "LoRa", "RF 433MHz", "Arduino", "ESP32", "C++", "Web dashboard"],
    },
    {
        "slug": "monitoring-platform",
        "name": "Monitoring Platform",
        "subtitle": "MTC and Homelab Infrastructure Monitoring",
        "domain": "Systems Administration / Observability",
        "year": "2026",
        "role": "Infrastructure Lead / DevOps Engineer",
        "motif": "server observability wall with metrics, containers, SSL, domains and device health",
        "accent": "#34D399",
        "metrics": ["CPU", "RAM", "Disk", "SSL", "Docker"],
        "architecture": ["Linux hosts", "Node Exporter", "Prometheus", "Grafana", "Nginx", "Cloudflare Tunnel", "Status dashboard"],
        "stack": ["Grafana", "Prometheus", "Docker", "Node Exporter", "Nginx", "Cloudflare", "Ubuntu", "Debian", "Linux"],
    },
    {
        "slug": "fire-fighting-robot",
        "name": "Fire Fighting Robot",
        "subtitle": "STM32 Hexapod Competition Robot",
        "domain": "Robotics / Embedded Competition",
        "year": "2022",
        "role": "Embedded Systems Developer",
        "motif": "six-legged robot navigating a competition course toward flame detection",
        "accent": "#FB7185",
        "metrics": ["Flame", "Tripod gait", "12 servos", "Suppression"],
        "architecture": ["Flame sensors", "STM32 MCU", "Navigation state machine", "PWM servo control", "12 servo motors", "Fan or pump"],
        "stack": ["STM32", "ARM Cortex-M", "C", "STM32 HAL", "PWM", "UV/IR sensor", "Ultrasonic", "DC fan", "STM32CubeIDE"],
    },
    {
        "slug": "bioassay",
        "name": "Bioassay Color Mapping",
        "subtitle": "Plankton Density Detection",
        "domain": "Aquaculture / Biosensing",
        "year": "2023",
        "role": "Lead Developer",
        "motif": "pond water sample analyzed by RGB sensor and KNN classifier for plankton density",
        "accent": "#2DD4BF",
        "metrics": ["RGB", "KNN", "Density", "Sample"],
        "architecture": ["Water sample", "TCS34725 sensor", "Camera capture", "Feature extraction", "KNN classifier", "Density output"],
        "stack": ["Python", "OpenCV", "KNN", "TCS34725", "Arduino", "Raspberry Pi", "scikit-learn"],
    },
]


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "C:/Windows/Fonts/seguisb.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for name in candidates:
        try:
            return ImageFont.truetype(name, size=size)
        except OSError:
            pass
    return ImageFont.load_default()


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def with_alpha(value: str, alpha: int) -> tuple[int, int, int, int]:
    return (*hex_to_rgb(value), alpha)


def gradient(size: tuple[int, int], accent: str) -> Image.Image:
    w, h = size
    sw, sh = max(64, w // 8), max(64, h // 8)
    img = Image.new("RGB", (sw, sh), COLORS["bg"])
    pix = img.load()
    a = hex_to_rgb(accent)
    b = hex_to_rgb(COLORS["bg"])
    c = hex_to_rgb(COLORS["surface2"])
    for y in range(sh):
        for x in range(sw):
            nx = x / max(sw - 1, 1)
            ny = y / max(sh - 1, 1)
            glow = max(0, 1 - math.hypot(nx - 0.82, ny - 0.25) * 1.45)
            base_mix = ny * 0.38
            rgb = []
            for i in range(3):
                v = int(b[i] * (1 - base_mix) + c[i] * base_mix)
                v = int(v * (1 - glow * 0.45) + a[i] * glow * 0.45)
                rgb.append(v)
            pix[x, y] = tuple(rgb)
    return img.resize(size, Image.Resampling.BICUBIC)


def draw_grid(draw: ImageDraw.ImageDraw, w: int, h: int, accent: str) -> None:
    for x in range(0, w, 80):
        draw.line((x, 0, x, h), fill=with_alpha(COLORS["border"], 80), width=1)
    for y in range(0, h, 80):
        draw.line((0, y, w, y), fill=with_alpha(COLORS["border"], 80), width=1)
    for i in range(18):
        x1 = 80 + i * 110
        y1 = 140 + ((i * 73) % max(1, h - 280))
        draw.line((x1, y1, x1 + 55, y1, x1 + 55, y1 + 34), fill=with_alpha(accent, 90), width=2)
        draw.ellipse((x1 + 48, y1 + 27, x1 + 62, y1 + 41), fill=with_alpha(accent, 130))


def text(draw: ImageDraw.ImageDraw, xy: tuple[int, int], content: str, size: int, fill: str, bold: bool = False, anchor: str | None = None) -> None:
    draw.text(xy, content, font=font(size, bold), fill=fill, anchor=anchor)


def wrap_lines(content: str, width: int) -> list[str]:
    return textwrap.wrap(content, width=width, break_long_words=False)


def card(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str = COLORS["surface"], outline: str = COLORS["border"], radius: int = 18) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=2)


def draw_badge(draw: ImageDraw.ImageDraw, x: int, y: int, label: str, accent: str, fs: int = 26) -> tuple[int, int]:
    f = font(fs, True)
    bbox = draw.textbbox((0, 0), label, font=f)
    w = bbox[2] - bbox[0] + 34
    h = fs + 22
    draw.rounded_rectangle((x, y, x + w, y + h), radius=8, fill=with_alpha(accent, 35), outline=with_alpha(accent, 160), width=2)
    draw.text((x + 17, y + 10), label, font=f, fill=COLORS["text"])
    return w, h


def draw_device_cluster(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], p: dict) -> None:
    x1, y1, x2, y2 = box
    accent = p["accent"]
    card(draw, box, fill="#0B1220", outline=accent, radius=24)
    # Dashboard panel
    dash = (x1 + 55, y1 + 70, x2 - 260, y2 - 85)
    card(draw, dash, fill=COLORS["surface"], outline=COLORS["border"], radius=16)
    text(draw, (dash[0] + 34, dash[1] + 26), "LIVE SYSTEM", 24, COLORS["muted"], True)
    for idx, metric in enumerate(p["metrics"][:5]):
        yy = dash[1] + 84 + idx * 72
        draw.rounded_rectangle((dash[0] + 34, yy, dash[0] + 220, yy + 46), radius=7, fill=with_alpha(accent, 25), outline=with_alpha(accent, 130), width=1)
        text(draw, (dash[0] + 52, yy + 10), metric, 22, COLORS["text"], True)
        length = 160 + (idx * 37) % 230
        draw.line((dash[0] + 250, yy + 24, dash[0] + 250 + length, yy + 24), fill=accent, width=8)
    # Mobile/device blocks
    for i in range(3):
        bx = x2 - 210 + (i % 2) * 70
        by = y1 + 95 + i * 145
        draw.rounded_rectangle((bx, by, bx + 82, by + 112), radius=14, fill=COLORS["surface2"], outline=with_alpha(accent, 155), width=2)
        draw.ellipse((bx + 28, by + 24, bx + 54, by + 50), outline=accent, width=3)
        draw.line((bx + 20, by + 74, bx + 62, by + 74), fill=COLORS["muted"], width=3)
        draw.line((bx + 26, by + 88, bx + 56, by + 88), fill=COLORS["dim"], width=3)
    for i in range(4):
        sx = x1 + 80 + i * 145
        sy = y2 - 48
        draw.ellipse((sx, sy, sx + 18, sy + 18), fill=accent)
        draw.line((sx + 9, sy, sx + 9, sy - 42), fill=with_alpha(accent, 160), width=2)


def draw_icon(draw: ImageDraw.ImageDraw, center: tuple[int, int], p: dict, scale: float = 1.0) -> None:
    cx, cy = center
    accent = p["accent"]
    r = int(95 * scale)
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), outline=with_alpha(accent, 180), width=max(3, int(5 * scale)))
    if "robot" in p["motif"] or p["slug"] in {"ybot", "fire-fighting-robot"}:
        draw.rounded_rectangle((cx - 75, cy - 40, cx + 75, cy + 55), radius=24, outline=accent, width=5)
        draw.ellipse((cx - 42, cy - 10, cx - 18, cy + 14), fill=accent)
        draw.ellipse((cx + 18, cy - 10, cx + 42, cy + 14), fill=accent)
        for side in (-1, 1):
            for i in range(3):
                yy = cy - 22 + i * 32
                draw.line((cx + side * 74, yy, cx + side * 125, yy + side * 18), fill=with_alpha(accent, 200), width=4)
    elif "airport" in p["motif"] or "aviation" in p["domain"].lower():
        draw.polygon([(cx, cy - 95), (cx + 28, cy + 65), (cx, cy + 42), (cx - 28, cy + 65)], outline=accent, fill=None)
        draw.line((cx - 115, cy + 8, cx + 115, cy + 8), fill=accent, width=6)
        draw.line((cx - 68, cy + 58, cx + 68, cy + 58), fill=with_alpha(accent, 190), width=5)
    elif "thermal" in p["slug"]:
        for i in range(5):
            draw.arc((cx - 75 + i * 16, cy - 75 + i * 16, cx + 75 - i * 16, cy + 75 - i * 16), 220, 520, fill=accent, width=5)
        draw.ellipse((cx - 28, cy - 62, cx + 28, cy + 62), outline=COLORS["warning"], width=5)
    elif "bioassay" in p["slug"] or "aquanotes" in p["slug"]:
        draw.arc((cx - 100, cy - 10, cx + 100, cy + 130), 190, 350, fill=accent, width=6)
        for i in range(4):
            draw.ellipse((cx - 55 + i * 35, cy - 40 + (i % 2) * 18, cx - 35 + i * 35, cy - 20 + (i % 2) * 18), fill=with_alpha(accent, 190))
        draw.line((cx - 80, cy + 50, cx + 80, cy + 50), fill=with_alpha(accent, 180), width=5)
    elif "siwarga" in p["slug"]:
        draw.polygon([(cx, cy - 80), (cx + 75, cy - 25), (cx + 50, cy + 75), (cx - 50, cy + 75), (cx - 75, cy - 25)], outline=accent, width=5)
        draw.ellipse((cx - 25, cy - 18, cx + 25, cy + 32), outline=accent, width=5)
        draw.line((cx, cy + 32, cx, cy + 78), fill=accent, width=5)
    else:
        for i in range(6):
            ang = math.tau * i / 6
            nx, ny = cx + math.cos(ang) * 95, cy + math.sin(ang) * 70
            draw.line((cx, cy, nx, ny), fill=with_alpha(accent, 160), width=4)
            draw.ellipse((nx - 15, ny - 15, nx + 15, ny + 15), fill=accent)
        draw.ellipse((cx - 22, cy - 22, cx + 22, cy + 22), fill=COLORS["text"])


def save_prompt(p: dict, asset_type: str, prompt: str) -> None:
    PROMPTS.mkdir(parents=True, exist_ok=True)
    path = PROMPTS / f"{p['slug']}-{asset_type}.md"
    path.write_text(prompt.strip() + "\n", encoding="utf-8")


def hero_prompt(p: dict) -> str:
    return f"""
Use case: stylized-concept
Asset type: portfolio project hero image, 16:9 landscape
Primary request: Create a dark high-tech hero image for {p['name']} - {p['subtitle']}.
Scene/backdrop: {p['motif']}; precise engineering environment; subtle circuit grid and data-flow lines.
Subject: The project's core system and real-world domain: {p['domain']}.
Style/medium: polished technical editorial illustration, mission-control aesthetic, portfolio-ready.
Composition/framing: wide cinematic layout, strong central system motif, usable negative space, no clutter.
Lighting/mood: midnight navy background with cyan/teal glow and project accent {p['accent']}.
Color palette: #0A0E1A, #111827, #0EA5E9, #06B6D4, plus accent {p['accent']}.
Text (verbatim): no embedded body copy; optional small title only if perfectly legible: "{p['name']}".
Constraints: professional engineering credibility; no generic stock-photo look; no watermark; no distorted text.
"""


def cover_prompt(p: dict) -> str:
    return f"""
Use case: productivity-visual
Asset type: project cover card image, 3:2 landscape
Primary request: Create a compact cover visual for {p['name']} showing the project identity and domain.
Scene/backdrop: dark technical interface inspired by {p['motif']}.
Subject: Project title, domain badge, and concise system motif for {p['subtitle']}.
Style/medium: clean portfolio card illustration with UI panels, badges, and technical iconography.
Composition/framing: title-left, system visual-right, readable at thumbnail size.
Lighting/mood: precise, modern, dark mode, subtle cyan glow.
Color palette: portfolio palette with accent {p['accent']}.
Text (verbatim): "{p['name']}" and "{p['year']}".
Constraints: avoid crowded text, avoid photorealistic people, no watermark.
"""


def architecture_prompt(p: dict) -> str:
    return f"""
Use case: infographic-diagram
Asset type: architecture illustration
Primary request: Generate an accurate architecture diagram for {p['name']}.
System flow: {" -> ".join(p['architecture'])}.
Style/medium: dark technical diagram, rounded nodes, thin-line connectors, portfolio design-system colors.
Composition/framing: left-to-right system flow, clean labels, readable spacing, no decorative clutter.
Color palette: #0A0E1A background, #111827 nodes, cyan connectors, accent {p['accent']}.
Text (verbatim): {", ".join(p['architecture'])}.
Constraints: all labels must remain accurate and readable; no watermark.
"""


def stack_prompt(p: dict) -> str:
    return f"""
Use case: infographic-diagram
Asset type: technology stack illustration
Primary request: Generate a technology stack visual for {p['name']}.
Technologies: {", ".join(p['stack'])}.
Style/medium: dark portfolio infographic with grouped tech badges, subtle circuit grid, clean typographic hierarchy.
Composition/framing: grid of labeled technology badges with a compact project header.
Color palette: #0A0E1A background, cyan/teal accents, project accent {p['accent']}.
Text (verbatim): {", ".join(p['stack'])}.
Constraints: all technology names must remain accurate and readable; no watermark.
"""


def draw_header(draw: ImageDraw.ImageDraw, p: dict, x: int, y: int, title_size: int, subtitle_size: int, max_width: int) -> int:
    text(draw, (x, y), p["name"], title_size, COLORS["text"], True)
    y += title_size + 14
    for line in wrap_lines(p["subtitle"], max_width // 22):
        text(draw, (x, y), line, subtitle_size, COLORS["primary_light"], True)
        y += subtitle_size + 10
    y += 10
    for line in wrap_lines(p["domain"], max_width // 15):
        text(draw, (x, y), line, 26, COLORS["muted"])
        y += 34
    return y


def make_hero(p: dict) -> None:
    w, h = 1920, 1080
    img = gradient((w, h), p["accent"]).convert("RGBA")
    draw = ImageDraw.Draw(img, "RGBA")
    draw_grid(draw, w, h, p["accent"])
    draw_header(draw, p, 110, 120, 88, 42, 840)
    text(draw, (112, 400), p["role"], 28, COLORS["muted"], False)
    x = 112
    for metric in p["metrics"][:4]:
        bw, _ = draw_badge(draw, x, 462, metric, p["accent"], 24)
        x += bw + 18
    draw_device_cluster(draw, (920, 165, 1780, 850), p)
    draw_icon(draw, (540, 765), p, 1.35)
    draw.line((110, 940, 1810, 940), fill=with_alpha(p["accent"], 130), width=3)
    text(draw, (112, 970), f"{p['year']} / {p['domain']}", 27, COLORS["muted"], False)
    img.convert("RGB").save(OUT / f"{p['slug']}-hero.png", quality=95)
    save_prompt(p, "hero", hero_prompt(p))


def make_cover(p: dict) -> None:
    w, h = 1200, 800
    img = gradient((w, h), p["accent"]).convert("RGBA")
    draw = ImageDraw.Draw(img, "RGBA")
    draw_grid(draw, w, h, p["accent"])
    card(draw, (54, 54, 1146, 746), fill=with_alpha(COLORS["surface"], 210), outline=with_alpha(p["accent"], 170), radius=22)
    draw_header(draw, p, 95, 105, 58, 30, 650)
    text(draw, (96, 322), p["year"], 28, COLORS["muted"], True)
    text(draw, (96, 370), p["role"], 22, COLORS["muted"])
    draw_icon(draw, (890, 330), p, 1.25)
    x, y = 96, 590
    for metric in p["metrics"][:4]:
        bw, _ = draw_badge(draw, x, y, metric, p["accent"], 21)
        x += bw + 14
    img.convert("RGB").save(OUT / f"{p['slug']}-cover.png", quality=95)
    save_prompt(p, "cover", cover_prompt(p))


def make_architecture(p: dict) -> None:
    w, h = 1600, 1000
    img = gradient((w, h), p["accent"]).convert("RGBA")
    draw = ImageDraw.Draw(img, "RGBA")
    draw_grid(draw, w, h, p["accent"])
    text(draw, (80, 70), p["name"], 58, COLORS["text"], True)
    text(draw, (82, 138), "Architecture Illustration", 30, COLORS["primary_light"], True)
    nodes = p["architecture"]
    cols = min(4, len(nodes))
    rows = math.ceil(len(nodes) / cols)
    node_w, node_h = 300, 120
    start_x = (w - (cols * node_w + (cols - 1) * 70)) // 2
    start_y = 275
    positions = []
    for i, label in enumerate(nodes):
        row, col = divmod(i, cols)
        x = start_x + col * (node_w + 70)
        y = start_y + row * 210
        positions.append((x, y, x + node_w, y + node_h))
        card(draw, (x, y, x + node_w, y + node_h), fill=with_alpha(COLORS["surface"], 232), outline=with_alpha(p["accent"], 190), radius=16)
        draw.ellipse((x + 22, y + 36, x + 70, y + 84), outline=p["accent"], width=4)
        for j, line in enumerate(wrap_lines(label, 18)[:3]):
            text(draw, (x + 92, y + 28 + j * 28), line, 23, COLORS["text"], True)
    for i in range(len(positions) - 1):
        a = positions[i]
        b = positions[i + 1]
        ax, ay = a[2], (a[1] + a[3]) // 2
        bx, by = b[0], (b[1] + b[3]) // 2
        if b[1] == a[1]:
            draw.line((ax, ay, bx, by), fill=with_alpha(p["accent"], 180), width=4)
            draw.polygon([(bx - 12, by - 8), (bx, by), (bx - 12, by + 8)], fill=p["accent"])
        else:
            midx = a[0] + node_w // 2
            endx = b[0] + node_w // 2
            draw.line((midx, a[3], midx, a[3] + 45, endx, a[3] + 45, endx, b[1]), fill=with_alpha(p["accent"], 150), width=4)
            draw.polygon([(endx - 8, b[1] - 12), (endx, b[1]), (endx + 8, b[1] - 12)], fill=p["accent"])
    text(draw, (80, 910), p["subtitle"], 28, COLORS["muted"])
    img.convert("RGB").save(OUT / f"{p['slug']}-architecture.png", quality=95)
    save_prompt(p, "architecture", architecture_prompt(p))


def make_stack(p: dict) -> None:
    w, h = 1600, 1000
    img = gradient((w, h), p["accent"]).convert("RGBA")
    draw = ImageDraw.Draw(img, "RGBA")
    draw_grid(draw, w, h, p["accent"])
    text(draw, (80, 70), p["name"], 58, COLORS["text"], True)
    text(draw, (82, 138), "Technology Stack Illustration", 30, COLORS["primary_light"], True)
    text(draw, (82, 188), p["domain"], 26, COLORS["muted"])
    x, y = 100, 300
    max_x = 1500
    for tech in p["stack"]:
        bw, bh = draw_badge(draw, x, y, tech, p["accent"], 28)
        x += bw + 18
        if x > max_x - 260:
            x = 100
            y += bh + 30
    card(draw, (100, 790, 1500, 905), fill=with_alpha(COLORS["surface"], 220), outline=COLORS["border"], radius=16)
    text(draw, (132, 820), "System Role", 25, COLORS["muted"], True)
    for idx, line in enumerate(wrap_lines(p["role"], 82)[:2]):
        text(draw, (132, 856 + idx * 30), line, 25, COLORS["text"])
    img.convert("RGB").save(OUT / f"{p['slug']}-tech-stack.png", quality=95)
    save_prompt(p, "tech-stack", stack_prompt(p))


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    PROMPTS.mkdir(parents=True, exist_ok=True)
    for project in PROJECTS:
        make_hero(project)
        make_cover(project)
        make_architecture(project)
        make_stack(project)
    print(f"Generated {len(PROJECTS) * 4} images in {OUT}")
    print(f"Generated {len(PROJECTS) * 4} prompts in {PROMPTS}")


if __name__ == "__main__":
    main()
