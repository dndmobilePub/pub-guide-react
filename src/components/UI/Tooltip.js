import { useState, useRef, useEffect } from "react";

export const Tooltip = ({
  label,
  direction = "default",
  reverse,
  labelPosition,
  content,
}) => {
  const iconRef = useRef(null);
  const tooltipRef = useRef(null);
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    left: "0",
    top: "0",
  });
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const [elOffsetT, setElOffsetT] = useState(0);
  const [elOffsetL, setElOffsetL] = useState(0);


  useEffect(() => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      setElOffsetT(rect.top);
      setElOffsetL(rect.left);
      setTooltipPosition({
        left: `${rect.left}px`,
        top: `${rect.top}px`,
      });
    }
  }, []);

  useEffect(() => {
    if (tooltipRef.current && isOpenTooltip) {
      if (direction === 'default') {
        if (elOffsetL + 20 >= window.innerWidth / 3) {
          if(tooltipRef.current.clientWidth + 15 >= window.innerWidth - (elOffsetT + 20)){
            console.log('default1');
            setTooltipPosition({
              top:`${elOffsetT - (tooltipRef.current.clientHeight / 2) - 10}px`,
              left:`${elOffsetL + 10}px`
            })
          }else{
            console.log('default2');
            setTooltipPosition({
              top:`${elOffsetT - (tooltipRef.current.clientHeight / 2) - 10}px`,
              left:`${elOffsetL + 30}px`
            })
          }
        } else {
          console.log('default3');
          setTooltipPosition({
            top:`${elOffsetT - (tooltipRef.current.clientHeight / 2) - 10}px`,
            left:`${elOffsetL + 30}px`
          })
        }
      } else if (direction === 'left') {
        if (elOffsetL + 20 >= (window.innerWidth / 3) * 2) {
          console.log('left1');
          setTooltipPosition({
            top:`${elOffsetT - (tooltipRef.current.clientHeight / 2) - 10}px`,
            left:`${elOffsetL - (tooltipRef.current.clientWidth + 12)}px`
          })
        } else {
          if(tooltipRef.current.clientWidth+15 >= elOffsetL ){
            console.log('left2');
            setTooltipPosition({
              top:`${elOffsetT - (tooltipRef.current.clientHeight / 2) - 10}px`,
              left:`${elOffsetL + 30}px`
            })
          }else{
            console.log('left3');
            setTooltipPosition({
              top:`${elOffsetT - (tooltipRef.current.clientHeight / 2) - 10}px`,
              left:`${elOffsetL + 30}px`
            })
          }
        }
      } else if (direction === 'top') {
        const bottomPosT = elOffsetT - (tooltipRef.current.clientHeight + 10);
        if((elOffsetL + 20) >= (window.innerWidth/3)*2 ){
          console.log('top1');
          setTooltipPosition({
            top:`${bottomPosT}px`,
            left:`${window.innerWidth - tooltipRef.current.clientWidth - 10}px`
          })
        }else if((elOffsetL + 20) <= (window.innerWidth/3) ){
          console.log('top2');
          setTooltipPosition({
            top:`${bottomPosT}px`,
            left:`10px`
          })
        }else{
          console.log('top3');
          setTooltipPosition({
            top:`${bottomPosT}px`,
            left:`${elOffsetL - (tooltipRef.current.clientWidth / 2) + (iconRef.current.clientWidth/2)}px`
          })
        }
      } else {
        const bottomPosT2 = elOffsetT + 30;
        if((elOffsetL + 20) >= (window.innerWidth/3)*2 ){
          console.log('bottom1');
          setTooltipPosition({
            top:`${bottomPosT2}px`,
            left:`${window.innerWidth - tooltipRef.current.clientWidth - 10}px`
          })
        }else if((elOffsetL + 20) <= (window.innerWidth/3) ){
          console.log('bottom2');
          setTooltipPosition({
            top:`${bottomPosT2}px`,
            left:`10px`
          })
        }else{
          console.log('bottom3');
          setTooltipPosition({
            top:`${bottomPosT2}px`,
            left:`${elOffsetL - (tooltipRef.current.clientWidth / 2) + (iconRef.current.clientWidth/2)}px`
          })
        }
      }

      // setTooltipWidth(tooltipRef.current.clientWidth);
      // setTooltipHeight(tooltipRef.current.clientHeight);
      // calculatePosition('width',tooltipWidth);
      // setTooltipPosition(() => ({
      //   left:
      //     direction === "default"
      //       ? reverse 
      //         ? elOffsetL - tooltipRef.current.clientWidth - 13 : elOffsetL + 30
      //       : direction === "left"
      //       ? reverse
      //         ? elOffsetL + 30 : elOffsetL - tooltipRef.current.clientWidth - 13
      //       : direction === "top"
      //       ? elOffsetL - tooltipRef.current.clientWidth > 0 && elOffsetL - tooltipRef.current.clientWidth < 10 ? '10px' : elOffsetL - (tooltipRef.current.clientWidth / 3)
      //       : direction === "bottom" 
      //       ? elOffsetL - tooltipRef.current.clientWidth - 13
      //       : elOffsetL + 30,
      //   top: direction === "default" ? `calc(${elOffsetT}px - ${tooltipRef.current.clientHeight / 2}px)` : `calc(${elOffsetT}px - ${tooltipRef.current.clientHeight + 12}px)`,
      //   // top: `${elOffsetT - (tooltipHeight / 2)}px`
      // }));

      // return () => {
      //   setTooltipPosition((prev) => ({
      //     ...prev,
      //     top: `${elOffsetT}px`
      //   }));
      // };
    }
  }, [isOpenTooltip]);

  const toggleTooltip = () => {
    const tooltipElements = document.querySelectorAll(".tooltip");
    const tooltipIcons = document.querySelectorAll(".ico-tooltip");
    tooltipElements.forEach((element) => {
      element.classList.remove("_is-active");
    });
    tooltipIcons.forEach((element) => {
      element.classList.remove("_is-active");
    });
    setIsOpenTooltip(!isOpenTooltip);
  };

  return (
    <>
      <div className={`tooltipWrap ${labelPosition ? labelPosition : ""}`}>
        {direction !== "left" && label + " "}
        <a
          onClick={() => {
            toggleTooltip();
          }}
          className={`ico ico-tooltip _${direction} ${
            reverse ? "reverse" : ""
          } ${isOpenTooltip ? "_is-active" : ""}`}
          role="button"
          data-focus={false}
          data-direction={direction}
          data-message={content}
          data-toggle="tooltip"
          ref={iconRef}
        >
          <span className="hide">툴팁</span>
        </a>
        {direction === "left" && " " + label}
      </div>
      <div
        className={`tooltip _${direction} ${
          isOpenTooltip === true ? "_is-active" : ""
        }`}
        tabIndex="0"
        role="tooltip"
        style={tooltipPosition}
        ref={tooltipRef}
      >
        <div className="tooltip-content">
          <p
            className="tooltip-message"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <a
            onClick={() => {
              toggleTooltip();
            }}
            className="ico-tooltip-close"
          >
            <span className="hide">툴팁닫기</span>
          </a>
        </div>
      </div>
    </>
  );
};
