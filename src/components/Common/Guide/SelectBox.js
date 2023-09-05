import styles from "./Guide.module.scss";
import { Field, TextInput } from "../../UI/Form";
import { SelectBox } from "../../UI/SelectBox";

export const SelectBoxGuide = () => {
  const list = ["선택해주세요", "naver.com", "daum.net", "gmail.com"];
  const list2 = ["선택", "SKT", "KT", "LG U+", "알뜰폰"];

  return (
    <>
      <h3>👀 셀렉트박스 컴포넌트 사용방법</h3>
      <br />
      <code className={`${styles.code}`}>
        {`import { SelectBox } from "src/component/UI/SelectBox";`}
        <br />
        <br />
        {`<Field wrap>`}
        <br />
        &nbsp;&nbsp;
        {`<TextInput placeholder="메일아이디" noWrap />`}
        <br />
        &nbsp;&nbsp;{`<span className="field-txt">@</span>`}
        <br />
        &nbsp;&nbsp;{`<SelectBox `}
        {` list=["${list[0]}","${list[1]}","${list[2]}","${list[3]}"...`}
        {`] `}
        {`/>`}
        <br />
        {`</Field>`}
        <br />
        {`<Field wrap>`}
        <br />
        &nbsp;&nbsp;{`<SelectBox `}
        {` type="custom"
            selectTitle="통신사를 선택해주세요" placeholder="휴대전화 앞자리" list=["${list2[0]}","${list2[1]}","${list2[2]}","${list2[3]}","${list2[4]}"...`}
        {`] `}
        {`/>`}
        <br />
        {`</Field>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <Field wrap>
          <TextInput
            type="tel"
            placeholder="메일아이디"
            maxLength={10}
            noWrap
          />
          <span className="field-txt">@</span>
          <SelectBox list={list} />
        </Field>
        <br />
        <Field wrap>
          <SelectBox
            type="custom"
            placeholder="휴대전화 앞자리"
            selectTitle="통신사를 선택해주세요"
            list={list2}
          />
        </Field>
      </div>
      <br />
    </>
  );
};
