import React, { useEffect, useState, useRef } from "react";

export const Field = ({
  label,
  labelFor,
  children,
  info,
  valid,
  wrap,
  type,
  group,
  className,
}) => {
  return (
    <div
      className={`field${valid && valid.status === 1 ? " valid" : ""}${
        valid && valid.status === 2 ? " invalid" : ""
      }${
        type === "box" || type === "boxChk" || type === "tel" || !type
          ? ""
          : " " + type
      }${className ? " " + className : ""}`}
    >
      {label && <label className="field-label">{label}</label>}
      {wrap ? (
        <div
          className={`${
            wrap
              ? type === "tel"
                ? "field-outline _inputLen"
                : "field-outline"
              : ""
          }`}
        >
          {labelFor && (
            <label
              className={`field-label`}
              htmlFor={labelFor[0]}
              data-name={labelFor[0]}
            >
              {labelFor[1]}
            </label>
          )}
          {children}
        </div>
      ) : group ? (
        <div
          className={`field-group${
            type === "box"
              ? " opt-box"
              : type === "boxChk"
              ? " opt-box chk"
              : ""
          }`}
        >
          {children}
        </div>
      ) : (
        children
      )}
      {valid && valid.status === 1 && valid.validMsg && (
        <p className="field-msg">
          <span className="ico ico-error txt-r">{valid.validMsg}</span>
        </p>
      )}
      {valid && valid.status === 2 && valid.inValidMsg && (
        <p className="field-msg">
          <span className="ico ico-error txt-r">{valid.inValidMsg}</span>
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
  min,
  max,
  maxLength,
  initText = "",
  label = "",
  id,
  readonly = false,
  disabled = false,
  clear = true,
  alignRight,
  noWrap,
  wrapperClass,
  onChange,
  onBlur,
}) => {
  const inputRef = useRef(null);
  const [textValue, setTextValue] = useState(initText ? initText : "");
  const [isTextFocus, setIsTextFocus] = useState(false);

  const onChangeInput = (e) => {
    setIsTextFocus(true);
    setTextValue(
      type === "number"
        ? Number(e.target.value.slice(0, maxLength))
        : e.target.value
    );
    //console.log(textValue);
  };

  useEffect(() => {
    if (initText) {
      setTextValue(initText);
    }
  }, [initText]);

  return (
    <>
      {noWrap ? (
        <div className={`field-input grow _input`}>
          {/* {label && (
            <label
              className={`field-label${isTextFocus ? " _is-active" : ""}`}
              htmlFor={id}
              data-name={id}
            >
              {label}
            </label>
          )} */}
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            title=""
            onFocus={() => {
              setIsTextFocus(true);
              if (document.querySelector(`.field-label[data-name=${id}]`)) {
                document
                  .querySelector(`.field-label[data-name=${id}]`)
                  .classList.add("_is-active");
              }
            }}
            onChange={(e) => {
              onChange && onChange();
              onChangeInput(e);
            }}
            onBlur={() => {
              onBlur && onBlur();
              if (
                document.querySelector(
                  `.field-label[data-name="mobileNum1"]`
                ) &&
                document.querySelector(`#mobileNum1`).value === "" &&
                document.querySelector(`#mobileNum2`).value === "" &&
                document.querySelector(`#mobileNum3`).value === ""
              ) {
                document
                  .querySelector(`.field-label[data-name="mobileNum1"]`)
                  .classList.remove("_is-active");
              }
              setTimeout(() => {
                isTextFocus === true && setIsTextFocus(false);
              }, 1000);
            }}
            value={textValue}
            readOnly={readonly}
            disabled={disabled}
            min={min}
            max={max}
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
            ref={inputRef}
          />

          {isTextFocus && textValue.length > 0 && clear && (
            <button
              type="button"
              className="field-btn _input-clear _active"
              onClick={() => {
                //setIsTextFocus(false);
                setTextValue("");
                inputRef.current.focus();
              }}
            >
              <span className="hide">입력값삭제</span>
            </button>
          )}
        </div>
      ) : (
        <>
          <div
            className={`field-outline${wrapperClass ? " " + wrapperClass : ""}${
              readonly === true ? " readonly" : ""
            }${disabled === true ? " disabled" : ""}`}
          >
            {label && (
              <label
                className={`field-label${isTextFocus ? " _is-active" : ""}`}
                htmlFor={id}
                data-name={id}
              >
                {label}
              </label>
            )}
            <div className="field-input grow _input">
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                title=""
                onFocus={() => setIsTextFocus(true)}
                onChange={(e) => {
                  onChange && onChange();
                  onChangeInput(e);
                }}
                onBlur={() => {
                  onBlur && onBlur();
                  setTimeout(() => {
                    isTextFocus === true && !textValue && setIsTextFocus(false);
                  }, 1000);
                }}
                value={textValue}
                readOnly={readonly}
                disabled={disabled}
                min={min}
                max={max}
                maxLength={maxLength}
                style={
                  textValue && textValue.length > 0 && clear
                    ? { width: "calc(100% - 2.4rem)" }
                    : { width: "100%" }
                }
                className={`${type !== "text" ? "_format" : ""}${
                  type === "number" ? " _number" : ""
                }${type === "password" ? " _password" : ""}${
                  alignRight ? " alR" : ""
                }`}
                ref={inputRef}
              />

              {isTextFocus && textValue && textValue.length > 0 && clear && (
                <button
                  type="button"
                  className="field-btn _input-clear _active"
                  onClick={() => {
                    //setIsTextFocus(false);
                    setTextValue("");
                    inputRef.current.focus();
                  }}
                >
                  <span className="hide">입력값삭제</span>
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const CustomInput = ({
  type = "text",
  length = 2,
  maxLength = 4,
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
        data-secureline={maxLength - length}
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
  switchType = "",
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
        switchType.startsWith("switch")
          ? `field-switch${switchType.endsWith("-text") ? " txt" : ""}${
              switchType.endsWith("-lg") ? " lg" : ""
            }`
          : `field-checkbox${switchType ? " " + switchType : ""}`
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
