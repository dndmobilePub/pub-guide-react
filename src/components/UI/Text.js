import React from "react";
export const Title = ({
  depth = 1,
  text,
  type = 1,
  uline,
  split,
  children,
  sub,
}) => {
  const Heading = `h${depth}`;
  if(split){
    return (
      <div className="hgroup split">
        <Heading className={`tit dep0${depth}`} >
          {sub ? <p className="tit sub">{sub}</p> : null}
          {uline ? (<span className="uline">{text}</span>) : text}
        </Heading>
        <div className="col">
          {children}
        </div>
      </div>
    )
  }else{
    return (
      <Heading className={`tit dep0${depth}`} >
        {sub ? <p className="tit sub">{sub}</p> : null}
        {uline ? (<span className="uline">{text}</span>) : text}
        {children}
      </Heading>
    ) 
  }
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
