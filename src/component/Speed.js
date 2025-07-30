import React, { useEffect, useRef, useState } from 'react'

export default function Speed() {
  const [text, setText] = useState('');
  const [wpm, setWpm] = useState(0);
  const [second, setSeconds] = useState(0);
  const [showResult,setshowResult]=useState(false);
  const timer = useRef(null);

  function handleChange(e) {
    setText(e.target.value);
    if (!timer.current) {
      timer.current = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
  }

  const handleSubmit =()=>{
    clearInterval(timer.current);
    timer.current=null;
    setshowResult(true);

    setTimeout(()=>{
      setshowResult(false);
      setText('')
    },3000);
  }

  useEffect(() => {
    const words = text.trim().split().length;
    if (second > 0) {
      setWpm(Math.round((words / second) * 60));
    }

  },[text,second])
  const char = text.replace().length;
  return (
    <div>
        
      <textarea value={text} onChange={handleChange} placeholder='Enter Text' rows={6} cols={60}></textarea> <br />
      <button onClick={handleSubmit}>Submit</button>
      {showResult && (
        <>
        <p>WPM: {wpm} </p>
      <p>Charecter: {char} </p>
      <p>Time: {second} </p>
        </>
      )}
    </div>
  )}