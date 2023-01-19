import { useState } from "react";
import { useContext,React } from "react";
import { GameContext } from "../App";

function BoardComp() {
  const {winner, setWinner,score, setScore}=useContext(GameContext) 
  let [turn, setTurn] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const draw = (index) => {
    if (data[index] === "" && winner === "") {
      data[index] = "X";
      setData([...data]);
      turn=false;
      let found = false;
      let num = null;
      if (checkWin() || checkTie()) {        
        found = true;   
      } 
      
      while (!found) {
        num = Math.floor(Math.random() * 9);
        if (data[num] === "") {
          data[num] = "O";
          found = true;
          setData([...data]);

        }
        turn=true;
       
      }
      if(checkWin()){        
        if(!turn){          
          setScore(score+10)
          setWinner("you won")
        }
        else {
          setScore(score-8)
         setWinner("you lost")
        }
      }
      else if(checkTie()){
        setScore(score-5)
      }
    
    }
    
  };
  const checkRow = () => {
    for (let i = 0; i < data.length; i += 3) {
      if (
        data[i] === data[i + 1] &&
        data[i + 1] === data[i + 2] &&
        data[i] !== ""
      ) {
        return true;
      }
    }
  };
  const checkColumn = () => {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i] === data[i + 3] &&
        data[i + 3] === data[i + 6] &&
        data[i] !== ""
      ) {
        return true;
      }
    }
  };
  const checkDiagnol = () => {
    for (let i = 0; i < data.length; i++) {
      if (
        (data[0] === data[4] && data[4] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[4] === data[6] && data[2] !== "")
      ) {
        return true;
      }
    }
  };
  const checkTie = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === "") {
        return false;
      }
    }
    return true;
  };
  const checkWin = () => {
    if (checkColumn() || checkDiagnol() || checkRow()) {
      return true;
    }
  };
  if (!checkWin()) {
    if (checkTie()) {
    setWinner("It's a tie");
    }
  }
  const Reset=()=>{
    for(let i=0;i<data.length;i++){
      data[i]=''
    }
    setData([...data])
    setScore(0)
    setWinner('')
    setTurn(false)
  }
  const NewGame=()=>{
     for(let i=0;i<data.length;i++){
      data[i]=''
    }
    setData([...data])
    setWinner('')   
  }
  return (
    <div>
      <button className="button" onClick={()=>Reset()}>Reset points</button>
      <button className="button" onClick={()=>NewGame()}>NewGame</button>
      <br></br>
      <span className="title">your score:{score?score:'0'}</span>
      <table>
        <tbody>
          <tr>
            <td onClick={() => draw(0)}>{data[0]}</td>
            <td onClick={() => draw(1)}>{data[1]}</td>
            <td onClick={() => draw(2)}>{data[2]}</td>
          </tr>
          <tr>
            <td onClick={() => draw(3)}>{data[3]}</td>
            <td onClick={() => draw(4)}>{data[4]}</td>
            <td onClick={() => draw(5)}>{data[5]}</td>
          </tr>
          <tr>
            <td onClick={() => draw(6)}>{data[6]}</td>
            <td onClick={() => draw(7)}>{data[7]}</td>
            <td onClick={() => draw(8)}>{data[8]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default BoardComp;
