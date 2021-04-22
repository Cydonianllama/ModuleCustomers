import React,{useEffect,useState} from 'react'
import './Hint.css'
const Hint = ({data}) => {

    const [msgs,setMsgs] = useState([])

    useEffect(()=>{
        setMsgs(data.msgs)
        const hintsContainer = document.getElementById('hints-container')
        setTimeout(()=>{
            setMsgs([])
            console.log('hint effect');
        }, 3000)
    },[data])
    
    return (
        <>
            <div id="hints-container">
                {msgs.map((msg, index) => <p className = "hint-item"key={index}>{msg.msg}</p>)}
            </div>
        </>
    )
}

export default Hint