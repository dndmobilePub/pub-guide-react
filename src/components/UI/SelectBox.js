import { useState } from "react";
import { Button } from "./Button"
import { Modal } from "./Popup";

export const SelectBox = ({ type="mix", initText, selectTitle, children }) => {
  const [position, setPosition] = useState("top");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [defaultText, setDefaultText] = useState(initText)
  const [isSelected, setIsSelected] = useState(initText);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      {type === "custom" ? (
        <>
          <Button
            size="sm"
            modal
            onClick={() => {
              setPosition("bottom");
              setIsOpenModal(!isOpenModal);
            }}
          >
            {defaultText}
          </Button>
          <div className="field-input grow _input">
            <input type="tel" className="_format _number" placeholder="휴대전화 앞자리" maxLength="3"/>
          </div>
          <Modal
              type="selectList"
              position={position}
              isOpen={isOpenModal}
              toggleModal={toggleModal}
              title={selectTitle}
              confirmText="선택"
              confirmFunction={()=>{setDefaultText(isSelected)}}
              cancelText="취소"
          >
            {children}
            {/* <ul className="select-lst">
              <li className={`${isSelected === initText ? '_is-active':''}`} onClick={()=>setIsSelected(initText)}><a className="sel-opt _defaultTxt">{initText}</a></li>
              <li className={`${isSelected === "SKT" ? '_is-active':''}`} onClick={()=>setIsSelected("SKT")}><a className="sel-opt">SKT</a></li>
              <li className={`${isSelected === "KT" ? '_is-active':''}`} onClick={()=>setIsSelected("KT")}><a className="sel-opt">KT</a></li>
              <li className={`${isSelected === "LG U+" ? '_is-active':''}`} onClick={()=>setIsSelected("LG U+")}><a className="sel-opt">LG U+</a></li>
              <li className={`${isSelected === "알뜰폰" ? '_is-active':''}`} onClick={()=>setIsSelected("알뜰폰")}><a className="sel-opt">알뜰폰</a></li>
            </ul> */}
          </Modal>
        </>
      ):(
        <div className="field-select grow">
          <select className="select-sys" title={selectTitle}>
            {children}
          </select>
        </div>
      )}
    </>
  )
}
