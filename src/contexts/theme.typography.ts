import { defineTextStyles } from "@chakra-ui/react";

export const fonts = {
  pasticheGrotesque: { value: "var(--font-pastiche-grotesque)" },
  roboto: { value: "var(--font-roboto)" },
};

export const textStyles = defineTextStyles({
  "s.heading.h1": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "48px", md: "72px" },
      lineHeight: "1.15",
      letterSpacing: "-0.01em",
    },
  },
  "s.heading.h2": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "40px", md: "64px" },
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
    },
  },
  "s.heading.h3": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "36px", md: "56px" },
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
    },
  },
  "s.heading.h4": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "32px", md: "48px" },
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
    },
  },
  "s.heading.h5": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "24px", md: "32px" },
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
    },
  },
  "s.heading.h6": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "22px", md: "26px" },
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
    },
  },

  "s.body.1": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "18px", md: "20px" },
      lineHeight: "1.5",
      letterSpacing: "0.01em",
    },
  },
  "s.body.1.medium": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "500",
      fontSize: { base: "18px", md: "20px" },
      lineHeight: "1.5",
      letterSpacing: "0.01em",
    },
  },
  "s.body.2": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "14px", md: "16px" },
      lineHeight: "1.5",
      letterSpacing: "0.01em",
    },
  },
  "s.body.2.medium": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "500",
      fontSize: { base: "14px", md: "16px" },
      lineHeight: "1.5",
      letterSpacing: "0.01em",
    },
  },

  "s.accent.eyebrow": {
    value: {
      fontFamily: "var(--font-roboto)",
      fontWeight: "400",
      fontSize: { base: "12px", md: "14px" },
      lineHeight: "1.4",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
  },
  "s.accent.metadata": {
    value: {
      fontFamily: "var(--font-roboto)",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "1.5",
      letterSpacing: "0.01em",
    },
  },
  "s.accent.metadata.medium": {
    value: {
      fontFamily: "var(--font-roboto)",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "1.5",
      letterSpacing: "0.01em",
    },
  },

  "s.utility.cta": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "14px", md: "16px" },
      lineHeight: "1.1",
      letterSpacing: "0.01em",
    },
  },
  "s.utility.nav": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "16px", md: "14px" },
      lineHeight: "1.4",
      letterSpacing: "0.01em",
    },
  },
  "s.utility.footer": {
    value: {
      fontFamily: "var(--font-pastiche-grotesque)",
      fontWeight: "400",
      fontSize: { base: "16px", md: "14px" },
      lineHeight: "1.5",
      letterSpacing: "0.01em",
    },
  },
});
