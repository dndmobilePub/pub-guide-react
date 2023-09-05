import { useState } from "react";
import { TabMenu } from "../../../components/UI/TabMenu";
import { Options } from "../../../components/Common/Options";

export default function TabMenus() {
  const [vertical, setVertical] = useState(false);
  return (
    <div id="cp-wrap">
      <Options component={"TabMenu"}/>
      <section className="cp-content">
        <h2 className="cp-tit dep02">block 형, 새창으로 이동</h2>
        <div className="component">
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
      </section>
      <section className="cp-content">
        <h2 className="cp-tit dep02">왼쪽 정렬, 액션</h2>
        <div className="component">
          <TabMenu
            type={1}
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
            ]}
          />
        </div>
      </section>
      <section className="cp-content">
        <h2 className="cp-tit dep02">가운데 정렬, line top</h2>
        <div className="component">
          <TabMenu
            type={2}
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
            ]}
          />
        </div>
      </section>
      <section className="cp-content">
        <h2 className="cp-tit dep02">가로 / 세로</h2>
        <div className="component">
          <TabMenu
            type={3}
            menus={[
              {
                title: "horizontal",
                onclick: ()=>{
                  setVertical(false);
                },
              },
              {
                title: "vertical",
                onclick: ()=>{
                  setVertical(true);
                },
              },
            ]}
          />
          <TabMenu
            vertical={vertical}
            type={1}
            style={{
              width: '400px', 
              maxWidth: '100%',
            }}
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
              {
                title: "Tab05",
                href: "#새창",
                blank: true,
                contents: ``,
              },
              {
                title: "Tab06",
                href: "#새창",
                blank: true,
                contents: ``,
              },
              {
                title: "Tab07",
                href: "#새창",
                blank: true,
                contents: ``,
              },
              {
                title: "Tab08",
                href: "#새창",
                blank: true,
                contents: ``,
              },
              {
                title: "Tab09",
                href: "#새창",
                blank: true,
                contents: ``,
              },
              {
                title: "Tab10",
                href: "#새창",
                blank: true,
                contents: ``,
              },
            ]}
          />
        </div>
      </section>
      <section className="cp-content">
        <h2 className="cp-tit dep02">오른쪽 정렬, 스크롤 이동</h2>
        <div className="component">
          <TabMenu
            type={4}
            menus={[
              {
                title: "menu0",
                href: "#새창",
                blank: true,
                contents: `Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
              },
              {
                title: "menu1",
                href: "#새창",
                blank: true,
                contents: `Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
              },
              {
                title: "menu2",
                href: "#새창",
                blank: true,
                contents: `Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
              },
              {
                title: "menu3",
                href: "#새창",
                blank: true,
                contents: `Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
              },
              {
                title: "menu4",
                href: "#새창",
                blank: true,
                contents: `Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
