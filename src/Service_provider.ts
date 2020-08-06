import {quizObjectDataType} from './Userproperties'
import {getSpecificData} from './Userproperties'

export const getquiz=async (quantity : number, level : string)=>{
    const fetc =await fetch(`https://opentdb.com/api.php?amount=${quantity}&difficulty=${level}`)
    let {results}  = await fetc.json()
    const shuffuleArray=(array:any[])=>{
        const result : any[]=[...array].sort(()=>Math.random()-0.5)
    
    return(result)
    }
const getQuizSpecificData:getSpecificData[]=results.map((item : quizObjectDataType)=>{
return{
    question:item.question,
    answer: item.correct_answer,
    options:shuffuleArray( item.incorrect_answers.concat(item.correct_answer))
}

})
return(getQuizSpecificData)
}