import React from 'react';
import './assets/styles/Content.css';
import githubFoundationsBadge from './assets/images/github-foundations-badge.png';
import githubActionsBadge from './assets/images/github-actions-badge.png';

const Content = () => {

    return (
        <div className='Content'>
            <div className='title'>
            <h1>Álvaro García Pizarro, <span className='color2'>Automation</span>, <span className='color1'>Cloud</span> & <span className='color3'>DevOps</span> engineer</h1>
            </div>

            <div className='contact'>
            <a href="mailto:alvaro@lvrpiz.com">alvaro@lvrpiz.com</a> <a href="https://www.linkedin.com/in/alvarogarciapiz">@alvarogarciapiz</a>
            </div>

            <div className='description'>
            <p>Passionate about sport, techonology & innovation. Currently working as Cloud, DevOps, Automation & Systems Infrastructure at Santander. Previously software developer intern at Altia.</p>
            <p>I initially earned a bachelor’s degree in Economics, gaining a solid foundation in economic principles and analysis. However, my passion for technology and innovation led me to switch fields and pursue a bachelor’s degree in Computer Science, where I excelled as the top student in my cohort. Currently, I am deepening my expertise by pursuing a master’s degree in Computer Science, focusing on advanced topics and research to make meaningful contributions to the ever-evolving technological landscape.</p>
            </div>

            <div className='projectsSpace'>
                <h2>Certifications</h2>
                <div className='projects'>
                <a href="https://www.credly.com/badges/f180210d-c933-4ad0-b807-5b1b96bb250e/linked_in_profile" target="_blank" rel="noopener noreferrer">
                    <img src={githubFoundationsBadge} alt='GitHub Foundations Badge' className='badge' />
                </a>
                <a href="https://www.linkedin.com/in/alvarogarciapiz" target="_blank" rel="noopener noreferrer">
                    <img src={githubActionsBadge} alt='GitHub Actions Badge' className='badge' />
                </a>
                </div>
            </div>

            <div className='projectsSpace'>
                <h2>Projects</h2>
                <div className='projects'>
                    <a className='project' href='https://www.commandshow.lvrpiz.com'>The Command</a>
                    <a className='project' href='https://alvarogarciapiz.github.io/AWS-Certify-Hub/'>AWS Certify Hub</a>
                    <a className='project' href='https://github.com/alvarogarciapiz/IntelliTweet'>IntelliTweet</a>
                    <a className='project' href='https://github.com/alvarogarciapiz/GRIPweb'>GRIP Clothing Store</a>
                    <a className='project' href='https://alvarogarciapiz.github.io/GeniusKeys/'>GeniusKeys</a>
                    <a className='project' href='https://github.com/alvarogarciapiz/MoodWise'>MoodWise</a>
                </div>
            </div>

            
        </div>
    );
};

export default Content;