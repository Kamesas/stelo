import { ChakraUIProvider } from "@/contexts/ChakraProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stelo",
  description: "Stelo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </body>
    </html>
  );
}
