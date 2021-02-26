import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountDownContext';
import styles from '../styles/Components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, handleResetChallenge, handleCompleteChallenge } = useContext(ChallengesContext);
  const { handleResetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    handleCompleteChallenge();
    handleResetCountdown(); 
  }

  function handleChallengeFailed() {
    handleResetChallenge();
    handleResetCountdown(); 
  }
  return (
    <div className= { styles.challengeBoxContainer }>
      { activeChallenge ? (
        <div className={ styles.challengeActive }>
          <header>Ganhe { activeChallenge.amount } xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={ styles.challengeFailedButton }
              onClick={ handleChallengeFailed }
            >
              Falhei
            </button>
            <button 
              type="button"
              className={ styles.challengeSucceededButton }
              onClick={ handleChallengeSucceeded }
            >
              Completei
            </button>
          </footer>

        </div>
      ) : (
        <div className={ styles.challengeNotActive }>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div> 
      )}   
    </div>
  );
}