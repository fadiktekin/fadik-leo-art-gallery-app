import styles from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>GALLERY</h1>
      <div className={styles.nav}>
        <Link href="/art-pieces" className={styles.link}>
          Gallery
        </Link>
        <Link href="/favorites" className={styles.link}>
          Favorites
        </Link>
        <Link href="/index">
          <button className={styles.button}>Spotlight</button>
        </Link>
      </div>
    </div>
  );
}
