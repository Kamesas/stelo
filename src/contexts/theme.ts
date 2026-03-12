import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { colors } from "./theme.colors";
import { layerStyles } from "./theme.layerstyles";
import { fonts, textStyles } from "./theme.typography";

defaultConfig.theme!.tokens!.colors = {};
defaultConfig.theme!.tokens!.fonts = {};
defaultConfig.theme!.textStyles = {};
defaultConfig.theme!.layerStyles = {};

const config = defineConfig({
  theme: {
    textStyles,
    layerStyles,
    tokens: {
      fonts,
      colors,
    },
  },
});

export const system = createSystem(defaultConfig, config);
