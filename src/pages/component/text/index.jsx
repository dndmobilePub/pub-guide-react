import Link from "next/link";
import ControlBox from "../../../components/Common/ControlBox";
import styles from "../../page.module.scss";
import { useRouter } from "next/router";

export default function TextPage() {
  const { route } = useRouter();
  return (
    <div id="cp-wrap">
      <nav className={`${styles.subTab}`}>
        <Link
          className={`${styles.item} ${route.endsWith("title") ? styles.active : ""}`}
          href="/component/title"
        >
          Title
        </Link>
        <Link
          className={`${styles.item} ${route.endsWith("text") ? styles.active : ""}`}
          href="/component/text"
        >
          Text
        </Link>
      </nav>
      <ControlBox type="Text" />
    </div>
  );
}