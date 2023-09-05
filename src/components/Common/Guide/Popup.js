import { useState } from "react";
import styles from "./Guide.module.scss";
import { Button } from "../../UI/Button";
import { Modal, Toast } from "../../UI/Popup";

export const PopupGuide = () => {
  // 모달 관련 js
  const [position, setPosition] = useState("top");
  const [prev, setPrev] = useState(false);
  const [modalContents, setModalContents] = useState("<div>텍스트</div>");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const closeToast = () => {
    setIsOpenToast(!isOpenToast);
  };
  return (
    <>
      <h3>👀 팝업 컴포넌트 사용방법</h3>
      <br />
      <code className={`${styles.code}`}>
        {`import { Modal, Toast } from "src/component/UI/Popup";`}
        <br /><br />
        {`<Modal `}
        <br />
        &nbsp;&nbsp;{`position="`}<span onClick={()=>{position === "" || position === "center" ? setPosition("top") : position === "top" ? setPosition("left") : position === "left" ?  setPosition("bottom") : setPosition("center")}}>{position}</span>{`"`}
        <br />
        &nbsp;&nbsp;{`isOpen={isOpenModal}`}
        <br />
        &nbsp;&nbsp;{`prev={prev}`}
        <br />
        &nbsp;&nbsp;{`toggleModal={toggleModal}`}
        <br />
        &nbsp;&nbsp;{`title={모달 타이틀}`}
        <br />
        &nbsp;&nbsp;{`content={modalContents}`}
        <br />
        &nbsp;&nbsp;{`confirmText="확인"`}
        <br />
        &nbsp;&nbsp;{`cancelText="취소"`}
        <br />
        {` />`}<br /><br />
        {`<Toast `}
        <br />
        &nbsp;&nbsp;{`msg="토스트 팝업메세지를 출력"`}
        <br />
        &nbsp;&nbsp;{`timer={3000}`}
        <br />
        &nbsp;&nbsp;{`closeToast={closeToast}`}
        <br />
        {` />`} <br />
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <Button
          onclick={() => {
            setPosition(position);
            setPrev(true);
            setIsOpenModal(!isOpenModal);
            setModalContents(`<div>텍스트</div>`);
          }}
        >
          {position} Modal Button
        </Button>
        <Button
          onclick={() => {
            setIsOpenToast(!isOpenToast);
          }}
        >
          toast Button
        </Button>
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
      <br />
    </>
  );
};
