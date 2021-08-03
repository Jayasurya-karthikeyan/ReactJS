  const commentugal = comments.map((commentoda) => {
    return(
      <div key={commentoda.id}>
        <p>{commentoda.comment}</p>
        <p>-- {commentoda.author},
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(commentoda.date)))}
        </p>
      </div>
    );
  });