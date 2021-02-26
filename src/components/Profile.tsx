import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/8126730?s=400&u=219893d1b931e472dfcd90f7a3fb564e1249c390&v=4" alt="Eder Pires" />
            <div>
                <strong>Eder Pires</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}