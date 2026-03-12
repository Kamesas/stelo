import type { Preview } from "@storybook/nextjs-vite";
import React from "react";
import { ChakraUIProvider } from "../src/contexts/ChakraProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraUIProvider>
        <Story />
      </ChakraUIProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
