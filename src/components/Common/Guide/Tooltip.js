import { useRef, useState } from "react";
import styles from "./Guide.module.scss";
import { Tooltip, TooltipHtml } from "../../UI/Tooltip";

export const TooltipGuide = () => {
  const tooltipRef1 = useRef(null);
  const [tooltip, setTooltip] = useState({
    id: 0,
    active: false,
    reverse: false,
    dir: "default",
    align: "",
    label: "",
    msg: "",
    top: 0,
    left: 0,
  });

  const toggleTooltip = (e, activeId, dir, msg, reverse, label, align) => {
    const rect = e.target.getBoundingClientRect();
    if (tooltip.id === activeId && tooltip.active === true) {
      setTooltip({
        id: 0,
        active: false,
        reverse: false,
        dir: "default",
        align: "",
        label: "",
        msg: "",
        top: 0,
        left: 0,
      });
    } else {
      setTooltip({
        id: activeId,
        active: true,
        reverse: reverse,
        dir: dir,
        align: align,
        label: label,
        msg: msg,
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  return (
    <>
      <h3>👀 툴팁 컴포넌트 사용방법</h3>
      <br />

      <code className={`${styles.code}`}>
        {`import { Tooltip, TooltipHtml } from "src/component/UI/Tooltip";`}
        <br />
        <br />
        {`<Tooltip`}
        <br />
        &nbsp;&nbsp;{`tooltipId={1}`}
        <br />
        &nbsp;&nbsp;{`label="기본형"`}
        <br />
        &nbsp;&nbsp;
        {`msg={"ToolTip Default :<br><br> 일이삼사오육칠팔구십일이삼사오<br>ToolTip message"}`}
        <br />
        &nbsp;&nbsp;{`onclick={toggleTooltip}`}
        <br />
        &nbsp;&nbsp;{`forwardRef={tooltipRef1}`}
        <br />
        &nbsp;&nbsp;{`tooltip={tooltip}`}
        <br />
        {`/>`}
        <br />
        {`{tooltip.active === true && (`}
        <br />
        &nbsp;&nbsp;
        {`<TooltipHtml tooltip={tooltip}
            onclick={()=>{
              setTooltip(prev=>({
                ...prev,
                active: false,
                reverse: false,
              }))
            }} />`}
        <br />
        {`)`}
        <br />
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <Tooltip
          tooltipId={1}
          label="기본형"
          msg={`ToolTip Default :<br><br> 일이삼사오육칠팔구십일이삼사오<br>ToolTip message`}
          onclick={toggleTooltip}
          forwardRef={tooltipRef1}
          tooltip={tooltip}
        />
        {tooltip.active === true && (
          <TooltipHtml
            tooltip={tooltip}
            onclick={() => {
              setTooltip((prev) => ({
                ...prev,
                active: false,
                reverse: false,
              }));
            }}
          />
        )}
      </div>
      <br />
    </>
  );
};
