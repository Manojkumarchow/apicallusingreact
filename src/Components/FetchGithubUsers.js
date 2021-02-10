import React, { useState, useEffect } from "react";
import axios from "axios";
function FetchGithubUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <center>
        <h1 className="text-success">Contacts</h1>
      </center>
      <hr />
      <ol>
        {users.map((user) => (
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-info">Id: {user.id}</h3>
              <h4 className="card-subtitle mb-2 text-danger">
                Name: {user.login}
              </h4>
              <img
                src={user.avatar_url}
                alt={user.login}
                width="100"
                height="100"
              />
              <h5 className="card-text text-warning">
                Repositories Link: <a href={user.repos_url}>{user.repos_url}</a>
              </h5>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default FetchGithubUsers;
