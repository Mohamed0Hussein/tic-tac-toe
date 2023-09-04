import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Cell} from '../components'
//const winning_conditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
const Game = () => {
    let nav = useNavigate()
    const [game,setGame] = useState([['','',''],['','',''],['','','']])
    const [isXTurn,setIsXTurn] = useState(true)
    const [turnsCount,setTurnsCount] = useState(0)
    const [isGameOver,setIsGameOver] = useState(false)
    const cellClicked = (coord) => {
        if(!isGameOver){

            const {x,y} = coord
            if(game[x][y] === ''){
                
                if(isXTurn){
                    var newGame = [...game]
                    newGame[x][y] = 'X'
                    setGame(newGame)
                }
                else{
                    var newGame = [...game]
                    newGame[x][y] = 'O'
                    setGame(newGame)
                }
                setTimeout(() => {

                    setTurnsCount(turnsCount + 1)
                    checkForWinningCondition()
                    setIsXTurn(!isXTurn)
                },50)
            }
            else{
                alert(`Can't play in the same postion again`)
            }
        }
        else{
            alert(`Game is OVER`)
            return
        }
    }
    const checkForWinningCondition = () => {
            const current_Player = isXTurn ? 'X' : 'O'
            //checking horizontally 
            if(game[0][0] === current_Player && game[0][1] === current_Player && game[0][2] === current_Player){
                alert(`${current_Player} has WON 🎊🎊🎊`)
                setIsGameOver(true)
            }
            else if(game[1][0] === current_Player && game[1][1] === current_Player && game[1][2] === current_Player){
                alert(`${current_Player} has WON 🎊🎊🎊`)
                setIsGameOver(true)
            }
            else if(game[2][0] === current_Player && game[2][1] === current_Player && game[2][2] === current_Player){
                alert(`${current_Player} has WON 🎊🎊🎊`)
                setIsGameOver(true)
            }
            //checking vertically
            else if(game[0][0] === current_Player && game[1][0] === current_Player && game[2][0] === current_Player){
                alert(`${current_Player} has WON 🎊🎊🎊`)
                setIsGameOver(true)
            }
            else if(game[0][1] === current_Player && game[1][1] === current_Player && game[2][1] === current_Player){
                alert(`${current_Player} has WON 🎊🎊🎊`)
                setIsGameOver(true)
            }
            else if(game[0][2] === current_Player && game[1][2] === current_Player && game[2][2] === current_Player){
                alert(`${current_Player} has WON 🎊🎊🎊`)
                setIsGameOver(true)
            }
            //checking diagonally 
            else if(game[0][0] === current_Player && game[1][1] === current_Player && game[2][2] === current_Player){
                alert(`${current_Player} has WON 🎊🎊🎊`)
                setIsGameOver(true)
            }
            else if(game[0][2] === current_Player && game[1][1] === current_Player && game[2][0] === current_Player){
                alert(`${current_Player} has WON 🎊🎊🎊`)
                setIsGameOver(true)
            }
            else if(turnsCount === 8){
                alert(`TIEEEEEEEEEEEEEEEE ⛔⛔`)
                setIsGameOver(true)
            }


        };
    
  return (
    <div className='flex flex-col items-center my-20'>
        <div className='board w-96 h-96 grid  grid-cols-3 grid-rows-3'>
            <div id={1} className='border border-black border-t-0 border-l-0' onClick={(e) => {cellClicked({x:0,y:0})}}><Cell>{game[0][0]}</Cell></div>
            <div id={2} className='border border-black border-t-0' onClick={(e) => {cellClicked({x:0,y:1})}}><Cell>{game[0][1]}</Cell></div>
            <div id={3} className='border border-black border-t-0 border-r-0' onClick={(e) => {cellClicked({x:0,y:2})}}><Cell>{game[0][2]}</Cell></div>
            <div id={4} className='border border-black border-l-0' onClick={(e) => {cellClicked({x:1,y:0})}}><Cell>{game[1][0]}</Cell></div>
            <div id={5} className='border border-black' onClick={(e) => {cellClicked({x:1,y:1})}}><Cell>{game[1][1]}</Cell></div>
            <div id={6} className='border border-black border-r-0' onClick={(e) => {cellClicked({x:1,y:2})}}><Cell>{game[1][2]}</Cell></div>
            <div id={7} className='border border-black border-l-0 border-b-0' onClick={(e) => {cellClicked({x:2,y:0})}}><Cell>{game[2][0]}</Cell></div>
            <div id={8} className='border border-black border-b-0' onClick={(e) => {cellClicked({x:2,y:1})}}><Cell>{game[2][1]}</Cell></div>
            <div id={9} className='border border-black border-r-0 border-b-0' onClick={(e) => {cellClicked({x:2,y:2})}}><Cell>{game[2][2]}</Cell></div>
        </div>
        
            <div>
                {isGameOver ? <button className='border-2 rounded border-blue-500 bg-blue-500 text-white px-4 py-2 my-3 hover:bg-blue-700' onClick={() => {nav('/')}}>Replay</button> : null}
            </div>
        
    </div>
  )
}

export default Game