import { Children, createContext, ReactNode } from "react";
import { Countdown } from "../components/CountDown";

//Tipo de dados, interface
interface CountDownContextData {

}

interface CountdownProviderProps {
    children: ReactNode; //aceita qualquer elemento filho
}

//Criando context
const CountdownContext = createContext({} as CountDownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
    return (
        <CountdownContext.Provider value={{}}>
            {children}
        </CountdownContext.Provider>
    )
}