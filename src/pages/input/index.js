import { CustomInput, Field, TextInput } from "../../components/UI/Form"

export const Inputs = () => {
  return (
    <>
      <Field label="text : default" info="안내성 메세지">
        <TextInput placeholder="기본동작 INPUT" />
        <TextInput placeholder="예외 : clear btn 없음" clear={false}/>
        <TextInput initText="readonly" readonly={true} />
        <TextInput placeholder="disabled" disabled={true} />
      </Field>
      <br/>
      <br/>
      <Field label="text : valid" valid="입력값의 유효성이 정상입니다." info="안내성 메세지">
        <TextInput placeholder="placeholder" />
      </Field>
      <br/>
      <br/>
      <Field label="text : invalid" inValid="오류체크 메세지 출력" info="안내성 메세지">
        <TextInput initText="오류체크" placeholder="placeholder" />
      </Field>
      <br/>
      <br/>
      <Field label="number" info="안내성 메세지">
        <TextInput type="tel" placeholder="0" />
      </Field>
      <br/>
      <br/>
      <Field label="price" info="안내성 메세지">
        <TextInput type="tel" placeholder="₩0" alignRight />
      </Field>
      <br/>
      <br/>
      <Field label="기본형 : password" info="안내성 메세지">
        <TextInput type="password" placeholder="●●●●" maxLength={4}/>
      </Field>
      <br/>
      <br/>
      <Field label="특문 커스텀 : password 부분입력" info="안내성 메세지" wrap>
        <CustomInput type="password" length={2} secureLength={2} maxLength={4}/>
      </Field>
      <br/>
      <br/>
      <Field label="휴대전화번호" info="안내성 메세지" wrap>
        <TextInput placeholder="휴대전화 앞자리" maxLength={3} noWrap/>
        <span className="field-txt">-</span>
        <TextInput placeholder="휴대전화 앞자리" maxLength={4} noWrap/>
        <span className="field-txt">-</span>
        <TextInput placeholder="휴대전화 앞자리" maxLength={4} noWrap/>
      </Field>
      <br/>
      <br/>
      <Field label="주민등록번호" info="안내성 메세지" wrap>
        <TextInput placeholder="생년월일 6자리" maxLength={6} noWrap/>
        <span className="field-txt">-</span>
        <CustomInput type="text" length={1} secureLength={6} maxLength={7}/>
      </Field>
    </>
  )
}
