import React from "react";

const UsersList = ({ first, last }) => {
  return (
    <div>
      <ul>
        <li>FirstName : {first}</li>
        <li>LastName : {last}</li>
      </ul>
    </div>
  );
};

export default UsersList;
