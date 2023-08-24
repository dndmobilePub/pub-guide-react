import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSearchContext } from "../../store/SearchContext";

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
        {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="65px" height="50px" viewBox="0 0 65 65" xml:space="preserve">
          <path className="bar b1" d="M20,23.912h23.997c0,0,16.004-0.501,16.004,13.416 S46.75,47.912,41.834,42.995S22.668,23.412,22.668,23.412"></path>
          <path className="bar b2" d="M24.751,41.995H44c0,0,16.001,1.167,16.001-12.25 c0-13.417-9.508-15.157-18.004-6.745S22.001,42.995,22.001,42.995"></path>
          <line className="bar b3" x1="30.125" y1="32.999" x2="43.997" y2="32.999"></line>
        </svg> */}
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
