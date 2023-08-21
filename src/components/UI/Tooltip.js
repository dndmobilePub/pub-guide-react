import { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom';

export const Tooltip = ({
  label,
  dir = "default",
  align,
  children,
}) => {
  return (
    <>
      <div className={`tooltipWrap${align ? ` ${align}` : ""}`}>
        {dir !== "left" ? (
          <span dangerouslySetInnerHTML={{ __html: label }} />
        ) : null}
        {children}
        {dir === "left" ? " " + label : null}
      </div>
    </>
  );
};

export const TooltipIcon = ({ onclick, active, id, dir, msg, ref }) => {
  return (
    <a onClick={(e)=>{onclick(e, id)}} className="ico ico-tooltip" role="button" data-focus={active} data-direction={dir} data-message={msg} data-toggle="tooltip" aria-describedby={`toolTip_${id}`} ref={ref}>
      <span className="hide">툴팁</span>
    </a>
  )
}

export const TooltipHtml = ({ id, html, dir, top = 0, left = 0, reverse, onclick }) => {
  const [tooltipHtmlWidth, setTooltipHtmlWidth] = useState(0);
  const [tooltipHtmlHeight, setTooltipHtmlHeight] = useState(0);
  const tooltipHtmlRef = useRef(null);

  useEffect(() => {
    setTooltipHtmlWidth(tooltipHtmlRef.current.clientWidth);
    setTooltipHtmlHeight(tooltipHtmlRef.current.clientHeight);
  }, [tooltipHtmlRef]);

  return ReactDOM.createPortal(
    <div
      id={`toolTip_${id}`}
      className={`tooltip ${dir ? ` _` + dir : ""} _is-active`}
      tabIndex="0"
      role="tooltip"
      style={{
        top: top - (tooltipHtmlHeight / 2) + 10,
        left:
          dir === "left"
            ? reverse
              ? left + 30
              : left - (tooltipHtmlWidth) - 12
            : reverse ? 
            left - (tooltipHtmlWidth) - 12 : left + 30
      }}
      ref={tooltipHtmlRef}
    >
      <div className="tooltip-content">
        <p
          className="tooltip-message"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <a
          onClick={() => {
            onclick();
          }}
          className="ico-tooltip-close"
        >
          <span className="hide">툴팁닫기</span>
        </a>
      </div>
    </div>,
    document.body
  );
};
