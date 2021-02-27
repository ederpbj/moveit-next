import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFineshed,
        isActive,
        startCountdown,
        resetCountdown,
    } = useContext(CountdownContext);

    //Não vai para o context, pq é da parte visual
    //split => 25 em '2' '5'
    //padStart => 5 em '05' '0' '5'
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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