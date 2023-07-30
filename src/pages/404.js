import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout'

const NotFoundPage = () => {
    return (
        <figure className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <i className="bi bi-exclamation-triangle-fill has-text-white is-size-3" />
        <h1 className="has-text-white is-size-4">This page is not found</h1>
      </figure>
    );
};

export default NotFoundPage;


NotFoundPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  