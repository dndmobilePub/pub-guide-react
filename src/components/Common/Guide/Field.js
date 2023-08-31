import styles from "./Guide.module.scss";
import { useState } from "react";
import { Field, TextInput } from "../../UI/Form";

export const FieldGuide = () => {
  const [label, setLabel] = useState("Label Text");
  const [info, setInfo] = useState("안내성 메시지");
  const [valid, setValid] = useState({
    status: 1,
    validMsg:"입력값의 유효성이 정상입니다.",
    inValidMsg:"오류체크 메세지 출력",
});

  const updatedValidStatus = (status) => {
    const copyValid = {...valid};
    copyValid.status = status;
    setValid(copyValid);
  };

  const updatedValidMsg = (msg) => {
    const copyValid = {...valid};
    copyValid.validMsg = msg;
    setValid(copyValid);
  };

  const updatedInValidMsg = (msg) => {
    const copyValid = {...valid};
    copyValid.inValidMsg = msg;
    setValid(copyValid);
  };

  return (
    <>
      <h3>👀 필드 컴포넌트 사용방법</h3>
      <br />
      <code className={`${styles.code}`}>
        {`import { Field } from "src/component/UI/Form";`}
        <br />
        <br />
        {`<Field `}
        {` label="`}
        <input
          className={`${styles.input}`}
          value={label}
          placeholder="label text"
          onChange={(e) => {
            setLabel(e.target.value);
          }}
          style={{ width: "80px" }}
        />
        {`" `}
        {` info="`}
        <input
          className={`${styles.input}`}
          value={info}
          placeholder="안내성 메시지"
          onChange={(e) => {
            setInfo(e.target.value);
          }}
          style={{ width: "93px" }}
        />
        {`" `}
        {` valid={[`}
        <input
          className={`${styles.input}`}
          value={valid.status}
          type="number"
          min={0}
          max={2}
          maxLength={1}
          placeholder="0"
          onChange={(e) => {
            updatedValidStatus(Number(e.target.value));
          }}
          style={{ width: "40px" }}
        />
        {`,`}
        <input
          className={`${styles.input}`}
          value={valid.validMsg}
          placeholder="입력값의 유효성이 정상입니다."
          onChange={(e) => {
            updatedValidMsg(e.target.value);
          }}
          style={{ width: "200px" }}
        />
        {`,`}
        <input
          className={`${styles.input}`}
          value={valid.inValidMsg}
          placeholder="오류체크 메세지 출력"
          onChange={(e) => {
            updatedInValidMsg(e.target.value);
          }}
          style={{ width: "160px" }}
        />
        {`]} `}
        {`>`}
        <br />
        &nbsp;&nbsp;
        {`<TextInput />`}
        <br />
        {`</Field>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <Field label={label} info={info} valid={valid}>
          <TextInput />
        </Field>
      </div>
      <br />
    </>
  );
};
