import Link from "next/link";
import ControlBox from "../../../components/Common/ControlBox";
import styles from "../../page.module.scss";
import { useRouter } from "next/router";

export default function ButtonPage() {
  const { route } = useRouter();
  return (
    <div id="cp-wrap">
      <nav className={`${styles.subTab}`}>
        <Link
          className={`${styles.item} ${route.endsWith("button") ? styles.active : ""}`}
          href="/component/button"
        >
          Button
        </Link>
        <Link
          className={`${styles.item} ${route.endsWith("buttonWrap") ? styles.active : ""}`}
          href="/component/buttonWrap"
        >
          ButtonWrap
        </Link>
      </nav>
      <ControlBox type="ButtonWrap" />
    </div>
  );
}