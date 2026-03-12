import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Box, Text, Flex, Grid } from "@chakra-ui/react";

const colorGroups = {
  Core: [
    { token: "s.plum", value: "#291928", light: true },
    { token: "s.tangerine", value: "#F0B377", light: false },
    { token: "s.tan", value: "#EBE6E0", light: false },
    { token: "s.bone", value: "#F8F6F2", light: false },
    { token: "s.white", value: "#FFFFFF", light: false },
  ],
  Status: [
    { token: "s.error", value: "#AC3D2E", light: true },
    { token: "s.warning", value: "#FCAF2D", light: false },
    { token: "s.success", value: "#015651", light: true },
  ],
  "Dark Overlays": [
    { token: "s.dark.5", value: "rgba(41,25,40,0.05)", light: false },
    { token: "s.dark.10", value: "rgba(41,25,40,0.1)", light: false },
    { token: "s.dark.40", value: "rgba(41,25,40,0.4)", light: true },
    { token: "s.dark.70", value: "rgba(41,25,40,0.7)", light: true },
    { token: "s.dark.80", value: "rgba(41,25,40,0.8)", light: true },
  ],
  "Light Overlays": [
    { token: "s.light.10", value: "rgba(248,246,242,0.1)", light: false },
    { token: "s.light.20", value: "rgba(248,246,242,0.2)", light: false },
    { token: "s.light.40", value: "rgba(248,246,242,0.4)", light: false },
    { token: "s.light.60", value: "rgba(248,246,242,0.6)", light: false },
    { token: "s.light.80", value: "rgba(248,246,242,0.8)", light: false },
  ],
};

function Swatch({
  token,
  value,
  light,
}: {
  token: string;
  value: string;
  light: boolean;
}) {
  return (
    <Box>
      <Box
        bg={token}
        h="80px"
        borderRadius="8px"
        border="1px solid"
        borderColor="s.dark.10"
      />
      <Text
        fontSize="12px"
        fontFamily="monospace"
        fontWeight="500"
        color="s.plum"
        mt="2"
      >
        {token}
      </Text>
      <Text fontSize="11px" fontFamily="monospace" color="s.dark.40">
        {value}
      </Text>
    </Box>
  );
}

function AllColors() {
  return (
    <Box p="8" bg="s.bone" minH="100vh">
      {Object.entries(colorGroups).map(([group, colors]) => (
        <Box key={group} mb="10">
          <Text
            fontSize="12px"
            fontFamily="monospace"
            fontWeight="600"
            color="s.dark.40"
            mb="4"
            textTransform="uppercase"
            letterSpacing="0.08em"
          >
            {group}
          </Text>
          <Grid templateColumns="repeat(auto-fill, minmax(140px, 1fr))" gap="4">
            {colors.map((c) => (
              <Swatch key={c.token} {...c} />
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

function OverlaysOnDark() {
  return (
    <Box p="8" bg="s.plum" minH="100vh">
      <Text
        fontSize="12px"
        fontFamily="monospace"
        fontWeight="600"
        color="s.light.40"
        mb="4"
        textTransform="uppercase"
        letterSpacing="0.08em"
      >
        Light Overlays on Dark
      </Text>
      <Grid templateColumns="repeat(auto-fill, minmax(140px, 1fr))" gap="4">
        {colorGroups["Light Overlays"].map((c) => (
          <Box key={c.token}>
            <Box
              bg={c.token}
              h="80px"
              borderRadius="8px"
              border="1px solid"
              borderColor="s.light.10"
            />
            <Text
              fontSize="12px"
              fontFamily="monospace"
              fontWeight="500"
              color="s.bone"
              mt="2"
            >
              {c.token}
            </Text>
            <Text fontSize="11px" fontFamily="monospace" color="s.light.40">
              {c.value}
            </Text>
          </Box>
        ))}
      </Grid>

      <Text
        fontSize="12px"
        fontFamily="monospace"
        fontWeight="600"
        color="s.light.40"
        mb="4"
        mt="10"
        textTransform="uppercase"
        letterSpacing="0.08em"
      >
        Dark Overlays on Dark
      </Text>
      <Grid templateColumns="repeat(auto-fill, minmax(140px, 1fr))" gap="4">
        {colorGroups["Dark Overlays"].map((c) => (
          <Box key={c.token}>
            <Box
              bg={c.token}
              h="80px"
              borderRadius="8px"
              border="1px solid"
              borderColor="s.light.10"
            />
            <Text
              fontSize="12px"
              fontFamily="monospace"
              fontWeight="500"
              color="s.bone"
              mt="2"
            >
              {c.token}
            </Text>
            <Text fontSize="11px" fontFamily="monospace" color="s.light.40">
              {c.value}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

const meta: Meta = {
  title: "Theme/Colors",
};

export default meta;
type Story = StoryObj;

export const All: Story = { render: () => <AllColors /> };
export const OverlaysOnDarkBackground: Story = {
  render: () => <OverlaysOnDark />,
};
