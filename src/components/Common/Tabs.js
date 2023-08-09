import { useState } from "react";
import Link from "next/link";

const Tabs = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  return (
    <>
      <div className="pg_board_tab">
        <ul>
          <li className={`${activeMenu === 0 ? 'active' : ''}`} onClick={()=>setActiveMenu(0)}>
            <Link href={'/button'}>버튼</Link>
          </li>
          <li className={`${activeMenu === 1 ? 'active' : ''}`} onClick={()=>setActiveMenu(1)}>
            <Link href={'/text'}>타이틀/텍스트</Link>
          </li>
          <li className={`${activeMenu === 2 ? 'active' : ''}`} onClick={()=>setActiveMenu(2)}>
            <Link href={'/input'}>인풋</Link>
          </li>
          <li className={`${activeMenu === 3 ? 'active' : ''}`} onClick={()=>setActiveMenu(3)}>
            <Link href={'/radio-chk'}>라디오/체크박스</Link>
          </li>
          <li className={`${activeMenu === 4 ? 'active' : ''}`} onClick={()=>setActiveMenu(4)}>
            <Link href={'/popup'}>팝업/알럿</Link>
          </li>
          <li className={`${activeMenu === 5 ? 'active' : ''}`} onClick={()=>setActiveMenu(5)}>
            <Link href={'/accordion'}>아코디언</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Tabs;