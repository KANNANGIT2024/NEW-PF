import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kannan V | Front End & Full Stack Developer Portfolio",
  description:
    "Portfolio of Kannan V - Front End & Full Stack Developer specializing in React.js, Next.js, Node.js, MongoDB, TypeScript, Material UI, and Shadcn UI. Creator of ATS Dashboards and IT Asset Management Platforms.",
  keywords: [
    "Kannan V",
    "Front End Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Software Engineer Portfolio",
    "Web Development",
    "ATS Dashboard",
    "Asset Management Tool",
    "Shadcn UI",
    "Material UI",
    "Node.js",
    "MongoDB"
  ],
  authors: [{ name: "Kannan V", url: "https://kannan-portfolio.dev" }],
  creator: "Kannan V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kannan-portfolio.dev",
    title: "Kannan V | Front End & Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Kannan V: Front End Developer specializing in Next.js, React.js, Node.js, and enterprise dashboard architectures.",
    siteName: "Kannan V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kannan V | Front End & Full Stack Developer",
    description:
      "Front End Developer specializing in React.js, Next.js, Node.js, and modern UI systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kannan V",
              jobTitle: "Front End Developer",
              url: "https://kannan-portfolio.dev",
              email: "vkannan202@gmail.com",
              telephone: "+919080642004",
              sameAs: [
                "https://github.com",
                "https://linkedin.com"
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Material UI",
                "Shadcn UI",
                "DevOps",
                "CI/CD"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
