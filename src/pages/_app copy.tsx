import '../styles/global.css';

//Da acesso ao contexto da aplicação, troca de informações entre eles
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useState } from 'react';

//Fica em volta de tudo
function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp }}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp
