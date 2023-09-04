import React,{useState,useEffect} from 'react'
import o from '../img/o.png'
import x from '../img/x.png'
const Cell = ({children}) => {
    const [cell,setCell] = useState('')
    useEffect(() => {
        setCell(children)
    },[children])
    if(cell === 'X'){
        return <img src={x} className='w-full h-full'/>
    }
    else if(cell === 'O'){

        return <img src={o} className='w-full h-full'/>
        }
}

export default Cell