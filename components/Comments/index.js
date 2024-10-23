export default function Comments({ comments }) {
  return (
    <>
      {!!comments ? (
        comments.map(({ date, comment }) => {
          return (
            <>
              <h5>{date}</h5>
              <p>{comment}</p>
              <hr></hr>
            </>
          );
        })
      ) : (
        <p>Nobody commented yer</p>
      )}
    </>
  );
}
