import { Accordion } from "../../../components/UI/Accordion";
import { Field } from "../../../components/UI/Form";
import { accordionData } from "../../../data/accordionData";

export default function Accordions() {
  return (
    <>
    <Field>
      <div className="accordion-wrap">
        {accordionData.map(({ title, content, id }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
    </Field>
    </>
  );
}
