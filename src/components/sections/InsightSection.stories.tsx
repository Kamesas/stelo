import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InsightSection } from "./InsightSection";

const meta: Meta<typeof InsightSection> = {
  title: "Sections/InsightSection",
  component: InsightSection,
  args: {
    bgSrc: "/images/section-sleep-bg.png",
  },
};

export default meta;
type Story = StoryObj<typeof InsightSection>;

export const Default: Story = {};
