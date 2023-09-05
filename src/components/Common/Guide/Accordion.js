import { useState } from "react";
import styles from "./Guide.module.scss";
import { Accordion, AccordionWrap } from "../../UI/Accordion";
import { Field } from "../../UI/Form";

export const AccordionGuide = () => {
  const [btnStyle, setBtnStyle] = useState(1);
  const [scroll, setScroll] = useState(false);
/*   const [chkBox, setChkBox] = useState(false);
  const [chkStatus, setChkStatus] = useState(false); */
  const [onlyBtn, setOnlyBtn] = useState(false);
  const [activeColor, setActiveColor] = useState(false);
  const [defaultView, setDefaultView] = useState("on");
  const [btnNone, setBtnNone] = useState(false);
  return (
    <>
      <h3>👀 아코디언 컴포넌트 사용방법</h3>
      <br />

      <code className={`${styles.code}`}>
        {`import { Accordion, AccordionWrap } from "src/component/UI/Accordion";`}
        <br />
        {`<Field>`}
        <br />
        &nbsp;&nbsp;{`<AccordionWrap>`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`<Accordion`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`title="타이틀"`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`content="컨텐츠"`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`scroll={`}
        <span
          onClick={() => {
            setScroll(!scroll);
          }}
        >
          {scroll === true ? "true" : "false"}
        </span>
        {`}`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`btnStyle={`}
        <span
          onClick={() => {
            setBtnStyle(btnStyle === 1 ? 2 : 1);
          }}
        >
          {btnStyle}
        </span>
        {`}`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`onlyBtn={`}
        <span
          onClick={() => {
            setOnlyBtn(!onlyBtn);
          }}
        >
          {onlyBtn === true ? "true" : "false"}
        </span>
        {`}`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`activeColor={`}
        <span
          onClick={() => {
            setActiveColor(!activeColor);
          }}
        >
          {activeColor === true ? "true" : "false"}
        </span>
        {`}`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`defaultView="`}
        <span
          onClick={() => {
            setDefaultView(defaultView === "off" ? "on" : "off");
          }}
        >
          {defaultView}
        </span>
        {`"`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`btnNone={`}
        <span
          onClick={() => {
            setBtnNone(!btnNone);
          }}
        >
          {btnNone === true ? "true" : "false"}
        </span>
        {`}`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`chkStatus={ false }`}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`chkBox={ false }`}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`>`}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`<AccordionWrap>`}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Accordion title="2depth타이틀" content="2depth컨텐츠" />`}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`</AccordionWrap>`}<br />
        &nbsp;&nbsp;{`</AccordionWrap>`}
        <br />
        {`</Field>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <Field>
          <AccordionWrap>
            <Accordion
              title="타이틀"
              content="컨텐츠"
              scroll={scroll}
              btnStyle={btnStyle}
              onlyBtn={onlyBtn}
              activeColor={activeColor}
              defaultView={defaultView}
              btnNone={btnNone}
            >
              <AccordionWrap>
                <Accordion title="2depth타이틀" content="2depth컨텐츠" />
              </AccordionWrap>
            </Accordion>
          </AccordionWrap>
        </Field>
      </div>
      <br />
    </>
  );
};
