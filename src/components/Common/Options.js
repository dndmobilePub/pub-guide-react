import styles from "./Options.module.scss";
import { ButtonGuide } from "./Guide/Button";
import { TitleGuide } from "./Guide/Title";
import { TextGuide } from "./Guide/Text";
import { FieldGuide } from "./Guide/Field";
import { TextInputGuide } from "./Guide/TextInput";
import { CustomInputGuide } from "./Guide/CustomInput";
import { CheckBoxGuide } from "./Guide/CheckBox";
import { RadioGuide } from "./Guide/RadioBox";
import { SelectBoxGuide } from "./Guide/SelectBox";
import { PopupGuide } from "./Guide/Popup";
import { TooltipGuide } from "./Guide/Tooltip";
import { AccordionGuide } from "./Guide/Accordion";
import { TabMenuGuide } from "./Guide/TabMenu";

export const Options = (props) => {
  const { component } = props;
  return (
    <>
      {(component === "Button" || component === "ButtonWrap") && (<ButtonGuide />)}
      {component === "Title" && (<TitleGuide />)}
      {component === "Text" && (<TextGuide />)}
      {component === "Field" && (<FieldGuide />)}
      {component === "TextInput" && (<TextInputGuide />)}
      {component === "CustomInput" && (<CustomInputGuide />)}
      {component === "CheckBox" && (<CheckBoxGuide />)}
      {(component === "RadioBox" || component === "Radio") && (<RadioGuide />)}
      {component === "SelectBox" && (<SelectBoxGuide />)}
      {component === "Popup" && (<PopupGuide />)}
      {component === "Tooltip" && (<TooltipGuide />)}
      {component === "Accordion" && (<AccordionGuide />)}
      {component === "TabMenu" && (<TabMenuGuide />)}
      <h3>❗ 필수 옵션</h3>
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
          {component === "Button" ? (
            <tr>
              <td>chidren</td>
              <td>String</td>
              <td>버튼 텍스트</td>
            </tr>
          ) : component === "ButtonWrap" ? (
            <tr>
              <td>chidren</td>
              <td>Component</td>
              <td>버튼 컴포넌트</td>
            </tr>
          ) : component === "Title" ? (
            <tr>
              <td>text</td>
              <td>String</td>
              <td>타이틀 내용</td>
            </tr>
          ) : component === "TextInput" || component === "CheckBox" ||
            component === "CustomInput" ||
            component === "Radio" ||  component === "Popup" ? (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          ) : component === "Field" ? (
            <tr>
              <td>children</td>
              <td>Html(JSX)</td>
              <td>인풋 컴포넌트</td>
            </tr>
          ) : component === "RadioBox" ? (
            <>
              <tr>
                <td>children</td>
                <td>Html(JSX)</td>
                <td>{`<Radio>`} 컴포넌트</td>
              </tr>
              <tr>
                <td>name</td>
                <td>String</td>
                <td>라디오 버튼을 활성화하기 위한 name 설정</td>
              </tr>
            </>
          ) : component === "SelectBox" ? (
            <>
              <tr>
                <td>list</td>
                <td>[ &#34;option1&#34;,&#34;option2&#34;,... ]</td>
                <td>SelectBox 옵션에 들어갈 문자열 형태의 배열</td>
              </tr>
            </>
          ) : component === "Tooltip" ? (
            <>
              <tr>
                <td>msg</td>
                <td>Html(JSX)</td>
                <td>
                  툴팁 컨텐츠 영역 안에 들어갈 JSX 엘리먼트
                </td>
              </tr>
              <tr>
                <td>tooltip</td>
                <td>Object</td>
                <td>
                  툴팁 상태가 담겨있는 변수 (Tooltip 컴포넌트와 TooltipHtml은 같은 변수를 참조해야함. 컴포넌트 참고)
                </td>
              </tr>
            </>
          ) : component === "Accordion" ? (
            <>
              <tr>
                <td>title</td>
                <td>String</td>
                <td>아코디언 제목</td>
              </tr>
              <tr>
                <td>content</td>
                <td>Any html</td>
                <td>아코디언 컨텐츠</td>
              </tr>
            </>
          ): component === "TabMenu" ? (
            <>
              <tr>
                <td>menus</td>
                <td>Array. <br/>{`[{ title : String, href : String, blank : Boolean, contents : any}]`}</td>
                <td>탭메뉴 배열 데이터. <br/>{`[{ title : 메뉴이름 문자열, href : 경로 문자열, blank : 새창여부 true/false, contents : 탭 컨텐츠 JSX Element}]`}</td>
              </tr>
            </>
          ) : (
            <tr>
              <td>chidren</td>
              <td>String</td>
              <td>텍스트</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3>❔ 선택 옵션</h3>
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
          {component === "Button" ? (
            <>
              <tr>
                <td>a</td>
                <td>
                  <strong>- (기본값)</strong> / a
                </td>
                <td>a태그 여부 설정, 별도 미설정시 a 버튼 태그로 표시됨</td>
              </tr>
              <tr>
                <td>href</td>
                <td>
                  <strong>&#34;#&#34;(기본값)</strong> / &#34;페이지 경로&#34;
                </td>
                <td>버튼 링크 텍스트</td>
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
                <td>shape</td>
                <td>
                  <strong>- (기본값)</strong> / &#34;round&#34; /
                  &#34;shadow&#34; / &#34;line&#34;
                </td>
                <td>버튼 모양</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>
                  <strong>- (기본값)</strong> / disabled
                </td>
                <td>버튼 비활성화 여부</td>
              </tr>
              <tr>
                <td>full</td>
                <td>
                  <strong>- (기본값)</strong> / full
                </td>
                <td>버튼 너비 100% 여부</td>
              </tr>
              <tr>
                <td>onclick</td>
                <td>
                  function()
                </td>
                <td>버튼 클릭시 실행할 커스텀 함수</td>
              </tr>
            </>
          ) : component === "ButtonWrap" ? (
            <>
              <tr>
                <td>grow</td>
                <td>
                  <strong>- (기본값)</strong> / grow
                </td>
                <td>ButtonWrap 컴포넌트에 display flex 및 flex-grow 설정</td>
              </tr>
              <tr>
                <td>full</td>
                <td>
                  <strong>- (기본값)</strong> / full
                </td>
                <td>자식 컴포넌트에 width값 100% 적용</td>
              </tr>
            </>
          ) : component === "Title" ? (
            <>
              <tr>
                <td>depth</td>
                <td>
                  <strong>1(기본값)</strong> / 2 / 3 / 4 / 5
                </td>
                <td>타이틀 heading 설정(h1 ~ h5)</td>
              </tr>
              <tr>
                <td>type</td>
                <td>
                  <strong>1(기본값)</strong> / 2
                </td>
                <td>타이틀 색상 설정</td>
              </tr>
              <tr>
                <td>uline</td>
                <td>
                  <strong>-(기본값)</strong> / uline
                </td>
                <td>타이틀 밑줄 설정</td>
              </tr>
              <tr>
                <td>split</td>
                <td>
                  <strong>-(기본값)</strong> / split
                </td>
                <td>타이틀 영역 좌우 분할 설정</td>
              </tr>
              <tr>
                <td>sub</td>
                <td>String</td>
                <td>서브 타이틀 설정</td>
              </tr>
            </>
          ) : component === "Text" ? (
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
          ) : component === "Field" ? (
            <>
              <tr>
                <td>label</td>
                <td>
                  <strong>- (기본값)</strong> / String
                </td>
                <td>인풋 라벨 텍스트 설정</td>
              </tr>
              <tr>
                <td>info</td>
                <td>
                  <strong>- (기본값)</strong> / String
                </td>
                <td>하단에 정보 메세지 표시</td>
              </tr>
              <tr>
                <td>valid</td>
                <td>
                  <strong>- (기본값)</strong> / {`{활성화 여부 , 성공 메시지, 실패 메시지}`}
                </td>
                <td>하단에 성공/실패 메세지 표시</td>
              </tr>
              <tr>
                <td>wrap</td>
                <td>
                  <strong>- (기본값)</strong> / wrap
                </td>
                <td>CustomInput 조합 레이아웃일때 사용</td>
              </tr>
            </>
          ) : component === "TextInput" ? (
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
                <td>String</td>
                <td>placeholder 문구 입력</td>
              </tr>
              <tr>
                <td>min</td>
                <td>Any Number</td>
                <td>최소 숫자 설정 (type = {`"number"`}일때만 적용)</td>
              </tr>
              <tr>
                <td>max</td>
                <td>Any Number</td>
                <td>최대 숫자 설정 (type = {`"number"`}일때만 적용)</td>
              </tr>
              <tr>
                <td>maxLength</td>
                <td>Any Number</td>
                <td>최대 글자 수 설정 (type = {`"number"`}일때는 적용되지않음)</td>
              </tr>
              <tr>
                <td>initText</td>
                <td>String</td>
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
                <td>disabled 여부 설정</td>
              </tr>
              <tr>
                <td>clear</td>
                <td>
                  <strong>true(기본값)</strong> / false
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
          ) : component === "CustomInput" ? (
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
                <td>커스텀 패스워드 인풋에서 가림처리 되지 않는 글자 수</td>
              </tr>
              <tr>
                <td>maxLength</td>
                <td>Number</td>
                <td>커스텀 패스워드 인풋에서 전체 글자수</td>
              </tr>
            </>
          ) : component === "CheckBox" ? (
            <>
              <tr>
                <td>type (Field용)</td>
                <td>
                  <strong>&#34;circle&#34;(기본값)</strong> /
                  &#34;c-line&#34; / &#34;square&#34; / &#34;s-line&#34;
                </td>
                <td>체크박스 비주얼 타입 지정</td>
              </tr>
              <tr>
                <td>switchType</td>
                <td>
                  <strong>-(기본값)</strong> /
                  &#34;switch&#34; / &#34;switch-text&#34; /
                  &#34;switch-lg&#34;
                </td>
                <td>체크박스 스위치 타입 지정 (type과 상관없이 적용)</td>
              </tr>
              <tr>
                <td>checked</td>
                <td>true / false(기본값)</td>
                <td>체크박스 초기 체크 여부</td>
              </tr>
              <tr>
                <td>label</td>
                <td>String</td>
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
          ) : component === "RadioBox" ? (
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
          ) : component === "Radio" ? (
            <>
              <tr>
                <td>label</td>
                <td>String</td>
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
          ) : component === "SelectBox" ? (
            <>
              <tr>
                <td>type</td>
                <td>- (기본값) / custom</td>
                <td>커스텀 셀렉트박스일 경우에 type값 지정 필요</td>
              </tr>
              <tr>
                <td>selectTitle</td>
                <td>String</td>
                <td>
                  커스텀 셀렉트박스일 경우 모달창 상단에 들어갈 타이틀 설정
                </td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>String</td>
                <td>
                  커스텀 셀렉트박스일 경우 인풋에 들어갈 플레이스홀더 설정
                </td>
              </tr>
              <tr>
                <td>confirmText</td>
                <td>String</td>
                <td>
                  커스텀 셀렉트박스일 경우 인풋 좌측 버튼명 설정
                </td>
              </tr>
            </>
          ): component === "Popup" ? (
            <>
              <tr>
                <td>position</td>
                <td>top (기본값) / left / bottom / center</td>
                <td>모달 컴포넌트 포지셔닝 값</td>
              </tr>
              <tr>
                <td>isOpen</td>
                <td>false (기본값) / true</td>
                <td>
                  모달창 오픈여부 설정
                </td>
              </tr>
              <tr>
                <td>prev</td>
                <td>false (기본값) / true</td>
                <td>
                  커스텀 셀렉트박스일 경우 인풋에 들어갈 플레이스홀더 설정
                </td>
              </tr>
              <tr>
                <td>toggleModal</td>
                <td>function()</td>
                <td>
                  모달을 외부에서 컨트롤하기 위해 전달할 커스텀 함수
                </td>
              </tr>
              <tr>
                <td>title</td>
                <td>String</td>
                <td>
                  모달창 제목
                </td>
              </tr>
              <tr>
                <td>content</td>
                <td>Html(JSX)</td>
                <td>
                  내부 컨텐츠 JSX Element
                </td>
              </tr>
              <tr>
                <td>confirmText</td>
                <td>String</td>
                <td>
                  모달창 확인버튼 텍스트
                </td>
              </tr>
              <tr>
                <td>cancelText</td>
                <td>String</td>
                <td>
                  모달창 취소버튼 텍스트
                </td>
              </tr>
              <tr>
                <td colSpan={3}>▼ Toast 컴포넌트 옵션</td>
              </tr>
              <tr>
                <td>msg</td>
                <td>String</td>
                <td>
                  토스트 팝업 텍스트
                </td>
              </tr>
              <tr>
                <td>timer</td>
                <td>Number</td>
                <td>
                  토스트 팝업을 띄워놓을 시간 설정(ms)
                </td>
              </tr>
              <tr>
                <td>closeToast</td>
                <td>function()</td>
                <td>
                 토스트 팝업을 닫기 위해 컴포넌트에 전달할 커스텀 함수
                </td>
              </tr>
            </>
          ) : component === "Tooltip" ? (
            <>
              <tr>
                <td>tooltipId</td>
                <td>Number</td>
                <td>툴팁에 아이디 부여</td>
              </tr>
              <tr>
                <td>label</td>
                <td>String</td>
                <td>
                  툴팁 라벨 텍스트 설정
                </td>
              </tr>
              
              <tr>
                <td>dir</td>
                <td>String</td>
                <td>
                  툴팁이 표시될 방향 설정 (기본 right, left, top, bottom)
                </td>
              </tr>
              <tr>
                <td>align</td>
                <td>String</td>
                <td>
                  라벨 텍스트 정렬 설정 (기본 left, right, center)
                </td>
              </tr>
              <tr>
                <td>onclick</td>
                <td>String</td>
                <td>
                  툴팁이 표시될 방향 설정 (기본 right, left, top, bottom)
                </td>
              </tr>
              <tr>
                <td>forwardRef</td>
                <td>variable</td>
                <td>
                  ref가 필요한 경우 설정
                </td>
              </tr>
              <tr>
                <td colSpan={3}>▼ TooltipHtml 컴포넌트 옵션</td>
              </tr>
              <tr>
                <td>onclick</td>
                <td>function()</td>
                <td>
                  툴팁을 닫을 때 실행할 커스텀 함수 전달
                </td>
              </tr>
            </>
          ): component === "TabMenu" ? (
            <>
              <tr>
                <td>expand</td>
                <td>false (기본값) / true</td>
                <td>탭메뉴 Block 형태 여부</td>
              </tr>
              <tr>
                <td>selHV</td>
                <td>false (기본값) / true</td>
                <td>가로 세로 탭메뉴 설정시 첫번째 텝메뉴에 설정해야 되는 옵션</td>
              </tr>
              <tr>
                <td>line</td>
                <td>{`""`} (기본값) / {`"top"`}</td>
                <td>탭메뉴 라인 탑 설정</td>
              </tr>
              <tr>
                <td>align</td>
                <td>{`""`} (기본값) / {`"center"`} / {`"right"`}</td>
                <td>탭메뉴 정렬 설정</td>
              </tr>
              <tr>
                <td>moving</td>
                <td>false (기본값) / true</td>
                <td>탭메뉴 라인 흐르는 애니메이션 여부</td>
              </tr>
              <tr>
                <td>scroll</td>
                <td>false (기본값) / true</td>
                <td>탭메뉴 클릭시 컨텐츠 스크롤 여부</td>
              </tr>
              <tr>
                <td>vertical</td>
                <td>false (기본값) / true</td>
                <td>탭메뉴 가로 / 세로 여부</td>
              </tr>
              <tr>
                <td>style</td>
                <td>- (기본값) / Object</td>
                <td>인라인 스타일을 설정해야되는 경우 설정</td>
              </tr>
              <tr>
                <td>className</td>
                <td>- (기본값) / String</td>
                <td>커스텀 클래스 네임 설정</td>
              </tr>
            </>
          ) : component === "Accordion" ? (
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
                <td>Html(JSX)</td>
                <td>커스텀 아코디언을 위한 JSX 엘리먼트</td>
              </tr>
              <tr>
                <td>onclick</td>
                <td>function()</td>
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
    </>
  );
};
