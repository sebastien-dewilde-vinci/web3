import { useState } from 'react';

const ColorChange = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const [color, setColor] = useState(colors[0]);
    
    const changeColor = () => {
        setColor(color === colors[colors.length - 1] ? colors[0] : colors[colors.indexOf(color) + 1]);
    };
    
    return (
        <>
            <div style={{ backgroundColor: color, width: '200px', height: '200px', padding: '20px' }}>
            </div>
            <button onClick={changeColor}>{color == colors[colors.length-1] ? colors[0] : colors[colors.indexOf(color) + 1]}</button>
            <p>{color}</p>
        </>
    );
}

export default ColorChange;