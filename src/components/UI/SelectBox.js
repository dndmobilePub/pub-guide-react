import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Popup";

export const SelectBox = ({
  type = "default",
  selectTitle,
  list
}) => {
  const [position, setPosition] = useState("top");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [defaultText, setDefaultText] = useState(list ? list[0] : '선택');
  const [isSelected, setIsSelected] = useState('');
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
            <input
              type="tel"
              className="_format _number"
              placeholder="휴대전화 앞자리"
              maxLength="3"
            />
          </div>
          <Modal
            type="selectList"
            position={position}
            isOpen={isOpenModal}
            toggleModal={toggleModal}
            title={selectTitle}
            confirmText="선택"
            confirmFunction={() => {
              setDefaultText(isSelected);
            }}
            cancelText="취소"
          >
            <ul className="select-lst">
              {list.map((item, index) => (
                <li key={item} onClick={()=>{setIsSelected(item)}} className={`${isSelected === item ?'_is-active':''}`}>
                  <a className={`sel-opt${index === 0 ?' _defaultTxt':''}`}>{item}</a>
                </li>
              ))}
            </ul>
          </Modal>
        </>
      ) : (
        <div className="field-select grow">
          <select className="select-sys" title={selectTitle}>
            {list.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};
