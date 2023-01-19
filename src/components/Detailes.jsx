import { useState } from "react";
export default function Detailes(){
    
    const [winner,setWinner]=useState('')
    const [score, setScore] = useState(JSON.parse(localStorage.getItem('myScore')));
    localStorage.setItem("myScore", JSON.stringify(score));
    const [history,setHistory]=useState(JSON.parse(localStorage.getItem('myHistory')));
    localStorage.setItem("myHistory", JSON.stringify(history));
    return{
        history,setHistory,winner,setWinner,score,setScore
    }
}