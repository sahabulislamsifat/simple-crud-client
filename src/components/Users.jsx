import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const Users = () => {
  // const data = useLoaderData();
  // console.log(data);

  const loadedUsers = useLoaderData();
  const [users, setUser] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log("user delete", _id);
    fetch(`http://localhost:6100/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remaining = users.filter((u) => u._id !== _id);
          setUser(remaining);
        }
      });
  };

  return (
    <div>
      <h2>{users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email} {user._id}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>DELETE</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
