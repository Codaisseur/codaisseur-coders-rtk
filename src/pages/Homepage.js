// src/pages/Homepage.js
import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function Homepage() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchPosts() {
    setData({ ...data, loading: true }); //before fetching data, loading is set to true

    const response = await axios.get(`${API_URL}/posts`);

    const posts = response.data.rows;

    setData({
      loading: false, //once the data is fetched, loading is set to false
      posts: posts,
    });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ marginLeft: 20 }}>
      <h2>Posts</h2>
      {data.posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p className="meta">
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              <span className="tags">
                {post.tags.map((tag) => {
                  return (
                    <React.Fragment key={tag.id}>
                      <span className="Tag">{tag.tag}</span>{" "}
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
