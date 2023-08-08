export const Title = ({ depth = 1, children }) => {
  return (
    <>
      {depth === 1 ? (<h1 className="tit dep01">{children}</h1>) 
      : depth === 2 ? (<h2 className="tit dep02">{children}</h2>)
      : depth === 3 ? (<h3 className="tit dep03">{children}</h3>)
      : depth === 4 ? (<h4 className="tit dep04">{children}</h4>)
      : (<h5 className="tit dep05">{children}</h5>)}
    </>
  )
}

export const SubTitle = ({ text, children }) => {
  return (
    <h2 className="tit dep02">
      <p className="tit sub">{text}</p>
      {children}
    </h2>
  )
}

export const Text = ({ children, lang = "", ell = 0 }) => {
  return (
    <>
      {lang ? (
        <p className={`txt ${ell > 0 ? `txt-elp${ell}`:''}`} data-lang={lang} lang={lang}>{children}</p>
      ):(
        <p className={`txt ${ell > 0 ? `txt-elp${ell}`:''}`}>{children}</p>
      )}
    </>
  )
}