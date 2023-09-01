import { useEffect, useRef, useState } from "react";
import styles from "./Guide.module.scss";
import { Field, TextInput } from "../../UI/Form";

export const TextInputGuide = () => {
  const [type, setType] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [initText, setInitText] = useState("");
  const [readonly, setReadonly] = useState("");
  const [disabled, setDisabled] = useState("");
  const [maxLength, setMaxLength] = useState();
  const [clear, setClear] = useState("");

  return (
    <>
      <h3>👀 인풋 컴포넌트 사용방법</h3>
      <br />
      <code className={`${styles.code}`}>
        {`import { TextInput } from "src/component/UI/Form";`}
        <br />
        <br />
        {`<Field>`}
        <br />
        &nbsp;&nbsp;{`<TextInput `}
        {` type="`}
        <input
          className={`${styles.input}`}
          value={type}
          placeholder="text"
          onChange={(e) => {
            setType(e.target.value);
          }}
          style={{ width: "60px" }}
        />
        {`" `}
        {` placeholder="`}
        <input
          className={`${styles.input}`}
          value={placeholder}
          placeholder="기본동작 INPUT"
          onChange={(e) => {
            setPlaceholder(e.target.value);
          }}
          style={{ width: "110px" }}
        />
        {`" `}
        {` initText="`}
        <input
          className={`${styles.input}`}
          value={initText}
          placeholder="기본 텍스트"
          onChange={(e) => {
            setInitText(e.target.value);
          }}
          style={{ width: "80px" }}
        />
        {`" `}
        {`maxLength={`}
        <input
          className={`${styles.input}`}
          value={maxLength}
          type="number"
          min={0}
          max={300}
          placeholder="300"
          onChange={(e) => {
            setMaxLength(Number(e.target.value));
          }}
          style={{ width: "50px" }}
        />
        {`} `}
        {`clear={`}
        <input
          className={`${styles.input}`}
          value={clear}
          placeholder="true"
          onChange={(e) => {
            setClear(e.target.value);
          }}
          style={{ width: "50px" }}
        />
        {`} `}
        <input
          className={`${styles.input}`}
          value={readonly}
          placeholder="readOnly"
          onChange={(e) => {
            setReadonly(e.target.value);
          }}
          style={{ width: "72px" }}
        />
        <input
          className={`${styles.input}`}
          value={disabled}
          placeholder="disabled"
          onChange={(e) => {
            setDisabled(e.target.value);
          }}
          style={{ width: "72px" }}
        />
        {`" `}
        {`/>`}
        <br />
        {`</Field>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <Field>
           <TextInput
            placeholder={placeholder}
            initText={initText}
            maxLength={maxLength}
            readonly={readonly === "readonly" ? true : false}
            disabled={disabled === "disabled" ? true : false}
            clear={clear === "false" ? false : true}
          /> 
        </Field>
      </div>
      <br />
    </>
  );
};
