import React, {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import $ from "jquery";
import { CheckBox } from "./Form";

export const AccordionWrap = ({ toggleOne = false, children }) => {
  const wrappedChildren = Children.map(children, (child) => {
    return cloneElement(child, { datatype: "oneToggle" });
  });

  return (
    <>
      {toggleOne ? (
        <div className="accordion-wrap" data-type="oneToggle">
          {wrappedChildren}
        </div>
      ) : (
        <div className="accordion-wrap">{children}</div>
      )}
    </>
  );
};

export const Accordion = ({
  title = "no-title",
  content = "no-content",
  scroll = false,
  btnStyle = 1,
  btnNone,
  onlyBtn,
  chkBox,
  activeColor,
  defaultView = "off",
  children,
  onClick,
  datatype,
  chkStatus,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (chkBox && defaultView) {
      if (chkStatus === true) {
        setIsChecked(true);
        $(contentRef.current).slideUp();
      } else {
        setIsChecked(false);
      }
    }
  }, [chkStatus]);

  const onToggleAccordion = () => {
    setIsActive(false);
    if (contentRef.current) {
      if (datatype !== undefined) {
        $(".accordion-wrap[data-type='oneToggle'] .toggle-tit").removeClass(
          "_is-active"
        );
        $(".accordion-wrap[data-type='oneToggle'] .accordion-contents").slideUp(
          200
        );
        setTimeout(() => {
          setIsActive(true);
          $(contentRef.current).slideDown();
        }, 300);
      } else {
        setIsActive(!isActive);
        $(contentRef.current).slideToggle();
      }
      if (scroll === true) {
        setTimeout(() => {
          window.scrollTo({
            top:
              wrapperRef.current.offsetTop -
              headerRef.current.clientHeight * 2.2,
            behavior: "smooth",
          });
        }, 300);
      }
    }
  };

  return (
    <dl className="accordion" ref={wrapperRef}>
      {onlyBtn ? (
        <dt
          className={`accordion-header${chkBox ? " flex square" : ""}`}
          ref={headerRef}
        >
          {chkBox && <CheckBox type="square" label="동의" />}
          <span className="toggle-tit">{title}</span>
          <a
            className={`btn-toggle ${activeColor ? "btn-act-orange" : ""} ${
              btnStyle === 2 ? "btn-style-02" : ""
            } ${isActive ? "_is-active" : ""}`}
            aria-expanded={isActive ? "true" : "false"}
            aria-label={isActive ? "닫기" : "열기"}
            onClick={() => {
              onToggleAccordion();
            }}
          />
        </dt>
      ) : (
        <dt
          className={`accordion-header${chkBox ? " flex square" : ""}`}
          ref={headerRef}
        >
          {chkBox && (
            <CheckBox
              checked={chkStatus ? chkStatus : isChecked}
              type="square"
              label="동의"
              onChange={() => {
                if (defaultView !== "undefined" && defaultView) {
                  if (!isChecked) {
                    $(contentRef.current).slideUp();
                    //handleSendValueToParent();
                  } else {
                    $(contentRef.current).slideDown();
                  }
                  onClick && onClick();
                }
                setIsChecked(!isChecked);
              }}
            />
          )}
          {btnNone ? (
            <>
              <a
                className={`toggle-tit btn-toggle btn-none`}
                aria-expanded={isActive ? "true" : "false"}
                aria-label={isActive ? "닫기" : "열기"}
                onClick={() => {
                  onToggleAccordion();
                }}
              >
                <span>{title}</span>
              </a>
              <a className="btn-more" aria-label="더보기 이동"></a>
            </>
          ) : (
            <a
              className={`toggle-tit btn-toggle ${
                activeColor ? "btn-act-orange" : ""
              } ${btnStyle === 2 ? "btn-style-02" : ""} ${
                isActive ? "_is-active" : ""
              }`}
              aria-expanded={isActive ? "true" : "false"}
              aria-label={isActive ? "닫기" : "열기"}
              onClick={() => {
                onToggleAccordion();
              }}
            >
              <span>{title}</span>
            </a>
          )}
        </dt>
      )}
      {children ? (
        <dd
          ref={contentRef}
          className={`accordion-contents`}
          style={{
            display: `${chkBox && defaultView === "on" ? "block" : "none"}`,
          }}
        >
          {children}
        </dd>
      ) : (
        <dd
          ref={contentRef}
          className={`accordion-contents`}
          style={{
            display: `${chkBox && defaultView === "on" ? "block" : "none"}`,
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </dl>
  );
};
