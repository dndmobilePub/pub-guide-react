import { useState } from "react";
import styles from "./Guide.module.scss";
import { TabMenu } from "../../UI/TabMenu";

export const TabMenuGuide = () => {
  const [type, setType] = useState(1);
  return (
    <>
      <h3>👀 탭메뉴 컴포넌트 사용방법</h3>
      <br />

      <code className={`${styles.code}`}>
        {`import { TabMenu } from "src/component/UI/TabMenu";`}
        <br />
        {`<TabMenu`}
        <br />
        &nbsp;&nbsp;
        {`type={`}
        <span
          onClick={(e) => {
            setType(
              type === 1
                ? 2
                : type === 2
                ? 3
                : type === 3
                ? 4
                : type === 4
                ? 0
                : 1
            );
          }}
        >
          {type}
        </span>
        {`}`}
        <br />
        &nbsp;&nbsp;
        {`menus={[`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`{title: "Tab00", href: "#새창", blank: true, contents: ''},`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`{title: "Tab01", href: "#새창", blank: true, contents: ''},`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`{title: "Tab02", href: "#새창", blank: true, contents: ''},`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`{title: "Tab03", href: "#새창", blank: true, contents: ''},`}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`{title: "Tab04", href: "#새창", blank: true, contents: ''},`}
        <br />
        &nbsp;&nbsp;{`]}`}
        <br />
        {`/>`}
      </code>
      <br />
      <h3>😊 아래와 같이 보여져요!</h3>
      <br />
      <div className={`${styles.box}`}>
        <TabMenu
          type={type}
          menus={[
            {
              title: "Tab00",
              href: "#새창",
              blank: true,
              contents: ``,
            },
            {
              title: "Tab01",
              href: "#새창",
              blank: true,
              contents: ``,
            },
            {
              title: "Tab02",
              href: "#새창",
              blank: true,
              contents: ``,
            },
            {
              title: "Tab03",
              href: "#새창",
              blank: true,
              contents: ``,
            },
            {
              title: "Tab04",
              href: "#새창",
              blank: true,
              contents: ``,
            },
          ]}
        />
      </div>
      <br />
    </>
  );
};
