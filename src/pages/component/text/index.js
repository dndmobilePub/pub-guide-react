import { Guide } from "../../../components/Common/Guide";
import { Title, Text } from "../../../components/UI/Text";
import { useState } from "react";
import styles from "./index.module.scss";

export default function Texts() {
  const [subTab, setSubTab] = useState("Title");

  return (
    <>
      <ul className={`${styles.subTab} active`}>
        <li
          className={`item${subTab === "Title" ? " active" : ""}`}
          onClick={() => {
            setSubTab("Title");
          }}
        >
          Title
        </li>
        <li
          className={`item${subTab === "Text" ? " active" : ""}`}
          onClick={() => {
            setSubTab("Text");
          }}
        >
          Text
        </li>
      </ul>
      <Guide type={`${subTab}`} component={subTab} />
      <hr />
      {subTab === "Title" ? (
        <>
          <h3>{subTab}</h3>
          <br />
          <h4>{subTab} : depth</h4>
          <br />
          <p>{`<Title depth={1}>1depth : 22px</Title>`}</p>
          <div className={`${styles.box}`}>
            <Title depth={1}>1depth : 22px</Title>
          </div>
          <p>{`<Title depth={2}>2depth : 18px</Title>`}</p>
          <div className={`${styles.box}`}>
            <Title depth={2}>2depth : 18px</Title>
          </div>
          <p>{`<Title depth={3}>3depth : 16px</Title>`}</p>
          <div className={`${styles.box}`}>
            <Title depth={3}>3depth : 16px</Title>
          </div>
          <p>{`<Title depth={4}>4depth : 13px</Title>`}</p>
          <div className={`${styles.box}`}>
            <Title depth={4}>4depth : 13px</Title>
          </div>
          <p>{`<Title depth={5}>5depth : 12px</Title>`}</p>
          <div className={`${styles.box}`}>
            <Title depth={5} sub="sub">
              5depth : 12px
            </Title>
          </div>

          <br />
          <h4>{subTab} : sub</h4>
          <br />
          <p>{`<Title depth={2} sub="서브 타이틀">메인 타이틀</Title>`}</p>
          <div className={`${styles.box}`}>
            <Title depth={2} sub="서브 타이틀">
              메인 타이틀
            </Title>
          </div>
        </>
      ) : (
        <>
          <h3>{subTab}</h3>
          <br />
          <h4>{subTab} : lang</h4>
          <br />
          <p>{`<Text lang="ko"}>보이는 설레는 ... 이것이다.</Text>`}</p>
          <div className={`${styles.box}`}>
            <Text lang={"ko"}>
              보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라.
              풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는
              모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의
              사라지지 불어 것이다.
              <br />
              이는 주는 동력은 이상 보이는 봄바람이다. 불어 보배를 대중을 가지에
              자신과 그들은 위하여 쓸쓸하랴? 그것은 같이 희망의 있는가?
              <br />
              청춘의 예수는 인간의 것은 봄바람이다. 생명을 것은 없으면 되려니와,
              것은 아름다우냐? 대중을 위하여, 힘차게 이것이다.
            </Text>
          </div>
          <p>{`<Text lang="en"}>Lorem ipsum, ... eos quidem.</Text>`}</p>
          <div className={`${styles.box}`}>
            <Text lang={"en"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              ratione dolore saepe debitis consectetur ad veritatis inventore
              placeat, esse ab et blanditiis, dolor ex numquam! Nihil
              praesentium quae eos quidem.
            </Text>
          </div>
          <br />
          <br />
          <h4>{subTab} : ell</h4>
          <br />
          <p>{`<Text ell={1}>보이는 설레는 ... 이것이다.</Text>`}</p>
          <div className={`${styles.box} ${styles.s}`}>
            <Text ell={1}>
              보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라.
              풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는
              모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의
              사라지지 불어 것이다.
            </Text>
          </div>
          <p>{`<Text ell={2}>보이는 설레는 ... 이것이다.</Text>`}</p>
          <div className={`${styles.box} ${styles.s}`}>
            <Text ell={2}>
              보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라.
              풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는
              모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의
              사라지지 불어 것이다.
            </Text>
          </div>
          <p>{`<Text ell={3}>보이는 설레는 ... 이것이다.</Text>`}</p>
          <div className={`${styles.box} ${styles.s}`}>
            <Text ell={3}>
              보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라.
              풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는
              모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의
              사라지지 불어 것이다.
            </Text>
          </div>
        </>
      )}
    </>
  );
}
