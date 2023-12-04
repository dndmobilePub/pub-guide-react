<<<<<<< Updated upstream:src/pages/component/radioChk/index.js
import { useState } from "react";
import {
  CheckBox,
  CustomInput,
  Field,
  Radio,
  RadioBox,
  TextInput,
} from "../../../components/UI/Form";
import { Options } from "../../../components/Common/Options";
import styles from "./index.module.scss";
import { SelectBox } from "../../../components/UI/SelectBox";

export default function RadioChk() {
  const [subTab, setSubTab] = useState("CheckBox");
  return (
    <div id="cp-wrap">
      <ul className={`${styles.subTab} active`}>
        <li
          className="item"
          onClick={() => {
            setSubTab("CheckBox");
          }}
          style={{fontWeight:`${subTab === "CheckBox" ? " bold" : "normal"}`}}
        >
          CheckBox
        </li>
        <li
          className="item"
          onClick={() => {
            setSubTab("RadioBox");
          }}
          style={{fontWeight:`${subTab === "RadioBox" ? " bold" : "normal"}`}}
        >
          RadioBox
        </li>
        <li
          className="item"
          onClick={() => {
            setSubTab("Radio");
          }}
          style={{fontWeight:`${subTab === "Radio" ? " bold" : "normal"}`}}
        >
          Radio
        </li>
        <li
          className="item"
          onClick={() => {
            setSubTab("SelectBox");
          }}
          style={{fontWeight:`${subTab === "SelectBox" ? " bold" : "normal"}`}}
        >
          SelectBox
        </li>
      </ul>
      <Options type={`${subTab}`} component={subTab} />
      <section className="cp-content">
        {subTab === "CheckBox" ? (
          <>
            <h2 className="cp-tit dep02">Checkbox</h2>
            <br />
            <Field group type="circle" label="circle">
              <CheckBox label="미체크2" />
              <CheckBox checked={true} label="체크" />
              <CheckBox label="readonly" readOnly />
              <CheckBox label="disabled" disabled />
            </Field>
            <hr className="hr divice" />
            <Field group type="c-line" label="circleLine">
              <CheckBox label="미체크" />
              <CheckBox checked={true} label="체크" />
              <CheckBox label="readonly" readOnly />
              <CheckBox label="disabled" disabled />
            </Field>
            <hr className="hr divice" />
            <Field group type="square" label="square">
              <CheckBox label="미체크" />
              <CheckBox checked={true} label="체크" />
              <CheckBox label="readonly" readOnly />
              <CheckBox label="disabled" disabled />
            </Field>
            <hr className="hr divice" />
            <Field group type="s-line" label="squareLine">
              <CheckBox label="미체크" />
              <CheckBox checked={true} label="체크" />
              <CheckBox label="readonly" readOnly />
              <CheckBox label="disabled" disabled />
            </Field>
            <hr className="hr divice" />
            <Field group label="switch">
              <CheckBox switchType="switch" />
              <CheckBox switchType="switch-text" />
              <CheckBox switchType="switch-lg" />
            </Field>
          </>
        ) : subTab === "Radio" || subTab === "RadioBox" ? (
          <>
            <h2 className="cp-tit dep02">Radio</h2>
            <br />
              <Field group>
                <RadioBox name="basicRadio">
                  <Radio label="미체크" />
                  <Radio label="체크" defaultChecked />
                  <Radio label="readonly" readOnly />
                  <Radio label="disabled" disabled />
                </RadioBox>
              </Field>
              <br />
              <Field group type="box">
                <RadioBox name="optBox" type="box">
                  <Radio value="1" label="옵션1" />
                  <Radio value="2" label="옵션2" />
                  <Radio value="3" label="옵션3" />
                </RadioBox>
              </Field>
              <br />
              <Field group type="boxChk">
                <RadioBox name="optBox2" type="boxChk">
                  <Radio value="1" label="옵션1" />
                  <Radio value="2" label="옵션2" />
                  <Radio value="3" label="옵션3" />
                </RadioBox>
              </Field>
          </>
        ) : (
          <div>
            <h2 className="cp-tit dep02">SELECT: INPUT MIX</h2>
            <br />
            <div className={`${styles.box}`}>
              <Field info="안내성 메세지" label="이메일" wrap>
                <TextInput type="tel" placeholder="메일아이디" maxLength={10} noWrap/>
                <span className="field-txt">@</span>
                <SelectBox
                  list={[
                    "선택해주세요",
                    "naver.com",
                    "daum.net",
                    "gmail.com",
                  ]}
                />
              </Field>
            </div>
            <br />

            <h2 className="cp-tit dep02">SELECT: UI select</h2>
            <br />
            <div className={`${styles.box}`}>
              <Field label="휴대전화번호" wrap>
                <SelectBox
                  type="custom"
                  selectTitle="통신사를 선택해주세요"
                  placeholder="휴대전화 앞자리"
                  list={["선택", "SKT", "KT", "LG U+", "알뜰폰"]}
                />
              </Field>
            </div>
            <br />
          </div>
        )}
      </section>
    </div>
  );
}
=======
import { useState } from "react";
import { CheckBox, CustomInput, Field, Radio, RadioBox } from "../../../components/UI/Form";
import { Guide } from "../../../components/Common/Guide";
import styles from "./index.module.scss";
import { SelectBox } from "../../../components/UI/SelectBox";

export default function RadioChk() {
  const [subTab, setSubTab] = useState("CheckBox");
  return (
    <div id="cp-wrap">
      <ul className={`${styles.subTab} active`}>
        <li
          className={`item${subTab === "CheckBox" ? " active" : ""}`}
          onClick={() => {
            setSubTab("CheckBox");
          }}
        >
          CheckBox
        </li>
        <li
          className={`item${subTab === "RadioBox" ? " active" : ""}`}
          onClick={() => {
            setSubTab("RadioBox");
          }}
        >
          RadioBox
        </li>
        <li
          className={`item${subTab === "Radio" ? " active" : ""}`}
          onClick={() => {
            setSubTab("Radio");
          }}
        >
          Radio
        </li>
        <li
          className={`item${subTab === "SelectBox" ? " active" : ""}`}
          onClick={() => {
            setSubTab("SelectBox");
          }}
        >
          SelectBox
        </li>
      </ul>
      <Guide type={`${subTab}`} component={subTab} />
      <section className="cp-content">
      {subTab === "CheckBox" ? (
        <>
          <h2 className="cp-tit dep02">Checkbox</h2>
          <br />
          <div className={`${styles.box}`}>
            <Field group type="circle" label="circle">
              <CheckBox type="circle" label="미체크2" />
              <CheckBox type="circle" checked={true} label="체크" />
              <CheckBox type="circle" label="readonly" readOnly />
              <CheckBox type="circle" label="disabled" disabled />
            </Field>
          </div>
          <hr className="hr divice"/>
          <div className={`${styles.box}`}>
            <Field group type="c-line" label="circleLine">
              <CheckBox type="c-line" label="미체크" />
              <CheckBox type="c-line" checked={true} label="체크" />
              <CheckBox type="c-line" label="readonly" readOnly />
              <CheckBox type="c-line" label="disabled" disabled />
            </Field>
          </div>
          <hr className="hr divice"/>
          <div className={`${styles.box}`}>
            <Field group type="square" label="square">
              <CheckBox type="square" label="미체크" />
              <CheckBox type="square" checked={true} label="체크" />
              <CheckBox type="square" label="readonly" readOnly />
              <CheckBox type="square" label="disabled" disabled />
            </Field>
          </div>
          <hr className="hr divice"/>
          <div className={`${styles.box}`}>
            <Field group type="s-line" label="squareLine">
              <CheckBox type="s-line" label="미체크" />
              <CheckBox type="s-line" checked={true} label="체크" />
              <CheckBox type="s-line" label="readonly" readOnly />
              <CheckBox type="s-line" label="disabled" disabled />
            </Field>
          </div>
          <hr className="hr divice"/>
          <div className={`${styles.box}`}>
            <Field group label="switch">
              <CheckBox type="switch" />
              <CheckBox type="switch-text" />
              <CheckBox type="switch-lg" />
            </Field>
          </div>
        </>
      ) : (subTab === "Radio" || subTab === "RadioBox") ? (
        <>
          <h2 className="cp-tit dep02">Radio</h2>


          <h4>{subTab} : type=&#34;circle&#34;</h4>
          <p>{`<RadioBox name="basicRadio">...<Radio label="미체크"/>...</RadioBox>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field group>
              <RadioBox name="basicRadio">
                <Radio label="미체크" />
                <Radio label="체크" defaultChecked />
                <Radio label="readonly" readOnly />
                <Radio label="disabled" disabled />
              </RadioBox>
            </Field>
          </div>
          <br />

          <h4>{subTab} : type=&#34;box&#34;</h4>
          <p>{`<RadioBox name="boxRadio" type="box">...<Radio label="옵션1"/>...</RadioBox>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field group type="box">
              <RadioBox name="optBox" type="box">
                <Radio value="1" label="옵션1" />
                <Radio value="2" label="옵션2" />
                <Radio value="3" label="옵션3" />
              </RadioBox>
            </Field>
          </div>
          <br />

          <h4>{subTab} : type=&#34;boxChk&#34;</h4>
          <p>{`<RadioBox name="boxChkRadio" type="boxChk">...<Radio label="옵션1"/>...</RadioBox>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field group type="boxChk">
              <RadioBox name="optBox2" type="boxChk">
                <Radio value="1" label="옵션1" />
                <Radio value="2" label="옵션2" />
                <Radio value="3" label="옵션3" />
              </RadioBox>
            </Field>
          </div>
          <br />
        </>
      ) : (
        <div>
          <h2 className="cp-tit dep02">SELECT: INPUT MIX</h2>

          <h4>{subTab} : type=&#34;mix&#34;</h4>
          <p>{`<SelectBox type="mix"/>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field info="안내성 메세지" label="이메일">
              <div className="field-outline">
                <div className="field-input grow _input">
                  <input type="tel" className="_format _number" placeholder="메일아이디" maxLength="10"/>
                </div>
                <span className="field-txt">@</span>
                <SelectBox list={['선택해주세요','naver.com','daum.net','gmail.com']}/>
              </div>
            </Field>
          </div>
          <br />

          <h2 className="cp-tit dep02">SELECT: UI select</h2>
          <h4>{subTab} : type=&#34;ui&#34;</h4>
          <p>{`<SelectBox type="ui"/>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <Field label="휴대전화번호">
              <div className="field-outline">
                <SelectBox type="custom" selectTitle="통신사를 선택해주세요" list={['선택','SKT','KT','LG U+','알뜰폰']}/>
              </div>
            </Field>
          </div>
          <br />
        </div>
      )}
      </section>
    </div>
  );
}
>>>>>>> Stashed changes:src/pages/component/radioChk/index.jsx
