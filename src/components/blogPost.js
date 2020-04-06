import React from "react";
import PropTypes from "prop-types";

import usePosts from "../hooks/usePosts";
import CardLayout from "./cardLayout";

// Individual Post
const Post = ({ title, date, url, desc }) => (
  <article>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <h2>{title}</h2>
    </a>
    <p>
      <small>Posted on: {date}</small>
    </p>
    <p>{desc}</p>
    <hr />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const BlogPosts = () => {
  const posts = usePosts();

  return (
    <div>
      {posts.map((post) => (
        <CardLayout
          cardClass="blog-card"
          key={post.id}
          title={post.title}
          url={post.url}
        >
          {post.desc}
        </CardLayout>
      ))}
    </div>
  );
};

export default BlogPosts;
