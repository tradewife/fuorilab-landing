import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const metadata = {
  title: "FUORI Lab | The tamper-evident archive for AI misalignment",
  description:
    "AI is graduating from demos to critical infrastructure. When outputs go off-spec—drift, deviation, or outright anomaly—organizations need defensible evidence. FUORI converts chats and logs into casefiles aligned with open provenance.",
  keywords:
    "AI misalignment, AI safety, tamper-evident archive, provenance, AI auditing, machine learning monitoring, AI governance, artificial intelligence compliance",
  authors: [{ name: "FUORI Lab" }],
  creator: "FUORI Lab",
  publisher: "FUORI Lab",
  openGraph: {
    title: "FUORI Lab | The tamper-evident archive for AI misalignment",
    description:
      "AI is graduating from demos to critical infrastructure. When outputs go off-spec—drift, deviation, or outright anomaly—organizations need defensible evidence.",
    url: "https://fuorilab.com",
    siteName: "FUORI Lab",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ucarecdn.com/9809905f-b6a1-41ed-9208-816f315135f7/-/format/auto/",
        width: 1200,
        height: 630,
        alt: "FUORI Lab - AI misalignment archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUORI Lab | The tamper-evident archive for AI misalignment",
    description:
      "AI is graduating from demos to critical infrastructure. When outputs go off-spec, organizations need defensible evidence.",
    images: [
      "https://ucarecdn.com/9809905f-b6a1-41ed-9208-816f315135f7/-/format/auto/",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#0B0C0E",
    "color-scheme": "dark",
    "msapplication-TileColor": "#0B0C0E",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0B0C0E",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://ucarecdn.com" />
        <link rel="dns-prefetch" href="https://ucarecdn.com" />
        <link
          rel="preload"
          href="https://ucarecdn.com/9809905f-b6a1-41ed-9208-816f315135f7/-/format/auto/"
          as="image"
          type="image/webp"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className="antialiased bg-[#0B0C0E] text-[#F5F2E8] min-h-screen overflow-x-hidden selection:bg-white/20 selection:text-white">
        <QueryClientProvider client={queryClient}>
          <div id="__next" className="isolate">
            {children}
          </div>
        </QueryClientProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FUORI Lab",
              description: "The tamper-evident archive for AI misalignment",
              url: "https://fuorilab.com",
              logo: "https://ucarecdn.com/9809905f-b6a1-41ed-9208-816f315135f7/-/format/auto/",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://fuorilab.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(error) {
                    console.log('ServiceWorker registration failed: ', error);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
