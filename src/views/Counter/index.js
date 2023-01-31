import {useState} from 'react';
import Button from './components/Button'
import Number from './components/Number'
import './counter.css'

function Counter(){
    const [number, setNumber] = useState(0)

    const handleAdd = function(){
        setNumber(number+1)
    }

    const handleSub = function(){
        setNumber(number-1)
    }

    const handleReset = function(){
        setNumber(0)
    }
    //Arriba desestructuramos el arreglo, es lo mismo que hacer lo siguiente:
    // const state = useState(0) //useState(0) devuelve un arreglo de dos elementos, el primero es la referencia al estado y el segundo es la funcion para actualizarlo
    // const number = state[0]
    // const setNumber = state[1]

    return(
        <section>
            <h1>Counter</h1>
            <Number currentNumber={number}/>
            <Button buttonText="-" handleClick={handleSub}/>
            <Button buttonText="+" handleClick={handleAdd}/>
            <br></br>
            <Button buttonText="reset" handleClick={handleReset}/>
        </section>
    )
};

export default Counter;