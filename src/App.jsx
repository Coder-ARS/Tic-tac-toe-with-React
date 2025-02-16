import { useState } from 'react'
import './App.css'
import Div from './Div'
import {FullCheck} from './GameLogic.js'
import SvgType  from './WinSvg.jsx'


function App() {
  //let arr = [[0,0,1],[0,0,0],[0,0,0]];
  let [move,setMove] = useState([[0,0,0],[0,0,0],[0,0,0]])
  let [turn,setTurn] = useState([true,0])
  let [enable,setEnable] = useState(true)
  let [win,setWin] = useState(["",""])

  console.log("iiii")
  function temp(i,j) {
    if(enable && move[i][j]===0){console.log(i,j);
    let newArr =[...move]
    turn[0]?newArr[i][j]=1:newArr[i][j]=-1
    setMove(newArr)
    console.log(move);
    setTurn([!turn[0],turn[1]+=1])
    console.log(FullCheck(move)[0])
    // console.log("aedhaeh",turn[1])
    console.log(win,"sdgdsf")
    
    if (FullCheck(move)[0] != undefined)
      {
        win[0] = FullCheck(move)[0]
        win[1] = FullCheck(move)[1]
        console.log(win[1][1],"sdgdsf")

      setWin(FullCheck(move))
      setEnable(false)

    }}
  }
  return (
    <>
    <div style={{position: 'absolute'}}>
      {win[0]!=="" &&
      <SvgType config={win[1]}/>
      }
  </div>

    {move.map((row,rowIndex) => (
      <div style={{ display: 'flex' }}>
          {row.map((cell,cellIndex) => (
            <div onClick={()=>{temp(rowIndex,cellIndex)}}>
              <Div val={cell}/>
            </div>
          ))}
        </div>
      ))}
      <div style={{fontSize: "50px"}}>
        {win[0]!=''?`Winner : ${win[0]}`:turn[1]===9 ?"Match Draw":`Turn of : ${turn[0]?"X":"O"}`}
      </div>
      <br />
      <br />
      <br />
      <button style={{zIndex: '9999'}} onClick={()=>{
        setMove([[0,0,0],[0,0,0],[0,0,0]]);
        setTurn([true,0]);
        setEnable(true);
        setWin(["",''])
        }
        }>Restart</button>
      
    </>
  )
}


export default App
