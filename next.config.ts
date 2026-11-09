import type { NextConfig } from 'next';
import { resumeLink } from './src/content/about/about-links';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/resume', destination: resumeLink, permanent: false },
    ];
  },
};

export default nextConfig;
