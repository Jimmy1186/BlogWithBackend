const Home = () => {
 const handleClick1 = () => {
   console.log("Join1");
 };
 const handleClick2 = () => {
   console.log("Join2");
 };
 const handleClick3 = (name,e) => {
   console.log("Join3 " + name,e.target);
 };

 return (
   <div className="home">
 
     <button onClick={handleClick1}>JOIN</button>    {/* 不包含參數不會自動function */}
     <button onClick={handleClick2()}>JOIN</button> {/*會自動function 1次 */}
     <button
       onClick={(e) => {
         handleClick3("Jimmy",e);
       }}
     >
       JOIN
     </button> {/*包參數不會自動function */}
   </div>
 );
};