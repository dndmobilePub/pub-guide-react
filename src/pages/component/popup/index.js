import { useEffect, useRef, useState } from "react";
import { Button, ButtonWrap } from "../../../components/UI/Button";
import { Options } from "../../../components/Common/Options";
import styles from "./index.module.scss";
import { Modal, Toast } from "../../../components/UI/Popup";
import { Tooltip, TooltipHtml } from "../../../components/UI/Tooltip";

export default function Popup() {
  const [subTab, setSubTab] = useState("Popup");
  const [position, setPosition] = useState("top");

  // 모달 관련 js
  const [prev, setPrev] = useState(false);
  const [modalContents, setModalContents] = useState('<div>텍스트</div>');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const closeToast = () => {
    setIsOpenToast(!isOpenToast);
  };

  // 툴팁 관련 js
  const tooltipRef1 = useRef(null);
  const tooltipRef2 = useRef(null);
  const tooltipRef3 = useRef(null);
  const tooltipRef4 = useRef(null);
  const tooltipRef5 = useRef(null);
  const tooltipRef6 = useRef(null);
  const tooltipRef7 = useRef(null);
  const tooltipRef8 = useRef(null);
  const tooltipRef9 = useRef(null);
  const tooltipRef10 = useRef(null);
  const tooltipRef11 = useRef(null);
  const tooltipRef12 = useRef(null);

  const [tooltip, setTooltip] = useState({
    id: 0,
    active: false,
    reverse: false,
    dir: 'default',
    align : '',
    label: '',
    msg: '',
    top: 0,
    left: 0
  });

  const tooltipReset = () => {
    setTooltip({
      ...prev,
      active: false,
      reverse: false,
      dir: 'default',
      align : '',
      label: '',
      msg: '',
    })
  }

  const toggleTooltip = (e, activeId, dir, msg, reverse, label, align) => {
    const rect = e.target.getBoundingClientRect();
    if(tooltip.id === activeId && tooltip.active === true){
      console.log('초기화');
      tooltipReset();
    }else{
      console.log('툴팁 생성');
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
      })
    }
  }

  return (
    <div id="cp-wrap">
      <ul className={`${styles.subTab} active`}>
        <li
          className={`item${subTab === "Popup" ? " active" : ""}`}
          onClick={() => {
            setSubTab("Popup");
          }}
        >
          Popup
        </li>
        <li
          className={`item${subTab === "Tooltip" ? " active" : ""}`}
          onClick={() => {
            setSubTab("Tooltip");
          }}
        >
          Tooltip
        </li>
      </ul>
      <Options type={`${subTab}`} component={subTab} />
      <hr />
      {subTab === "Popup" ? (
        <>
          <br />
          <div className={`${styles.box}`}>
            <ButtonWrap>
              <Button
                onClick={() => {
                  setPosition("top");
                  setPrev(true);
                  setIsOpenModal(!isOpenModal);
                  setModalContents(`<div>텍스트</div>`)
                }}
              >
                Top Modal
              </Button>
              <Button
                onClick={() => {
                  setPosition("center");
                  setPrev(false);
                  setIsOpenModal(!isOpenModal);
                  setModalContents(`<div>텍스트</div>`)
                }}
              >
                Center Modal
              </Button>
              <Button
                onClick={() => {
                  setPosition("left");
                  setPrev(true);
                  setIsOpenModal(!isOpenModal);
                  setModalContents(`<div>텍스트</div>`)
                }}
              >
                Left Modal
              </Button>
              <Button
                onClick={() => {
                  setPosition("bottom");
                  setPrev(false);
                  setIsOpenModal(!isOpenModal);
                  setModalContents(`<p style='height:1000px; background-color:yellow'>Bottom Modal Content</p>`)
                }}
              >
                Bottom Modal
              </Button>
              <Button
                onClick={() => {
                  setIsOpenToast(true);
                }}
              >
                토스트 팝업
              </Button>
            </ButtonWrap>
            <Modal
              position={position}
              isOpen={isOpenModal}
              prev={prev}
              toggleModal={toggleModal}
              title={`${position} 모달 타이틀`}
              content={modalContents}
              confirmText="확인"
              cancelText="취소"
            />
            {isOpenToast && (
              <Toast
                msg="토스트 팝업메세지를 출력"
                timer={3000}
                closeToast={closeToast}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <br />
          <div>
            <Tooltip 
              tooltipId={1} 
              label="기본형" 
              msg={`ToolTip Default :<br><br> 일이삼사오육칠팔구십일이삼사오<br>ToolTip message`} 
              onclick={toggleTooltip} 
              forwardRef={tooltipRef1} 
              tooltip={tooltip}
            />
            <Tooltip 
              tooltipId={2} 
              label="기본형 가운데 가운데가운데가운데" 
              msg={`ToolTip message : Default <br> ToolTip message <br> ToolTip message`}
              reverse
              onclick={toggleTooltip} 
              forwardRef={tooltipRef2} 
              tooltip={tooltip}
            />
            <Tooltip 
              tooltipId={3} 
              label="기본형 텍스트 길다 기본형 텍스트 길다 기본형<br/> 텍스트 길다" 
              msg={`ToolTip message : Default <br> ToolTip message <br> ToolTip message`} 
              onclick={toggleTooltip} 
              forwardRef={tooltipRef3} 
              tooltip={tooltip}
            />
            <hr/>
            <Tooltip 
              tooltipId={4} 
              label="왼쪽형"
              msg={`ToolTip message : LEFT <br> ToolTip message <br> ToolTip message`} 
              dir="left"
              align="right"
              onclick={toggleTooltip} 
              forwardRef={tooltipRef4} 
              tooltip={tooltip}
            />
            <Tooltip 
              tooltipId={5} 
              label="센터센터"
              msg={`ToolTip message : LEFT <br> ToolTip message <br> ToolTip message`}
              reverse
              dir="left"
              align="center"
              onclick={toggleTooltip} 
              forwardRef={tooltipRef5} 
              tooltip={tooltip}
            />
            <Tooltip 
              tooltipId={6} 
              label="아이콘 왼쪽, 텍스트가 매우매우매우매우매우매우매우매우매우매우매우 길 경우"
              msg={`ToolTip message : LEFT <br> ToolTip message <br> ToolTip message`}
              reverse
              dir="left"
              align="right"
              onclick={toggleTooltip} 
              forwardRef={tooltipRef6} 
              tooltip={tooltip}
            />
            <hr/>
            <Tooltip 
              tooltipId={7} 
              label="위로"
              msg={`ToolTip message : TOP <br> ToolTip message <br> ToolTip message`}
              dir="top"
              onclick={toggleTooltip} 
              forwardRef={tooltipRef7} 
              tooltip={tooltip}
            />
            <Tooltip 
              tooltipId={8} 
              label="위로 c"
              msg={`ToolTip message : TOP <br> ToolTip message <br> ToolTip message`}
              dir="top"
              align="center"
              onclick={toggleTooltip} 
              forwardRef={tooltipRef8} 
              tooltip={tooltip}
            />
            <Tooltip 
              tooltipId={9} 
              label="위로 r"
              msg={`ToolTip message : TOP <br> ToolTip message <br> ToolTip message`}
              dir="top"
              align="right"
              onclick={toggleTooltip} 
              forwardRef={tooltipRef9} 
              tooltip={tooltip}
            />
            <hr/>
            <Tooltip 
              tooltipId={10} 
              label="아래로"
              msg={`ToolTip message : BOTTOM <br> ToolTip message <br> ToolTip message`}
              dir="bottom"
              onclick={toggleTooltip} 
              forwardRef={tooltipRef10} 
              tooltip={tooltip}
            />
            <Tooltip 
              tooltipId={11} 
              label="아래로 c"
              msg={`ToolTip message : BOTTOM <br> ToolTip message <br> ToolTip message`}
              dir="bottom"
              align="center"
              onclick={toggleTooltip} 
              forwardRef={tooltipRef11} 
              tooltip={tooltip}
            />
            <Tooltip 
              tooltipId={12} 
              label="아래로 r"
              msg={`ToolTip message : BOTTOM <br> ToolTip message <br> ToolTip message`}
              dir="bottom"
              align="right"
              onclick={toggleTooltip} 
              forwardRef={tooltipRef12} 
              tooltip={tooltip}
            />
            {tooltip.active === true && (<TooltipHtml tooltip={tooltip} onclick={()=>{setTooltip({
              ...prev,
              active: false,
              reverse: false
            })}}/>)}
          </div>
        </>
      )}
    </div>
  );
}
