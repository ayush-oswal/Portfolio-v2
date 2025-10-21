import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Ayush Oswal",
      "alternateName": "Ayush Oswal Backend Developer Pune",
      "jobTitle": "Senior Backend Developer",
      "url": "https://ayushoswal.com",
      "image": "https://ayushoswal.com/me.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "knowsAbout": [
        "Backend Engineering",
        "Microservices",
        "DevOps",
        "AI Agents",
        "Queue Architecture",
        "PostgreSQL",
        "n8n",
        "Voice Agent Development"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Azodha"
      },
      "sameAs": [
        "https://github.com/ayush-oswal",
        "https://x.com/Oswal_ayushh",
        "https://ayushoswal.com"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Ayush Oswal Portfolio",
      "alternateName": "Pune Backend Developer Portfolio",
      "url": "https://ayushoswal.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ayushoswal.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfessionalService",
      "name": "Ayush Oswal Backend Engineering Services",
      "serviceType": [
        "Backend Development",
        "AI Agent Architecture",
        "Microservices Consulting",
        "Automation Workflows"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Pune"
      },
      "provider": {
        "@type": "Person",
        "name": "Ayush Oswal"
      },
      "url": "https://ayushoswal.com"
    }
  ]
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushoswal.com"),
  title: {
    default: "Ayush Oswal",
    template: "%s | Ayush Oswal Backend Developer Pune"
  },
  description:
    "Discover Ayush Oswal, a senior backend developer based in Pune, India specializing in resilient microservices, AI platforms, and DevOps automation.",
  keywords: [
    "Ayush Oswal",
    "Ayush Oswal Backend Developer",
    "Backend Developer Pune",
    "Pune Software Engineer",
    "AI Engineer Pune",
    "Microservices Architect",
    "n8n Expert",
    "Queue Architecture",
    "Voice Agent Developer"
  ],
  authors: [{ name: "Ayush Oswal" }],
  creator: "Ayush Oswal",
  publisher: "Ayush Oswal",
  alternates: {
    canonical: "https://ayushoswal.com"
  },
  openGraph: {
    type: "website",
    url: "https://ayushoswal.com",
    title: "Ayush Oswal | Backend Developer in Pune | AI Engineer",
    description:
      "Portfolio of Ayush Oswal, a backend developer in Pune building reliable microservices, AI agents, and cloud-native platforms.",
    siteName: "Ayush Oswal Portfolio",
    images: [
      {
        url: "https://ayushoswal.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Oswal Backend Developer in Pune"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Oswal_ayushh",
    creator: "@Oswal_ayushh",
    title: "Ayush Oswal | Backend Developer in Pune",
    description:
      "Explore the work of Ayush Oswal, Pune-based backend developer building AI-first microservices platforms.",
    images: ["https://ayushoswal.com/og-image.jpg"]
  },
  category: "technology"
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
        <meta
          name="description"
          content="Ayush Oswal's portfolio showcasing a Pune-based backend developer and AI engineer delivering resilient microservices and automation."
        />
        <meta
          name="keywords"
          content="Ayush Oswal, Backend Developer Pune, Pune Software Engineer, AI Engineer India, Microservices, n8n automation, Voice Agents"
        />
        <meta name="author" content="Ayush Oswal" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta property="og:title" content="Ayush Oswal | Backend Developer in Pune | AI Engineer" />
        <meta property="og:description" content="Portfolio of Ayush Oswal, a backend developer in Pune building reliable microservices, AI agents, and automation." />
        <meta property="og:image" content="https://ayushoswal.com/og-image.jpg" />
        <meta property="og:url" content="https://ayushoswal.com" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayush Oswal | Backend Developer in Pune" />
        <meta name="twitter:description" content="Explore the projects and experience of Ayush Oswal, backend developer and AI engineer based in Pune, India." />
        <meta name="twitter:image" content="https://ayushoswal.com/og-image.jpg" />
        <link rel="canonical" href="https://ayushoswal.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
