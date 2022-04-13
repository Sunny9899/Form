import {useState} from "react";

export const Form=()=>{

    let [user,setUser]=useState("");
    let [pass,setPass]=useState("");

    let inpt=document.getElementById("msg");

    const submitForm=()=>{
        //let User=user.trim().split("").map(String);
        if(user!=="" && pass!==""){
            alert("Welcome");
            inpt.textContent=`Welcome ${user}`
        }
        else{
            alert("Please fill empty fields");
            inpt.textContent="";
        }
    }

    return(
        <div>

        <input placeholder="Enter email" type="text" className="inpt"
        onChange={(e)=>{
            setUser(e.target.value);
        }}
        />
        <input placeholder="Enter password" type="password" className="inpt"
        onChange={(p)=>{
            setPass(p.target.value);
        }}
        />
        <button onClick={()=>{submitForm();}}>Submit</button>


      <div id="msg"></div>
        </div>
    );
}