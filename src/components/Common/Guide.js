import styles from "./Guide.module.scss";

export const Guide = (props) => {
  return (
    <div>
      <h2>{props.type}</h2>
      <br />
      <h3>기본 적용 방법</h3>
      <br />
      <pre className={`${styles.pre}`}>
        <code>{`import { ${props.component} } from "../components/UI"`}</code>
      </pre>
      <p className="pg_content">
        * 사용하고자 하는 컴포넌트에서 위와 같이 경로를 가져옵니다.
      </p>
      <br />
      <pre className={`${styles.pre}`}>
        <code>
          {`return (${
            props.component === "ButtonWrap"
              ? "<ButtonWrap><Button>...</Button><Button>...</Button></ButtonWrap>"
              : props.component === "TextInput" ||
                props.component === "CustomInput"
              ? `<${props.component} />`
              : `<${props.component}>...</${props.component}>`
          })`}
        </code>
      </pre>
      <ul className="pg_content">
        <li>* return 문 안에 위와 같이 JSX 컴포넌트를 삽입하여 사용합니다.</li>
        <li>
          * {props.type} 태그 내의 여러가지 선택 옵션을 사용하여 유동적인
          스타일링이 가능합니다.
        </li>
        {props.type === "버튼" && (
          <li>
            * &#60;ButtonWrap&#62;은 선택사항으로 &#60;Button&#62;태그를 감쌀 때
            사용됩니다.
          </li>
        )}
      </ul>
      <br />
      <h3>필수 옵션</h3>
      <table className={`${styles.table}`}>
        <caption>필수</caption>
        <thead>
          <tr>
            <th>옵션명</th>
            <th>데이터 타입</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {props.component === "Button" ? (
            <tr>
              <td>chidren</td>
              <td>Any Text</td>
              <td>버튼 텍스트</td>
            </tr>
          ) : props.component === "ButtonWrap" ? (
            <tr>
              <td>chidren</td>
              <td>Component</td>
              <td>버튼 컴포넌트</td>
            </tr>
          ) : props.component === "Title" ? (
            <tr>
              <td>chidren</td>
              <td>Any Text</td>
              <td>타이틀 텍스트</td>
            </tr>
          ) : props.component === "TextInput" ||
            props.component === "CustomInput" ||
            props.component === "Radio" ? (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          ) : props.component === "Field" ? (
            <tr>
              <td>children</td>
              <td>JSX Component</td>
              <td>인풋 컴포넌트</td>
            </tr>
          ) : props.component === "RadioBox" ? (
            <>
              <tr>
                <td>children</td>
                <td>JSX Component</td>
                <td>{`<Radio>`} 컴포넌트</td>
              </tr>
              <tr>
                <td>name</td>
                <td>Any Text</td>
                <td>라디오 버튼을 활성화하기 위한 name 설정</td>
              </tr>
            </>
          ) : props.component === "SelectBox" ? (
            <>
              <tr>
                <td>list</td>
                <td>[ &#34;option1&#34;,&#34;option2&#34;,... ]</td>
                <td>SelectBox 옵션에 들어갈 문자열 형태의 배열</td>
              </tr>
            </>
          ) : props.component === "Accordion" ? (
            <>
              <tr>
                <td>title</td>
                <td>Any Text</td>
                <td>아코디언 제목</td>
              </tr>
              <tr>
                <td>content</td>
                <td>Any html</td>
                <td>아코디언 컨텐츠</td>
              </tr>
            </>
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
            <th>옵션명</th>
            <th>데이터 타입</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {props.component === "Button" ? (
            <>
              <tr>
                <td>href</td>
                <td>
                  <strong>&#34;#&#34;(기본값)</strong> / &#34;페이지 경로&#34;
                </td>
                <td>버튼 링크 텍스트</td>
              </tr>
              <tr>
                <td>a</td>
                <td>
                  <strong>false(기본값)</strong> / true
                </td>
                <td>a태그 링크 여부, 기본 false로 버튼 태그로 표시됨</td>
              </tr>
              <tr>
                <td>size</td>
                <td>
                  &#34;xs&#34; / &#34;sm&#34; /{" "}
                  <strong>&#34;md&#34;(기본값)</strong> / &#34;lg&#34; /
                  &#34;xl&#34;
                </td>
                <td>버튼 사이즈</td>
              </tr>
              <tr>
                <td>txtType</td>
                <td>
                  <strong>0(기본값)</strong> / 1 / 2 / 3
                </td>
                <td>button 태그인 경우 적용되지 않음</td>
              </tr>
              <tr>
                <td>bgType</td>
                <td>
                  0 / <strong>1(기본값)</strong> / 2 / 3
                </td>
                <td>버튼 배경색, a 태그인 경우 적용되지 않음</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>
                  <strong>false(기본값)</strong> / true
                </td>
                <td>버튼 비활성화 여부</td>
              </tr>
              <tr>
                <td>shape</td>
                <td>
                  <strong>&#34;&#34;(기본값)</strong> / &#34;round&#34; /
                  &#34;shadow&#34; / &#34;line&#34;
                </td>
                <td>버튼 모양</td>
              </tr>
              <tr>
                <td>full</td>
                <td>
                  <strong>false(기본값)</strong> / true
                </td>
                <td>버튼 너비 100% 여부</td>
              </tr>
            </>
          ) : props.component === "ButtonWrap" ? (
            <>
              <tr>
                <td>grow</td>
                <td>
                  <strong>&#34;&#34;(기본값)</strong> / grow
                </td>
                <td>ButtonWrap 컴포넌트에 display flex 및 flex-grow 설정</td>
              </tr>
              <tr>
                <td>full</td>
                <td>
                  <strong>&#34;&#34;(기본값)</strong> / full
                </td>
                <td>자식 컴포넌트에 width값 100% 적용</td>
              </tr>
            </>
          ) : props.component === "Title" ? (
            <>
              <tr>
                <td>depth</td>
                <td>
                  <strong>1(기본값)</strong> / 2 / 3 / 4 / 5
                </td>
                <td>타이틀 heading 설정(h1 ~ h5)</td>
              </tr>
              <tr>
                <td>sub</td>
                <td>Any Text</td>
                <td>서브 타이틀 설정</td>
              </tr>
            </>
          ) : props.component === "Text" ? (
            <>
              <tr>
                <td>lang</td>
                <td>
                  <strong>&#34;&#34;(기본값)</strong> / &#34;ko&#34; /
                  &#34;en&#34;
                </td>
                <td>텍스트의 lang 속성 설정</td>
              </tr>
              <tr>
                <td>ell</td>
                <td>
                  <strong>0(기본값)</strong> / 1 / 2 / 3
                </td>
                <td>말줄임 설정</td>
              </tr>
            </>
          ) : props.component === "Field" ? (
            <>
              <tr>
                <td>label</td>
                <td>Any Text</td>
                <td>인풋 라벨 텍스트 설정</td>
              </tr>
              <tr>
                <td>info</td>
                <td>시작태그에 info 추가</td>
                <td>하단에 info 메세지 표시</td>
              </tr>
              <tr>
                <td>valid</td>
                <td>시작태그에 valid 추가</td>
                <td>하단에 valid 메세지 표시</td>
              </tr>
              <tr>
                <td>inValid</td>
                <td>시작태그에 inValid 추가</td>
                <td>하단에 inValid 메세지 표시</td>
              </tr>
              <tr>
                <td>wrap</td>
                <td>시작태그에 wrap 추가</td>
                <td>CustomInput 조합 레이아웃일때 사용</td>
              </tr>
            </>
          ) : props.component === "TextInput" ? (
            <>
              <tr>
                <td>type</td>
                <td>
                  <strong>&#34;text&#34;(기본값)</strong> / &#34;number&#34; /
                  &#34;tel&#34; / &#34;password&#34;
                </td>
                <td>인풋 타입 지정</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>Any Text</td>
                <td>placeholder 문구 입력</td>
              </tr>
              <tr>
                <td>minLength</td>
                <td>Any Number</td>
                <td>최소 글자 수 설정</td>
              </tr>
              <tr>
                <td>maxLength</td>
                <td>Any Number</td>
                <td>최대 글자 수 설정</td>
              </tr>
              <tr>
                <td>initText</td>
                <td>Any Text</td>
                <td>최초 표시될 value값 설정</td>
              </tr>
              <tr>
                <td>readonly</td>
                <td>
                  <strong>false(기본값)</strong> / true
                </td>
                <td>readonly 여부 설정</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>
                  <strong>false(기본값)</strong> / true
                </td>
                <td>readonly 여부 설정</td>
              </tr>
              <tr>
                <td>clear</td>
                <td>
                  <strong>true(기본값)</strong> / true
                </td>
                <td>인풋 데이터 삭제버튼 표시 여부 설정</td>
              </tr>
              <tr>
                <td>noWrap</td>
                <td>
                  <strong>false(기본값)</strong> / true
                </td>
                <td>input 외부에 wrap 클래스 유무 설정</td>
              </tr>
            </>
          ) : props.component === "CustomInput" ? (
            <>
              <tr>
                <td>type</td>
                <td>
                  <strong>&#34;text&#34;(기본값)</strong> / &#34;number&#34; /
                  &#34;tel&#34; / &#34;password&#34;
                </td>
                <td>인풋 타입 지정</td>
              </tr>
              <tr>
                <td>length</td>
                <td>Number</td>
                <td>커스텀 패스워드 인풋에서 입력받을 글자 수</td>
              </tr>
              <tr>
                <td>secureLength</td>
                <td>Number</td>
                <td>커스텀 패스워드 인풋에서 가림 처리할 글자 수</td>
              </tr>
              <tr>
                <td>maxLength</td>
                <td>Number</td>
                <td>커스텀 패스워드 인풋에서 전체 글자수</td>
              </tr>
            </>
          ) : props.component === "CheckBox" ? (
            <>
              <tr>
                <td>type</td>
                <td>
                  <strong>&#34;circle&#34;(기본값)</strong> /
                  &#34;circleLine&#34; / &#34;square&#34; / &#34;squareLine&#34;
                  / &#34;switch&#34; / &#34;switch-text&#34; /
                  &#34;switch-lg&#34;
                </td>
                <td>체크박스 비주얼 타입 지정</td>
              </tr>
              <tr>
                <td>checked</td>
                <td>true / false(기본값)</td>
                <td>체크박스 초기 체크 여부</td>
              </tr>
              <tr>
                <td>label</td>
                <td>Any Text</td>
                <td>체크박스 라벨 텍스트</td>
              </tr>
              <tr>
                <td>readOnly</td>
                <td>true / false(기본값)</td>
                <td>체크박스 readonly 설정</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>true / false(기본값)</td>
                <td>체크박스 disabled 설정</td>
              </tr>
            </>
          ) : props.component === "RadioBox" ? (
            <>
              <tr>
                <td>type</td>
                <td>
                  <strong>&#34;circle&#34;(기본값)</strong> / &#34;box&#34; /
                  &#34;boxChk&#34;
                </td>
                <td>라디오 비주얼 타입 지정</td>
              </tr>
            </>
          ) : props.component === "Radio" ? (
            <>
              <tr>
                <td>label</td>
                <td>Any Text</td>
                <td>체크박스 라벨 텍스트</td>
              </tr>
              <tr>
                <td>defaultChecked</td>
                <td>true / false(기본값)</td>
                <td>라디오 최초 선택 설정</td>
              </tr>
              <tr>
                <td>readOnly</td>
                <td>true / false(기본값)</td>
                <td>라디오 readonly 설정</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>true / false(기본값)</td>
                <td>라디오 disabled 설정</td>
              </tr>
            </>
          ) : props.component === "SelectBox" ? (
            <>
              <tr>
                <td>type</td>
                <td>- (기본값) / custom</td>
                <td>커스텀 셀렉트박스일 경우에 type값 지정 필요</td>
              </tr>
              <tr>
                <td>selectTitle</td>
                <td>Any Text</td>
                <td>커스텀 셀렉트박스일 경우 모달창 상단에 들어갈 타이틀 설정</td>
              </tr>
            </>
          ) : props.component === "Accordion" ? (
            <>
              <tr>
                <td>scroll</td>
                <td>true / false(기본값)</td>
                <td>제목 선택시 해당 아코디언으로 스크롤</td>
              </tr>
              <tr>
                <td>btnStyle</td>
                <td>1(기본값) / 2</td>
                <td>우측 btn on/off 스타일 변경</td>
              </tr>
              <tr>
                <td>activeColor</td>
                <td>-(기본값) / activeColor</td>
                <td>우측 btn on/off 활설화 컬러값 변경</td>
              </tr>
              <tr>
                <td>onlyBtn</td>
                <td>-(기본값) / onlyBtn</td>
                <td>아코디언 하나만 열리도록 변경</td>
              </tr>
              <tr>
                <td>chkBox</td>
                <td>-(기본값) / chkBox</td>
                <td>체크박스 포함하도록 변경</td>
              </tr>
              <tr>
                <td>defaultView</td>
                <td>
                  {"off"}(기본값) / {"on"}
                </td>
                <td>최초 마운트시 컨텐츠 보이도록 변경</td>
              </tr>
              <tr>
                <td>children</td>
                <td>JSX Component</td>
                <td>커스텀 아코디언을 위한 JSX 컴포넌트</td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>-(기본값) / Any function</td>
                <td>클릭했을때 실행할 함수가 있다면 추가</td>
              </tr>
            </>
          ) : (
            <>
              <tr>
                <td>href</td>
                <td>
                  <strong>&#34;#&#34;(기본값)</strong> / &#34;페이지 경로&#34;
                </td>
                <td>버튼 링크 텍스트</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};
