import { useState } from "react";
import { Guide } from "../../../components/Common/Guide"
import { CustomInput, Field, TextInput } from "../../../components/UI/Form"
import styles from './index.module.scss';

export default function Inputs() {
  const [subTab, setSubTab] = useState("TextInput");
  const codeSnippet = `<Button href="#" size={""}>Write your text.</button>`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet)
      .then(() => alert('복사되었습니다.'))
      .catch(err => console.error('Failed to copy code:', err));
  };

  return (
    <>
      <ul className={`${styles.subTab} active`}>
        <li className={`item${subTab==="TextInput"?' active':''}`} onClick={()=>{setSubTab("TextInput")}}>TextInput</li>
        <li className={`item${subTab==="CustomInput"?' active':''}`} onClick={()=>{setSubTab("CustomInput")}}>CustomInput</li>
      </ul>
      <Guide type={`${subTab}`} component={subTab}/>
      <hr/>
      {subTab === 'Title' ? (
        <div>
          <h3>{subTab} : depth 옵션 미리보기 (기본 1/2/3/4/5)</h3>
          <br/>
          <TextInput depth={1}>{`<TextInput depth={1}>`}1depth : 22px{`</TextInput>`}</TextInput>
          <TextInput depth={2}>{`<TextInput depth={2}>`}2depth : 18px{`</TextInput>`}</TextInput>
          <TextInput depth={3}>{`<TextInput depth={3}>`}3depth : 16px{`</TextInput>`}</TextInput>
          <TextInput depth={4}>{`<TextInput depth={4}>`}4depth : 13px{`</TextInput>`}</TextInput>
          <TextInput depth={5}>{`<TextInput depth={5}>`}5depth : 12px{`</TextInput>`}</TextInput>
        </div>
      ):(
        <div>
          <h3>{subTab} : text 옵션 미리보기 (서브타이틀 제목)</h3>
          <br/>
          <TextInput text={`서브타이틀`}>
            메인타이틀
          </TextInput>
        </div>
      )}
      <Field label="text : default" info="안내성 메세지">
        <TextInput placeholder="기본동작 INPUT" />
        <TextInput placeholder="예외 : clear btn 없음" clear={false}/>
        <TextInput initText="readonly" readonly={true} />
        <TextInput placeholder="disabled" disabled={true} />
      </Field>
      <br/>
      <br/>
      <Field label="text : valid" valid="입력값의 유효성이 정상입니다." info="안내성 메세지">
        <TextInput placeholder="placeholder" />
      </Field>
      <br/>
      <br/>
      <Field label="text : invalid" inValid="오류체크 메세지 출력" info="안내성 메세지">
        <TextInput initText="오류체크" placeholder="placeholder" />
      </Field>
      <br/>
      <br/>
      <Field label="number" info="안내성 메세지">
        <TextInput type="tel" placeholder="0" />
      </Field>
      <br/>
      <br/>
      <Field label="price" info="안내성 메세지">
        <TextInput type="tel" placeholder="₩0" alignRight />
      </Field>
      <br/>
      <br/>
      <Field label="기본형 : password" info="안내성 메세지">
        <TextInput type="password" placeholder="●●●●" maxLength={4}/>
      </Field>
      <br/>
      <br/>
      <Field label="특문 커스텀 : password 부분입력" info="안내성 메세지" wrap>
        <CustomInput type="password" length={2} secureLength={2} maxLength={4}/>
      </Field>
      <br/>
      <br/>
      <Field label="휴대전화번호" info="안내성 메세지" wrap>
        <TextInput placeholder="휴대전화 앞자리" maxLength={3} noWrap/>
        <span className="field-txt">-</span>
        <TextInput placeholder="휴대전화 앞자리" maxLength={4} noWrap/>
        <span className="field-txt">-</span>
        <TextInput placeholder="휴대전화 앞자리" maxLength={4} noWrap/>
      </Field>
      <br/>
      <br/>
      <Field label="주민등록번호" info="안내성 메세지" wrap>
        <TextInput placeholder="생년월일 6자리" maxLength={6} noWrap/>
        <span className="field-txt">-</span>
        <CustomInput type="text" length={1} secureLength={6} maxLength={7}/>
      </Field>
    </>
  )
}
