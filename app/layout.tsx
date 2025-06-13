import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME,APP_DESCRIPTION,SERVER_URL } from "@/lib/constants";

const inter =Inter({subsets: ["latin"]});

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
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
