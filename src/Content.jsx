import React from 'react';
import './assets/styles/Content.css';
import githubFoundationsBadge from './assets/images/github-foundations-badge.webp';
import githubActionsBadge from './assets/images/github-actions-badge.webp';
import awsIcon from './assets/images/aws.webp';
import gawgIcon from './assets/images/gawg.webp';
import intelliTweetIcon from './assets/images/intellitweet.webp';
import moodWiseIcon from './assets/images/moodwise.webp';
import stressIcon from './assets/images/StressTracker.webp';
import TimeDaylight from './assets/images/TimeDaylight.webp';
import lapisIcon from './assets/images/lapis.webp';

const Content = () => {
    return (
        <div className='Content'>
            <div className='title'>
            <h1>Álvaro García Pizarro - Ingeniero <span className='color2'>Cloud</span>, <span className='color1'>DevOps</span> y de <span className='color3'>Automatización</span></h1>
            </div>

            <div className='contact'>
            <a href="mailto:alvaro@lvrpiz.com">alvaro@lvrpiz.com</a> <a href="https://www.bulletin.lvrpiz.com">Bulletin</a>
            </div>

            <div className='description'>
            <p>Apasionado de la tecnología, el deporte y la innovación. Actualmente trabajando como ingeniero Cloud, DevOps y de Automatización en Santander. Anteriormente desarrollador de software en Altia.</p>
            <p>Comencé mi trayectoria académica graduándome en Comercio por la Universidad de Valladolid y en Business Administration por la South Champagne Business School, donde construí una base sólida en análisis y principios económicos. Sin embargo, mi interés por la tecnología me llevó a reorientar mi carrera y estudiar Ingeniería Informática acabando como el mejor estudiante de mi promoción. Actualmente, estoy ampliando mi especialización cursando un máster en Ingeniería Informática.</p>
            <p>En mi tiempo libre, desarrollo aplicaciones innovadoras centradas en la salud y la inteligencia artificial, incluyendo soluciones para el Apple Watch y agentes de IA para distintas plataformas. Puedes descubrir más sobre mis proyectos en mi web. Mi mail está siempre abierto para nuevas oportunidades y colaboraciones.</p>
            </div>

            {/* <div className='projectsSpace'>
                <h2>Certifications</h2>
                <div className='projects'>
                <a href="https://www.credly.com/badges/f180210d-c933-4ad0-b807-5b1b96bb250e/linked_in_profile" target="_blank" rel="noopener noreferrer">
                    <img src={githubFoundationsBadge} alt='GitHub Foundations Badge' className='badge' />
                </a>
                <a href="https://www.linkedin.com/in/alvarogarciapiz" target="_blank" rel="noopener noreferrer">
                    <img src={githubActionsBadge} alt='GitHub Actions Badge' className='badge' />
                </a>
                </div>
            </div> */}

            <div className='projectsSpace'>
                <h2>Proyectos</h2>
                <div className='projects'>
                    <a className='project' href='https://lapis.lvrpiz.com'>
                        <img src={lapisIcon} alt='Lapis AI Offline Private Chat' className='project-icon' />
                    </a>
                    <a className='project' href='https://stressapp.lvrpiz.com'>
                        <img src={stressIcon} alt='Stress Tracker' className='project-icon' />
                    </a>
                    <a className='project' href='https://gawg.lvrpiz.com'>
                        <img src={gawgIcon} alt='GAWG' className='project-icon' />
                    </a>
                    <a className='project' href='https://timeindaylight.lvrpiz.com'>
                        <img src={TimeDaylight} alt='Time in Daylight app' className='project-icon' />
                    </a>
                    <a className='project' href='https://github.com/alvarogarciapiz/IntelliTweet'>
                        <img src={intelliTweetIcon} alt='IntelliTweet' className='project-icon' />
                    </a>
                    <a className='project' href='https://alvarogarciapiz.github.io/AWS-Certify-Hub/'>
                        <img src={awsIcon} alt='AWS Certify Hub' className='project-icon' />
                    </a>
                    <a className='project' href='https://github.com/alvarogarciapiz/MoodWise'>
                        <img src={moodWiseIcon} alt='MoodWise' className='project-icon' />
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default Content;