import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Analytics } from '@vercel/analytics/next';
import PostHogProvider from '../components/providers/PostHogProvider';
import { fontInitScript } from '../components/font-toggle/FontToggle';
import { siteDescription, siteName, siteUrl } from '../content/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: siteDescription,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
};

export const viewport: Viewport = {
  themeColor: '#01569C',
};

// Easter egg carried over from the old public/index.html.
const cat = String.raw`
      Hey there :)
                *     ,MMM8&&&.            *
                     MMMMM88&&&&&    .
                    MMMM88&&&&&&&
        *           MMM88&&&&&&&&
                    MMM88&&&&&&&&
                    'MMM88&&&&&&'
                      'MMM8&&&'      *
              |\___/|
              )     (             .              '
             =\     /=
               )===(       *
              /     \
              |     |
             /       \
             \       /
      _/\_/\_/\__  _/_/\_/\_/\_/\_/\_/\_/\_/\_/\_
      |  |  |  |( (  |  |  |  |  |  |  |  |  |  |
      |  |  |  | ) ) |  |  |  |  |  |  |  |  |  |
      |  |  |  |(_(  |  |  |  |  |  |  |  |  |  |
      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: fontInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Jersey+20&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <PostHogProvider>
            {children}
          </PostHogProvider>
        </AppRouterCacheProvider>
        <Analytics />
        <div hidden dangerouslySetInnerHTML={{ __html: `<!--${cat}-->` }} />
      </body>
    </html>
  );
}
