import { defineLayerStyles } from "@chakra-ui/react";

export const layerStyles = defineLayerStyles({
  "s.glass": {
    value: {
      bg: "rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(200px)",
      borderRadius: "24px",
    },
  },

  "s.glass.pill": {
    value: {
      bg: "rgba(0, 0, 0, 0.2)",
      borderRadius: "59px",
    },
  },
});
