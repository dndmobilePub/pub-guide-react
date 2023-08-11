import { useState } from "react";
import { CheckBox, Radio, RadioBox } from "../../../components/UI/Form";
import { Guide } from "../../../components/Common/Guide";
import styles from "./index.module.scss";

export default function RadioChk() {
  const [subTab, setSubTab] = useState("CheckBox");

  return (
    <>
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
      </ul>
      <Guide type={`${subTab}`} component={subTab} />
      <hr />
      {subTab === "CheckBox" ? (
        <>
          <h3>{subTab}</h3>
          <br />

          <h4>{subTab} : type(Circle)</h4>
          <p>{`<CheckBox type="circle" />`}</p>
          <br />
          <div className={`${styles.box}`}>
            <CheckBox type="circle" label="미체크" />
            <CheckBox type="circle" checked={true} label="체크" />
            <CheckBox type="circle" label="readonly" readOnly />
            <CheckBox type="circle" label="disabled" disabled />
          </div>
          <br />

          <h4>{subTab} : type(Circle line)</h4>
          <p>{`<CheckBox type="circleLine" />`}</p>
          <br />
          <div className={`${styles.box}`}>
            <CheckBox type="circleLine" label="미체크" />
            <CheckBox type="circleLine" checked={true} label="체크" />
            <CheckBox type="circleLine" label="readonly" readOnly />
            <CheckBox type="circleLine" label="disabled" disabled />
          </div>
          <br />

          <h4>{subTab} : type(Square)</h4>
          <p>{`<CheckBox type="square" />`}</p>
          <br />
          <div className={`${styles.box}`}>
            <CheckBox type="square" label="미체크" />
            <CheckBox type="square" checked={true} label="체크" />
            <CheckBox type="square" label="readonly" readOnly />
            <CheckBox type="square" label="disabled" disabled />
          </div>
          <br />

          <h4>{subTab} : type(Square line)</h4>
          <p>{`<CheckBox type="squareLine" />`}</p>
          <br />
          <div className={`${styles.box}`}>
            <CheckBox type="squareLine" label="미체크" />
            <CheckBox type="squareLine" checked={true} label="체크" />
            <CheckBox type="squareLine" label="readonly" readOnly />
            <CheckBox type="squareLine" label="disabled" disabled />
          </div>
          <br />

          <h4>{subTab} : type(Switch)</h4>
          <p>{`<CheckBox type="switch" />`}</p>
          <br />
          <div className={`${styles.box}`}>
            <CheckBox type="switch" />
            <CheckBox type="switch-text" />
            <CheckBox type="switch-lg" />
          </div>
          <br />
        </>
      ) : (
        <>
          <h3>{subTab}</h3>
          <br />

          <h4>{subTab} : type=&#34;circle&#34;</h4>
          <p>{`<RadioBox name="basicRadio">...<Radio label="미체크"/>...</RadioBox>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <RadioBox name="basicRadio">
              <Radio label="미체크" />
              <Radio label="체크" defaultChecked />
              <Radio label="readonly" readOnly />
              <Radio label="disabled" disabled />
            </RadioBox>
          </div>
          <br />

          <h4>{subTab} : type=&#34;box&#34;</h4>
          <p>{`<RadioBox name="boxRadio" type="box">...<Radio label="옵션1"/>...</RadioBox>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <RadioBox type="box" name="optBox">
              <Radio value="1" label="옵션1" />
              <Radio value="2" label="옵션2" />
              <Radio value="3" label="옵션3" />
            </RadioBox>
          </div>
          <br />

          <h4>{subTab} : type=&#34;boxChk&#34;</h4>
          <p>{`<RadioBox name="boxChkRadio" type="boxChk">...<Radio label="옵션1"/>...</RadioBox>`}</p>
          <br />
          <div className={`${styles.box}`}>
            <RadioBox type="boxChk" name="optBox2">
              <Radio value="1" label="옵션1" />
              <Radio value="2" label="옵션2" />
              <Radio value="3" label="옵션3" />
            </RadioBox>
          </div>
          <br />
        </>
      )}
    </>
  );
}