import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { colors } from "./theme.colors";
import { fonts, textStyles } from "./theme.typography";

defaultConfig.theme!.tokens!.colors = {};
defaultConfig.theme!.tokens!.fonts = {};
defaultConfig.theme!.textStyles = {};

const config = defineConfig({
  theme: {
    textStyles,
    tokens: {
      fonts,
      colors,
    },
  },
});

export const system = createSystem(defaultConfig, config);
