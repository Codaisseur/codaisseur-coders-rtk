// src/pages/Homepage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { selectFeedPosts } from "../store/feed/selectors";
import { fetchPosts } from "../store/feed/actions";

import "./Homepage.css";

export default function Homepage() {
  const dispatch = useDispatch();

  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    <div style={{ marginLeft: 20 }}>
      <h2>Posts</h2>
      {posts.map((post) => {
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
      <button onClick={() => dispatch(fetchPosts)}>Load more</button>
    </div>
  );
}
