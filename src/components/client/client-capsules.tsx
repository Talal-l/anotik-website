import * as simpleIcons from "simple-icons";
import { techData } from "@/data/tech-data";

type Props = {
  isHome?: boolean;
};

function getIcon(techName: string) {
  const nameMap: Record<string, string> = {
    "Next.js": "siNextdotjs",
    "React Native": "siReact",
    "Tailwind CSS": "siTailwindcss",
    "Node.js": "siNodedotjs",
    "bun": "siBun",
    TypeScript: "siTypescript",
    JavaScript: "siJavascript",
    WordPress: "siWordpress",
    Python: "siPython",
    Docker: "siDocker",
    Git: "siGitHub",
    Go: "siGo",
    Zig: "siZig",
    Rust: "siRust",
    Kubernetes: "siKubernetes",
    ArgoCD: "siArgo",
    GitHub: "siGithub",
    Linux: "siLinux",
    C: "siC",
    Cursor: "siCursor",
    Flutter: "siFlutter",
    PHP: "siPhp",
    Android: "siAndroid",
    Swift: "siSwift",
    PostgreSQL: "siPostgresql",
    MySQL: "siMysql",
    Cloudflare: "siCloudflare",
    "Three.js": "siThreedotjs",
    Zod: "siZod",
  };

  const iconKey = nameMap[techName] as keyof typeof simpleIcons | undefined;

  if (iconKey && simpleIcons[iconKey]) {
    return simpleIcons[iconKey] as { title: string; path: string; hex: string };
  }

  const normalized = techName
    .replace(/\s+/g, "")
    .replace(/\./g, "dot")
    .replace(/\+/g, "plus")
    .replace(/-/g, "");

  const possibleKeys = [
    `si${normalized.charAt(0).toUpperCase() + normalized.slice(1)}`,
    `si${normalized}`,
  ] as (keyof typeof simpleIcons)[];

  for (const key of possibleKeys) {
    if (simpleIcons[key]) {
      return simpleIcons[key] as { title: string; path: string; hex: string };
    }
  }

  return null;
}

export default function ClientCapsules({ isHome }: Props) {
  const technologies = techData.map((tech, index) => {
    const colorIndex = tech.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const capsuleColor = colorIndex % 2 === 0 ? "var(--secondary)" : "var(--action)";
    
    return {
      ...tech,
      bgTheme: tech.bgTheme !== undefined ? tech.bgTheme : isHome && index % 3 === 0,
      capsuleColor,
    };
  });

  return (
    <div className="client-capsule-wrapper-box" data-t-throwable-scene="true">
      <div className="client-capsule-wrapper">
        {technologies.map((tech, index) => {
          const icon = getIcon(tech.name);
          return (
            <p key={index} data-t-throwable-el="">
              <span 
                className={`client-box ${tech.bgTheme ? "bg-theme" : ""}`}
                style={{ backgroundColor: tech.capsuleColor }}
              >
                {icon ? (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="tech-icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      fill: "#ffffff",
                      maxWidth: "80%",
                      maxHeight: "80%",
                      flexShrink: 0,
                      display: "block",
                    }}
                  >
                    <title>{icon.title}</title>
                    <path d={icon.path} fill="#ffffff" />
                  </svg>
                ) : (
                  <span
                    className="tech-text"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                      textAlign: "center",
                      display: "block",
                      pointerEvents: "none",
                      color: "#ffffff",
                      padding: "0 10px",
                    }}
                  >
                    {tech.name}
                  </span>
                )}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
