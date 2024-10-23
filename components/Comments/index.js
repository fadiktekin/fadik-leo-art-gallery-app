import styles from "./comments.module.css";

export default function Comments({ comments }) {
  return (
    <>
      {!!comments ? (
        comments.map(({ date, comment }) => {
          return (
            <div key={date} className={styles.comment}>
              <h5 className={styles.date}>{date}</h5>
              <p className={styles.comment_text}>{comment}</p>
            </div>
          );
        })
      ) : (
        <p>Nobody commented yet</p>
      )}
    </>
  );
}
