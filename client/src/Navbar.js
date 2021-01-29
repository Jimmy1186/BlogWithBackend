import {Link} from 'react-router-dom'

const Navbar = () => {
 return (  
  <nav className="navbar">
   <h1>Jimmy Blog</h1>
   <div className="links">
    <Link to='/'>Home</Link>
    <Link to='create'>New Blog</Link>
    {/* 用<Link>的意義在於不用再request server 回傳一份html讓速度更快 */}
   </div>
  </nav>
 );
}
 
export default Navbar;