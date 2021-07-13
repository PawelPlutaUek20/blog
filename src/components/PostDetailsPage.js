import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentCard from "./CommentCard/CommentCard";

const PostDetailPage = () => {
  const [user, setUser] = useState("");
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { userId, postId } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`),
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
    ])
      .then(([resUser, resPosts, resComments]) =>
        Promise.all([resUser.json(), resPosts.json(), resComments.json()])
      )
      .then(([jsonUser, jsonPosts, jsonComments]) => {
        setUser(jsonUser.name);
        setPost(jsonPosts.find(({ id }) => parseInt(id) === parseInt(postId)));
        setComments(jsonComments);
      });
  }, [userId, postId]);

  return (
    <div>
      <div>
        <b>{user}</b>
      </div>
      <h4>{post.title}</h4>
      <div>{post.body}</div>
      <br />
      <div>
        {comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostDetailPage;
