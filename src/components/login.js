import { useReducer, useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";

function LoginComponent(){
 const [msg,setMsg]=useState("")
  const[error,setError]=useState("");
  const navigate = useNavigate();

  const reduxAction=useDispatch();

  const init = {
    uid:"",
    pwd:""
  }
  const reducer=(state,action)=>{
    switch(action.type)
  {
    case "update":
        return{...state,[action.field]:action.val}
    
    case "reset":
        return init;
    
        default:
          return state;
  }
  }
  const[info,dispatch]=useReducer(reducer,init);

  const sendData = (e) => {
    e.preventDefault();
    const reqOption={
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(info)
    }
    fetch("https://localhost:7028/api/UserManagement/CheckLogin",reqOption)
    .then(resp=> {if(resp.ok)
                    {
                      console.log(resp.status)
                      return resp.text();
                    }
                  else  
                  {
                    console.log(resp.statusText)
                    throw new Error("Server Error");
                  }
    })
    .then(text=>text.length?JSON.parse(text):{})
    .then(obj=>{
      if(Object.keys(obj).length===0)
      {
        setMsg("Wrong Username and Password");
      }
      else{
        if(obj.status===false)
        {
          alert("request has not been Approved");
        }
        else{
              reduxAction(login())
              if(obj.typeid===1)
                navigate("/Admin_home");
              
              else if(obj.typeid===2)
                navigate("/Teacher_home");

              else
              navigate("/Parent_home");
              
          
        } 
      }
    })
    
    .catch(err=>setError("Login Failed Try Again"||err.toString()))

    
    
    
  }
  


    return(
        <div>
            <h1>Login Form</h1>
            <form  className="container">

              <div className="mb-3">
                <label htmlFor="uid" className="form-label">Username : </label>
                <input type='text'  className="form-control" id="uid" name='uid' value={info.uid} onChange={(e)=>{dispatch({type:'update',field:'uid',val:e.target.value})}}/><br/>
              </div>

              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password : </label>
                <input type="password" className="form-control" name='pwd' id="pwd" value={info.pwd} onChange={(e)=>{dispatch({type:'update',field:'pwd',val:e.target.value})}}/>
              </div>
                <button type='submit' className="btn btn-primary mb-3" onClick={(e)=>{sendData(e)}}>Login</button>
                <button type='reset' className="btn btn-primary mb-3" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>


            </form>
            
            <p>{JSON.stringify(info)}</p>
            <p>{msg}</p>
            <p>{error}</p>
            
        </div>
        
    )
}
export default LoginComponent;