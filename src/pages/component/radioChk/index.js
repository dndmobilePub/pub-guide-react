import { useState } from "react";
import { CheckBox, RadioInput } from "../../../components/UI/Form"
import { Guide } from "../../../components/Common/Guide"
import styles from './index.module.scss';

export default function RadioChk() {
  const [subTab, setSubTab] = useState("CheckBox");

  return (
    <>
      <ul className={`${styles.subTab} active`}>
        <li className={`item${subTab==="CheckBox"?' active':''}`} onClick={()=>{setSubTab("CheckBox")}}>CheckBox</li>
        <li className={`item${subTab==="RadioInput"?' active':''}`} onClick={()=>{setSubTab("RadioInput")}}>RadioInput</li>
      </ul>
      <Guide type={`${subTab}`} component={subTab}/>
      <hr/>
      {subTab === 'CheckBox' ? (
        <>
          <h3>{subTab}</h3>
          <br/>

          <h4>{subTab} : type(Circle)</h4>
          <p>{`<CheckBox type="circle" />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <CheckBox type="circle" label="미체크"/>
            <CheckBox type="circle" checked={true} label="체크"/>
            <CheckBox type="circle" label="readonly" readOnly/>
            <CheckBox type="circle" label="disabled" disabled/>
          </div>
          <br/>

          <h4>{subTab} : type(Circle line)</h4>
          <p>{`<CheckBox type="circleLine" />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <CheckBox type="circleLine" label="미체크"/>
            <CheckBox type="circleLine" checked={true} label="체크"/>
            <CheckBox type="circleLine" label="readonly" readOnly/>
            <CheckBox type="circleLine" label="disabled" disabled/>
          </div>
          <br/>

          <h4>{subTab} : type(Square)</h4>
          <p>{`<CheckBox type="square" />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <CheckBox type="square" label="미체크"/>
            <CheckBox type="square" checked={true} label="체크"/>
            <CheckBox type="square" label="readonly" readOnly/>
            <CheckBox type="square" label="disabled" disabled/>
          </div>
          <br/>

          <h4>{subTab} : type(Square line)</h4>
          <p>{`<CheckBox type="squareLine" />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <CheckBox type="squareLine" label="미체크"/>
            <CheckBox type="squareLine" checked={true} label="체크"/>
            <CheckBox type="squareLine" label="readonly" readOnly/>
            <CheckBox type="squareLine" label="disabled" disabled/>
          </div>
          <br/>

          <h4>{subTab} : type(Switch)</h4>
          <p>{`<CheckBox type="switch" />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <CheckBox type="switch"/>
            <CheckBox type="switch" txt/>
            <CheckBox type="switch"/>
          </div>
          <br/>
        </>
      ):(
        <>
          <h3>{subTab}</h3>
          <br/>

          <h4>{subTab} : placeholder</h4>
          <p>{`<RadioInput />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <RadioInput />
          </div>
          <br/>

          <h4>{subTab} : clear</h4>
          <p>{`<RadioInput />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <RadioInput />
          </div>
          <br/>

          <h4>{subTab} : readonly & value</h4>
          <p>{`<RadioInput />`}</p>
          <br/>
          <div className={`${styles.box}`}>
            <RadioInput />
          </div>
          <br/>
        </>
      )}
    </>
  )
}