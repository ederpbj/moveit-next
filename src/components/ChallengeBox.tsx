// import { useContext } from 'react';
// import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    //Pegando as funções do contexto
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    //Testado
    //Acesso o contexto de qualquer lugar da aplicação
    // const contextData = useContext(ChallengesContext)
    // console.log('>>>>' + contextData);

    // const hasActiveChallenge = true; //teste anterior
    // {hasActiveChallenge ? ( //Teste anterior}

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (

                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>

                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (
                    <>
                        <div className={styles.challengeNotActive}>
                            <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                            <strong>Finalize um ciclo para receber um desafio</strong>
                            <p>
                                <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios.
                        </p>
                        </div>
                    </>
                )}
        </div>
    )
}