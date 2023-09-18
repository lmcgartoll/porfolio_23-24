import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montreal: ["montreal"],
        montrealBold: ["montreal-bold"],
        bit: ["bit"],
        mondwest: ["mondwest", "sans-serif"],
      },
      colors: {
        "dark-grey": "#222222",
        "mid-grey": "#505050",
        "light-grey": "#969696",
        "off-white": "#F0F0F0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
