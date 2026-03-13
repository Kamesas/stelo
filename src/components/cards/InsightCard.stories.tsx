import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Flex } from "@chakra-ui/react";
import { InsightCard } from "./InsightCard";

const meta: Meta<typeof InsightCard> = {
  title: "Components/InsightCard",
  component: InsightCard,
  decorators: [
    (Story) => (
      <Flex
        p="10"
        minH="100vh"
        alignItems="center"
        justifyContent="center"
        bgImage="url(/images/section-sleep-bg.png)"
        bgSize="cover"
        backgroundPosition="center"
      >
        <Story />
      </Flex>
    ),
  ],
  args: {
    title: "Sleep more soundly",
    description:
      "Stable glucose supports better sleep, and better sleep helps regulate glucose the next day. When sleep is disrupted, glucose can become harder to manage.",
    imageSrc: "/images/insight-card-sleep.png",
    ctaLabel: "Learn more",
  },
};

export default meta;
type Story = StoryObj<typeof InsightCard>;

export const Default: Story = {};
