import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostCard from "./PostCard/PostCard";

const UserDetailPage = () => {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
      fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`),
    ])
      .then(([resUser, resPosts]) =>
        Promise.all([resUser.json(), resPosts.json()])
      )
      .then(([jsonUser, jsonPosts]) => {
        setUser(jsonUser.name);
        setPosts(jsonPosts);
      });
  }, [id]);

  return (
    <div>
      <div>
        <b>{user}</b>
      </div>
      <div>
        {posts.map((post) => (
          <PostCard post={post.title} />
        ))}
      </div>
    </div>
  );
};

export default UserDetailPage;
