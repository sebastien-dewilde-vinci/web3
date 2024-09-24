import { useState } from "react";

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

export default ClickCounter;