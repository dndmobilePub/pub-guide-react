import { useEffect, useRef, useState } from "react";
import styles from "./Guide.module.scss";
import { CustomInput, Field, TextInput } from "../../UI/Form";

export const CustomInputGuide = () => {
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("text");
  const [length1, setLength1] = useState(2);
  const [length2, setLength2] = useState(1);
  const [maxLength1, setMaxLength1] = useState(4);
  const [maxLength2, setMaxLength2] = useState(7);
  return (
    <>
      <h3>👀 커스텀 인풋 컴포넌트 사용방법</h3>
      <br />
      <code className={`${styles.code}`}>
        {`import { CustomInput } from "src/component/UI/Form";`}
        <br />
        <br />
        {`<Field wrap>`}
        <br />
        &nbsp;&nbsp;{`<CustomInput `}
        {` type="`}
        <input
          className={`${styles.input}`}
          value={type1}
          placeholder="password"
          onChange={(e) => {
            setType1(e.target.value);
          }}
          style={{ width: "76px" }}
        />
        {`" `}
        {` length={`}
        <input
          className={`${styles.input}`}
          type="number"
          min={0}
          value={length1}
          onChange={(e) => {
            setLength1(Number(e.target.value));
          }}
          style={{ width: "40px" }}
        />
        {`} `}
        {`maxLength={`}
        <input
          className={`${styles.input}`}
          type="number"
          min={4}
          value={maxLength1}
          onChange={(e) => {
            setMaxLength1(Number(e.target.value));
          }}
          style={{ width: "40px" }}
        />
        {`} `}
        {`/>`}
        <br />
        {`</Field>`}
        <br />
        {`<Field wrap>`}
        <br />
        &nbsp;&nbsp;{`<TextInput placeholder="생년월일 6자리" maxLength={6} noWrap />`}<br />
        &nbsp;&nbsp;{`<span className="field-txt">-</span>`}<br />
        &nbsp;&nbsp;{`<CustomInput `}
        {` type="`}
        <input
          className={`${styles.input}`}
          value={type2}
          placeholder="text"
          onChange={(e) => {
            setType2(e.target.value);
          }}
          style={{ width: "76px" }}
        />
        {`" `}
        {` length={`}
        <input
          className={`${styles.input}`}
          type="number"
          min={0}
          value={length2}
          onChange={(e) => {
            setLength2(Number(e.target.value));
          }}
          style={{ width: "40px" }}
        />
        {`} `}
        {`maxLength={`}
        <input
          className={`${styles.input}`}
          type="number"
          min={4}
          value={maxLength2}
          onChange={(e) => {
            setMaxLength2(Number(e.target.value));
          }}
          style={{ width: "40px" }}
        />
        {`} />`}
        <br/>
        {`</Field>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <Field>
          <Field wrap>
            <CustomInput
              type={type1}
              length={length1}
              maxLength={maxLength1}
            />
          </Field>
          <br/>
          <Field wrap>
            <TextInput placeholder="생년월일 6자리" maxLength={6} noWrap />
            <span className="field-txt">-</span>
            <CustomInput
              type={type2}
              length={length2}
              maxLength={maxLength2}
            />
          </Field>
        </Field>
      </div>
      <br />
    </>
  );
};
