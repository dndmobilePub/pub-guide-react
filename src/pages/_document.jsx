import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // _app 다음으로 실행되는 마크업 기반 컴포넌트. 공통 적용 소스 중 정적인 소스 적용
  // ex. font import, charset, 웹 접근성 관련 태그 설정 등..
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
