import styles from "./form.module.css";

export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const comment = form.elements.comment.value;
    onSubmitComment(comment);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <legend className={styles.legend}>Add comment</legend>
        <label htmlFor="comment">
          <textarea
            name="comment"
            id="comment"
            type="textarea"
            className={styles.textarea}
          ></textarea>
        </label>
        <button className={styles.button}>Send</button>
      </form>
    </>
  );
}
