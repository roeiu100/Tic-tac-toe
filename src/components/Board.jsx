import { useState} from "react";
import { useContext,React } from "react";
import { GameContext } from "../App";
import './App.css';

function Board() {
const {winner, setWinner}=useContext(GameContext) 

  const [turn, setTurn] = useState(0);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const draw = ( index) => {
    if (data[index] === "" && winner === "") {
      const current = turn === 0 ? "X" : "O";
      data[index] = current;
      setTurn(turn === 0 ? 1 : 0);
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
  if (checkWin()) {
    setWinner(turn === 1 ? "P 1 win" : "P 2 win");
  } else if (checkTie()) {
    setWinner("It's a tie");
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
        <button className="button" onClick={()=>NewGame()}>New Game</button>
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
export default Board;
