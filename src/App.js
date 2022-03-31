
import React from "react";
import './index.css';
import {useState} from "react";
//import Loader from "./loader.js";

// function Alts({url, alte})
// {
//   var alter= "image of avatar of " + { alte };
//   return <img class= "image" src ={url} alt= {alter} />;
// }
 export default function App()
  {
    const [data,setdata]= useState([]);
    const [isLoader, setIsLoader]= useState(false);
    const loaddata= async() =>{
      setIsLoader(true);
      setdata([]);
      const res = await fetch("https://reqres.in/api/users?page=1");
      const jsondata= await res.json();
      setTimeout(()=>{
        setdata(jsondata["data"]);
        setIsLoader(false);
      },2000);
  };
  return (
    <>
    <div className="App">
    <div class="topnav">
    <a href="#Home"> Home</a>
     <a href="#AboutUs"> About Us</a>
     <a href="#Contact"> Contact</a>
  
    
    
   </div>
   <h1 class="heading"><center>Welcome To Web Application</center></h1>
   <h3><center>Click on<b><span class="click"> GET USERS</span></b> to get the users details. </center></h3>
   <div class= "topnav-right">
        <button class="css-button" key="getdata" onClick={loaddata} >GET USERS</button>
      </div>
    
   <ul class="lists">
    {data.map(({ id, avatar, first_name, last_name, email})=>(
      <li class="lis" key={id} style={{listStyle: "none"}}>
     
      <h1>{avatar+" "+first_name}</h1>
      
       <h1>{first_name+ " " + last_name}</h1>
       <h3>{email}</h3>
      </li>
    ))}
   </ul>

   <div>
     <svg class="wavem" xmlns="http://www.w3.org/2000/svg" viewBox="200 0 900 300"><path fill="#333" fill-opacity="0.8" d="M0,224L40,192C80,160,160,96,240,112C320,128,400,224,480,224C560,224,640,128,720,106.7C800,85,880,139,960,149.3C1040,160,1120,128,1200,117.3C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
   </div>
   </>
  );
}
// export default App;