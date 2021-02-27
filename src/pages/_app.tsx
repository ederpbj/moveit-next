import '../styles/global.css';

//Da acesso ao contexto da aplicação, troca de informações entre eles
// import { ChallengesProvider } from '../contexts/ChallengesContext';
// import { CountdownProvider } from '../contexts/CountDownContext';

//Fica em volta de tudo, todas as telas da aplicação
function MyApp({ Component, pageProps }) {
  return (
    // <ChallengesProvider> //removido após uso dos cookies
    // <CountdownProvider> não precisa pq é só na homepage que usa
    <Component {...pageProps} />
    //</CountdownProvider>
    // </ChallengesProvider>
  )
}

export default MyApp
