export default function Comments({ comments }) {
  return (
    <>
      {!!comments ? (
        comments.map(({ date, comment }) => {
          return (
            <div key={date}>
              <h5>{date}</h5>
              <p>{comment}</p>
              <hr></hr>
            </div>
          );
        })
      ) : (
        <p>Nobody commented yer</p>
      )}
    </>
  );
}
