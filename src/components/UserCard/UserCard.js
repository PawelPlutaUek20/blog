import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <p>
        <b>{user.name}</b>
      </p>
      <a href="/#">{user.email}</a>
      <br />
      <a href="/#">{user.phone.split(" ")[0]}</a>
      <br />
      <a href="/#">{user.website}</a>
      <br />
      <br />
      <div>{user.company.name}</div>
      <div>{user.company.catchPhrase}</div>
      <div>
        <b>{user.company.bs}</b>
      </div>
      <br />
      <button>Details</button>
    </div>
  );
};

export default UserCard;
