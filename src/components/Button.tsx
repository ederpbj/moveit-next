import { useState } from 'react';

interface ButtonProps {
    color: string;
    children: string; //quando espera um filho no component
}

export function Button(props: ButtonProps) {
    const [count, setCount] = useState(1); //um count para cada componente, independente

    function increment() {
        setCount(count + 1);
    }

    return (
        <button
            type="button"
            style={{ backgroundColor: props.color }}
            onClick={increment}
        >
            Botão -
            <strong>Teste - </strong>
            {props.color}
            <span>-</span>
            {props.children}
            -
            <strong>{count}</strong>
        </button>
    )
}