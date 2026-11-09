import React from 'react';
import type { Metadata } from 'next';
import PageContainer from '../components/page-container/PageContainer';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageContainer>
      <h1 className="text-3xl">
        Uh oh! Looks like this page doesn't exist...
      </h1>
    </PageContainer>
  );
}
