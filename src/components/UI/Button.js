export const Button = ({ a = false, txtType = 0, size = 'md', bgType = 1, disabled = false, shape = '', full = false, href = "", onClick, children, modal}) => {
  return (
    <>
      {a === true ? (
        <a 
          onClick={onClick}
          className={`btn btn-size ${size} ${txtType === 1 ? 'txt' : txtType === 2 ? 'txt uline' : txtType === 3 ? 'ico arrow' : ''} ${bgType === 1 ? 'bg' : bgType === 2 ? 'bg type2' : bgType === 3 ? 'bg type3' : ''} ${shape} ${full ? 'full' : ''}`}>
        { children }
        </a>
      ) : (
        <button 
        onClick={onClick} 
        className={`btn btn-size ${size} ${bgType === 1 ? 'bg' : bgType === 2 ? 'bg type2' : bgType === 3 ? 'bg type3' : ''} ${shape} ${full ? 'full' : ''}${modal?'_modalBtn':''}`} 
        disabled={disabled}
        data-modal="modal"
        >
          { children }
        </button>
      )}
    </>
  )
}

export const ButtonWrap = ({full, grow, children}) => {
  console.log(full, grow)
  return (
    <div className={`btnWrap ${full ? 'full' : ''} ${grow ? 'grow' : ''}`}>
      {children}
    </div>
  )
}