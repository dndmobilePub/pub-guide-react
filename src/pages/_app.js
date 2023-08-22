import { useRouter } from "next/router";
import Header from "../components/Common/Header";
import Tabs from "../components/Common/Tabs";
import "../styles/scss/pg.workSheet.scss";
import {
  completeCount,
  curPercent,
  curCount,
  totalCount,
} from "../data/countData";
import { SearchProvider } from "../store/SearchContext";
import { useState, useEffect } from "react";
import { DarkModeBtn } from "../components/Common/DarkModeBtn";

export default function App({ Component, pageProps }) {
  // 가장 먼저 실행되는 컴포넌트로 모든 컴포넌트에 공통으로 적용할 속성 관리. 공통 적용 소스 중 동적인 소스 적용
  // ex) global CSS 추가, page 이동 중 state를 유지 등..
  const router = useRouter();
  const pathname = router.pathname.substring(1);
  const [active, setActive] = useState(false);
  function ScrollDetection() {
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          active === false && setActive(true);
        } else {
          active === true && setActive(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return null;
  }

  return (
    <>
      {pathname.startsWith("publishing") ? (
        <Component {...pageProps} />
      ) : (
        <SearchProvider>
          <div id="pgWrap">
            <Header />
            <div className="pg_titles">
              <h2>
                {pathname === "" || pathname.startsWith("component")
                  ? "component"
                  : pathname}
              </h2>
              {pathname === "worksheet" && (
                <div className="pg_project_status">
                  <div className="pg_count total">
                    <span className="lb">총본수</span>
                    <strong className="num">{totalCount}</strong>
                  </div>
                  <div className="pg_count working">
                    <span className="lb">총진행본수</span>
                    <strong className="num">{curCount}</strong>
                  </div>
                  <div className="pg_count cp_num">
                    <span className="lb">총완료본수</span>
                    <strong className="num">{completeCount}</strong>
                  </div>
                  <div className="pg_project_ing">
                    <span className="ing">
                      진행률 : <strong className="num">{curPercent}</strong>%
                    </span>{" "}
                    <span className="pgraph">
                      <span
                        className="bar"
                        style={{ width: `${curPercent}%` }}
                      ></span>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div id="pgContainer">
              {(pathname.startsWith("component") || pathname === "") && (
                <Tabs pathname={pathname} />
              )}
              <Component {...pageProps} />
            </div>
            {/* <div className={`btm_btn_set${active ? " active" : ""}`}>
              <ScrollDetection />
              <button
                type="button"
                className="btn_guide_top"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <span className="hide">TOP</span>
              </button>
              <DarkModeBtn />
            </div> */}
          </div>
        </SearchProvider>
      )}
    </>
  );
}
