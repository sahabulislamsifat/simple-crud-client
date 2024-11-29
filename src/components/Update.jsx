import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);

    const userUpdate = { name, email };
    fetch(`http://localhost:6100/users/${loadUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user update successfully");
        }
      });
  };

  return (
    <div>
      <h2>Update Information of {loadUser.name}</h2>
      <form action="" onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadUser.name} />
        <br />
        <input type="email" name="email" defaultValue={loadUser.email} />
        <br />
        <input type="submit" value={"update"} />
      </form>
    </div>
  );
};

export default Update;
