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

  useEffect(() => {
    setTooltipHtmlWidth(tooltipHtmlRef.current.clientWidth);
    setTooltipHtmlHeight(tooltipHtmlRef.current.clientHeight);
  }, [tooltipHtmlRef]);

  console.log(tooltipHtmlWidth, left, align, window.screenX, window.innerWidth)

  // if(!((left + 20) >= (window.innerWidth/3)*2) && (tooltipHtmlWidth+15) >= left){
  //   console.log('reverse?',true);
  // }else{
  //   console.log('reverse?',false);
  // }
  let tooltipStyles;

  if(dir === "left"){ //왼쪽 툴팁
    if(reverse){
      tooltipStyles = {
        top: top - (tooltipHtmlHeight / 2) + 10,
        left: left + 30,
      }
      console.log('left reverse', tooltipStyles);
    }else{
      tooltipStyles = {
        top: top - (tooltipHtmlHeight / 2) + 10, 
        left: left - tooltipHtmlWidth - 12.5,
      }
      console.log('left', tooltipStyles);
    }
  }else if(dir === "top"){ //위쪽 툴팁
    tooltipStyles = {
      top: top - tooltipHtmlHeight - 12.5,
      left: align === "center" ? left - (tooltipHtmlWidth / 2) : align === "right" ? window.innerWidth - 220 : 30,
    }
    console.log('top', tooltipStyles);
  }else if(dir === "bottom"){ //아래쪽 툴팁
    tooltipStyles = {
      top: top + (tooltipHtmlHeight / 2) - 10,
      left: align === "center" ? left - (tooltipHtmlWidth / 2) : align === "right" ? window.innerWidth - 260 : 30,
    }
    console.log('top', tooltipStyles);
  }else{
    if(reverse){ //오른쪽 툴팁
      tooltipStyles = {
        top: top - (tooltipHtmlHeight / 2) + 10,
        left: left - tooltipHtmlWidth - 12.5
      }
      console.log('right reverse', tooltipStyles);
    }else{
      tooltipStyles = {
        top: top - (tooltipHtmlHeight / 2) + 10,
        left: align === "center" ? left : align === "right" ? 100 : left + 30,
      }
      console.log('right', tooltipStyles);
    }
  }
  return ReactDOM.createPortal(
    <div
      id={`toolTip_${id}`}
      className={`tooltip ${dir ? ` _` + dir : ""} _is-active`}
      tabIndex="0"
      role="tooltip"
      style={tooltipStyles}
      ref={tooltipHtmlRef}
        // {
        // top: dir === "top" 
        // ? top - tooltipHtmlHeight - 12.5
        // : dir === "bottom" ? top + 30 : top - tooltipHtmlHeight / 2 + 10 ,
        // left:
        //   dir === "left" 
        //     ? reverse
        //       ? left + 30
        //       : left - tooltipHtmlWidth - 12.5
        //     : dir === "top" 
        //     ? reverse
        //       ? left - tooltipHtmlWidth - 25
        //       : align === "center" ? left - (tooltipHtmlWidth / 2) : align === "right" ? left - (tooltipHtmlWidth / 2) - 65 : 15
        //     : dir === "bottom" 
        //     ? reverse
        //       ? left - tooltipHtmlWidth - 25
        //       : align === "center" ? left - (tooltipHtmlWidth / 2) : align === "right" ? left - (tooltipHtmlWidth / 2) - 65 : 15
        //     : reverse 
        //     ? left - tooltipHtmlWidth - 12.5
        //     : left + 30,
        // }
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
