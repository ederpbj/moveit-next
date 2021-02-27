import '../styles/global.css';

//Da acesso ao contexto da aplicação, troca de informações entre eles
import { ChallengesProvider } from '../contexts/ChallengesContext';

//Fica em volta de tudo
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
