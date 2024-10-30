import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/posts">
        <button className={styles.button}>
          Go to <strong>Posts</strong>
        </button>
      </Link>
    </div>
  );
}
