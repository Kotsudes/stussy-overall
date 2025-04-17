import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      menu: {
        col: "flex-col flex",
      },
      height: {
        preview: "var(--preview-height)",
      },
      width: { preview: "var(--preview-width)" },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwind-clip-path"),
    nextui({
      themes: {
        light: {
          colors: {},
        },
        dark: {
          colors: {
            text: "#FEFEFE",
            background: "#2a2f3e",
            primary: "#F4AB4F",
            secondary: "#F4AB4F",
            accent: "#8eed32",
          },
        },
      },
    }),
  ],
};
export default config;
