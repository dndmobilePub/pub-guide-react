import { useState } from "react";
import { Title } from "../../UI/Text";
import styles from "./Guide.module.scss";
import ReactHtmlParser from "react-html-parser";

export const TitleGuide = () => {
  const [text, setText] = useState("타이틀입니다");
  const [depth, setDepth] = useState(1);
  const [type, setType] = useState(1);
  const [uline, setUline] = useState("uline");
  const [sub, setSub] = useState("서브 타이틀입니다");
  const [split, setSplit] = useState("split");
  const [children, setChildren] = useState(
    "<p class='headcopy'>JSX 엘리먼트 or 컴포넌트</p>"
  );

  return (
    <>
      <h3>👀 타이틀 컴포넌트 사용방법</h3>
      <br />
      <code className={`${styles.code}`}>
        {`import { Title } from "src/component/UI/Text";`}
        <br />
        <br />
        {`<Title `}
        {` text="`}
        <input
          className={`${styles.input}`}
          value={text}
          placeholder="타이틀입니다"
          onChange={(e) => {
            setText(e.target.value);
          }}
          style={{ width: "93px" }}
        />
        {`" `}
        {` sub="`}
        <input
          className={`${styles.input}`}
          value={sub}
          placeholder="서브 타이틀입니다"
          onChange={(e) => {
            setSub(e.target.value);
          }}
          style={{ width: "123px" }}
        />
        {`" `}
        {` depth={`}
        <input
          className={`${styles.input}`}
          value={depth}
          type="number"
          min={1}
          max={6}
          minLength={1}
          maxLength={1}
          onChange={(e) => {
            if (e.target.value < 7 && e.target.value > 0)
              setDepth(Number(e.target.value));
          }}
          style={{ width: "40px" }}
        />
        {`} `}
        {` type={`}
        <input
          className={`${styles.input}`}
          value={type}
          type={"number"}
          min={1}
          max={2}
          minLength={1}
          maxLength={1}
          onChange={(e) => {
            if (e.target.value < 3 && e.target.value > 0)
              setType(Number(e.target.value));
          }}
          style={{ width: "40px" }}
        />
        {`} `}
        <input
          className={`${styles.input}`}
          value={uline}
          placeholder="uline"
          maxLength={5}
          onChange={(e) => {
            setUline(e.target.value);
          }}
          style={{ width: "43px" }}
        />
        
        <input
          className={`${styles.input}`}
          value={split}
          maxLength={5}
          placeholder="split"
          onChange={(e) => {
            setSplit(e.target.value);
          }}
          style={{ width: "63px" }}
        />
        {`>`}<br/>
        &nbsp;&nbsp;<input
          className={`${styles.input}`}
          value={children}
          placeholder="JSX 엘리먼트 or 컴포넌트 (생략가능)"
          onChange={(e) => {
            setChildren(e.target.value);
          }}
          style={{ width: "340px" }}
        /><br/>
        {`</Title>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        {text ? (
          <Title
            text={text}
            sub={sub}
            depth={depth}
            type={type}
            uline={uline === "uline" ? true : false}
            split={split === "split" ? true : false}
          >
            {ReactHtmlParser(children)}
        </Title>
        ) : (
          "text 속성을 입력해주세요!"
        )}
      </div>
      <br />
    </>
  );
};
