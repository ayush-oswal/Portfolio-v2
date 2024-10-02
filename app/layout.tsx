import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Oswal",
  description: "Portfolio webiste, full stack dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Ayush Oswal's Portfolio - Full Stack Developer & AI Enthusiast" />
        <meta name="keywords" content="Ayush Oswal, Full Stack Developer, AI Enthusiast, Portfolio" />
        <meta property="og:title" content="Ayush Oswal" />
        <meta property="og:description" content="Portfolio website of Ayush Oswal, a Full Stack Developer & AI Enthusiast" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://ayushoswal.live" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayush Oswal" />
        <meta name="twitter:description" content="Portfolio website of Ayush Oswal, a Full Stack Developer & AI Enthusiast" />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "oc7yddme4j");
          `}
        </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}
