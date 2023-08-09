import { Guide } from "../../components/Common/Guide";
import { Title, SubTitle, Text } from "../../components/UI/Text";
import { useState } from "react"
import styles from './index.module.scss';

export default function Texts() {
  const [subTab, setSubTab] = useState("Title");
  const codeSnippet = `<Button href="#" size={""}>Write your text.</button>`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet)
      .then(() => alert('복사되었습니다.'))
      .catch(err => console.error('Failed to copy code:', err));
  };

  return (
    <>
      <ul className={`${styles.subTab} active`}>
        <li className={`item${subTab==="Title"?' active':''}`} onClick={()=>{setSubTab("Title")}}>Title</li>
        <li className={`item${subTab==="SubTitle"?' active':''}`} onClick={()=>{setSubTab("SubTitle")}}>SubTitle</li>
        <li className={`item${subTab==="Text"?' active':''}`} onClick={()=>{setSubTab("Text")}}>Text</li>
      </ul>
      <Guide type={`${subTab}`} component={subTab}/>
      <hr/>
      {subTab === 'Title' ? (
        <div>
          <h3>{subTab} : depth 옵션 미리보기 (기본 1/2/3/4/5)</h3>
          <br/>
          <Title depth={1}>{`<Title depth={1}>`}1depth : 22px{`</Title>`}</Title>
          <Title depth={2}>{`<Title depth={2}>`}2depth : 18px{`</Title>`}</Title>
          <Title depth={3}>{`<Title depth={3}>`}3depth : 16px{`</Title>`}</Title>
          <Title depth={4}>{`<Title depth={4}>`}4depth : 13px{`</Title>`}</Title>
          <Title depth={5}>{`<Title depth={5}>`}5depth : 12px{`</Title>`}</Title>
        </div>
      ): subTab === 'SubTitle' ? (
        <div>
          <h3>{subTab} : text 옵션 미리보기 (서브타이틀 제목)</h3>
          <br/>
          <SubTitle text={`서브타이틀`}>
            메인타이틀
          </SubTitle>
        </div>
      ):(
        <>
          <div>
            <h3>{subTab} : lang 옵션 미리보기 (기본 &#34;ko&#34; / &#34;en&#34;)</h3>
            <br/>
            <Text lang={'ko'}>{`<Text lang={'ko'}>`}보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라. 풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는 모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의 사라지지 불어 것이다.<br/>
    이는 주는 동력은 이상 보이는 봄바람이다. 불어 보배를 대중을 가지에 자신과 그들은 위하여 쓸쓸하랴? 그것은 같이 희망의 있는가?<br/>
    청춘의 예수는 인간의 것은 봄바람이다. 생명을 것은 없으면 되려니와, 것은 아름다우냐? 대중을 위하여, 힘차게 이것이다.{`</Text>`}</Text>
            <Text lang={'en'}>{`<Text lang={'en'}>`}Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ratione dolore saepe debitis consectetur ad veritatis inventore placeat, esse ab et blanditiis, dolor ex numquam! Nihil praesentium quae eos quidem.{`</Text>`}</Text>
          </div>
          <br/>
          <hr/>
          <div>
            <h3>{subTab} : ell 옵션 미리보기 (기본 0 / 1 / 2 / 3)</h3>
            <br/>
            <Text ell={1}>
              {`<Text ell={1}>`} : 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라. 풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는 모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의 사라지지 불어 것이다.
            </Text>
            <Text ell={2}>
              {`<Text ell={2}>`} : 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라. 풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는 모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의 사라지지 불어 것이다.
            </Text>
            <Text ell={3}>
              {`<Text ell={3}>`} : 보이는 설레는 같이, 동산에는 발휘하기 이상은 구하지 것은 보라. 풍부하게 이상을 구하지 위하여, 가지에 사랑의 있으랴? 있는 끓는 모래뿐일 무엇을 살았으며, 열락의 이상의 부패뿐이다. 보내는 봄날의 사라지지 불어 것이다.
            </Text>
          </div>
        </>
      )}
      <br/>
      <br/>
      <br/>
      <div className={`${styles.bottom}`}>
        <pre>
          <code onClick={()=>{}}>{`<Text ell={2}>InnerText</Text>`}</code>
          <br/><br/>
          <button onClick={handleCopyClick} className="btn btn-size sm bg type3 full">복사하기</button>
        </pre>
      </div>
    </>
  )
}
