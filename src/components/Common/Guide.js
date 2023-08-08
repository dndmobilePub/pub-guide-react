import styles from './Guide.module.scss';

export const Guide = (props) => {
  return (
    <div>
      <h2>{props.type}</h2>
      <br/>
      <h3>기본 적용 방법</h3>
      <br/>
      <pre className={`${styles.pre}`}>
        <code>{`import { ${props.component} } from "../components/UI"`}</code>
      </pre>
      <p className='pg_content'>* 사용하고자 하는 컴포넌트에서 위와 같이 경로를 가져옵니다.</p>
      <br/>
      <pre className={`${styles.pre}`}>
        <code>{`return (<${props.component === 'ButtonWrap' ? 'ButtonWrap><Button>...</Button><Button>...</Button></' : `${props.component}>...</`}${props.component}>)`}</code>
      </pre>
      <ul className='pg_content'>
        <li>* return 문 안에 위와 같이 JSX 컴포넌트를 삽입하여 사용합니다.</li>
        <li>* {props.type} 태그 내의 여러가지 선택 옵션을 사용하여 유동적인 스타일링이 가능합니다.</li>
        {props.type === '버튼' && (<li>* &#60;ButtonWrap&#62;은 선택사항으로 &#60;Button&#62;태그를 감쌀 때 사용됩니다.</li>)}
      </ul>
      <br/>
      <h3>필수 옵션</h3>
      <table className={`${styles.table}`}>
        <caption>필수</caption>
        <thead>
          <tr>
            <th>속성명</th>
            <th>종류</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
        {props.component === 'Button' ? (
          <tr>
            <td>chidren</td>
            <td>Any Text</td>
            <td>버튼 텍스트</td>
          </tr>
        ) : props.component === 'ButtonWrap' ? (
          <tr>
            <td>chidren</td>
            <td>Component</td>
            <td>버튼 컴포넌트</td>
          </tr>
        ) : props.component === 'Title' || props.component === 'SubTitle' ? (
          <tr>
            <td>chidren</td>
            <td>Any Text</td>
            <td>타이틀 텍스트</td>
          </tr>
        ) : (
          <tr>
            <td>chidren</td>
            <td>Any Text</td>
            <td>텍스트</td>
          </tr>
        )}
        </tbody>
      </table>

      <h3>선택 옵션</h3>
      <table className={`${styles.table}`}>
        <caption>선택</caption>
        <thead>
          <tr>
            <th>속성명</th>
            <th>종류</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {props.component === 'Button' ? (
            <>
              <tr>
                <td>href</td>
                <td><strong>&#34;#&#34;(기본값)</strong> / &#34;페이지 경로&#34;</td>
                <td>버튼 링크 텍스트</td>
              </tr>
              <tr>
                <td>a</td>
                <td><strong>false(기본값)</strong> / true</td>
                <td>a태그 링크 여부, 기본 false로 버튼 태그로 표시됨</td>
              </tr>
              <tr>
                <td>size</td>
                <td>&#34;xs&#34; / &#34;sm&#34; / <strong>&#34;md&#34;(기본값)</strong> / &#34;lg&#34; / &#34;xl&#34;</td>
                <td>버튼 사이즈</td>
              </tr>
              <tr>
                <td>txtType</td>
                <td><strong>0(기본값)</strong> / 1 / 2 / 3</td>
                <td>button 태그인 경우 적용되지 않음</td>
              </tr>
              <tr>
                <td>bgType</td>
                <td>0 / <strong>1(기본값)</strong> / 2 / 3</td>
                <td>버튼 배경색, a 태그인 경우 적용되지 않음</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td><strong>false(기본값)</strong> / true</td>
                <td>버튼 비활성화 여부</td>
              </tr>
              <tr>
                <td>shape</td>
                <td><strong>&#34;&#34;(기본값)</strong> / &#34;round&#34; / &#34;shadow&#34; / &#34;line&#34;</td>
                <td>버튼 모양</td>
              </tr>
              <tr>
                <td>full</td>
                <td><strong>false(기본값)</strong> / true</td>
                <td>버튼 너비 100% 여부</td>
              </tr>
            </>
          ) : props.component === 'ButtonWrap' ? (
            <>
              <tr>
                <td>grow</td>
                <td><strong>&#34;&#34;(기본값)</strong> / grow</td>
                <td>ButtonWrap 컴포넌트에 display flex 및 flex-grow 설정</td>
              </tr>
              <tr>
                <td>full</td>
                <td><strong>&#34;&#34;(기본값)</strong> / full</td>
                <td>자식 컴포넌트에 width값 100% 적용</td>
              </tr>
            </>
          ) : props.component === 'Title' ? (
            <>
              <tr>
                <td>depth</td>
                <td><strong>1(기본값)</strong> / 2 / 3 / 4 / 5</td>
                <td>타이틀 heading 설정(h1 ~ h5)</td>
              </tr>
            </>
          ) : props.component === 'SubTitle' ? (
            <>
              <tr>
                <td>text</td>
                <td><strong>&#34; &#34; (기본값)</strong></td>
                <td>서브 타이틀 텍스트</td>
              </tr>
            </>
          ) : props.component === 'Text' ? (
            <>
              <tr>
                <td>lang</td>
                <td><strong>&#34;&#34;(기본값)</strong> / &#34;ko&#34; / &#34;en&#34;</td>
                <td>텍스트의 lang 속성 설정</td>
              </tr>
              <tr>
                <td>ell</td>
                <td><strong>0(기본값)</strong> / 1 / 2 / 3</td>
                <td>말줄임 설정</td>
              </tr>
            </>
          ) : (
            <>
              <tr>
                <td>href</td>
                <td><strong>&#34;#&#34;(기본값)</strong> / &#34;페이지 경로&#34;</td>
                <td>버튼 링크 텍스트</td>
              </tr>
            </>
          )}
          
        </tbody>
      </table>
    </div>
  )
}