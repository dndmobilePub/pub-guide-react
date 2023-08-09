import { useState } from "react";
import { CustomInput, Field, TextInput } from "../../../components/UI/Form"
import { Guide } from "../../../components/Common/Guide"
import styles from './index.module.scss';

export default function Inputs() {
  const [subTab, setSubTab] = useState("Field");

  return (
    <>
      <ul className={`${styles.subTab} active`}>
        <li className={`item${subTab==="Field"?' active':''}`} onClick={()=>{setSubTab("Field")}}>Field</li>
        <li className={`item${subTab==="TextInput"?' active':''}`} onClick={()=>{setSubTab("TextInput")}}>TextInput</li>
        <li className={`item${subTab==="CustomInput"?' active':''}`} onClick={()=>{setSubTab("CustomInput")}}>CustomInput</li>
      </ul>
      <Guide type={`${subTab}`} component={subTab}/>
      <hr/>
      {subTab === 'TextInput' ? (
        <>
          <h3>{subTab}</h3>
          <br/>

          <h4>{subTab} : placeholder</h4>
          <p>{`<TextInput placeholder='기본동작 INPUT' />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <TextInput placeholder="기본동작 INPUT" />
          </div>
          <br/>

          <h4>{subTab} : clear</h4>
          <p>{`<TextInput placeholder="예외 : clear btn 없음" clear={false} />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <TextInput placeholder="예외 : clear btn 없음" clear={false}/>
          </div>
          <br/>

          <h4>{subTab} : readonly & value</h4>
          <p>{`<TextInput value="readonly" readonly={true} />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <TextInput value="readonly" readonly={true} />
          </div>
          <br/>

          <h4>{subTab} : placeholder & disabled</h4>
          <p>{`<TextInput placeholder="disabled" disabled={true} />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <TextInput placeholder="disabled" disabled={true} />
          </div>
          <br/>
            
          <h4>{subTab} : type-tel (Field 포함)</h4>
          <p>{`<Field><TextInput type="tel" placeholder="0" /></Field>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Field>
              <TextInput type="tel" placeholder="0" />
            </Field>
          </div>
          <br/>

          <h4>{subTab} : alignRight (Field 포함)</h4>
          <p>{`<Field><TextInput placeholder="₩0" alignRight /></Field>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Field>
              <TextInput placeholder="₩0" alignRight />
            </Field>
          </div>
          <br/>
          
          <h4>{subTab} : type-password (Field 포함)</h4>
          <p>{`<Field><TextInput type="password" placeholder="●●●●" maxLength={4}/></Field>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Field>
              <TextInput type="password" placeholder="●●●●" maxLength={4}/>
            </Field>
          </div>
          <br/>
        </>
      ): subTab === "Field" ? (
        <>
          <h3>{subTab}</h3>
          <br/>
          <h4>{subTab} : label</h4>
          <p>{`<Field label='labelText'><TextInput /></Field>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Field label={`labelText`}>
              <TextInput/>
            </Field>
          </div>
          <br/>
          <br/>
          <h4>{subTab} : info</h4>
          <p>{`<Field info="안내성 메세지"><TextInput /></Field>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Field info="안내성 메세지">
              <TextInput/>
            </Field>
          </div>
          <br/>
          <br/>
          <h4>{subTab} : valid</h4>
          <p>{`<Field valid="입력값의 유효성이 정상입니다."><TextInput /></Field>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Field valid="입력값의 유효성이 정상입니다.">
              <TextInput/>
            </Field>
          </div>
          <br/>
          <br/>
          <h4>{subTab} : inValid</h4>
          <p>{`<Field inValid="오류체크 메세지 출력"><TextInput /></Field>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Field inValid="오류체크 메세지 출력">
              <TextInput/>
            </Field>
          </div>
        </>
      ):(
        <>
          <h3>{subTab} </h3>
          <br/>
          <h4>Field wrap + CustomInput (커스텀 패스워드 형태)</h4>
          <p>{`<Field wrap><CustomInput type="password" length={2} secureLength={2} maxLength={4}/></Field>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Field wrap>
              <CustomInput type="password" length={2} secureLength={2} maxLength={4}/>
            </Field>
          </div>
          <br/>
          <br/>
          <h4>Field wrap + CustomInput (주민등록번호 인풋 형태)</h4>
          <p>{`<Field wrap><TextInput placeholder="생년월일 6자리" maxLength={6} noWrap/><span className="field-txt">-</span><CustomInput type="text" length={1} secureLength={6} maxLength={7}/></Field>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Field wrap>
              <TextInput placeholder="생년월일 6자리" maxLength={6} noWrap/>
              <span className="field-txt">-</span>
              <CustomInput type="text" length={1} secureLength={6} maxLength={7}/>
            </Field>
          </div>
        </>
      )}
    </>
  )
}
