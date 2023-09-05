import styles from "./Guide.module.scss";
import { useState } from "react";
import { CheckBox, Field } from "../../UI/Form";

export const CheckBoxGuide = () => {
  const [fieldType, setFieldType] = useState("");
  const [switchType, setSwitchType] = useState("");
  const [label, setLabel] = useState("Label");
  const [checked, setChecked] = useState("");
  const [readOnly, setReadOnly] = useState("");
  const [disabled, setDisabled] = useState("");

  return (
    <>
      <h3>👀 체크박스 컴포넌트 사용방법</h3>
      <br />
      <code className={`${styles.code}`}>
        {`import { CheckBox } from "src/component/UI/Form";`}
        <br />
        <br />
        {`<Field group`}
        {` type="`}
        <input
          className={`${styles.input}`}
          value={fieldType}
          placeholder="circle / c-line / square / s-line"
          onChange={(e) => {
            setFieldType(e.target.value);
          }}
          style={{ width: "220px" }}
        />
        {`" /> `}
        <br />
        &nbsp;&nbsp;{`<CheckBox `}
        {` switchType="`}
        <input
          className={`${styles.input}`}
          value={switchType}
          placeholder="switch / switch-text / switch-lg"
          onChange={(e) => {
            setSwitchType(e.target.value);
          }}
          style={{ width: "220px" }}
        />
        {`" `}
        {` label="`}
        <input
          className={`${styles.input}`}
          value={label}
          placeholder="label text"
          onChange={(e) => {
            setLabel(e.target.value);
          }}
          style={{ width: "60px" }}
        />
        {`" `}
        <input
          className={`${styles.input}`}
          value={readOnly}
          placeholder="readOnly"
          onChange={(e) => {
            setReadOnly(e.target.value);
          }}
          style={{ width: "75px" }}
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
        {` />`}
        <br />
        {`</Field>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <Field group type={fieldType}>
          <CheckBox
            switchType={switchType}
            label={label}
            checked={checked}
            readOnly={readOnly}
            disabled={disabled}
          />
        </Field>
      </div>
      <br />
    </>
  );
};
