import '../styles/cm.common.css'
import '../styles/common.scss'
import '../styles/worksheet.scss'
export default function App({ Component, pageProps }) {
  // 가장 먼저 실행되는 컴포넌트로 모든 컴포넌트에 공통으로 적용할 속성 관리. 공통 적용 소스 중 동적인 소스 적용
  // ex) global CSS 추가, page 이동 중 state를 유지 등..
  return (
    <Component {...pageProps} />
  )
}
