import type { Metadata } from 'next';
import SayCheese from '../assets/images/saycheese.png';

export const siteUrl = 'https://www.owaldron.ca';
export const siteName = 'Owen Waldron';
export const siteDescription =
  'Owen Waldron is a computer science student at the University of Waterloo specializing in AI and Pure Math, ' +
  'with research interests in machine learning and cryptography.';

type PageMetaInput = {
  title?: string;        // omitted on the home page, which uses the bare site name
  description: string;
  path: string;
  image?: string;        // defaults to Owen's photo
};

// Builds a page's full metadata. Next merges `openGraph` shallowly (a child page's
// openGraph replaces the layout's), so every page gets a complete set from here.
export function pageMetadata({ title, description, path, image = SayCheese.src }: PageMetaInput): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  return {
    title: title ?? { absolute: siteName },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName,
      locale: 'en_CA',
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
