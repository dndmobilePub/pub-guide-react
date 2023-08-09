import Link from "next/link";

const Tabs = (props) => {
  console.log('props : ',props.pathname);
  return (
    <>
      <div className="pg_board_tab">
        <ul>
          <li className={`${props.pathname === 'component/button' || props.pathname === '' ? 'active' : ''}`}>
            <Link href={'/component/button'}>버튼</Link>
          </li>
          <li className={`${props.pathname === 'component/text' ? 'active' : ''}`}>
            <Link href={'/component/text'}>타이틀/텍스트</Link>
          </li>
          <li className={`${props.pathname === 'component/input' ? 'active' : ''}`}>
            <Link href={'/component/input'}>인풋</Link>
          </li>
          <li className={`${props.pathname === 'component/radio-chk' ? 'active' : ''}`}>
            <Link href={'/component/radio-chk'}>라디오/체크박스</Link>
          </li>
          <li className={`${props.pathname === 'component/popup' ? 'active' : ''}`}>
            <Link href={'/component/popup'}>팝업/알럿</Link>
          </li>
          <li className={`${props.pathname === 'component/accordion' ? 'active' : ''}`}>
            <Link href={'/component/accordion'}>아코디언</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Tabs;