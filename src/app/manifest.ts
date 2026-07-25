import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SolRise Learning Academy",
    short_name: "SolRise",
    description: "Personalized learning. Lifelong confidence.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF5E8",
    theme_color: "#22B3AC",
    icons: [
      {
        src: "/SolRise-logo-2.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
