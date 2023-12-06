import { useState } from "react";
import { List } from "../../../components/UI/List";
import { Options } from "../../../components/Common/Options";
import styles from "./index.module.scss";

export default function ListPage() {
  const [subTab, setSubTab] = useState("List");

  return (
    <div id="cp-wrap">
      <ul className={`${styles.subTab}`}>
        <li
          className="item"
          onClick={() => {
            setSubTab("List");
          }}
          style={{ fontWeight: subTab === "List" ? "bold" : "normal" }}
        >
          List
        </li>
      </ul>
      <Options type={`${subTab}`} component={subTab} />
      <h2 className="cp-tit dep02">{subTab}</h2>
      <br />
      <List />
    </div>
  );
}
