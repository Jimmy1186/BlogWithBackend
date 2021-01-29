import {Link} from 'react-router-dom'

const BlogList = (props) => {
 //(props)或者可以打‵({blog})‵就不用再宣告一次了
 const data=props.blogs;
 const titles=props.titles;


 return (  
  <div className="blog-list">
    <h1>{titles}</h1>
    {data.map((blog)=>(
      <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
         <h2>{blog.title}</h2>
         <img src={blog.routePic} alt="da" />
        </Link>
      </div>
     ))}
  </div>
 );
}
 
export default BlogList;