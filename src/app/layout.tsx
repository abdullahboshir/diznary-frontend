import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Container from "@/components/layout/Container";
import Providers from "@/lib/providers/Providers";

const glatic = localFont({
  src: [
    {
      path: "../../public/fonts/Glatic-Bold.woff",
      weight: "400", 
      style: "normal",
    },
  ],
  variable: "--font-glatic",
});


export const metadata: Metadata = {
  title: "Diznary",
  description: "Diznary Technologies Private Limited",
    icons: {
    icon: "/favicon.png", // your favicon path
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${glatic.variable}`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Container>{children}</Container>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
