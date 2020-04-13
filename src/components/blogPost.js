import React from "react";
import PropTypes from "prop-types";

import usePosts from "../hooks/usePosts";
import CardLayout from "./cardLayout";

const BlogPosts = () => {
  const posts = usePosts();

  return (
    <React.Fragment>
      {posts.map((post) => (
        <CardLayout
          cardClass="blog-card"
          key={post.id}
          title={post.title}
          buttonTitle="Link to post"
          buttonLink={post.url}
        >
          {post.desc}
        </CardLayout>
      ))}
    </React.Fragment>
  );
};

export default BlogPosts;
