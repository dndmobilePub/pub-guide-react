import { useState } from "react";
import { Button, ButtonWrap } from "../../../components/UI/Button";
import { Guide } from "../../../components/Common/Guide";
import styles from "./index.module.scss";
import { Modal, Toast } from "../../../components/UI/Popup";

export default function Popup() {
  const [subTab, setSubTab] = useState("Popup");
  const [position, setPosition] = useState("top");
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
                  setIsOpenModal(!isOpenModal);
                }}
              >
                Top Modal
              </Button>
              <Button
                onClick={() => {
                  setPosition("center");
                  setIsOpenModal(!isOpenModal);
                }}
              >
                Center Modal
              </Button>
              <Button
                onClick={() => {
                  setPosition("left");
                  setIsOpenModal(!isOpenModal);
                }}
              >
                Left Modal
              </Button>
              <Button
                onClick={() => {
                  setPosition("bottom");
                  setIsOpenModal(!isOpenModal);
                }}
              >
                Bottom Modal
              </Button>
              <Button
                onClick={() => {
                  setIsOpenToast(true);
                }}
              >
                Bottom Modal
              </Button>
            </ButtonWrap>
            <Modal
              position={position}
              isOpen={isOpenModal}
              toggleModal={toggleModal}
              title={`${position} 모달 타이틀`}
              content={`<div>텍스트</div>`}
              confirmText="확인"
            />
            {isOpenToast && (<Toast msg="토스트 팝업메세지를 출력" timer={3000} closeToast={closeToast} />)}
          </div>
          <br />

          <h4>{subTab} : type(Circle line)</h4>
          <p>{`<CheckBox type="circleLine" />`}</p>
          <br />
          <div className={`${styles.box}`}></div>
          <br />

          <h4>{subTab} : type(Square)</h4>
          <p>{`<CheckBox type="square" />`}</p>
          <br />
          <div className={`${styles.box}`}></div>
          <br />

          <h4>{subTab} : type(Square line)</h4>
          <p>{`<CheckBox type="squareLine" />`}</p>
          <br />
          <div className={`${styles.box}`}></div>
          <br />

          <h4>{subTab} : type(Switch)</h4>
          <p>{`<CheckBox type="switch" />`}</p>
          <br />
          <div className={`${styles.box}`}></div>
          <br />
        </>
      ) : (
        <>
          <h3>{subTab}</h3>
          <br />

          <h4>{subTab} : type=&#34;circle&#34;</h4>
          <p>{`<RadioBox name="basicRadio">...<Radio label="미체크"/>...</RadioBox>`}</p>
          <br />
          <div className={`${styles.box}`}></div>
          <br />

          <h4>{subTab} : type=&#34;box&#34;</h4>
          <p>{`<RadioBox name="boxRadio" type="box">...<Radio label="옵션1"/>...</RadioBox>`}</p>
          <br />
          <div className={`${styles.box}`}></div>
          <br />

          <h4>{subTab} : type=&#34;boxChk&#34;</h4>
          <p>{`<RadioBox name="boxChkRadio" type="boxChk">...<Radio label="옵션1"/>...</RadioBox>`}</p>
          <br />
          <div className={`${styles.box}`}></div>
          <br />
        </>
      )}
    </>
  );
}
