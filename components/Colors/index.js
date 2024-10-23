import styles from "./colors.module.css";

export default function Colors({ colors }) {
  console.log(colors);
  return (
    <div className={styles.colorpalette}>
      <h3>COLOR PALETTE</h3>
      {colors ? (
        colors.map((color) => {
          return (
            <div
              data-testid={color}
              key={color}
              className={styles.color}
              style={{ backgroundColor: `${color}` }}
            ></div>
          );
        })
      ) : (
        <p>No color palette available</p>
      )}
    </div>
  );
}
