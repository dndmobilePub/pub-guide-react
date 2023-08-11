import React from "react";

export const Title = ({ depth = 1, children, sub }) => {
  let headingElement;
  if (sub) {
    const subElement = React.createElement("p", { className: "tit sub" }, sub);
    headingElement = React.createElement(
      `h${depth}`,
      { className: `tit dep0${depth}` },
      subElement,
      children
    );
  } else {
    headingElement = React.createElement(
      `h${depth}`,
      { className: `tit dep0${depth}` },
      children
    );
  }
  return headingElement;
};

export const Text = ({ children, lang = "", ell = 0 }) => {
  return (
    <>
      {lang ? (
        <p
          className={`txt ${ell > 0 ? `txt-elp${ell}` : ""}`}
          data-lang={lang}
          lang={lang}
        >
          {children}
        </p>
      ) : (
        <p className={`txt ${ell > 0 ? `txt-elp${ell}` : ""}`}>{children}</p>
      )}
    </>
  );
};
