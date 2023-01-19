import HomePage from './components/HomePage';
import Board from './components/Board';
import BoardComp from './components/BoardComp';
import { NavLink,Route,Routes } from 'react-router-dom';
import { createContext } from 'react';
import BoardHard from './components/BoardHard';
import History from './components/History';
import Detailes from './components/Detailes';
export const GameContext=createContext()

function App() {
  const{history,setHistory,winner,setWinner,score,setScore}=Detailes()
  const contextValue={history,setHistory,winner,setWinner,score,setScore}
  
  const DoHistory=()=>{
    setWinner('')
    setHistory([...history,winner])
  }
  return (
    <GameContext.Provider value={contextValue}>
    <div className="App">
       <div className='nav'>
            <NavLink className='navlink' to="/" onClick={()=>setWinner('')}>Home Page</NavLink>
            <NavLink className='navlink' to="/History" onClick= {()=>DoHistory()} >History</NavLink>
            </div>
            <div className='title'>
                <span>{winner}</span>               
            </div>
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/History' element={<History/>}></Route>
    <Route path='/Game' element={<Board />
}></Route>
    <Route path='/Game/comp' element={<BoardComp  />
} ></Route>
    <Route path='/Game/comp-Hard' element={<BoardHard />
} ></Route>
   </Routes>
   
    </div>
    </GameContext.Provider>
  );
}

export default App;
