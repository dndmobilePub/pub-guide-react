import { useState } from "react";
import { Text } from "../../UI/Text";
import styles from "./Guide.module.scss";

export const TextGuide = () => {
  const [lang, setLang] = useState("");
  const [ell, setEll] = useState(0);
  const [children, setChildren] = useState(
    "아무 텍스트나 입력해주세요"
  );

  return (
    <>
      <h3>👀 텍스트 컴포넌트 사용방법</h3>
      <br />
      <code className={`${styles.code}`}>
        {`import { Text } from "src/component/UI/Text";`}
        <br />
        <br />
        {`<Text `}
        {` lang="`}
        <input
          className={`${styles.input}`}
          value={lang}
          placeholder="ko"
          onChange={(e) => {
            setLang(e.target.value);
          }}
          style={{ width: "27px" }}
        />
        {`" `}
        {` ell={`}
        <input
          className={`${styles.input}`}
          value={ell}
          type="number"
          min={0}
          max={3}
          minLength={1}
          maxLength={1}
          onChange={(e) => {
            if (e.target.value < 4 && e.target.value >= 0)
              setEll(Number(e.target.value));
          }}
          style={{ width: "40px" }}
        />
        {`} `}
        {`>`}<br/>
        &nbsp;&nbsp;<input
          className={`${styles.input}`}
          value={children}
          placeholder="텍스트를 입력해주세요!"
          onChange={(e) => {
            setChildren(e.target.value);
          }}
          style={{ width: "340px" }}
        /><br/>
        {`</Text>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`} style={{width: '320px'}}>
        {children ? (
          <Text ell={ell} lang={lang}>
            {children}
          </Text>
        ) : (
          "텍스트를 입력해주세요!"
        )}
      </div>
      <br />
    </>
  );
};
