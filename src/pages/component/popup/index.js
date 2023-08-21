import { useEffect, useRef, useState } from "react";
import { Button, ButtonWrap } from "../../../components/UI/Button";
import { Guide } from "../../../components/Common/Guide";
import styles from "./index.module.scss";
import { Modal, Toast } from "../../../components/UI/Popup";
import { Tooltip, TooltipHtml, TooltipIcon } from "../../../components/UI/Tooltip";

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

  const [tooltip, setTooltip] = useState({
    id: 0,
    active: false,
    dir: 'default',
    label: '기본형',
    html: `ToolTip Default :<br/><br/> 일이삼사오육칠팔구십일이삼사오<br/>ToolTip message`,
    top: 0,
    left: 0
  });

  const toggleTooltip = (e, activeId) => {
    console.log(e)
    const rect = e.target.getBoundingClientRect();
    if(tooltip.id === activeId && tooltip.active === true){
      setTooltip({
        ...prev,
        active: false,
      })
    }else{
      setTooltip({
        ...prev,
        id: activeId,
        dir: e.target.getAttribute("data-direction"),
        active: true,
        html: e.target.getAttribute("data-message"),
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
      <Guide type={`${subTab}`} component={subTab} />
      <hr />
      {subTab === "Popup" ? (
        <>
          <h3>{subTab}</h3>
          <br />

          <h4>{subTab} : type(Circle)</h4>
          <p>{`<CheckBox type="circle" />`}</p>
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
          <h3>{subTab}</h3>
          <br />

          <h4>{subTab} : type(Circle line)</h4>
          <p>{`<CheckBox type="circleLine" />`}</p>
          <br />
          <div>
            <Tooltip label="기본형">
              <TooltipIcon id={1} onclick={toggleTooltip} msg={`ToolTip Default :<br><br> 일이삼사오육칠팔구십일이삼사오<br>ToolTip message`} forwardRef={tooltipRef1}/>
            </Tooltip>

            <div className="tooltipWrap">
              기본형 가운데 가운데가운데가운데&nbsp;
              <a onClick={toggleTooltip}className="ico ico-tooltip" role="button" data-focus="false" data-direction="default" data-message="ToolTip message : Default <br> ToolTip message <br> ToolTip message" data-toggle="tooltip" aria-describedby="toolTip_1" ref={tooltipRef2}>
                <span className="hide">툴팁</span>
              </a>
            </div>

            {tooltip.active === true && (<TooltipHtml id={tooltip.id} dir={tooltip.dir} html={tooltip.html} top={tooltip.top} left={tooltip.left} onclick={()=>{setTooltip({
              ...prev, 
              active: false
            })}}/>)}
            {/* <Tooltip2 id={2} label="기본형 가운데 가운데가운데가운데" reverse html="ToolTip message : Default <br> ToolTip message <br> ToolTip message" active={false}/>
            <Tooltip2 id={3} label="기본형 텍스트 길다 기본형 텍스트 길다 기본형<br/> 텍스트 길다" html="ToolTip message : Default <br> ToolTip message <br> ToolTip message" active={false}/>
            <hr />
            <Tooltip2 id={4} label="왼쪽형" dir="left" align="r" html="ToolTip message : LEFT <br> ToolTip message <br> ToolTip message" active={false}/>
            <Tooltip2 id={5} label="센터센터" dir="left" align="c" reverse html="ToolTip message : LEFT <br> ToolTip message <br> ToolTip message" active={false}/>
            <Tooltip2 id={6} label="아이콘 왼쪽, 텍스트가 매우매우매우매우매우매우매우매우매우매우매우 길 경우" dir="left" align="r" reverse html="ToolTip message : LEFT <br> ToolTip message <br> ToolTip message" active={false}/>
             */}
            {/* <hr />  
            <Tooltip label="기본형" content="ToolTip Default :<br><br> 일이삼사오육칠팔구십일이삼사오<br>ToolTip message"/>
            <Tooltip label="기본형 가운데 가운데가운데가운데" reverse content="ToolTip message : Default <br> ToolTip message <br> ToolTip message"/>
            <Tooltip label="기본형 텍스트 길다 기본형 텍스트<br>길다 기본형 텍스트 길다" content="ToolTip message : Default <br> ToolTip message <br> ToolTip message"/> */}
            {/*
            <hr />
            <div>
              <Tooltip label="왼쪽형" direction="left" labelPosition="r" content="ToolTip message : LEFT <br> ToolTip message <br> ToolTip message"/>
              <Tooltip label="센터센터" direction="left" reverse labelPosition="c" content="ToolTip message : LEFT <br> ToolTip message <br> ToolTip message"/>
              <Tooltip
                label="아이콘 왼쪽, 텍스트가 매우매우매우매우매우매우매우매우매우매우매우 길 경우"
                direction="left"
                content="ToolTip message : LEFT <br> ToolTip message <br> ToolTip message"
              />
            </div>
            <hr />
            <div>
              <Tooltip label="위로" direction="top" content="ToolTip message : TOP <br> ToolTip message <br> ToolTip message"/>
              <Tooltip label="위로 c" direction="top" labelPosition="c" content="ToolTip message : TOP <br> ToolTip message <br> ToolTip message"/>
              <Tooltip label="위로 r" direction="top" labelPosition="r" content="ToolTip message : TOP <br> ToolTip message <br> ToolTip message"/>
            </div>
            <hr />
            <div>
              <Tooltip label="아래로" direction="bottom" content="ToolTip message : BOTTOM <br> ToolTip message <br> ToolTip message"/>
              <Tooltip label="아래로 c" direction="bottom" labelPosition="c" content="ToolTip message : BOTTOM <br> ToolTip message <br> ToolTip message"/>
              <Tooltip label="아래로 r" direction="bottom" labelPosition="r" content="ToolTip message : BOTTOM <br> ToolTip message <br> ToolTip message"/>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
}
