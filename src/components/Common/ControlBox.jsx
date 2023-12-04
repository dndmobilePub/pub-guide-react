import { useState } from "react";
import styles from "./ControlBox.module.scss";
import * as PROPS from "../../data/cm.props";
import * as STATES from "../../data/cm.initialState";
import * as UI from "../UI";
import { useEffect } from "react";
import { useRef } from "react";

const ControlBox = ({ type }) => {
    const codeRef = useRef(null);
    const [isCopied, setIsCopied] = useState(false);
    const [Component, setComponent] = useState(() => {
        for (const com in UI) {
            if (com === type) {
                return UI[com]
            }
        }
        return null;
    });
    const [ComponentProps, setComponentProps] = useState(() => {
        for (const prop in PROPS) {
            if (prop === type) {
                return PROPS[prop]
            }
        }
        return null;
    });
    const [data, setRealData] = useState(() => {
        for (const state in STATES) {
            if (state === type) {
                return STATES[state];
            }
        }
        return null;
    });

    async function handleCopyClipBoard() {
        try {
            console.log(codeRef)
            await navigator.clipboard.writeText(codeRef.current.innerText);
            setIsCopied(true);
        } catch (e) {
            setIsCopied(false);
        }
    };

    function updateData(propName, value) {
        setRealData((prevData) => ({ ...prevData, [propName]: value }));
    }

    return (
        <>
            <div className={styles['canvas']}>
                <Component {...data}>
                    {data?.name === "ButtonWrap" ? <><UI.Button>Button1</UI.Button><UI.Button>Button2</UI.Button></> : data?.children}
                </Component>
            </div>
            <div className={styles['code']}>
                <code ref={codeRef}>
                    {`<${data?.name}
                    ${data?.bgType ? ` bgType={${data?.bgType}}` : ''}
                    ${data?.size ? ` size="${data?.size}"` : ''}
                    ${data?.isLine ? ' isLine' : ''}
                    ${data?.isRound ? ' isRound' : ''}
                    ${data?.isShadow ? ' isShadow' : ''}
                    ${data?.isDisabled ? ' isDisabled' : ''}
                    ${data?.isFull ? ' isfull' : ''}
                    ${data?.isGrow ? ' isGrow' : ''}>
  ${data?.name === "ButtonWrap" ? `<Button> Button1 </Button>
  <Button> Button2 </Button>` : data?.children}
</${data?.name}>`}
                </code>
                <button onClick={handleCopyClipBoard}>{isCopied ? 'Copied' : 'Copy'}</button>
            </div>
            <section className="cp-content">
                <table className={styles['table']}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ComponentProps.map(({ name, description, options }, idx) => (
                            <tr key={name}>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>
                                    <fieldset id={`group${idx}`}>
                                        {options.map((opt) => (
                                            <div key={opt}>
                                                {name === "children" ?
                                                    data?.name === "ButtonWrap" ? `Button Components` : <input key={opt} type="text" value={data?.children} onChange={(e) => { updateData(name, e.target.value) }} />
                                                    :
                                                    <div>
                                                        <input checked={data[name] === opt ? true : false} type="radio" value={opt} name={`group${idx}`} id={`Opt_${opt}`} onChange={() => {
                                                            for (const key in data) {
                                                                if (key === name) {
                                                                    updateData(key, opt)
                                                                }
                                                            };
                                                        }
                                                        } />
                                                        <label htmlFor={`Opt_${opt}`}>{opt === true ? 'true' : opt === false ? 'false' : opt}</label>
                                                    </div>
                                                }
                                            </div>
                                        ))}
                                    </fieldset>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default ControlBox;