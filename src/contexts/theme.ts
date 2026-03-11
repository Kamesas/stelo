import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

defaultConfig.theme!.tokens!.colors = {};

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        s: {
          plum: { value: "#291928" },
          tangerine: { value: "#F0B377" },

          tan: { value: "#EBE6E0" },
          bone: { value: "#F8F6F2" },
          white: { value: "#FFFFFF" },

          error: { value: "#AC3D2E" },
          warning: { value: "#FCAF2D" },
          success: { value: "#015651" },

          dark: {
            5: { value: "rgba(41, 25, 40, 0.05)" },
            10: { value: "rgba(41, 25, 40, 0.1)" },
            40: { value: "rgba(41, 25, 40, 0.4)" },
            70: { value: "rgba(41, 25, 40, 0.7)" },
            80: { value: "rgba(41, 25, 40, 0.8)" },
          },

          light: {
            10: { value: "rgba(248, 246, 242, 0.1)" },
            20: { value: "rgba(248, 246, 242, 0.2)" },
            40: { value: "rgba(248, 246, 242, 0.4)" },
            60: { value: "rgba(248, 246, 242, 0.6)" },
            80: { value: "rgba(248, 246, 242, 0.8)" },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
