import React from 'react';

const HighlightSubstring = ({ text, substring }) => {
  const parts = text.split(new RegExp(`(${substring})`, 'i'));
  
  return (
    <>
      {parts.map((part, index) => (
        part.toUpperCase() === substring.toUpperCase() ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          <React.Fragment key={index}>
            {part}
          </React.Fragment>
        )
      ))}
    </>
  );
};

export default HighlightSubstring;
