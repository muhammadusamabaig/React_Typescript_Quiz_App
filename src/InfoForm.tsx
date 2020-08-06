import React, { useState } from 'react';


import './App.css';

function InfoForm() {
  const [numstate, setnumstate] = useState("")
  const [levelstate, setlevelstate] = useState<string>("easy")

function QuestionNoSelection (e:any){
  
  if(parseInt(e.target.value)<=50){setnumstate(e.target.value)}
  else{
    setnumstate("50")
    }
  
  
}

function FetchData(){
  if(numstate!==""){
  window.location.assign('/'+numstate+'/'+levelstate)
  }else{
    alert('please fill complete information')
  }
}





  return (
    <div>
      <div className="row d-none d-md-block" style={{ backgroundColor: "#e6edea", height: "100vh", width: "100%", paddingTop:"10%",overflow: "hidden" }}>

<div className="col-12 text-center align-self-center" >
  <h5 style={{ fontFamily: "Lucida Console, Courier, monospace",color:"#e334c0" }}>Online Quiz</h5>
  <input type="number" onChange={(e) => { QuestionNoSelection(e) }} style={{ height: "40px", width: "50%", borderBottom: "2px solid #e334c0", borderTop: "0px", borderLeft: "0px", borderRight: "0px", backgroundColor: "#e6edea" }} placeholder="Enter no of Question" />
<br/><span className="text-left">Question Limit 1 to 50</span>

  <br />
  <select onChange={(e) => { setlevelstate(e.target.value) }} style={{ height: "40px", width: "50%", marginTop: "1%", borderTop: "0px", borderBottom: "2px solid #e334c0", borderLeft: "0px", borderRight: "0px", backgroundColor: "#e6edea" }} >
    <option value="easy">easy</option>
    <option>hard</option>
  </select>

  <br />

{/* <Link  to={'/'+numstate+'/'+levelstate}></Link> */}
<button onClick={()=>{FetchData()}} style={{ height: "40px", backgroundColor: "#e334c0", color: "white", border: "2px solid #e334c0", width: "50%",fontSize:"20px", marginTop: "1%" }} >Start Quiz</button>
</div>
</div>








<div className="row d-xl-none d-lg-none d-md-none" style={{ backgroundColor: "#e6edea", height: "100vh", width: "100%", overflow: "hidden" }}>

      <div className="col-12 text-center align-self-center" >
        <h5 style={{ fontFamily: "Lucida Console, Courier, monospace",color:"#e334c0" }}>Online Quiz</h5>
        <input type="number" onChange={(e) => { QuestionNoSelection(e) }} style={{ height: "40px", width: "80%", borderBottom: "2px solid #e334c0", borderTop: "0px", borderLeft: "0px", borderRight: "0px", backgroundColor: "#e6edea" }} placeholder="Enter no of Question" />
<br/><span className="text-left">Question Limit 1 to 50</span>
      
        <br />
        <select onChange={(e) => { setlevelstate(e.target.value) }} style={{ height: "40px", width: "80%", marginTop: "1%", borderTop: "0px", borderBottom: "2px solid #e334c0", borderLeft: "0px", borderRight: "0px", backgroundColor: "#e6edea" }} >
          <option value="easy">easy</option>
          <option>hard</option>
        </select>

        <br />

{/* <Link  to={'/'+numstate+'/'+levelstate}></Link> */}
<button onClick={()=>{FetchData()}} style={{ height: "40px", backgroundColor: "#e334c0", color: "white", border: "2px solid #e334c0", width: "80%",fontSize:"20px", marginTop: "1%" }} >Start Quiz</button>
     </div>
    </div>
    </div>
  );
}

export default InfoForm;

