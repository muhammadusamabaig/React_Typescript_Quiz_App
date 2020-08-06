import React from 'react';
import './App.css';


export const ResultCard =(props:any)=> {
let failed 
const totalvalue : number=parseInt(props.match.params.ObtainedMarks)+-parseInt(props.match.params.detectmarks)
const obtainedvalue :number=parseInt(props.match.params.ObtainedMarks)
const calculate= (obtainedvalue/totalvalue)*100

if(calculate>=50){
    failed="CONGRATULATIONS YOUE ARE PASSED THIS TEST "
}else{
    failed="failed please try againe"
}


return (
    <div>
  <div className="DesignCard " style={{height:"100vh",width:"100%",overflow:"hidden"}}>
<div className="container">
<div style={{marginTop:"10%"}} className="row align-self-center text-center">
<h3 className="col-12" style={{letterSpacing:"2px",wordSpacing:"4px",color:"white"}}>{failed} </h3>
</div>
<div className="row text-center" style={{marginTop:"3%"}}>
<h4 style={{color:"white"}} className="col-12">Total Marks :{totalvalue}</h4>
<h4 style={{color:"white"}} className="col-12">Obtainned Marks :{obtainedvalue}</h4>
<h4 style={{color:"white"}} className="col-12">PERCENTAGE :{calculate.toFixed(2)}</h4>
</div>
<div className="row d-flex justify-content-center " style={{marginTop:"3%"}}>
<input className="col-6 d-flex justify-content-center" onClick={()=>{window.location.assign("/")}} style={{height:"40px",backgroundColor:"#cd7ae5",color:"white",fontWeight:"bold",border:"2px solid #cd7ae5",letterSpacing:"3px",fontSize:"20px"}} value="Start Again" type="button"/>

</div>
</div>
    </div>










    <div  className="DesignCard d-none" style={{height:"100vh",width:"100%",overflow:"hidden"}}>
<div className="container">
<div style={{marginTop:"10%"}} className="row align-self-center text-center">
<h2 className="col-12" style={{letterSpacing:"2px",wordSpacing:"4px",color:"white"}}>{failed} </h2>
</div>
<div className="row text-center" style={{marginTop:"3%"}}>
<h3 style={{color:"white"}} className="col-12">Total Marks :{totalvalue}</h3>
<h3 style={{color:"white"}} className="col-12">Obtainned Marks :{obtainedvalue}</h3>
<h3 style={{color:"white"}} className="col-12">PERCENTAGE :{calculate.toFixed(2)}</h3>
</div>
<div className="row d-flex justify-content-center " style={{marginTop:"3%"}}>
<input className="col-4 d-flex justify-content-center" onClick={()=>{window.location.assign("/")}} style={{height:"40px",backgroundColor:"#cd7ae5",color:"white",fontWeight:"bold",border:"2px solid #cd7ae5",letterSpacing:"3px",fontSize:"100%"}} value="Start Again" type="button"/>

</div>
</div>
    </div>
    </div>
)
}

  






