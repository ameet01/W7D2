import React from 'react';

const ErrorItem = ({ errors }) => {
  if (errors.length === 0) return null;

  const errorItems = errors.map(error => <li key={ error }>{ error }</li>);

  return (
    <ul className="error-list">
      { errorItems }
    </ul>
  );
};

export default ErrorItem;
