import styles from "./index.module.scss";
import { useState } from "react";
import { Button, ButtonWrap } from "../../../components/UI/Button";
import { Options } from "../../../components/Common/Options";

export default function Buttons() {
  const [subTab, setSubTab] = useState("Button");

  return (
    <div id="cp-wrap">
      <ul className={`${styles.subTab} active`}>
        <li
          className="item"
          onClick={() => {
            setSubTab("Button");
          }}
          style={{ fontWeight: subTab === "Button" ? "bold" : "normal" }}
        >
          Button
        </li>
        <li
          className="item"
          onClick={() => {
            setSubTab("ButtonWrap");
          }}
          style={{ fontWeight: subTab === "ButtonWrap" ? "bold" : "normal" }}
        >
          ButtonWrap
        </li>
      </ul>
      {<Options type={`${subTab}`} component={subTab} />}
      <hr />
      <br />
      <section className="cp-content">
        <h2 className="cp-tit dep02">BUTTON : Text</h2>
        <div className="component">
          <h3 className="cp-tit dep03">size : md</h3>
          <ButtonWrap>
            <Button a txtType={1} bgType={0}>
              type1
            </Button>
            &nbsp;
            <Button a txtType={2} bgType={0}>
              type2
            </Button>
            &nbsp;
            <Button a txtType={3} bgType={0}>
              type3
            </Button>
          </ButtonWrap>
          <hr className="hr divice" />
          <h3 className="cp-tit dep03">button.btn TYPE</h3>
          <ButtonWrap>
            <Button>기본BTN</Button>
            <Button bgType={2}>긍정BTN</Button>
            <Button bgType={3}>부정BTN</Button>
          </ButtonWrap>
        </div>
        <br />
        <br />
        <h2 className="cp-tit dep02">BUTTON : 기본형</h2>
        <div className="component">
          <h3 className="cp-tit dep03">a.btn TYPE</h3>
          <ButtonWrap>
            <Button a>기본a</Button>
            <Button a bgType={2}>
              긍정a
            </Button>
            <Button a bgType={3}>
              부정a
            </Button>
          </ButtonWrap>
          <hr className="hr divice" />
          <h3 className="cp-tit dep03">button.btn TYPE</h3>
          <ButtonWrap>
            <Button>기본BTN</Button>
            <Button bgType={2}>긍정BTN</Button>
            <Button bgType={3}>부정BTN</Button>
          </ButtonWrap>
        </div>
        <h2 className="cp-tit dep02">BUTTON : SHAPE / disabled</h2>
        <div className="component">
          <h3 className="cp-tit dep03">SHAPE BTN</h3>
          <ButtonWrap>
            <Button shape="round">라운드 버튼</Button>
            <Button shape="shadow">쉐도우 버튼</Button>
            <Button shape="line">라인 버튼</Button>
          </ButtonWrap>
          <hr className="hr divice" />
          <h3 className="cp-tit dep03">BTN : disabled</h3>
          <ButtonWrap>
            <Button bgType={1} disabled>
              기본 BTN
            </Button>
            <Button bgType={2} disabled>
              긍정 BTN
            </Button>
            <Button bgType={3} disabled>
              부정 BTN
            </Button>
            <Button shape="round" disabled>
              라운드 버튼
            </Button>
            <Button shape="shadow" disabled>
              쉐도우 버튼
            </Button>
            <Button shape="line" disabled>
              라인 버튼
            </Button>
          </ButtonWrap>
        </div>
        <h2 className="cp-tit dep02">BUTTON : SIZE</h2>
        <div className="component">
          <h3 className="cp-tit dep03">SIZE : XS</h3>
          <ButtonWrap>
            <Button size="xs" bgType={1} disabled>
              기본 BTN
            </Button>
            <Button size="xs" bgType={2} disabled>
              긍정 BTN
            </Button>
            <Button size="xs" bgType={3} disabled>
              부정 BTN
            </Button>
            <Button size="xs" shape="round" disabled>
              라운드 버튼
            </Button>
            <Button size="xs" shape="shadow" disabled>
              쉐도우 버튼
            </Button>
            <Button size="xs" shape="line" disabled>
              라인 버튼
            </Button>
          </ButtonWrap>
          <hr className="hr divice" />
          <h3 className="cp-tit dep03">SIZE : S</h3>
          <ButtonWrap>
            <Button size="sm" bgType={1}>
              기본 BTN
            </Button>
            <Button size="sm" bgType={2}>
              긍정 BTN
            </Button>
            <Button size="sm" bgType={3}>
              부정 BTN
            </Button>
            <Button size="sm" shape="round">
              라운드 버튼
            </Button>
            <Button size="sm" shape="shadow">
              쉐도우 버튼
            </Button>
            <Button size="sm" shape="line">
              라인 버튼
            </Button>
          </ButtonWrap>
          <hr className="hr divice" />
          <h3 className="cp-tit dep03">SIZE : 기본</h3>
          <ButtonWrap>
            <Button bgType={1}>기본 BTN</Button>
            <Button bgType={2}>긍정 BTN</Button>
            <Button bgType={3}>부정 BTN</Button>
            <Button shape="round">라운드 버튼</Button>
            <Button shape="shadow">쉐도우 버튼</Button>
            <Button shape="line">라인 버튼</Button>
          </ButtonWrap>
          <hr className="hr divice" />
          <h3 className="cp-tit dep03">SIZE : lg</h3>
          <ButtonWrap>
            <Button size="lg" bgType={1}>
              기본 BTN
            </Button>
            <Button size="lg" bgType={2}>
              긍정 BTN
            </Button>
            <Button size="lg" bgType={3}>
              부정 BTN
            </Button>
            <Button size="lg" shape="round">
              라운드 버튼
            </Button>
            <Button size="lg" shape="shadow">
              쉐도우 버튼
            </Button>
            <Button size="lg" shape="line">
              라인 버튼
            </Button>
          </ButtonWrap>
          <hr className="hr divice" />
          <h3 className="cp-tit dep03">SIZE : big</h3>
          <ButtonWrap>
            <Button size="xl" bgType={1}>
              기본 BTN
            </Button>
            <Button size="xl" bgType={2}>
              긍정 BTN
            </Button>
            <Button size="xl" bgType={3}>
              부정 BTN
            </Button>
            <Button size="xl" shape="round">
              라운드 버튼
            </Button>
            <Button size="xl" shape="shadow">
              쉐도우 버튼
            </Button>
            <Button size="xl" shape="line">
              라인 버튼
            </Button>
          </ButtonWrap>
        </div>
        <h2 className="cp-tit dep02">BUTTON : Mix</h2>
        <div className="component">
          <h3 className="cp-tit dep03">BTN split / grow</h3>
          <ButtonWrap grow>
            <Button bgType={1}>기본 BTN</Button>
            <Button bgType={2}>긍정 BTN</Button>
            <Button bgType={3}>부정 BTN</Button>
            <Button shape="line" full>
              부정 BTN
            </Button>
          </ButtonWrap>

          <h3 className="cp-tit dep03">BTN full / 2분할</h3>
          <ButtonWrap grow>
            <Button bgType={1}>기본 BTN</Button>
            <Button bgType={2}>긍정 BTN</Button>
          </ButtonWrap>
          <hr className="hr divice" />

          <h3 className="cp-tit dep03">BTN full / group</h3>
          <ButtonWrap full>
            <Button a bgType={1}>
              기본 a
            </Button>
            <Button a bgType={2}>
              긍정 a
            </Button>
            <Button a bgType={3}>
              부정 a
            </Button>
          </ButtonWrap>
          <hr className="hr divice" />

          <h3 className="cp-tit dep03">BTN full / el</h3>
          <ButtonWrap>
            <Button a bgType={1} full>
              기본 a
            </Button>
            <Button a bgType={2} full>
              긍정 a
            </Button>
            <Button a bgType={3} full>
              부정 a
            </Button>
          </ButtonWrap>
        </div>
      </section>
    </div>
  );
}
