import React, {useState} from 'react';

const Colors = () => {

    const [color, setColor] = useState("");

    return (
        <div>
            <h1>My favourite color is: {color}</h1>

            <button onClick={() => setColor('red')}>
                Click red

            </button>
            <button onClick={() => setColor('blue')}>
                Click blue

            </button>
            <button onClick={() => setColor('yellow')}>
                Click yellow

            </button>
        </div>
    );
}

export default Colors;
