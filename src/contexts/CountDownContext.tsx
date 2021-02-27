import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

//Tipo de dados, interface
interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFineshed: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode; //aceita qualquer elemento filho
}

//Criando context
export const CountdownContext = createContext({} as CountDownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    //Usando context criado para toda aplicação
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60); //define tempo de 25 min
    const [isActive, setIsActive] = useState(false); //monitora se esta ativo botão
    const [hasFineshed, setHasFineshed] = useState(false); //monitora se finalizou cowntdown

    const minutes = Math.floor(time / 60) //Math.floor => arredonda para baixo;
    const seconds = time % 60; //Segundo = resto dessa divisão %

    function startCountdown() {
        setIsActive(true);
    }

    //reseta estado inicial da aplicação
    function resetCountdown() {
        //cancela o timeout para não perder um segundo de delay
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFineshed(false);
        setTime(25 * 60);
    }

    //Dispara efeitos colaterais, após algum evento
    //O que eu quero executar => funções dentro o useEffect, 
    //Quando eu quero executar, após mudar a [isActive, time], monitora esses valores
    useEffect(() => {
        if (isActive && time > 0) {

            countdownTimeout =
                //Quero que algo aconteca depois de um tempo, 
                //executo a função após 1 seg
                setTimeout(() => {
                    setTime(time - 1);
                }, 1000)
        } else if (isActive && time == 0) {
            setHasFineshed(true); //chegou em zero o time
            setIsActive(false); //setar como inativo o botão
            // console.log('finalizou!')
            startNewChallenge(); //vem do context da aplicação
        }
        // console.log(active);
    }, [isActive, time])

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFineshed,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}