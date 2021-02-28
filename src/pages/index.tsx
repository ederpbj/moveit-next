import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import { CompleteChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountDownContext';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Ranking } from '../components/Ranking';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

//só aparece uma vez
export default function Home(props: HomeProps) {

  console.log(props);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      {/* <div className="container"> */}
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
    </ChallengesProvider>
  )
}


//Função do next, importante
//Define quais dados posso passar do next para meu front-end, 
//antes mesmo de construir a interface
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;


  return {
    props: {
      //: Number(level), converte em número
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }

  //chamada api
  // const user = {
  //   level: 1,
  //   currentExperience: 1,
  //   challengesCompleted: 2,
  // }

  //tudo que roda aqui, é apenas no node, e não no browser
  // console.log(user);

  // return {
  //   props: { user }
  // }

}

//Back-end (Ruby)
//Next.js (Node.js)
//Front-end (React)