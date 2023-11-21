import { useState } from "react";
import styles from "./Guide.module.scss";
import { TabMenu } from "../../UI/TabMenu";

export const TabMenuGuide = () => {
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
