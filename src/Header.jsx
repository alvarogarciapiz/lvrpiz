import React from 'react';
import './assets/styles/Header.css';

const Header = () => {

    return (
        <div className='Header'>
            <div className='profile'>
                <img className='profileImage' src='https://avatars.githubusercontent.com/u/81751965?v=4' alt="Álvaro García Pizarro lvrpiz" ></img>
                <div className='info'>
                    <p className='nameInfo'>Álvaro García Pizarro</p>
                    <p className='descriptionInfo'>Ingeniero DevOps y Cloud</p>
                </div>
            </div>

            <div className='links'>
                <a href='https://twitter.com/lvrpiz'>𝕏</a>
                <a href='https://github.com/alvarogarciapiz'>Github</a>
                <a href='https://www.linkedin.com/in/alvarogarciapiz/'>LinkedIn</a>
            </div>
        </div>
    );
};

export default Header;