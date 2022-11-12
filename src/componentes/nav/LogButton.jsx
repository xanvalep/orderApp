 import {Link } from "react-router-dom";

 export default function LogButton (props) {
     let logButton = undefined;
      if (props.logged) {
        logButton = (
         
          <button className="btn btn-outline-danger">LogOut</button>
          
        );
        
      }else{
        logButton =(
        <Link to={"/login"}>
        <button className="btn btn-outline-success">LogIn</button>; 
           </Link>);    
        
      }
     return (

        <div>
            {logButton}
        </div>
            
            
    );
}
