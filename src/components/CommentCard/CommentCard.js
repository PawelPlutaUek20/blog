import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div>
      <div>
        <b>{comment.name}</b>
      </div>
      <a href="#/">{comment.email}</a>
      <div>{comment.body}</div>
      <br />
    </div>
  );
};

export default CommentCard;
