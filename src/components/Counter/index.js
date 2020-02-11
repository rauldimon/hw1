import React from 'react';
import style from './style.module.css'

export default props => {
    console.log(props)
    const [counter, setCounter] = React.useState(0);

    return (
        <div className={style.Counter}>
            <b>{counter}</b>
            <b>{props.name}</b>
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
            </div>
        </div>
    )
}