import styles from "./index.module.scss";
import { useState } from "react";
import { Options } from "../../../components/Common/Options";
import { Title, Text } from "../../../components/UI/Text";
import { Button } from "../../../components/UI/Button";

export default function Texts() {
  const [subTab, setSubTab] = useState("Title");

  return (
    <div id="cp-wrap">
      <ul className={`${styles.subTab}`}>
        <li
          className="item"
          onClick={() => {
            setSubTab("Title");
          }}
          style={{ fontWeight: subTab === "Title" ? "bold" : "normal" }}
        >
          Title
        </li>
        <li
          className="item"
          onClick={() => {
            setSubTab("Text");
          }}
          style={{ fontWeight: subTab === "Text" ? "bold" : "normal" }}
        >
          Text
        </li>
      </ul>
      <Options type={`${subTab}`} component={subTab} />
      {subTab === "Title" ? (
        <section className="cp-content">
          <h2 className="cp-tit dep02">TITLE : 기본형 , #333</h2>
          <div className="component">
            <Title depth={1} text="1depth : 22px" />
            <hr />
            <Title depth={2} text="2depth : 18px" />
            <hr />
            <Title depth={3} text="3depth : 16px" />
            <hr />
            <Title depth={4} text="4depth : 13px" />
            <hr />
            <Title depth={5} text="5depth : 12px" />
          </div>
          <br />
          <br />
          <h2 className="cp-tit dep02">TITLE : 예외</h2>
          <div className="component">
            <Title depth={1} text="1depth : 22px" />
            <hr />
            <Title depth={2} type={2} text="2depth : 18px, #2f65ee" />
            <hr />
            <Title depth={2} uline text="2depth : 18px, line bg" />
          </div>
          <br />
          <br />
          <h2 className="cp-tit dep02">TITLE : 응용</h2>
          <div className="component">
            <Title depth={2} text="2depth + 버튼" split>
              <Button size="sm">버튼명1</Button>
              <Button size="sm" disabled>
                버튼명2
              </Button>
            </Title>
            <hr />
            <Title depth={2} text="2depth + 버튼" split>
              <Button a txtType={1} bgType={0}>
                버튼명1
              </Button>
              <Button a txtType={1} bgType={0}>
                버튼명2
              </Button>
            </Title>
            <hr />
            <Title depth={2} text="2depth + 기준텍스트" split>
              <span className="cmt">(단위 : 천원)</span>
            </Title>
            <hr />
            <Title depth={2} text="2depth 메인타이틀" sub="2depth 서브타이틀" />
            <hr />
            <Title depth={2} text="2depth 메인타이틀">
              <p className="headcopy">
                청춘의 예수는 인간의 것은 봄바람이다. 생명을 것은 없으면
                되려니와, 것은 아름다우냐? 대중을 위하여, 힘차게 이것이다.
              </p>
            </Title>
          </div>
        </section>
      ) : (
        <section className="cp-content">
          <h2 className="cp-tit dep02">TEXT</h2>
          <div className="component">
            <Text lang={"ko"}>
              ko - 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은
              보라. 풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는
              끓는 모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는
              봄날의 사라지지 불어 것이다.
              <br />
              이는 주는 동력은 이상 보이는 봄바람이다. 불어 보배를 대중을 가지에
              자신과 그들은 위하여 쓸쓸하랴? 그것은 같이 희망의 있는가?
              <br />
              청춘의 예수는 인간의 것은 봄바람이다. 생명을 것은 없으면 되려니와,
              것은 아름다우냐? 대중을 위하여, 힘차게 이것이다.
            </Text>
            <hr />
            <Text lang={"en"}>
              en -Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Soluta ratione dolore saepe debitis consectetur ad veritatis
              inventore placeat, esse ab et blanditiis, dolor ex numquam! Nihil
              praesentium quae eos quidem.
            </Text>
          </div>
          <br />
          <h2 className="cp-tit dep02">TEXT : ellipsis</h2>
          <div className="component" style={{ maxWidth: "320px" }}>
            <Text ell={1}>
              1 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라.
              풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는
              모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의
              사라지지 불어 것이다.
            </Text>
            <hr />
            <Text ell={2}>
              2 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라.
              풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는
              모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의
              사라지지 불어 것이다.
            </Text>
            <hr />
            <Text ell={3}>
              3 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라.
              풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는
              모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의
              사라지지 불어 것이다.
            </Text>
          </div>
        </section>
      )}
    </div>
  );
}
