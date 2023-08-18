import { useRouter } from "next/router";
import Header from "../components/Common/Header";
import Tabs from "../components/Common/Tabs";
import "../styles/scss/pg.workSheet.scss"
import { completeCount, curPercent, curCount, totalCount } from "../data/countData";
import { InputProvider } from "../store/search-context";

export default function App({ Component, pageProps }) {
  // 가장 먼저 실행되는 컴포넌트로 모든 컴포넌트에 공통으로 적용할 속성 관리. 공통 적용 소스 중 동적인 소스 적용
  // ex) global CSS 추가, page 이동 중 state를 유지 등..
  const router = useRouter();
  const pathname = router.pathname.substring(1);
  return (
    pathname.startsWith("publishing") ? (
      <Component {...pageProps} />
    ) : (
      <InputProvider>
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
                  <span className="lb">총본수</span><strong className="num">{totalCount}</strong>
                </div>
                <div className="pg_count working">
                  <span className="lb">총진행본수</span><strong className="num">{curCount}</strong>
                </div>
                <div className="pg_count cp_num">
                  <span className="lb">총완료본수</span><strong className="num">{completeCount}</strong>
                </div>
                <div className="pg_project_ing">
                  <span className="ing">진행률 : <strong className="num">{curPercent}</strong>%</span> <span className="pgraph"><span className="bar" style={{width: `${curPercent}%`}}></span></span>
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
        </div>
      </InputProvider>
    )
  );
}
