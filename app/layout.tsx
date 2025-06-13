import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    /**
     * Useful in multi page applications
     * You want consistent title across all pages
     *
     */
    template: `%s | Prostore`,
    default: APP_NAME,

    /**
     * absolute title breaks free from the template
     * and sets the title as is.
     *
     * Useful when you want to set a specific title for a page
     * without the template.
     */
    // absolute: "My Title"
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /**
     * We use `suppressHydrationWarning` to prevent hydration errors
     * Next Themes uses window object to deal with changing of theme
     * server does not have a window object
     * so without suppressHydrationWarning it will tell us that there is mismatch between server and client code.
     * we must stop it from complaining about it.
     */
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
