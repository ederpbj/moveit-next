import React, { useEffect, useState } from 'react';

import styles from '../styles/pages/Ranking.module.css';

import profiles from '../../profiles.json';
import { Profile } from '../components/Profile';

export default function Ranking() {
    const [profilesList, setProfilesList] = useState([]);

    useEffect(() => {
        listProfiles();
    }, [])

    function listProfiles() {
        setProfilesList(profiles);
    }




    return (
        <div >
            <h1>Ranking</h1>
            <strong>Lista de profiles</strong>
            <div className={styles.listProfile}>
                {profilesList.map((item, index) =>
                    <span key={index}>
                        <p>Posição: {item.position}</p>
                        <Profile name={item.name} />
                        <p>Nome: {item.name}</p>
                        <p>Level: {item.level}</p>
                        <p>Avatar: {item.avatar}</p>
                    </span>
                )}
            </div>

            <div>

            </div>
            <strong>Acaba aqui</strong>
        </div>
    );
}

