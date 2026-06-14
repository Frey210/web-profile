import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(process.cwd(), "..");
const projectsRoot = path.join(repoRoot, "projects");

export type Project = {
  slug: string;
  title: string;
  year: string;
  status: string;
  domain: string;
  role: string;
  summary: string;
  stack: string[];
  featured?: boolean;
  image?: string;
  screenshots?: string[];
};

export const site = {
  name: "Fariz Achmad Faizal",
  title: "Airport Infrastructure QA Officer, Startup CTO, IoT Systems Engineer",
  location: "Makassar, Indonesia",
  email: "farizachmadfaizal@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fariz-achmad-faizal.vercel.app",
  links: {
    linkedin: "https://www.linkedin.com/in/fariz-ac",
    github: "https://github.com/Frey210",
    scholar: "https://scholar.google.com/citations?user=M_2e9-MAAAAJ",
    semantic: "https://www.semanticscholar.org/author/Fariz-Achmad-Faizal/2290610304",
    sinta: "https://sinta.kemdiktisaintek.go.id/authors/profile/6887503",
    company: "https://aerasea.id"
  }
};

export const stats = [
  { value: "11+", label: "documented systems" },
  { value: "3", label: "production IoT products" },
  { value: "2", label: "national PKM grants" },
  { value: "1", label: "published SLAM paper" }
];

export const domains = [
  {
    title: "Airport Infrastructure",
    text: "I oversee commissioning evidence for Cisco networks, Allen-Bradley PLC/SCADA baggage handling, Notifier fire alarms, PA systems, and Leidos HBS screening."
  },
  {
    title: "Industrial Automation",
    text: "I work with PLC, SCADA, structured cabling, FAT/SAT witness testing, non-conformance tracking, and acceptance documentation."
  },
  {
    title: "IoT Systems",
    text: "I build ESP32 sensor nodes, MQTT telemetry flows, water-quality monitoring, physiological measurement, and real-time dashboards."
  },
  {
    title: "Embedded Systems",
    text: "I design and integrate Arduino, STM32, Raspberry Pi, sensors, motor control, LoRa/RF communication, and C/C++ firmware."
  },
  {
    title: "Backend & Infrastructure",
    text: "I ship backend and infrastructure systems with Node.js, FastAPI, Django, REST APIs, Linux servers, Docker Compose, Nginx, Cloudflare Tunnel, Grafana, and Prometheus."
  },
  {
    title: "Research & Product R&D",
    text: "I research and prototype with ROS II, OpenCV, Kinect-based SLAM, KNN classification, funded research, and production-oriented product development."
  }
];

export const projects: Project[] = [
  {
    slug: "airport-project",
    title: "Airport Electronic QA",
    year: "2023-Present",
    status: "Active infrastructure role",
    domain: "Aviation / Critical Infrastructure",
    role: "Electronic Officer - Quality Assurance",
    summary:
      "I handle quality assurance and commissioning oversight for Sultan Hasanuddin International Airport expansion electronic systems.",
    stack: ["Cisco", "Allen-Bradley", "SCADA", "Notifier", "Leidos HBS", "FAT/SAT"],
    featured: true,
    screenshots: []
  },
  {
    slug: "aquanotes",
    title: "Aquanotes",
    year: "2023-Present",
    status: "Production",
    domain: "Aquaculture IoT",
    role: "Project Lead, Systems Architect, Infrastructure Lead",
    summary:
      "I built a production IoT platform that monitors shrimp pond water quality from ESP32 sensor nodes to web and mobile dashboards.",
    stack: ["ESP32", "MQTT", "Node.js", "FastAPI", "Docker", "Nginx"],
    featured: true,
    image: "/media/projects/aquanotes.png",
    screenshots: [
      "/media/projects/aquanotes/status-kolam.png",
      "/media/projects/aquanotes/dashboard.png",
      "/media/projects/aquanotes/device.png"
    ]
  },
  {
    slug: "ergoquipt",
    title: "Ergoquipt",
    year: "2024-Present",
    status: "Production",
    domain: "Health Tech / Ergonomics",
    role: "CTO, Systems Architect",
    summary:
      "I led the ergonomics measurement system for reaction time, tympanic temperature, and heart-rate workflows.",
    stack: ["ESP32", "Sensors", "Backend API", "Web Admin", "Mobile"],
    featured: true,
    image: "/media/projects/ergoquipt.png",
    screenshots: [
      "/media/projects/ergoquipt/login.png",
      "/media/projects/ergoquipt/home.png",
      "/media/projects/ergoquipt/ready-test.png"
    ]
  },
  {
    slug: "dento-smart",
    title: "Dento Smart",
    year: "2024",
    status: "Production",
    domain: "Healthcare IoT",
    role: "Lead Engineer",
    summary:
      "I built smart dental equipment monitoring using ESP32, FastAPI, and React dashboards for operational visibility.",
    stack: ["ESP32", "FastAPI", "React", "OpenAPI"],
    featured: true,
    image: "/media/projects/dento.png",
    screenshots: [
      "/media/projects/dento-smart/dashboard.png",
      "/media/projects/dento-smart/history.png",
      "/media/projects/dento-smart/login.png"
    ]
  },
  {
    slug: "ybot",
    title: "Y-BOT Kinect SLAM",
    year: "2023",
    status: "Research complete",
    domain: "Robotics / Research",
    role: "Lead Researcher, Robot Designer, ROS Developer",
    summary:
      "I built an autonomous mobile robot using Kinect depth sensing and ROS SLAM, completed it as my thesis, and published it in JITET.",
    stack: ["ROS II", "Kinect", "Raspberry Pi", "Arduino", "SLAM", "C++"],
    featured: false,
    image: "/media/projects/ybot.png"
  },
  {
    slug: "monitoring-platform",
    title: "Infrastructure Monitoring Platform",
    year: "2024",
    status: "Deployed",
    domain: "DevOps / Observability",
    role: "Infrastructure Lead",
    summary:
      "I built server and startup infrastructure monitoring dashboards for Linux, Docker, and service health visibility.",
    stack: ["Linux", "Docker", "Grafana", "Prometheus", "Nginx"],
    featured: true,
    screenshots: []
  },
  {
    slug: "siwarga",
    title: "SiWarga",
    year: "2025",
    status: "Deployed",
    domain: "Civic Technology",
    role: "Lead Developer",
    summary:
      "I built a citizen reporting platform for community issue submission, tracking, and public-sector response workflows.",
    stack: ["Web App", "REST API", "PostgreSQL", "Docker"]
  },
  {
    slug: "bioassay",
    title: "Bioassay Color Mapping",
    year: "2023",
    status: "Prototype complete",
    domain: "Computer Vision / Bioassay",
    role: "Lead Developer",
    summary:
      "I developed an OpenCV and KNN-based image processing workflow for plankton density detection from RGB bioassay imagery.",
    stack: ["Python", "OpenCV", "KNN", "Image Processing"],
    image: "/media/projects/bioassay.png"
  },
  {
    slug: "thermal-camera",
    title: "Thermal Camera AC Control",
    year: "2023",
    status: "Prototype complete",
    domain: "Building Automation",
    role: "Lead Developer",
    summary:
      "I built a privacy-respecting thermal human detection system for occupancy-aware air-conditioning control.",
    stack: ["Python", "OpenCV", "Thermal IR", "Raspberry Pi"]
  },
  {
    slug: "fire-fighting-robot",
    title: "Fire Fighting Robot",
    year: "2021",
    status: "Competition prototype",
    domain: "Robotics / Embedded",
    role: "Embedded Systems Developer",
    summary:
      "I worked on an STM32-based hexapod firefighting robot for embedded control, sensing, and robotics competition workflows.",
    stack: ["STM32", "C/C++", "Sensors", "Motor Control"]
  },
  {
    slug: "radiolink-iot",
    title: "RadioLink IoT",
    year: "2022",
    status: "Prototype complete",
    domain: "Aviation IoT",
    role: "Developer",
    summary:
      "I developed a wireless temperature monitoring prototype for remote aviation instrument cabinets and server-room style environments.",
    stack: ["Arduino", "ESP32", "LoRa", "RF", "Temperature Sensors"]
  }
];

export const experience = [
  {
    org: "PT Angkasa Pura I",
    role: "Electronic Officer - Quality Assurance",
    period: "Nov 2023-Present",
    text: "I work in owner-side QA for Sultan Hasanuddin International Airport expansion, covering data networks, PLC/SCADA baggage handling, fire alarm, public address, and X-Ray HBS systems."
  },
  {
    org: "PT Media Teknologi Celebes (Aerasea)",
    role: "CTO & Co-Founder",
    period: "2023-Present",
    text: "I lead R&D and production delivery for IoT products across aquaculture, healthcare, smart city, embedded firmware, backend APIs, web, mobile, and infrastructure operations."
  },
  {
    org: "AirNav Indonesia",
    role: "Air Traffic Navigation Services Intern",
    period: "2022",
    text: "I developed monitoring capability for MATSC Makassar server-room environments and built aviation-domain grounding in operational reliability."
  }
];

export const achievements = [
  "2nd Place - AirNav Makassar Scientific Paper Competition, 2022",
  "Silver Medal - LKTI Futura Universitas Padjadjaran, 2022",
  "Top 100 - PFMuda Pertamina Foundation, 2022",
  "National Finalist - ABU Robot Contest, 2021",
  "PKM-PI National Research Grant - Smart Broiler Chicken Coop, 2021",
  "PKM-KC National Research Grant - Smart Healing Aerochair, 2022",
  "GPA 3.79 / 4.00 - Electrical Engineering, Universitas Hasanuddin"
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectMarkdown(slug: string) {
  const folder = path.join(projectsRoot, slug);
  if (!fs.existsSync(folder)) return "";

  const order = ["README.md", "overview.md", "architecture.md", "tech-stack.md", "contribution.md", "results.md", "links.md"];
  const markdown = order
    .map((file) => {
      const fullPath = path.join(folder, file);
      return fs.existsSync(fullPath) ? fs.readFileSync(fullPath, "utf8") : "";
    })
    .filter(Boolean)
    .join("\n\n");

  return toFirstPerson(markdown);
}

export function getProjectSections(slug: string) {
  const folder = path.join(projectsRoot, slug);
  const read = (file: string) => {
    const fullPath = path.join(folder, file);
    return fs.existsSync(fullPath) ? toFirstPerson(fs.readFileSync(fullPath, "utf8")) : "";
  };

  return {
    overview: read("overview.md"),
    architecture: read("architecture.md"),
    contributions: read("contribution.md"),
    results: read("results.md"),
    techStack: read("tech-stack.md"),
    links: read("links.md")
  };
}

function toFirstPerson(markdown: string) {
  return markdown
    .replace(/Fariz Achmad Faizal's/g, "my")
    .replace(/Fariz's/g, "my")
    .replace(/Fariz Achmad Faizal is/g, "I am")
    .replace(/Fariz Achmad Faizal was/g, "I was")
    .replace(/Fariz Achmad Faizal has/g, "I have")
    .replace(/Fariz Achmad Faizal developed/g, "I developed")
    .replace(/Fariz Achmad Faizal designed/g, "I designed")
    .replace(/Fariz Achmad Faizal built/g, "I built")
    .replace(/Fariz Achmad Faizal leads/g, "I lead")
    .replace(/Fariz Achmad Faizal represents/g, "I represent")
    .replace(/Fariz is/g, "I am")
    .replace(/Fariz was/g, "I was")
    .replace(/Fariz has/g, "I have")
    .replace(/Fariz developed/g, "I developed")
    .replace(/Fariz designed/g, "I designed")
    .replace(/Fariz built/g, "I built")
    .replace(/Fariz leads/g, "I lead")
    .replace(/Fariz represents/g, "I represent")
    .replace(/Fariz oversees/g, "I oversee")
    .replace(/Fariz's QA role/g, "my QA role")
    .replace(/Fariz Achmad Faizal/g, "I")
    .replace(/\bFariz\b/g, "I")
    .replace(/\bhe serves\b/gi, "I serve")
    .replace(/\bhe leads\b/gi, "I lead")
    .replace(/\bhe developed\b/gi, "I developed")
    .replace(/\bhe designed\b/gi, "I designed")
    .replace(/\bhe built\b/gi, "I built")
    .replace(/\bhe is\b/gi, "I am")
    .replace(/\bhe was\b/gi, "I was")
    .replace(/\bhe has\b/gi, "I have")
    .replace(/\bhis role\b/gi, "my role")
    .replace(/\bhis work\b/gi, "my work")
    .replace(/\bhis\b/gi, "my");
}
