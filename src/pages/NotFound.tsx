import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="elegant-container text-center">
        <p className="label">Error 404</p>
        <h1 className="mt-6 text-5xl md:text-6xl">Page not found</h1>
        <div className="dot-rule mx-auto mt-8 w-24" aria-hidden="true" />
        <p className="mx-auto mt-8 max-w-md text-lg">
          This page does not exist. The address may be wrong, or the page has
          moved.
        </p>
        <Link to="/" className="ink-button mt-10">
          Back to the front page
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
