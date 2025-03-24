import type { Metadata } from "next";
import "./globals.css";
import { Chakra_Provider } from "@/components/ui/provider";
import VerticleTabs from "@/components/ui/verticlenav";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "NextGen | World at your fingertips",
  description: "Discover. Engage. Stay informed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Chakra_Provider>
          <Box display="flex">
            <VerticleTabs />
            <Box ml="310px">{children}</Box>
          </Box>
        </Chakra_Provider>
      </body>
    </html>
  );
}
