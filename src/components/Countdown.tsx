import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

//é uma variável global
let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    //Usando context criado para toda aplicação
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60); //define tempo de 25 min
    const [isActive, setIsActive] = useState(false); //monitora se esta ativo botão
    const [hasFineshed, setHasFineshed] = useState(false); //monitora se finalizou cowntdown

    const minutes = Math.floor(time / 60) //Math.floor => arredonda para baixo;
    const seconds = time % 60; //Segundo = resto dessa divisão %

    //split => 25 em '2' '5'
    //padStart => 5 em '05' '0' '5'
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        //cancela o timeout para não perder um segundo de delay
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
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
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFineshed ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    {/* {isActive ? 'Abandonar ciclo' : 'Iniciar ciclo'} */}
                    Ciclo encerrado

                    <img src="icons/Vector.svg" alt="Check" />
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButtonActive} ${styles.countdownButton}`}
                                onClick={resetCountdown}
                            >
                                {/* {isActive ? 'Abandonar ciclo' : 'Iniciar ciclo'} */}
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar ciclo
                                </button>
                            )}
                    </>
                )}

            {/* 
            {hasFineshed ? (
                <p>Terminou...</p>
            ) : null}

            <<<São equivalentes>>>  
            {hasFineshed && (
                <p>Terminou...</p>
            )}
            */}



        </div>
    );
}