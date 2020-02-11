
import React from 'react';
import style from './style.module.css';
import Counter from '../Counter';

import User from './252.png';
import Git from './git.png'

export default () => {

    return (

        <main>
            <div className={style.Container}>
                <div className={style.Block}>
                    <div className={style.Profile}>
                        <h2>John Doe Profile</h2>
                        <img alt="user" src={User} />
                    </div>
                    <div className={style.ButtonsBlock}>
                        <Counter name="Followers" />
                        <Counter name="Following"/>
                    </div>
                </div>
                <div className={style.GitLogo}>
                    <img alt="gitlogo" src={Git} />
                </div>
            </div>
        </main>

    )
}