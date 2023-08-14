import { useEffect, useRef, useState } from "react";

export const Modal = ({
  type,
  position,
  isOpen,
  toggleModal,
  title,
  confirmText,
  confirmFunction,
  cancelText,
  content,
  children
}) => {
  const modalRef = useRef(null);
  const [modalHeight, setModalHeight] = useState(0);
  useEffect(() => {
    if (isOpen) {
      setModalHeight(modalRef.current.clientHeight);
      const dimmed = document.createElement("div");
      dimmed.className = "dimmed";
      dimmed.ariaHidden = isOpen;
      document.body.appendChild(dimmed);
      document.body.classList.add("no-scroll");
      console.log(modalHeight);
      return () => {
        setModalHeight(0);
        document.body.removeChild(dimmed);
        document.body.classList.remove("no-scroll");
      };
    }
  }, [isOpen, modalHeight]);

  return (
    <div
      className={`modalPop _${position} ${isOpen ? "_is-active " : ""}${
        position !== "center"
          ? `animation ${
              isOpen ? `_slideIn-${position}` : `_slideOut-${position}`
            }`
          : ""
      }`}
      select-target={type ? 'select' : null}
      aria-hidden={isOpen}
      tabIndex={0}
      style={
        position === "center"
          ? { left: "10%", top: `calc(50% - ${modalHeight / 2}px)` }
          : position === "left" 
          ? { left: "0", top: `0` } 
          : position === "top" 
          ? { left: "0", top: `0` } 
          : { left: "0", top: `calc(100% - ${modalHeight * 2}px)`, padding:'0' } 
      }
    >
      <div
        className="modalWrap"
        role="dialog"
        aria-modal={!isOpen}
        style={{
          height: `${
            position === "left" || position === "right" ? "100%" : "auto"
          }`,
          transition: "opacity 250ms cubic-bezier(0.86, 0, 0.07, 1) 0s",
        }}
        ref={modalRef}
      >
        
          {type !== "selectList" ? (
            <div className="modal-header">
              <a href="#" className="ico ico-his-prev" role="button">
                <span className="hide">이전페이지</span>
              </a>
              <h1 className="mp-title dep01">{title}</h1>
              <a
                href="#"
                className="btn-close-pop ico ico-pop-close"
                role="button"
                onClick={() => {
                  toggleModal();
                }}
              >
                <span className="hide">창닫기</span>
              </a>
            </div>
          ):(
            <div className="modal-title">
              <h1 className="tit dep02">{title}</h1>
              <a
                href="#"
                className="btn-close-pop ico ico-pop-close"
                role="button"
                onClick={() => {
                  toggleModal();
                }}
              >
                <span className="hide">창닫기</span>
              </a>
            </div>
          )}
          
        
        <div className="modal-container">
          {children ? children : (<div dangerouslySetInnerHTML={{ __html: content }} />)}
        </div>
        <div className="modal-footer">
          <div className="btnWrap grow">
            {confirmText && (
              <button
                className="btn btn-size md type2 bg"
                onClick={() => {
                  if(confirmFunction){
                    confirmFunction()
                  }
                  toggleModal();
                }}
              >
                {confirmText}
              </button>
            )}
            {cancelText && (
              <button
                className="btn btn-size md bg btn-close-pop"
                onClick={() => {
                  toggleModal();
                }}
              >
                {cancelText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Toast = ({ msg, timer, closeToast }) => {
  console.log(timer);
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsHide(true);
      setTimeout(() => {
        closeToast();
      }, 1000);
    }, timer);
    return () => {
      setIsHide(false);
    };
  }, []);

  return (
    <div
      className={`toastWrap ${isHide ? "animation _fadeOut" : ""}`}
      role="alert"
      aria-live="assertive"
      tabIndex="0"
    >
      <div className="toast-msg">{msg}</div>
    </div>
  );
};
