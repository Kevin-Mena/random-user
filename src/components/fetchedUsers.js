import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../users/usersSlice";
import { useEffect } from "react";
import UsersList from "./usersList";

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Something went wrong...</h1>
      </div>
    );
  }
  return (
    <>
      <ul>
        {users.map((user) => (
          <UsersList key={user.email} first={user.first} last={user.last} />
        ))}
      </ul>
    </>
  );
};

export default FetchedUsers;
