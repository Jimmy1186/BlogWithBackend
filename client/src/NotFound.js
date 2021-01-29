import { Link } from "react-router-dom";

const NotFound = () => {
 return ( 
  <div className="not-found">
   <h2>Sorry</h2>
   <h3>that page doesn't exist (｡ŏ_ŏ)</h3>
   <Link to="/">Back to Home page</Link>
  </div>
  );
}
 
export default NotFound;