import styles from "./navigation.module.css";
import Link from "next/link";
import Button from "../Button";

export default function Navigation() {
  return (
    <div className={styles.navbar}>
      <h1>
        <Link className={styles.logo} href="/">
          GALLERY
        </Link>
      </h1>
      <div className={styles.nav}>
        <Link href="/art-pieces" className={styles.link}>
          Gallery
        </Link>
        <Link href="/favorites" className={styles.link}>
          Favorites
        </Link>
        <Link href="/">
          <Button className={styles.button}>Spotlight</Button>
        </Link>
      </div>
    </div>
  );
}
