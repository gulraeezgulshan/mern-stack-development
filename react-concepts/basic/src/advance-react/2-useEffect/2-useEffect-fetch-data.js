import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // function to retrived users from github
  const getUsers = async () => {
    const res = await fetch(url);
    const res_users = await res.json();
    setUsers(res_users);
    console.log(res_users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <>
              <li>
                {" "}
                {login} : {avatar_url}
              </li>
              <li>
                <img src={avatar_url} height={50} />
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
