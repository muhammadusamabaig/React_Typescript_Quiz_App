import React, { useState, useEffect } from 'react';
import './App.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {getquiz} from './Service_provider'

import { getSpecificData } from './Userproperties'
let tempglobal=1
export const QuestionCard =(props:any)=> {
  // var temparrr:getSpecificData[] =[{question:"",answer:"",options:['jkdjdk','','','']}]
  const [arra,setarra] =useState<getSpecificData[]>([{question:"",answer:"",options:['loading','loading','loading','loading']}])
  const  [detectmarks,setdetectmarks]=useState<number>(0)
  const  [incremarks,setincremarks]=useState<number>(0)

  const  [ResultButtonOpacity,setResultButtonOpacity]=useState<number>(0)

  var a=100/parseInt(props.match.params.number)
  const  [progress,setprogress]=useState<number>(0)
  // const  [Initialmcqsendsate,setInitialmcqsendsate]=useState<boolean>(true)

  const  [mcqsendsate,setmcqsendsate]=useState<boolean>(false)
  let Questions :getSpecificData[]
const [index,setindex]=useState<number>(0)
useEffect(()=>{
 async function dosome(){
 await get()
}
dosome()
})

  function Detection(selectitem:string){
    if(arra[index].answer===selectitem){
setincremarks(incremarks+1)
console.log(incremarks)

    }
    else{
     setdetectmarks( detectmarks-1)
     console.log(detectmarks)
    }
  }
  
  const progressInstance = <ProgressBar variant="info" now={progress} />;


  function QuestionIncrement(){
    setprogress(progress+a)

    if(index<parseInt(props.match.params.number)-1){
    setindex(index+1)
    
  }
  else{
    setmcqsendsate(true)
    setResultButtonOpacity(1)
  }
}
var  get= async()=>{

   Questions = await getquiz(parseInt( props.match.params.number), props.match.params.level)
// let temp:getSpecificData[]=Questions
//    temparrr=temp
//    setarra(temparrr)
//    console.log(temp,Questions)
if(tempglobal===1){
  setarra(Questions)
}
tempglobal++
}
console.log(arra)
return (
  <div className="DesignCard" style={{height:"100vh",width:"100%",overflow:"hidden"}}>
<div >
{progressInstance}
</div>
    <div className="container"> 
<div className="row text-left" style={{marginTop:"5%"}}>
<h3 className="col-12" style={{color:"white"}}>Question:{index+1}</h3>

</div>
    <div style={{paddingTop:"2%"}} className="row">
<h5 className="col-12" style={{color:"white"}}>{arra[index].question}</h5>
    </div>
    {
      arra[index].options.map((item,index)=>{
        return( <div key={index} className="row " style={{borderRadius:"14%"}}>
        <h6 className="col-12 "   style={{backgroundColor:"#E334C0",marginLeft:"1%", paddingTop:"2%",paddingBottom:"2%" ,color:"white"}}>
          <input disabled={mcqsendsate }   checked={false}  onChange={()=>{console.log(QuestionIncrement() ,Detection(item) )}}  type="radio"/> {item}
          </h6>
      </div>)
       

      })
    }
       <div className="row d-flex justify-content-center">
<input className="col-6 d-flex justify-content-center" onClick={()=>{console.log(window.location.assign('/'+incremarks+'/'+detectmarks+'/'+incremarks+detectmarks))}} style={{height:"40px",opacity:ResultButtonOpacity,backgroundColor:"#cd7ae5",color:"white",fontWeight:"bold",border:"2px solid #cd7ae5",letterSpacing:"3px",fontSize:"100%"}} value="CHECK RESULTE" type="button"/>
       </div>
     

</div>
    </div>
)
}

  






