import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { CircularProgress } from "@mui/material";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <CircularProgress color="primary" />
      </div>
    );
  }
  return (
    <div className="app">
      <div className="cards">
        {posts.map((post, key) => {
          return (
            <div className="card" key={key}>
              <div className="card-body">
                <h1>Nome: {post.name}</h1>
                <div className="line"></div>
                <h2>Email : {post.email}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
