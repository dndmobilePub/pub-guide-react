import { useEffect, useRef, useState } from "react";
import $ from "jquery";

export const Modal = ({
  type,
  prev,
  position,
  isOpen,
  toggleModal,
  title,
  confirmText,
  confirmFunction,
  cancelText,
  content,
  children,
}) => {
  const modalPopRef = useRef(null);
  const modalRef = useRef(null);
  const modalTitRef = useRef(null);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const [modalWidth, setModalWidth] = useState(0);
  const [modalHeight, setModalHeight] = useState(0);
  const [modalTitleHeight, setModalTitleHeight] = useState(0);
  const [button1Height, setButton1Height] = useState(0);
  const [button2Height, setButton2Height] = useState(0);
  const [modalStyle, setModalStyle] = useState({});
  useEffect(() => {
    if (isOpen === true) {
      setModalHeight(modalRef.current.clientHeight);
      setModalWidth(modalRef.current.clientWidth);
      setModalTitleHeight(modalTitRef.current.clientHeight);
      setButton1Height(buttonRef1.current.clientHeight);
      setButton2Height(buttonRef2.current.clientHeight);
      const dimmed = document.createElement("div");
      dimmed.className = "dimmed";
      dimmed.ariaHidden = isOpen;
      document.body.appendChild(dimmed);
      document.body.classList.add("no-scroll");

      if(position === "center"){
        setModalStyle({
          top: "50%",
          left: "50%",
          marginLeft: `-${modalRef.current.clientWidth / 2}px`,
          marginTop: "0px",
          height: "auto",
          display: "block",
        })
      }else if(position === "top"){
        setModalStyle({
          top: "0",
          left: "0",
          marginLeft: `0`,
          marginTop: "0",
          height: "auto",
          display: "block",
          transition: "all 300ms cubic-bezier(.17,.67,.65,.98)"
        })
      }else if(position === "left"){
        setModalStyle({
          top: "0",
          left: "0",
          marginLeft: `0`,
          marginTop: "0",
          height: "100%",
          display: "block",
          transition: "all 300ms cubic-bezier(.17,.67,.65,.98)"
        })
      }else{
        setModalStyle({
          top: "auto",
          left: "0",
          bottom: "0",
          marginLeft: `0`,
          marginTop: "0",
          height: "auto",
          display: "block",
          transition: "all 300ms cubic-bezier(.17,.67,.65,.98)"
        })
      }

      return () => {
        setModalHeight(0);
        document.body.removeChild(dimmed);
        document.body.classList.remove("no-scroll");
        setModalStyle({});
      };
    }    
  }, [isOpen, modalHeight, position]);

  return (
    <div
      className={`modalPop _${position} ${
        isOpen ? `_is-active${position === "bottom" ? " _scroll" : ""}` : ""
      }`}
      select-target={type ? "select" : null}
      aria-hidden={!isOpen}
      tabIndex={0}
      ref={modalPopRef}
      style={modalStyle}
    >
      <div
        className="modalWrap"
        role="dialog"
        aria-modal={isOpen}
        style={
          position === "top"
            ? {
                transition: "opacity 250ms cubic-bezier(0.86, 0, 0.07, 1) 0s",
              }
            : position === "bottom"
            ? { maxHeight: `${document.body.clientHeight - 100}px` }
            : {}
        }
        ref={modalRef}
      >
        {type !== "selectList" ? (
          <div className="modal-header">
            {prev === true && (
              <a href="#" className="ico ico-his-prev" role="button">
                <span className="hide">이전페이지</span>
              </a>
            )}
            <h1 className="mp-title dep01" ref={modalTitRef}>
              {title}
            </h1>
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
        ) : (
          <div className="modal-title" ref={modalTitRef}>
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

        <div
          className="modal-container"
          style={
            position === "bottom"
              ? {
                  height: `${
                    document.body.clientHeight -
                    (modalTitleHeight +
                      (button1Height ? button1Height : button2Height)) -
                    173
                  }px`,
                }
              : {}
          }
        >
          {children ? (
            children
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>
        <div className="modal-footer">
          <div className="btnWrap grow">
            {confirmText && (
              <button
                className="btn btn-size md type2 bg"
                onClick={() => {
                  if (confirmFunction) {
                    confirmFunction();
                  }
                  toggleModal();
                }}
                ref={buttonRef1}
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
                ref={buttonRef2}
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
  const toastRef = useRef(null);
  useEffect(() => {
    const toastTimer = setTimeout(() => {
      $(toastRef.current).fadeOut();
      setTimeout(() => {
        closeToast();
      }, 1000);
    }, timer);
    return () => {
      clearTimeout(toastTimer);
    };
  }, []);

  return (
    <div
      className="toastWrap"
      role="alert"
      aria-live="assertive"
      tabIndex="0"
      ref={toastRef}
    >
      <div className="toast-msg">{msg}</div>
    </div>
  );
};
