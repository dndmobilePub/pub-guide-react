import { Buttons } from "../../pages/button";
import { Texts } from "../../pages/text";
import { Inputs } from "../../pages/input";
import { Popup } from "../../pages/popup";
import { RadioChk } from "../../pages/radio-chk";
import { Accordions } from "../../pages/accordion";
import { useState } from "react";

const Tabs = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  return (
    <>
      <div className="pg_board_tab">
        <ul>
          <li className={`${activeMenu === 0 ? 'active' : ''}`} onClick={()=>setActiveMenu(0)}>
            <a>버튼</a>
          </li>
          <li className={`${activeMenu === 1 ? 'active' : ''}`} onClick={()=>setActiveMenu(1)}>
            <a>타이틀/텍스트</a>
          </li>
          <li className={`${activeMenu === 2 ? 'active' : ''}`} onClick={()=>setActiveMenu(2)}>
            <a>인풋</a>
          </li>
          <li className={`${activeMenu === 3 ? 'active' : ''}`} onClick={()=>setActiveMenu(3)}>
            <a>라디오/체크박스</a>
          </li>
          <li className={`${activeMenu === 4 ? 'active' : ''}`} onClick={()=>setActiveMenu(4)}>
            <a>팝업/알럿</a>
          </li>
          <li className={`${activeMenu === 5 ? 'active' : ''}`} onClick={()=>setActiveMenu(5)}>
            <a>아코디언</a>
          </li>
        </ul>
      </div>
      <div id="pg-container" className='pg-contentWrap'>
        { activeMenu === 0 && <Buttons />}
        { activeMenu === 1 && <Texts />}
        { activeMenu === 2 && <Inputs />}
        { activeMenu === 3 && <RadioChk />}
        { activeMenu === 4 && <Popup />}
        { activeMenu === 5 && <Accordions />}
      </div>
    </>
  )
}

export default Tabs;