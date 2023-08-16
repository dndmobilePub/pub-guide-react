import React, { useEffect, useState } from "react";

export const Field = ({
  label,
  children,
  info,
  valid,
  inValid,
  wrap,
  type,
  group,
  className,
}) => {
  return (
    <div
      className={`field${valid ? " valid" : ""}${inValid ? " invalid" : ""}${(type==="box" || type==="boxChk") || !type ? "" : ' '+type}${
        className ? ' '+className : ""
      }`}
    >
      {label && <label className="field-label">{label}</label>}
      {wrap ? <div className={`${wrap ? "field-outline" : ""}`}>{children}</div> : <div className={`${group ? `field-group${type==="box"?" opt-box":type==="boxChk"?" opt-box chk":""}` : ""}`}>{children}</div>}
      {valid && (
        <p className="field-msg">
          <span className="ico ico-error txt-r">{valid}</span>
        </p>
      )}
      {inValid && (
        <p className="field-msg">
          <span className="ico ico-error txt-r">{inValid}</span>
        </p>
      )}
      {info && (
        <p className="field-info">
          <span className="ico ico-info txt-r">{info}</span>
        </p>
      )}
    </div>
  );
};

export const TextInput = ({
  type = "text",
  placeholder,
  minLength,
  maxLength,
  value,
  readonly = false,
  disabled = false,
  clear = true,
  alignRight,
  noWrap,
}) => {
  const [textValue, setTextValue] = useState(value ? value : "");
  const [isTextFocus, setIsTextFocus] = useState(false);

  const onChangeInput = (e) => {
    setIsTextFocus(true);
    setTextValue(e.target.value);
  };

  return (
    <>
      {noWrap ? (
        <div className="field-input grow _input">
          <input
            type={type}
            placeholder={placeholder}
            title=""
            onFocus={() => setIsTextFocus(true)}
            onChange={(e) => {
              onChangeInput(e);
            }}
            onBlur={() => {
              setTimeout(() => {
                isTextFocus === true && setIsTextFocus(false);
              }, 1000);
            }}
            value={textValue}
            readOnly={readonly}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            style={
              textValue.length > 0 && clear
                ? { width: "calc(100% - 2.4rem)" }
                : { width: "100%" }
            }
            className={`${type !== "text" ? "_format" : ""}${
              type === "number" ? " _number" : ""
            }${type === "password" ? " _password" : ""}${
              alignRight ? " alR" : ""
            }`}
          />

          {isTextFocus && textValue.length > 0 && clear && (
            <button
              type="button"
              className="field-btn _input-clear _active"
              onClick={() => {
                setIsTextFocus(false);
                setTextValue("");
              }}
            >
              <span className="hide">입력값삭제</span>
            </button>
          )}
        </div>
      ) : (
        <div
          className={`field-outline${readonly === true ? " readonly" : ""}${
            disabled === true ? " disabled" : ""
          }`}
        >
          <div className="field-input grow _input">
            <input
              type={type}
              placeholder={placeholder}
              title=""
              onFocus={() => setIsTextFocus(true)}
              onChange={(e) => {
                onChangeInput(e);
              }}
              onBlur={() => {
                setTimeout(() => {
                  isTextFocus === true && setIsTextFocus(false);
                }, 1000);
              }}
              value={textValue}
              readOnly={readonly}
              disabled={disabled}
              maxLength={maxLength}
              style={
                textValue.length > 0 && clear
                  ? { width: "calc(100% - 2.4rem)" }
                  : { width: "100%" }
              }
              className={`${type !== "text" ? "_format" : ""}${
                type === "number" ? " _number" : ""
              }${type === "password" ? " _password" : ""}${
                alignRight ? " alR" : ""
              }`}
            />

            {isTextFocus && textValue.length > 0 && clear && (
              <button
                type="button"
                className="field-btn _input-clear _active"
                onClick={() => {
                  setIsTextFocus(false);
                  setTextValue("");
                }}
              >
                <span className="hide">입력값삭제</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export const CustomInput = ({
  type = "text",
  length,
  secureLength,
  maxLength,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [password, setPassword] = useState([]);

  const handleInputChange = (e) => {
    const newPassword = e.target.value;
    if (newPassword.length <= maxLength) {
      setPassword(newPassword.split(""));
    }
  };

  return (
    <div className="field-input grow _input">
      <label
        className="_secureTxt"
        data-length={length}
        data-secureline={secureLength}
      >
        <input
          type={type}
          className="_format _password"
          placeholder=""
          maxLength={length}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(e) => handleInputChange(e)}
        />
        {Array(maxLength)
          .fill()
          .map((_, index) => (
            <i
              key={index}
              aria-hidden={true}
              className={`${index < length ? "_line" : ""}${
                password[index] ? " _is-active" : ""
              }`}
              style={{
                width: "10px",
                left: `${
                  index === 0 ? "0" : index === 1 ? "13" : 13 + 16 * (index - 1)
                }px`,
                display: `${
                  password[index] && type !== "password" ? "none" : "block"
                }`,
                opacity: `${
                  !password[index] && index < length && isFocus ? "0.5" : "1"
                }`,
              }}
            ></i>
          ))}
      </label>
    </div>
  );
};

export const CheckBox = ({
  type = "circle",
  checked = false,
  label,
  readOnly,
  disabled = false,
  onChange,
}) => {
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  const [isChecked, setIsChecked] = useState(checked ?? false);
  return (
      <label
        onChange={() => {
          setIsChecked(!isChecked);
          onChange && onChange();
        }}
        className={`${
          type.startsWith("switch")
            ? `field-switch${type.endsWith("-text") ? " txt" : ""}${
                type.endsWith("-lg") ? " lg" : ""
              }`
            : `field-checkbox${type ? ' '+type : ''}`
        }`}
      >
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
            onChange && onChange();
          }}
          checked={!readOnly && isChecked}
          disabled={disabled}
        />
        <i className="field-icon"></i>
        {label && <span className="field-label">{label}</span>}
      </label>
  );
};

export const RadioBox = ({ type = "circle", name, children }) => {
  return (
      <>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { type, name });
        })}
      </>
  );
};

export const Radio = ({
  type,
  value,
  name,
  label,
  checked,
  defaultChecked,
  readOnly,
  disabled,
}) => {
  return (
    <label
      className={`${type === "boxChk" ? "field-checkbox" : "field-radio"}`}
    >
      <input
        type="radio"
        value={value}
        name={readOnly ? "" : name}
        checked={readOnly ? false : checked}
        defaultChecked={defaultChecked}
        readOnly={readOnly}
        disabled={disabled}
      />
      {type !== "box" && <i className="field-icon"></i>}
      <span className="field-label">{label}</span>
    </label>
  );
};
