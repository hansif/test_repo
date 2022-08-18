// import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        pic
      </div>
      {user&&<div className="topCenter">
        <ul className="topList">
         
            
       <a href="/display">Home</a> 
          </ul>
        
        
      </div>}
    </div>
  );
}