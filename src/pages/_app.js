import { useRouter } from 'next/router'
import Header from '../components/Common/Header'
import Tabs from '../components/Common/Tabs'
import '../styles/scss/pg.worksheet.scss'

export default function App({ Component, pageProps }) {
  // 가장 먼저 실행되는 컴포넌트로 모든 컴포넌트에 공통으로 적용할 속성 관리. 공통 적용 소스 중 동적인 소스 적용
  // ex) global CSS 추가, page 이동 중 state를 유지 등..
  const router = useRouter();
  const pathname = router.pathname.substring(1);
  return (
    <div id="pgWrap">
      <Header />
      <div className="pg_titles">
        <h2>{pathname === "" || pathname.startsWith("component") ? "component": pathname}</h2>
      </div>
      <div id="pgContainer">
        <div className='pg_content'>
          {(pathname.startsWith("component") || pathname === "") && (<Tabs pathname={pathname} />)}
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}
