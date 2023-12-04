import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSearchContext } from "../../store/SearchContext";
import MenuIcon from "../UI/MenuIcon";
const Header = () => {
  const router = useRouter();
  const pathname = router.pathname.substring(1);
  const [bar, setBar] = useState(pathname.startsWith("worksheet") ? 0 : pathname.startsWith("component") ? 1 : 2);
  const [barWidth,setBarWidth] = useState('33.33%');
  const [windowWidth, setWindowWidth] = useState();
  const [htmlClass, setHtmlClass] = useState('')
  const barRef = useRef(null);
  const { inputValue, setInputValue } = useSearchContext();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (bar === 0) {
      barRef.current.style.left = "5.328px";
    } else if (bar === 1) {
      barRef.current.style.left = "33%"
    } else {
      barRef.current.style.left = "66%"
    }
  }, [bar]);

  useEffect(()=>{
    if(htmlClass){
      document.querySelector("html").classList.add(htmlClass);
    }
    return () => {
      document.querySelector("html").classList.remove("m");
    };
  },[htmlClass])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.innerWidth < 768 ? setBarWidth('33.33%') : setBarWidth('95.3333px');
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      window.innerWidth < 768 ? setBarWidth('33.33%') : setBarWidth('95.3333px')
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header id="pgHeader">
      <h1>
        <span className="hide">PUBLISHING WorkSheet</span>
      </h1>
      <button type="button" className="btn_util" onClick={()=>{
         document.documentElement.classList.contains("util_show") ?  document.documentElement.classList.remove('util_show') :  document.documentElement.classList.add('util_show')
      }}>
        <MenuIcon />
        <span className="hide">메뉴열기</span>
      </button>
      <div className="pg_util">
        {pathname === "worksheet" && (
          <div className="pg_search">
            <input type="text" id="pgSearchINP" value={inputValue} onChange={handleInputChange} placeholder="검색어를 입력하세요"/>
            <button type="button" id="btnPgSearch"><span className="hide">검색하기</span></button>
          </div>
        )}
        <div className="switch">
          <span
            className="bar"
            style={{
              width: `${barWidth}`,
              left: `${
                pathname.startsWith("worksheet")
                  ? "4px"
                  : pathname.startsWith("component")
                  ? "33.33%"
                  : "66.66%"
              }`,
              opacity: "1",
              transform: "scale(1)",
            }}
            ref={barRef}
          />
          <ul>
            <li
              className={`${pathname.startsWith("worksheet") ? "active" : ""}`}
              onMouseEnter={() => {
                setBar(0);
              }}
            >
              <Link href="/worksheet" target="_blank">
                Worksheet
              </Link>
            </li>
            <li
              className={`${pathname.startsWith("component") || pathname === '' ? "active" : ""}`}
              onMouseEnter={() => {
                setBar(1);
              }}
            >
              <Link href="/component/button" target="_blank">
                Component
              </Link>
            </li>
            <li
              className={`${pathname.startsWith("document") ? "active" : ""}`}
              onMouseEnter={() => {
                setBar(2);
              }}
            >
              <Link href="/document" target="_blank">
                Document
              </Link>
            </li>
          </ul>
        </div>

        {pathname === "worksheet" && (
          <button type="button" className="btn_responsive" onClick={()=>{
            htmlClass===""?setHtmlClass('m'):setHtmlClass('')
          }}><i><i><i className="hide">모바일 미리보기</i></i></i></button>
        )}
      </div>
    </header>
  );
};

export default Header;
