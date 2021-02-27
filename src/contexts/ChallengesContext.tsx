//Context API, substitui redux

import { createContext, ReactNode, useEffect, useState } from 'react';

import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye'; //só pode ser um desses dois tipos predefinidos
    description: string;
    amount: number;
}

//Dados que vou retornar do meu contexto
//formato a ser seguido
interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge; //Object; tipo do activeChallenge
    experienceToNextLevel: number;
    levelUp: () => void; //função sem retorno 
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void; //quando esta completo o challenge
}

interface ChallengesProviderProps {
    children: ReactNode; //aceita qualquer elemento filho
}

//Contexto de api interno, serve para troca de informações entre os componentes
//ele é do tipo: ChallengesContextData
export const ChallengesContext = createContext({} as ChallengesContextData);

//o tipo das propriedades é: : ChallengesProviderProps
export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    //Calculo na potencia 2
    //4 é Fator de experiência
    const experienceToNextLevel = Math.pow(((level + 1) * 4), 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []) //Executa uma só vez

    // useEffect(() => {},[]) //Executa uma única vez com [], assim q for exibido em tela
    // console.log('experienceToNextLevel >>>> ', experienceToNextLevel);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        //pega números aleatórios do tamanho do array e arredonda
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)

        //Pegar o challange
        const challenge = challenges[randomChallengeIndex]; //pega o challenge pelo index

        setActiveChallenge(challenge);

        // console.log('New Challenge') //teste

        new Audio('/notification.mp3').play(); //toca audio automaticamente

        if (Notification.permission === "granted") {
            new Notification('Novo desafio ', {
                body: `Valendo ${challenge.amount} xp!`
            })

        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return
        }

        const { amount } = activeChallenge;

        //let it change, pode mudar
        let finalExperience = currentExperience + amount;

        //80 xp + 80xp = 160, 120 passa de level, então fica 40 para próximo nível
        // 160 - 120 = 40 finalExperience, e um levelUp
        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience); //Ex: 40
        setActiveChallenge(null); //reinicia
        setChallengesCompleted(challengesCompleted + 1) //Desafios completos
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            activeChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completeChallenge,
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}