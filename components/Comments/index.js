import styles from "./comments.module.css";

export default function Comments({ comments }) {
  return (
    <>
      <h3 className={styles.comments__title}>Comments</h3>
      {!!comments ? (
        comments.map(({ date, comment }) => {
          return (
            <div key={date} className={styles.comment}>
              <h5 className={styles.comment__date}>{date}</h5>
              <p className={styles.comment__text}>{comment}</p>
            </div>
          );
        })
      ) : (
        <p>Nobody commented yet</p>
      )}
    </>
  );
}
