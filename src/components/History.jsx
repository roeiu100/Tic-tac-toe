import { useContext,React } from "react";
import { GameContext } from "../App";
function History(){
    const {history,setHistory}=useContext(GameContext) 
    let list=[]
    if(history){
     list = history.map((e, index) => (
        <tr key={index} className="history-td">
            <td className="history-td">{e==="you won"?"win":e==="It's a tie"?"tie":e==="you lost"?"lose":"firendly"}</td>
            </tr>
    ));
    }
    const Reset=()=>{
        setHistory('')
    }
            return(
    <div className="history-back">
        <button className="button" onClick={()=>Reset()}>Reset history </button>
        <table className="history table">
            <tbody>      
              {list}             
            </tbody>
        </table>
    </div>
)
}
export default History