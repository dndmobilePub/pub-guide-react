import React from "react";

export const Title = ({ depth = 1, text, type, uline, split, children, sub }) => {
  let headingElement;
  let subElement
  if (sub) {
    subElement = React.createElement("p", { className: "tit sub" }, sub);
    headingElement = React.createElement(
      `h${depth}`,
      { className: `tit dep0${depth}` },
      subElement,
      text
    );
  } else if(uline){
    subElement = React.createElement("span", { className: "uline" }, text);
    headingElement = React.createElement(
      `h${depth}`,
      { className: `tit dep0${depth}` },
      subElement,
    );
  } else if(split) {
    subElement = React.createElement("div", { className: "col" }, children);
    headingElement = React.createElement(
      `h${depth}`,
      { className: `tit dep0${depth}` },
      text
    );
  } else {
    headingElement = React.createElement(
      `h${depth}`,
      { className: `tit dep0${depth}${type===2?' type2':''}` },
      text,
      children
    );
  }
  return (
    split ? (
      <div className="hgroup split">{headingElement} {subElement}</div>
    ) : ( 
      headingElement
    )
  );
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
