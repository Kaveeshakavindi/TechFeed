/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-mono)',
    body: 'var(--font-sans)',
  },
  colors: {
    customWhite: {
      50: "#f0f9f0",
      100: "#d4e5d4",
      200: "#b7d1b7",
      300: "#9bc09b",
      400: "#7f9f7f",
      500: "#649464",
      600: "#FFFFFF",
      700: "#3a5b3a",
      800: "#2a432a",
      900: "#1b2b1b",
    }
  }
});