<<<<<<< Updated upstream:src/pages/component/accordion/index.js
import { useEffect, useState } from "react";
import { Accordion, AccordionWrap } from "../../../components/UI/Accordion";
import { CheckBox, Field } from "../../../components/UI/Form";
import { accordionData } from "../../../data/accordionData";
import { Options } from "../../../components/Common/Options";

export default function Accordions() {
  const [termsChk, setTermsChk] = useState(false);
  const [termsChk1, setTermsChk1] = useState(false);
  const [termsChk2, setTermsChk2] = useState(false);
  const [termsChk3, setTermsChk3] = useState(false);

  const handleClick = () => {
    if (termsChk === true) {
      setTermsChk(false);
      setTermsChk1(false);
      setTermsChk2(false);
      setTermsChk3(false);
    } else {
      setTermsChk(true);
      setTermsChk1(true);
      setTermsChk2(true);
      setTermsChk3(true);
    }
  };

  useEffect(() => {
    if (termsChk1 === true && termsChk2 === true && termsChk3 === true) {
      setTermsChk(true);
    } else {
      setTermsChk(false);
    }
  }, [termsChk, termsChk1, termsChk2, termsChk3]);

  return (
    <>
      <div id="cp-wrap">
      <Options type={`Accordion`} component={'Accordion'} />
        <section className="cp-content">
          <h2 className="cp-tit dep02">기본형</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                {accordionData.map(({ title, content, id }) => (
                  <Accordion key={id} title={title} content={content} />
                ))}
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">스크롤탑</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                {accordionData.map(({ title, content, id }) => (
                  <Accordion
                    key={id}
                    title={title}
                    content={content}
                    scroll={true}
                  />
                ))}
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">하나만 열림, 버튼 style 02</h2>
          <div className="component">
            <Field>
              <AccordionWrap toggleOne={true}>
                {accordionData.map(({ title, content, id }) => (
                  <Accordion
                    key={id}
                    title={title}
                    content={content}
                    btnStyle={2}
                  />
                ))}
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">
            버튼만 토글 가능, 버튼 active color 변경
          </h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                {accordionData.map(({ title, content, id }) => (
                  <Accordion
                    key={id}
                    title={title}
                    content={content}
                    onlyBtn
                    activeColor
                  />
                ))}
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">제목 유형</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                <Accordion
                  title="1.제목 전체 토글"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                />
                <Accordion
                  title="2.토글 버튼 따로"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  onlyBtn
                />
                <Accordion
                  title="3.체크박스 포함 제목 토글"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  chkBox
                />
                <Accordion
                  title="4.체크박스 포함 버튼 따로"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  chkBox
                  onlyBtn
                />
                <Accordion
                  title="5.제목 토글, 더보기 버튼"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  chkBox
                  btnNone
                />
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">
            체크박스 - 동의 체크하면 닫힘, 전체동의
          </h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                <Accordion
                  title="개인정보 처리방침 약관"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  chkBox
                  defaultView="on"
                  btnNone
                />
                <Accordion
                  title="개인정보 처리방침 약관2"
                  chkBox
                  chkStatus={termsChk}
                  onClick={() => {
                    handleClick();
                  }}
                  defaultView="off"
                  btnNone
                >
                  <CheckBox
                    checked={termsChk1}
                    type="circleLine"
                    label="아코디언 내용입니다"
                    onChange={() => {
                      setTermsChk1(!termsChk1);
                    }}
                  />
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <CheckBox
                    checked={termsChk2}
                    type="circleLine"
                    label="아코디언 내용입니다"
                    onChange={() => {
                      setTermsChk2(!termsChk2);
                    }}
                  />
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <CheckBox
                    checked={termsChk3}
                    type="circleLine"
                    label="아코디언 내용입니다"
                    onChange={() => {
                      setTermsChk3(!termsChk3);
                    }}
                  />
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                </Accordion>
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">토글 안에 토글</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                <Accordion
                  title="아코디언 제목입니다"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                >
                  <AccordionWrap>
                    <Accordion
                      title="아코디언 제목입니다"
                      content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                    />
                    <Accordion
                      title="아코디언 제목입니다"
                      content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                    />
                  </AccordionWrap>
                </Accordion>
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">슬라이드업</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                <Accordion
                  title="* 알려드립니다."
                  content="<p>공지 1</p>
                  <p>공지 2</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>공지 1</p>
                  <p>공지 2</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>공지 1</p>
                  <p>공지 2</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>"
                  scroll={true}
                />
              </AccordionWrap>
            </Field>
          </div>
        </section>
      </div>
    </>
  );
}
=======
import { useEffect, useState } from "react";
import { Accordion, AccordionWrap } from "../../../components/UI/Accordion";
import { CheckBox, Field } from "../../../components/UI/Form";
import { accordionData } from "../../../data/accordionData";
import { Guide } from "../../../components/Common/Guide";

export default function Accordions() {
  const [termsChk, setTermsChk] = useState(false);
  const [termsChk1, setTermsChk1] = useState(false);
  const [termsChk2, setTermsChk2] = useState(false);
  const [termsChk3, setTermsChk3] = useState(false);

  const handleClick = () => {
    if (termsChk === true) {
      setTermsChk(false);
      setTermsChk1(false);
      setTermsChk2(false);
      setTermsChk3(false);
    } else {
      setTermsChk(true);
      setTermsChk1(true);
      setTermsChk2(true);
      setTermsChk3(true);
    }
  };

  useEffect(() => {
    if (termsChk1 === true && termsChk2 === true && termsChk3 === true) {
      setTermsChk(true);
    } else {
      setTermsChk(false);
    }
  }, [termsChk, termsChk1, termsChk2, termsChk3]);

  return (
    <>
      <div id="cp-wrap">
      <Guide type={`Accordion`} component={'Accordion'} />
        <section className="cp-content">
          <h2 className="cp-tit dep02">기본형</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                {accordionData.map(({ title, content, id }) => (
                  <Accordion key={id} title={title} content={content} />
                ))}
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">스크롤탑</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                {accordionData.map(({ title, content, id }) => (
                  <Accordion
                    key={id}
                    title={title}
                    content={content}
                    scroll={true}
                  />
                ))}
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">하나만 열림, 버튼 style 02</h2>
          <div className="component">
            <Field>
              <AccordionWrap toggleOne={true}>
                {accordionData.map(({ title, content, id }) => (
                  <Accordion
                    key={id}
                    title={title}
                    content={content}
                    btnStyle={2}
                  />
                ))}
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">
            버튼만 토글 가능, 버튼 active color 변경
          </h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                {accordionData.map(({ title, content, id }) => (
                  <Accordion
                    key={id}
                    title={title}
                    content={content}
                    onlyBtn
                    activeColor
                  />
                ))}
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">제목 유형</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                <Accordion
                  title="1.제목 전체 토글"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                />
                <Accordion
                  title="2.토글 버튼 따로"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  onlyBtn
                />
                <Accordion
                  title="3.체크박스 포함 제목 토글"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  chkBox
                />
                <Accordion
                  title="4.체크박스 포함 버튼 따로"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  chkBox
                  onlyBtn
                />
                <Accordion
                  title="5.제목 토글, 더보기 버튼"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  chkBox
                  btnNone
                />
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">
            체크박스 - 동의 체크하면 닫힘, 전체동의
          </h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                <Accordion
                  title="개인정보 처리방침 약관"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                  chkBox
                  defaultView="on"
                  btnNone
                />
                <Accordion
                  title="개인정보 처리방침 약관2"
                  chkBox
                  chkStatus={termsChk}
                  onClick={() => {
                    handleClick();
                  }}
                  defaultView="off"
                  btnNone
                >
                  <CheckBox
                    checked={termsChk1}
                    type="circleLine"
                    label="아코디언 내용입니다"
                    onChange={() => {
                      setTermsChk1(!termsChk1);
                    }}
                  />
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <CheckBox
                    checked={termsChk2}
                    type="circleLine"
                    label="아코디언 내용입니다"
                    onChange={() => {
                      setTermsChk2(!termsChk2);
                    }}
                  />
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <CheckBox
                    checked={termsChk3}
                    type="circleLine"
                    label="아코디언 내용입니다"
                    onChange={() => {
                      setTermsChk3(!termsChk3);
                    }}
                  />
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                </Accordion>
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">토글 안에 토글</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                <Accordion
                  title="아코디언 제목입니다"
                  content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                >
                  <AccordionWrap>
                    <Accordion
                      title="아코디언 제목입니다"
                      content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                    />
                    <Accordion
                      title="아코디언 제목입니다"
                      content="<p>아코디언 내용입니다</p><p>아코디언 내용입니다</p><p>아코디언 내용입니다</p>"
                    />
                  </AccordionWrap>
                </Accordion>
              </AccordionWrap>
            </Field>
          </div>
        </section>

        <section className="cp-content">
          <h2 className="cp-tit dep02">슬라이드업</h2>
          <div className="component">
            <Field>
              <AccordionWrap>
                <Accordion
                  title="* 알려드립니다."
                  content="<p>공지 1</p>
                  <p>공지 2</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>공지 1</p>
                  <p>공지 2</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>공지 1</p>
                  <p>공지 2</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>
                  <p>아코디언 내용입니다</p>"
                  scroll={true}
                />
              </AccordionWrap>
            </Field>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> Stashed changes:src/pages/component/accordion/index.jsx
