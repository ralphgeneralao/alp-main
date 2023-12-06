import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <Helmet>
      <title>{`A learning Place - ${title}`}</title>
      <meta name="title" content={`A Learning Place - ${title}`} />
    </Helmet>
  );
}

export default PageTitle;
