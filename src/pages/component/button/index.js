import { Guide } from "../../../components/Common/Guide";
import { Button, ButtonWrap } from "../../../components/UI/Button";
import { useState } from "react"
import styles from './index.module.scss';

export default function Buttons() {
  const [subTab, setSubTab] = useState("Button");
  const [buttonSize, setButtonSize] = useState("md");
  const [txtType, setTxtType] = useState(0);
  const [aTag, setATag] = useState("");
  const [bgType, setBgType] = useState(0);
  const [shape, setShape] = useState("");
  const [full, setFull] = useState("");
  const [wrapGrow,setWrapGrow] = useState(false);
  const [wrapFull,setWrapFull] = useState(false);
  const codeSnippet = `<Button href="#" ${aTag && 'a={}'} size={"${buttonSize}"}>Write your text.</button>`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeSnippet)
      .then(() => alert('복사되었습니다.'))
      .catch(err => console.error('Failed to copy code:', err));
  };

  function optionReset() {
    setButtonSize("md");
    setTxtType(0);
    setATag("");
    setBgType(0);
    setShape("");
    setFull("");
    setWrapGrow(false);
    setWrapFull(false);
  }

  return (
    <>
      <ul className={`${styles.subTab} active`}>
        <li className={`item${subTab==="Button"?' active':''}`} onClick={()=>{setSubTab("Button")}}>Button</li>
        <li className={`item${subTab==="ButtonWrap"?' active':''}`} onClick={()=>{setSubTab("ButtonWrap")}}>ButtonWrap</li>
      </ul>
      <Guide type={`${subTab}`} component={subTab}/>
      {subTab === 'Button' ? (
        <>
          <hr/>
          <div>
            <h3>a : true</h3>
            <Button a onClick={()=>{
                optionReset();
                setATag("a");
                setBgType(1);
              }}>기본a</Button> 
            <Button a bgType={2} onClick={()=>{
                optionReset();
                setATag("a");
                setBgType(2);
              }}>긍정a</Button> 
            <Button a bgType={3} onClick={()=>{
                optionReset();
                setATag("a");
                setBgType(3);
              }}>부정a</Button> 
          </div>
          <br/>
          <div>
            <h3>a : false</h3>
            <Button onClick={()=>{
              optionReset();
              setBgType(1);
            }}>기본BTN</Button> 
            <Button bgType={2} onClick={()=>{
              optionReset();
              setBgType(2);
            }}>긍정BTN</Button> 
            <Button bgType={3} onClick={()=>{
              optionReset();
              setBgType(3);
            }}>부정BTN</Button> 
          </div>
          <br/>
          <hr/>
          <div>
            <h3>size</h3>
            <br/>
            <Button size={'xs'} onClick={()=>{
                optionReset();
                setButtonSize('xs');
                setBgType(1);
              }}>xs</Button> 
            <Button size={'sm'} onClick={()=>{
                optionReset();
                setButtonSize('sm');
                setBgType(1);
              }}>sm</Button> 
            <Button size={'md'} onClick={()=>{
                optionReset();
                setButtonSize('md');
                setBgType(1);
              }}>md</Button> 
            <Button size={'lg'} onClick={()=>{
                optionReset();
                setButtonSize('lg');
                setBgType(1);
              }}>lg</Button> 
            <Button size={'xl'} onClick={()=>{
                optionReset();
                setButtonSize('xl');
                setBgType(1);
              }}>xl</Button>
          </div>
          <br/>
          <hr/>
          <div>
            <h3>txtType : 0 / 1 / 2 / 3 (txtType은 bgType(0)일때만 적용)</h3>
            <p></p>
            <br/>
            <Button a txtType={1} bgType={0} onClick={()=>{
              optionReset();
              setTxtType(1);
              setBgType(0);
              setATag("a");
            }}>txtType(1) a</Button>
            &nbsp;
            <Button a txtType={2} bgType={0} onClick={()=>{
              optionReset();
              setTxtType(2);
              setBgType(0);
              setATag("a");
            }}>txtType(2) a</Button>
            &nbsp;
            <Button a txtType={3} bgType={0} onClick={()=>{
              optionReset();
              setTxtType(3);
              setBgType(0);
              setATag("a");
            }}>txtType(3) a</Button>
          </div>
          <hr/>
          <div>
            <h3>bgType : 0 / 1 / 2 / 3 (bgType은 txtType(0)일때만 적용)</h3>
            <p></p>
            <br/>
            <Button bgType={1} onClick={()=>{
              optionReset();
              setBgType(1);
            }}>기본 BTN</Button>
            &nbsp;
            <Button bgType={2} onClick={()=>{
              optionReset();
              setBgType(2);
            }}>긍정 BTN</Button>
            &nbsp;
            <Button bgType={3} onClick={()=>{
              optionReset();
              setBgType(3);
            }}>부정 BTN</Button>
          </div>
          <br/>
          <hr/>
          <div>
            <h3>disabled : (Button 시작 태그안에 disabled 추가)</h3>
            <p></p>
            <br/>
            <Button bgType={1} disabled>기본 BTN disabled</Button>
            &nbsp;
            <Button bgType={2} disabled>긍정 BTN disabled</Button>
            &nbsp;
            <Button bgType={3} disabled>부정 BTN disabled</Button>
          </div>
          <hr/>
          <div>
            <h3>shape : &#34;&#34; / &#34;round&#34; / &#34;round&#34; / &#34;line&#34; (button 태그 전용)</h3>
            <br/>
            <Button onClick={()=>{
              optionReset();
            }}>기본 shape BTN</Button>
            &nbsp;
            <Button shape="round" onClick={()=>{
              optionReset();
              setShape('round');
            }}>기본 round BTN</Button>
            &nbsp;
            <Button shape="shadow" onClick={()=>{
              optionReset();
              setShape('shadow');
            }}>기본 shadow BTN</Button>
            &nbsp;
            <Button shape="line" onClick={()=>{
              optionReset();
              setShape('line');
            }}>기본 line BTN</Button>
          </div>
          <br/>
          <hr/>
          <div>
            <h3>full : &#34;&#34; / &#34;full&#34;</h3>
            <br/>
            <Button onClick={()=>{
              optionReset();
            }}>기본 BTN</Button>
            <br/><br/>
            <Button full onClick={()=>{
              optionReset();
              setFull('full');
            }}>기본 full BTN</Button>
          </div>
        </>
      ) : (
        <>
          <hr/>
          <div className={`${styles.btnWrapGrow}`}>
            <h3>ButtonWrap - grow(button 태그 2개 이상)</h3>
            <br/>
            <ButtonWrap grow>
              <Button onClick={()=>{
                optionReset();
                setWrapGrow(true);
              }}>버튼</Button>
              <Button onClick={()=>{
                optionReset();
                setWrapGrow(true);
              }}>버튼</Button>
              <Button onClick={()=>{
                optionReset();
                setWrapGrow(true);
              }}>버튼</Button>
            </ButtonWrap>
          </div>
          <hr/>
          <div className={`${styles.btnWrapFull}`}>
            <h3>ButtonWrap - full</h3>
            <br/>
            <ButtonWrap full>
              <Button onClick={()=>{
                optionReset();
                setWrapFull(true);
              }}>버튼</Button>
              <Button onClick={()=>{
                optionReset();
                setWrapFull(true);
              }}>버튼</Button>
              <Button onClick={()=>{
                optionReset();
                setWrapFull(true);
              }}>버튼</Button>
            </ButtonWrap>
          </div>
        </>
      )}
      
      <br/>
      <br/>
      <br/>

      <div className={`${styles.bottom}`}>
        <pre>
          <code onClick={()=>{}}>{wrapGrow === false && wrapFull === false
? `<Button ${aTag?'a ':''}${txtType?`txtType={${txtType}} `:''}size={${buttonSize}}${bgType?` bgType={${bgType}}`:''}${shape?` shape={${shape}}`:''}${full?` ${full}`:''}>버튼</button>` 
: `<ButtonWrap${wrapGrow?' grow':''}${wrapFull?' full':''}>
  <Button>버튼</Button>
  <Button>버튼</Button>
  <Button>버튼</Button>
</ButtonWrap>`}</code>
          <br/><br/>
          <button onClick={handleCopyClick} className="btn btn-size sm bg type3 full">복사하기</button>
        </pre>
      </div>
    </>
  )
}
