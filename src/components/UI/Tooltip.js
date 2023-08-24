import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export const Tooltip = ({
  tooltipId,
  label,
  msg,
  dir = "default",
  align,
  reverse = false,
  onclick,
  ref,
  tooltip,
}) => {
  const { active, id } = tooltip;
  return (
    <>
      <div
        className={`tooltipWrap${
          align
            ? ` ${align === "right" ? "r" : align === "center" ? "c" : ""}`
            : ""
        }`}
      >
        {dir !== "left" ? (
          <>
            <span dangerouslySetInnerHTML={{ __html: label }} />{" "}
          </>
        ) : null}
        <a
          onClick={(e) => {
            onclick(e, tooltipId, dir, msg, reverse, label, align);
          }}
          className={`ico ico-tooltip${` _` + dir}${
            tooltipId === id && active ? " _is-active" : ""
          }${reverse ? " reverse" : ""}`}
          role="button"
          data-focus={active}
          data-direction={dir}
          data-message={msg}
          data-toggle="tooltip"
          aria-describedby={`toolTip_${id}`}
          ref={ref}
        >
          <span className="hide">툴팁</span>
        </a>
        {dir === "left" ? " " + label : null}
      </div>
    </>
  );
};

export const TooltipHtml = ({ tooltip, onclick }) => {
  const { id, msg, dir, top, left, align, reverse } = tooltip;
  const [tooltipHtmlWidth, setTooltipHtmlWidth] = useState(0);
  const [tooltipHtmlHeight, setTooltipHtmlHeight] = useState(0);
  const tooltipHtmlRef = useRef(null);
  const [tooltipStyle, setTooltipStyle] = useState({
    top: top,
    left: left,
  });
  useEffect(() => {
    setTooltipHtmlWidth(tooltipHtmlRef.current.clientWidth);
    setTooltipHtmlHeight(tooltipHtmlRef.current.clientHeight);

    if(dir === "left"){ //왼쪽 툴팁
      if(reverse){
        setTooltipStyle({
          top: top - (tooltipHtmlHeight / 2) + 10,
          left: left + 30,
        })
        console.log('left reverse', tooltipStyle);
      }else{
        setTooltipStyle({
          top: top - (tooltipHtmlHeight / 2) + 10, 
          left: left - tooltipHtmlWidth - 12.5,
        })
        console.log('left', tooltipStyle);
      }
    }else if(dir === "top"){ //위쪽 툴팁
      setTooltipStyle({
        top: top - tooltipHtmlHeight - 12.5,
        left: align === "center" ? left - (tooltipHtmlWidth / 2) : align === "right" ? window.innerWidth - 220 : 30,
      })
      console.log('top', tooltipStyle);
    }else if(dir === "bottom"){ //아래쪽 툴팁
      setTooltipStyle({
        top: top + (tooltipHtmlHeight / 2) - 10,
        left: align === "center" ? left - (tooltipHtmlWidth / 2) : align === "right" ? window.innerWidth - 260 : 30,
      })
      console.log('top', tooltipStyle);
    }else{
      if(reverse){ //오른쪽 툴팁
        setTooltipStyle({
          top: top - (tooltipHtmlHeight / 2) + 10,
          left: left - tooltipHtmlWidth - 12.5
        })
        console.log('right reverse', tooltipStyle);
      }else{
        setTooltipStyle({
          top: top - (tooltipHtmlHeight / 2) + 10,
          left: align === "center" ? left : align === "right" ? 100 : left + 30,
        })
        console.log('right', tooltipStyle);
      }
    }
  }, [tooltipHtmlRef, id, msg, dir, top, left, align, reverse, tooltipHtmlWidth, tooltipHtmlHeight]);

  return ReactDOM.createPortal(
    <div
      id={`toolTip_${id}`}
      className={`tooltip ${dir ? ` _` + dir : ""} _is-active`}
      tabIndex="0"
      role="tooltip"
      style={tooltipStyle}
      ref={tooltipHtmlRef}
    >
      <div className="tooltip-content">
        <p
          className="tooltip-message"
          dangerouslySetInnerHTML={{ __html: msg }}
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
