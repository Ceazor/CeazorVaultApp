import React from 'react';
import { FAQ } from '../FAQ/sections';
import { Helmet } from 'react-helmet';
import { usePageMeta } from '../common/getPageMeta';

export default function FAQPage() {
  const { getPageMeta } = usePageMeta();

  return (
    <>
      <Helmet>
        <title>{getPageMeta('FAQ-Meta-Title')}</title>
        <meta property="og:title" content={getPageMeta('FAQ-Meta-Title')} />
      </Helmet>
      <FAQ />
    </>
  );
}
