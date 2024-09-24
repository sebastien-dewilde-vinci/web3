import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ClickCounter = ({ title, messageSucces, messageInfo }) => {
  const storedCount = JSON.parse(localStorage.getItem("count"));
  const [count, setCount] = useState(storedCount ?? 0);
  const [messagePrinted, setMessagePrinted] = useState(false);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  }

  return (
    <>
      <h2>{messagePrinted == true ? messageInfo : ""}</h2>
      <button onClick={handleClick} onMouseEnter={() => setMessagePrinted(true)} onMouseLeave={() => setMessagePrinted(false)}>
        {title} {count}
      </button>
      <p onClick={handleClick}>
        {count >= 10 ? messageSucces : null} 
      </p>
    </>
  )
}

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ClickCounter title="Count : " message="You are a master in the art of clicking" messageInfo="Please click on me now !" />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
