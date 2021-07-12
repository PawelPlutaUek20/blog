import React from "react";

const UserCard = ({ user }) => {
  return <pre key={user.id}>{JSON.stringify(user, undefined, 2)}</pre>;
};

export default UserCard;
