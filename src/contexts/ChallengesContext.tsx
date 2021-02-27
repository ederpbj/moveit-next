import { createContext, ReactNode, useState } from 'react';

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

    console.log('experienceToNextLevel >>>> ', experienceToNextLevel);

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
    }

    function resetChallenge() {
        setActiveChallenge(null);
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
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}