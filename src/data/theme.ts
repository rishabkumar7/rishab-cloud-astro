import type { TailwindColor } from "@/utils/types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "yellow", // You might want to adjust this too if needed
    blur: {
      top: "purple", // Changed from "violet"
      bottom: "purple", // Changed from "yellow"
    },
  },
};

export default theme;
