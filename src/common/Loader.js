import React from 'react';

const loader = ({ isLoading, error }) => {
  let content = '';

  if (isLoading) {
    content = (
      <div className="loader pin">
        <p>Loading...</p>
      </div>
    );
  } else if (error) {
    content = <div className="loader pin">Sorry, there was a problem loading the page.</div>;
  }

  return <div className="loader pin">{content}</div>;
};

export default loader;
