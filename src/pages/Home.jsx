import React, { useState } from "react";
import useFetch from "../custom_hooks/useFetch";
import Post from "../Components/Post";
import Pagination from "../Components/Pagination";

const Home = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <h1 className="text-primary mb-3">Mohan's Blog post</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
