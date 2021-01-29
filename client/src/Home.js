import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const  { data: blogs,isLoading,error } =useFetch('http://localhost:8000/blogs');
   


  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isLoading && <h4>Loading...</h4>}
     {blogs && <BlogList blogs={blogs} titles="About me"/>}
      {/*把blog資料傳到props*/}
       {/*<BlogList blogs={blogs.filter((blog) => blog.id === 3)} titles="Other"/>*/}
      
    </div>
  );
};

export default Home;
