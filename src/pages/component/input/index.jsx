<<<<<<< Updated upstream:src/pages/component/input/index.js
import { useState } from "react";
import { CustomInput, Field, TextInput } from "../../../components/UI/Form";
import { Options } from "../../../components/Common/Options";
import styles from "./index.module.scss";

export default function Inputs() {
  const [subTab, setSubTab] = useState("Field");
  const [activeReadOnly, setActiveReadOnly] = useState(true);
  const checkLength = () => {
    const value1 = document.querySelector(`#mobileNum1`).value;
    const value2 = document.querySelector(`#mobileNum2`).value;
    const value3 = document.querySelector(`#mobileNum3`).value;
    if (!value1 && !value2 && !value3) {
      setActiveReadOnly(true);
    } else {
      setActiveReadOnly(false);
    }
  };
  return (
    <div id="cp-wrap">
      <ul className={`${styles.subTab}`}>
        <li
          className="item"
          onClick={() => {
            setSubTab("Field");
          }}
          style={{ fontWeight: subTab === "Field" ? "bold" : "normal" }}
        >
          Field
        </li>
        <li
          className="item"
          onClick={() => {
            setSubTab("TextInput");
          }}
          style={{ fontWeight: subTab === "TextInput" ? "bold" : "normal" }}
        >
          TextInput
        </li>
        <li
          className="item"
          onClick={() => {
            setSubTab("CustomInput");
          }}
          style={{ fontWeight: subTab === "CustomInput" ? "bold" : "normal" }}
        >
          CustomInput
        </li>
      </ul>
      <Options type={`${subTab}`} component={subTab} />
      <h2 className="cp-tit dep02">{subTab}</h2>
      <br />
      {subTab === "Field" ? (
        <>
          <Field label={`labelText`}>
            <TextInput />
          </Field>
          <hr />
          <Field info="안내성 메세지">
            <TextInput />
          </Field>
          <hr />
          <Field
            valid={{
              status: 1,
              validMsg: "입력값의 유효성이 정상입니다.",
              inValidMsg: "",
            }}
          >
            <TextInput />
          </Field>
          <hr />
          <Field
            valid={{
              status: 2,
              validMsg: "",
              inValidMsg: "오류체크 메세지 출력",
            }}
          >
            <TextInput />
          </Field>
        </>
      ) : subTab === "TextInput" ? (
        <>
          <Field>
            <TextInput placeholder="기본동작 INPUT" initText="바보2" />
          </Field>
          <hr />
          <Field>
            <TextInput placeholder="예외 : clear btn 없음" clear={false} />
          </Field>
          <hr />
          <Field>
            <TextInput initText={"readonly!"} readonly={true} />
          </Field>
          <hr />
          <Field>
            <TextInput placeholder="disabled" disabled={true} />
          </Field>
          <hr />
          <Field>
            <TextInput type="tel" placeholder="0" />
          </Field>
          <hr />
          <Field>
            <TextInput placeholder="₩0" alignRight />
          </Field>
          <hr />
          <Field>
            <TextInput type="password" placeholder="●●●●" maxLength={4} />
          </Field>

          <br />
          <h2 className="cp-tit dep02">PLACEHODER TYPE</h2>
          <br />

          <Field
            valid={{
              status: 2,
              validMsg: "성공",
              inValidMsg: "오류체크 메세지 출력",
            }}
            className="_label"
          >
            <TextInput
              placeholder="기본동작 INPUT"
              label="기본INPUT"
              id="label1"
            />
          </Field>
          <hr />
          <Field
            type="tel"
            className="_label"
            wrap
            labelFor={["mobileNum1", "휴대폰번호 입력"]}
          >
            <TextInput
              placeholder="휴대전화 앞자리"
              id="mobileNum1"
              wrapperClass="_inputLen"
              maxLength={3}
              noWrap
              onBlur={() => checkLength()}
              onChange={() => checkLength()}
            />
            <span className="field-txt">-</span>
            <TextInput
              placeholder="휴대전화 중간자리"
              id="mobileNum2"
              maxLength={4}
              readonly={activeReadOnly}
              noWrap
            />
            <span className="field-txt">-</span>
            <TextInput
              placeholder="휴대전화 뒷자리"
              id="mobileNum3"
              maxLength={4}
              readonly={activeReadOnly}
              noWrap
            />
          </Field>
        </>
      ) : (
        <>
          <Field wrap>
            <CustomInput
              type="password"
              length={2}
              secureLength={2}
              maxLength={4}
            />
          </Field>
          <hr />
          <Field wrap>
            <TextInput placeholder="생년월일 6자리" maxLength={6} noWrap />
            <span className="field-txt">-</span>
            <CustomInput
              type="text"
              length={1}
              secureLength={6}
              maxLength={7}
            />
          </Field>
        </>
      )}
    </div>
  );
}
=======
import { useState } from "react";
import { CustomInput, Field, TextInput } from "../../../components/UI/Form";
import { Guide } from "../../../components/Common/Guide";
import styles from "./index.module.scss";

export default function Inputs() {
  const [subTab, setSubTab] = useState("Field");

  return (
    <div id="cp-wrap">
      <ul className={`${styles.subTab} active`}>
        <li
          className={`item${subTab === "Field" ? " active" : ""}`}
          onClick={() => {
            setSubTab("Field");
          }}
        >
          Field
        </li>
        <li
          className={`item${subTab === "TextInput" ? " active" : ""}`}
          onClick={() => {
            setSubTab("TextInput");
          }}
        >
          TextInput
        </li>
        <li
          className={`item${subTab === "CustomInput" ? " active" : ""}`}
          onClick={() => {
            setSubTab("CustomInput");
          }}
        >
          CustomInput
        </li>
      </ul>
      <Guide type={`${subTab}`} component={subTab} />
      <hr />
      {subTab === "TextInput" ? (
        <>
          <h3>{subTab}</h3>
          <br />

          <h4>{subTab} : placeholder</h4>
          <p>{`<Field><TextInput placeholder='기본동작 INPUT' /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field>
              <TextInput placeholder="기본동작 INPUT" />
            </Field>
          </div>
          <br />

          <h4>{subTab} : clear</h4>
          <p>{`<Field><TextInput placeholder="예외 : clear btn 없음" clear={false} /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field>
              <TextInput placeholder="예외 : clear btn 없음" clear={false} />
            </Field>
          </div>
          <br />

          <h4>{subTab} : readonly & value</h4>
          <p>{`<Field><TextInput value="readonly" readonly={true} /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field>
              <TextInput value="readonly" readonly={true} />
            </Field>
          </div>
          <br />

          <h4>{subTab} : placeholder & disabled</h4>
          <p>{`<Field><TextInput placeholder="disabled" disabled={true} /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field>
              <TextInput placeholder="disabled" disabled={true} />
            </Field>
          </div>
          <br />

          <h4>{subTab} : type-tel (Field 포함)</h4>
          <p>{`<Field><TextInput type="tel" placeholder="0" /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field>
              <TextInput type="tel" placeholder="0" />
            </Field>
          </div>
          <br />

          <h4>{subTab} : alignRight (Field 포함)</h4>
          <p>{`<Field><TextInput placeholder="₩0" alignRight /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field>
              <TextInput placeholder="₩0" alignRight />
            </Field>
          </div>
          <br />

          <h4>{subTab} : type-password (Field 포함)</h4>
          <p>{`<Field><TextInput type="password" placeholder="●●●●" maxLength={4}/></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field>
              <TextInput type="password" placeholder="●●●●" maxLength={4} />
            </Field>
          </div>
          <br />
        </>
      ) : subTab === "Field" ? (
        <>
          <h3>{subTab}</h3>
          <br />
          <h4>{subTab} : label</h4>
          <p>{`<Field label='labelText'><TextInput /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field label={`labelText`}>
              <TextInput />
            </Field>
          </div>
          <br />
          <br />
          <h4>{subTab} : info</h4>
          <p>{`<Field info="안내성 메세지"><TextInput /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field info="안내성 메세지">
              <TextInput />
            </Field>
          </div>
          <br />
          <br />
          <h4>{subTab} : valid</h4>
          <p>{`<Field valid="입력값의 유효성이 정상입니다."><TextInput /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field valid="입력값의 유효성이 정상입니다.">
              <TextInput />
            </Field>
          </div>
          <br />
          <br />
          <h4>{subTab} : inValid</h4>
          <p>{`<Field inValid="오류체크 메세지 출력"><TextInput /></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field inValid="오류체크 메세지 출력">
              <TextInput />
            </Field>
          </div>
        </>
      ) : (
        <>
          <h3>{subTab} </h3>
          <br />
          <h4>Field wrap + CustomInput (커스텀 패스워드 형태)</h4>
          <p>{`<Field wrap><CustomInput type="password" length={2} secureLength={2} maxLength={4}/></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field wrap>
              <CustomInput
                type="password"
                length={2}
                secureLength={2}
                maxLength={4}
              />
            </Field>
          </div>
          <br />
          <br />
          <h4>Field wrap + CustomInput (주민등록번호 인풋 형태)</h4>
          <p>{`<Field wrap><TextInput placeholder="생년월일 6자리" maxLength={6} noWrap/><span className="field-txt">-</span><CustomInput type="text" length={1} secureLength={6} maxLength={7}/></Field>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field wrap>
              <TextInput placeholder="생년월일 6자리" maxLength={6} noWrap />
              <span className="field-txt">-</span>
              <CustomInput
                type="text"
                length={1}
                secureLength={6}
                maxLength={7}
              />
            </Field>
          </div>
        </>
      )}
    </div>
  );
}
>>>>>>> Stashed changes:src/pages/component/input/index.jsx
