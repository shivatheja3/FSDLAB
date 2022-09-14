import React from "react";
import './App.css';
import Axios from 'axios';

function App() {
  // const [sname,changeSname]=useState("");
  // const [tech,changeTechname]=useState("");
  // const [subStatus,changeSubstatus]=useState("");
  const nameRef=React.useRef();
  const techRef=React.useRef();
  const subRef=React.useRef();
  const submit=()=>{
    Axios.post('http://localhost:4000/aliens/add',{
      name:nameRef.current.value,
      tech:techRef.current.value,
      sub:subRef.current.value
    }).then(()=>{
      console.log("Posted")
    }).catch((e)=>{
      console.log(e);
    })
  }
  return (
    <div className="App">
      <h1>Post Crud Operations</h1>
      <input type="text"  ref={nameRef}/>
      <br></br>
      <input type={"text"} ref={techRef}/>
      <br></br>
      <input type={"text"} ref={subRef}/>
      <br>
      </br>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
