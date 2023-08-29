import { useState } from "react";
import { Button } from "../../UI/Button";
import styles from "./Guide.module.scss";

export const ButtonGuide = () => {
  const [testValue, setTestValue] = useState("버튼");
  const [a, setA] = useState("");
  const [link, setLink] = useState("");
  const [size, setSize] = useState("")
  const [txtType, setTxtType] = useState(1);
  const [bgType, setBgType] = useState(1);
  const [shape, setShape] = useState('');
  const [disabled, setDisabled] = useState('');
  const [full, setFull] = useState('');
  return (
    <>
    <h3>👀 How to use Button?</h3><br/>
      <code className={`${styles.code}`}>
        {`import { Button, ButtonWrap } from "src/component/UI/Button";`}<br/><br/>
        {`<ButtonWrap>`}<br/>
        &nbsp;&nbsp;{`<Button `}
            <input className={`${styles.input}`} value={a} placeholder="a" onChange={(e)=>{setA(e.target.value)}} maxLength={1} style={{width:'20px'}}/>
            {` href="`}<input className={`${styles.input}`} value={link} placeholder="#" onChange={(e)=>{setLink(e.target.value)}} style={{width:'40px'}}/>{`" `}
            {` size="`}<input className={`${styles.input}`} value={size} placeholder="md" onChange={(e)=>{setSize(e.target.value)}} maxLength={2} style={{width:'40px'}}/>{`" `}
            {` txtType={`}<input className={`${styles.input}`} type={'number'} min={0} max={3} value={txtType} onChange={(e)=>{setTxtType(Number(e.target.value))}} maxLength={1} style={{width:'40px'}}/>{`} `}
            {`bgType={`}<input className={`${styles.input}`} type={'number'} min={0} max={3} value={bgType} onChange={(e)=>{setBgType(Number(e.target.value))}} maxLength={1} style={{width:'40px'}}/>{`} `}
            {`shape="`}<input className={`${styles.input}`} value={shape} placeholder="round" onChange={(e)=>{setShape(e.target.value)}} maxLength={6} style={{width:'65px'}}/>{`" `}
            <input className={`${styles.input}`} value={disabled} placeholder="disabled" onChange={(e)=>{setDisabled(e.target.value)}} maxLength={8} style={{width:'70px'}}/>
            <input className={`${styles.input}`} value={full} placeholder="full" onChange={(e)=>{setFull(e.target.value)}} maxLength={4} style={{width:'50px'}}/>
        {`>`}
            <input className={`${styles.input}`} value={testValue} placeholder="Button text" onChange={(e)=>{setTestValue(e.target.value)}} style={{width:'85px'}} maxLength={20}/>
        {`</Button>`}<br/>
        {`</ButtonWrap>`}
      </code>
      <br />
      <h3>😊 Return this ↓</h3><br/>
      <div className={`${styles.box}`}>
        <Button a={a==='a'?true:false} href={link} size={size} txtType={txtType} bgType={bgType} shape={shape} disabled={disabled==="disabled"?true:false} full={full==="full"?true:false}>{testValue}</Button>
      </div>
      <br />
    </>
  );
};
