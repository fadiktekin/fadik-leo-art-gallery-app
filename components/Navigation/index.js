import styles from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>GALLERY</h1>
      <Link href="/art-pieces" className={styles.link}>
        Gallery
      </Link>
      <Link href="/spotlight">
        <button className={styles.button}>Spotlight</button>
      </Link>
    </div>
  );
}
