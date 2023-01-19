import { useState } from "react";
import { useContext,React } from "react";
import { GameContext } from "../App";

function BoardHard() {
  const {winner, setWinner,score, setScore,history,setHistory}=useContext(GameContext) 
  let [turn, setTurn] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  
  const draw = (index) => {
    if (data[index] === "" && winner === "") {
      data[index] = "X";
      setData([...data]);
      turn=false;
    if(!checkWin())
    {
        if (data[6] === data[4]&&(data[6]==='X'||data[6]==='O')&&!turn) {       
            if(data[2]==='')
            {
            data[2] = "O";
            setData([...data]);      
            turn=true;
            }
         }
         if (data[2] === data[4]&&(data[2]==='X'||data[2]==='O')&&!turn) {       
             if(data[6]==='')
             {
             data[6] = "O";
             setData([...data]);      
             turn=true;
             }
          }      
         if (data[0] === data[4]&&(data[0]==='X'||data[0]==='O')&&!turn) {       
             if(data[8]==='')
             {
             data[8] = "O";
             setData([...data]);      
             turn=true;
             }
          }   
          for(let i=8;i>0;i-=3){            
            if (data[i] === data[i-2]&&(data[i]==='O')&&!turn) {       
                if(data[i-1]==='')
                {
                data[i-1] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }   
    for(let i=8;i>5;i--){            
        if (data[i] === data[i-6]&&(data[i]==='O')&&!turn) {       
            if(data[i-3]==='')
            {
            data[i-3] = "O";
            setData([...data]);      
            turn=true;
            }
    }
}

        for(let i=0;i<data.length;i+=3){            
            if (data[i] === data[i+1]&&(data[i]==='O')&&!turn) {       
                if(data[i+2]==='')
                {
                data[i+2] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }
        for(let i=0;i<3;i++){            
            if (data[i] === data[i+3]&&(data[i]==='O')&&!turn) {       
                if(data[i+6]==='')
                {
                data[i+6] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }
        for(let i=8;i>0;i-=3){            
            if (data[i] === data[i-1]&&(data[i]==='O')&&!turn) {       
                if(data[i-2]==='')
                {
                data[i-2] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }
        for(let i=8;i>5;i--){            
            if (data[i] === data[i-3]&&(data[i]==='O')&&!turn) {       
                if(data[i-6]==='')
                {
                data[i-6] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }
          for(let i=8;i>0;i-=3){            
            if (data[i] === data[i-2]&&(data[i]==='X')&&!turn) {       
                if(data[i-1]==='')
                {
                data[i-1] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }   
    for(let i=8;i>5;i--){            
        if (data[i] === data[i-6]&&(data[i]==='X')&&!turn) {       
            if(data[i-3]==='')
            {
            data[i-3] = "O";
            setData([...data]);      
            turn=true;
            }
    }
}

        for(let i=0;i<data.length;i+=3){            
            if (data[i] === data[i+1]&&(data[i]==='X')&&!turn) {       
                if(data[i+2]==='')
                {
                data[i+2] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }
        for(let i=0;i<3;i++){            
            if (data[i] === data[i+3]&&(data[i]==='X')&&!turn) {       
                if(data[i+6]==='')
                {
                data[i+6] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }
        for(let i=8;i>0;i-=3){            
            if (data[i] === data[i-1]&&(data[i]==='X')&&!turn) {       
                if(data[i-2]==='')
                {
                data[i-2] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }
        for(let i=8;i>5;i--){            
            if (data[i] === data[i-3]&&(data[i]==='X')&&!turn) {       
                if(data[i-6]==='')
                {
                data[i-6] = "O";
                setData([...data]);      
                turn=true;
                }
        }
    }
       
   
    
           
    
         
          if(!turn)
          if(data[4]===''){
            data[4]='O'
            setData([...data]); 
        }
         
          else  if(data[6]==='')
        {
            data[6]='O'
            setData([...data]); 
        }
         
        else if(data[0]==='')
        {
            data[0]='O'
            setData([...data]); 
        }  
             else  if(data[1]==='')
        {
            data[1]='O'
            setData([...data]); 
        } 
         else if(data[3]===''){
                data[3]='O'
                setData([...data]); 
        }
         else if(data[8]===''){
                data[8]='O'
                setData([...data]); 
        }
         else if(data[2]===''){
                data[2]='O'
                setData([...data]); 
        }
         
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
        setWinner("It's a tie");
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
    setHistory([...history,winner])
    setWinner('')
  }
  return (
    <div>
      <button className="button" onClick={()=>Reset()}>Reset points</button>
      <button className="button" onClick={()=>NewGame()}>NewGame</button>
      <br></br>
      <span className="title">youe score:{score?score:'0'}</span>
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
export default BoardHard;
