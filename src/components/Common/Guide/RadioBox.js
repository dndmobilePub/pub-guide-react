import { useState } from "react";
import styles from "./Guide.module.scss";
import { Field, Radio, RadioBox } from "../../UI/Form";

export const RadioGuide = () => {
  const [fieldType, setFieldType] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [label, setLabel] = useState("라벨 텍스트");
  const [defaultChecked, setDefaultChecked] = useState("");
  const [readOnly, setReadOnly] = useState("");
  const [disabled, setDisabled] = useState("");

  return (
    <>
      <h3>👀 라디오박스/라디오 컴포넌트 사용방법</h3>
      <br />
      <code className={`${styles.code}`}>
        {`import { RadioBox, Radio } from "src/component/UI/Form";`}
        <br />
        <br />
        {`<Field group type="`}
        <input
          className={`${styles.input}`}
          value={fieldType}
          placeholder="- / box / boxChk"
          onChange={(e) => {
            setFieldType(e.target.value);
          }}
          style={{ width: "115px" }}
        />
        {`">`}
        <br />
        &nbsp;&nbsp;{`<RadioBox `}
        {` name="`}
        <input
          className={`${styles.input}`}
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{ width: "50px" }}
        />
        {`" `}
        {` type="`}
        <input
          className={`${styles.input}`}
          value={type}
          placeholder="- / box / boxChk"
          onChange={(e) => {
            if (e.target.value < 4 && e.target.value >= 0)
            setType(e.target.value);
          }}
          style={{ width: "115px" }}
        />
        {`" `}
        {`>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`<Radio label="`}
        <input
          className={`${styles.input}`}
          value={label}
          placeholder="라벨 텍스트"
          onChange={(e) => {
            setLabel(e.target.value);
          }}
          style={{ width: "80px" }}
        />
        <input
          className={`${styles.input}`}
          value={defaultChecked}
          placeholder="defaultChecked"
          onChange={(e) => {
            setDefaultChecked(e.target.value);
          }}
          style={{ width: "115px" }}
        />
        <input
          className={`${styles.input}`}
          value={readOnly}
          placeholder="readOnly"
          onChange={(e) => {
            setReadOnly(e.target.value);
          }}
          style={{ width: "70px" }}
        />
        <input
          className={`${styles.input}`}
          value={disabled}
          placeholder="disabled"
          onChange={(e) => {
            setDisabled(e.target.value);
          }}
          style={{ width: "70px" }}
        />
        {`/>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`<Radio label="체크" defaultChecked />`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`<Radio label="readonly" readOnly />`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`<Radio label="disabled" disabled />`}
        <br />
        &nbsp;&nbsp;{`</RadioBox>`}
        <br />
        {`</Field>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <Field group type={fieldType}>
          <RadioBox name={name} type={type}>
            <Radio label={label} defaultChecked={defaultChecked === "defaultChecked" ? true :false} readOnly={readOnly === "readOnly" ? true : false} disabled={disabled === "disabled" ? true : false}/>
            <Radio label="체크" defaultChecked />
            <Radio label="readonly" readOnly />
            <Radio label="disabled" disabled />
          </RadioBox>
        </Field>
      </div>
      <br />
    </>
  );
};
