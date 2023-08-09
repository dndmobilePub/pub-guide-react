import { Guide } from "../../../components/Common/Guide";
import { Button, ButtonWrap } from "../../../components/UI/Button";
import { useState } from "react"
import styles from './index.module.scss';

export default function Buttons() {
  const [subTab, setSubTab] = useState("Button");

  return (
    <>
      <ul className={`${styles.subTab} active`}>
        <li className={`item${subTab==="Button"?' active':''}`} onClick={()=>{setSubTab("Button")}}>Button</li>
        <li className={`item${subTab==="ButtonWrap"?' active':''}`} onClick={()=>{setSubTab("ButtonWrap")}}>ButtonWrap</li>
      </ul>
      <Guide type={`${subTab}`} component={subTab}/>
      <hr/>
      {subTab === 'Button' ? (
        <>
          <h3>{subTab}</h3>
          <br/>

          <h4>{subTab} : a(true)</h4>
          <p>{`<Button a>기본a</Button> <Button a bgType={2}>긍정a</Button> <Button a bgType={3}>부정a</Button>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Button a>기본a</Button> 
            <Button a bgType={2}>긍정a</Button> 
            <Button a bgType={3}>부정a</Button> 
          </div>
          <br/>

          <h4>{subTab}: a(false) </h4>
          <p>{`<Button>기본BTN</Button> <Button bgType={2}>긍정BTN</Button> <Button a bgType={3}>부정BTN</Button>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Button>기본BTN</Button> 
            <Button bgType={2}>긍정BTN</Button> 
            <Button bgType={3}>부정BTN</Button> 
          </div>
          <br/>

          <h4>{subTab}: size (xs, sm, md, lg, xl)</h4>
          <p>{`<Button size="xs">xs</Button>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Button size="xs">xs</Button> 
            <Button size="sm">sm</Button> 
            <Button>md</Button>
            <Button size="lg">lg</Button> 
            <Button size="xl">xl</Button>
          </div>
          <br/>

          <h4>{subTab}: txtType (1/2/3)</h4>
          <p>{`<Button a txtType={1} bgType={0}>type1</Button>`}</p>
          <br/>
          <Button a txtType={1} bgType={0}>type1</Button>
          &nbsp;
          <Button a txtType={2} bgType={0}>type2</Button>
          &nbsp;
          <Button a txtType={3} bgType={0}>type3</Button>
          <br/>
          <br/>
          <br/>

          <h4>{subTab}: bgType (1/2/3)</h4>
          <p>{`<Button bgType={1}>기본 BTN</Button>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Button bgType={1}>기본 BTN</Button>
            &nbsp;
            <Button bgType={2}>긍정 BTN</Button>
            &nbsp;
            <Button bgType={3}>부정 BTN</Button>
          </div>
          <br/>

          <h4>{subTab}: disabled (시작 태그안에 disabled 추가)</h4>
          <p>{`<Button bgType={1} disabled>기본 BTN disabled</Button>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Button bgType={1} disabled>기본 BTN disabled</Button>
            &nbsp;
            <Button bgType={2} disabled>긍정 BTN disabled</Button>
            &nbsp;
            <Button bgType={3} disabled>부정 BTN disabled</Button>
          </div>
          <br/>

          <h4>{subTab}: shape (&#34;&#34;, &#34;round&#34;, &#34;shadow&#34;, &#34;line&#34; / 버튼 태그일때만 적용 가능)</h4>
          <p>{`<Button shape="round">기본 round BTN</Button>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Button>기본 shape BTN</Button>
            &nbsp;
            <Button shape="round">기본 round BTN</Button>
            &nbsp;
            <Button shape="shadow">기본 shadow BTN</Button>
            &nbsp;
            <Button shape="line">기본 line BTN</Button>
          </div>
          <br/>
          
          <h4>{subTab}: full (시작 태그안에 full 추가)</h4>
          <p>{`<Button full>기본 full BTN</Button>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <Button>기본 BTN</Button>
            <br/><br/>
            <Button full>기본 full BTN</Button>
          </div>
        </>
      ) : (
        <>
          <h3>{subTab}</h3>
          <br/>

          <h4>{subTab} : grow(시작 태그안에 grow 추가)</h4>
          <p>{`<ButtonWrap grow><Button>버튼</Button><Button>버튼</Button><Button>버튼</Button></ButtonWrap>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <ButtonWrap grow>
              <Button>버튼</Button>
              <Button>버튼</Button>
              <Button>버튼</Button>
            </ButtonWrap>
          </div>
          <br/>

          <h4>{subTab} : full(시작 태그안에 full 추가)</h4>
          <p>{`<ButtonWrap full><Button>버튼</Button><Button>버튼</Button><Button>버튼</Button></ButtonWrap>`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <ButtonWrap full>
              <Button>버튼</Button>
              <Button>버튼</Button>
              <Button>버튼</Button>
            </ButtonWrap>
          </div>
        </>
      )}
    </>
  )
}
