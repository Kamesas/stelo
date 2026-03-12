import { Box, Text } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const textStyles = {
  Headings: [
    { name: "s.heading.h1", sample: "Heading H1" },
    { name: "s.heading.h2", sample: "Heading H2" },
    { name: "s.heading.h3", sample: "Heading H3" },
    { name: "s.heading.h4", sample: "Heading H4" },
    { name: "s.heading.h5", sample: "Heading H5" },
    { name: "s.heading.h6", sample: "Heading H6" },
  ],
  Body: [
    {
      name: "s.body.1",
      sample: "Body 1 — The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "s.body.1.medium",
      sample: "Body 1 Medium — The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "s.body.2",
      sample: "Body 2 — The quick brown fox jumps over the lazy dog.",
    },
    {
      name: "s.body.2.medium",
      sample: "Body 2 Medium — The quick brown fox jumps over the lazy dog.",
    },
  ],
  Accent: [
    { name: "s.accent.eyebrow", sample: "Eyebrow text" },
    { name: "s.accent.metadata", sample: "Metadata text" },
    { name: "s.accent.metadata.medium", sample: "Metadata medium text" },
  ],
  Utility: [
    { name: "s.utility.cta", sample: "Call to action" },
    { name: "s.utility.nav", sample: "Navigation item" },
    { name: "s.utility.footer", sample: "Footer text" },
  ],
};

function StyleRow({ name, sample }: { name: string; sample: string }) {
  return (
    <Box py="4" borderBottomWidth="1px" borderColor="s.dark.5">
      <Text fontSize="11px" fontFamily="monospace" color="s.dark.40" mb="2">
        {name}
      </Text>
      <Text textStyle={name} color="s.plum">
        {sample}
      </Text>
    </Box>
  );
}

function AllTextStyles() {
  return (
    <Box p="8" bg="s.bone" minH="100vh">
      {Object.entries(textStyles).map(([group, styles]) => (
        <Box key={group} mb="10">
          <Text
            fontSize="12px"
            fontFamily="monospace"
            fontWeight="600"
            color="s.dark.40"
            mb="2"
            textTransform="uppercase"
            letterSpacing="0.08em"
          >
            {group}
          </Text>
          {styles.map((s) => (
            <StyleRow key={s.name} {...s} />
          ))}
        </Box>
      ))}
    </Box>
  );
}

function HeadingsOnly() {
  return (
    <Box p="8" bg="s.bone">
      {textStyles.Headings.map((s) => (
        <StyleRow key={s.name} {...s} />
      ))}
    </Box>
  );
}

function BodyOnly() {
  return (
    <Box p="8" bg="s.bone">
      {textStyles.Body.map((s) => (
        <StyleRow key={s.name} {...s} />
      ))}
    </Box>
  );
}

function AccentOnly() {
  return (
    <Box p="8" bg="s.bone">
      {textStyles.Accent.map((s) => (
        <StyleRow key={s.name} {...s} />
      ))}
    </Box>
  );
}

function UtilityOnly() {
  return (
    <Box p="8" bg="s.bone">
      {textStyles.Utility.map((s) => (
        <StyleRow key={s.name} {...s} />
      ))}
    </Box>
  );
}

function OnDark() {
  return (
    <Box p="8" bg="s.plum" minH="100vh">
      {Object.entries(textStyles).map(([group, styles]) => (
        <Box key={group} mb="10">
          <Text
            fontSize="12px"
            fontFamily="monospace"
            fontWeight="600"
            color="s.light.40"
            mb="2"
            textTransform="uppercase"
            letterSpacing="0.08em"
          >
            {group}
          </Text>
          {styles.map((s) => (
            <Box
              key={s.name}
              py="4"
              borderBottomWidth="1px"
              borderColor="s.light.10"
            >
              <Text
                fontSize="11px"
                fontFamily="monospace"
                color="s.light.40"
                mb="2"
              >
                {s.name}
              </Text>
              <Text textStyle={s.name} color="s.bone">
                {s.sample}
              </Text>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}

const meta: Meta = {
  title: "Theme/Typography",
};

export default meta;
type Story = StoryObj;

export const All: Story = { render: () => <AllTextStyles /> };
export const Headings: Story = { render: () => <HeadingsOnly /> };
export const Body: Story = { render: () => <BodyOnly /> };
export const Accent: Story = { render: () => <AccentOnly /> };
export const Utility: Story = { render: () => <UtilityOnly /> };
export const DarkBackground: Story = { render: () => <OnDark /> };
