import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
const { id } = useParams();
const {data:blogs,error,isLoading} = useFetch('http://localhost:8000/blogs/'+id)
const history=useHistory();

const handleClick=()=>{
  fetch('http://localhost:8000/blogs/' + blogs.id,{
    method:'DELETE'
  }).then(()=>{
    history.push('/')
  })
}


 return ( 
  <div className="blog-details">
   <h2>Blog Details - { id }</h2>
   {error && <div>{error}</div>}
   {isLoading && <h4>Loading...</h4>}
   { blogs && (
    <article>
        <div className="blog-preview">
        <h2>{blogs.title}</h2>
        <h3>{blogs.time}</h3>
        <img src={blogs.routePic} alt="da" />
        {<div>{blogs.body}</div>}
      </div>
     <button onClick={handleClick}>Delete</button>
    </article>
   ) }
  </div>
  );
}
 
export default BlogDetails;