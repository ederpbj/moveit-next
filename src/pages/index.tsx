import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import { CompleteChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountDownContext';

import styles from '../styles/pages/Home.module.css';

//só aparece uma vez
export default function Home() {
  return (
    //<div className="container">
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
      {/*
      <Head>
         pode ser aqui, replica em todas as páginas atualização constante, mais consumo de memória
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet" /> 
      </Head>
      */}
    </div>
  )
}
