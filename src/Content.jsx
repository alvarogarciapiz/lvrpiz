import React from 'react';
import './assets/styles/Content.css';

const Content = () => {

    return (
        <div className='Content'>
            <div className='title'>
            <h1>Álvaro García Pizarro, <span className='color2'>Automation</span>, <span className='color1'>Cloud</span> & <span className='color3'>DevOps</span> engineer</h1>
            </div>

            <div className='contact'>
            <a href="mailto:alvaro@lvrpiz.com">alvaro@lvrpiz.com</a> <a href="https://twitter.com/lvrpiz">@lvrpiz</a>
            </div>

            <div className='description'>
            <p>Currently working as Cloud & Devops Engineer at Santander Consumer Finance Global Services. Previously software developer intern at Altia. Make sure to check out my projects and let me know on 𝕏 what do you think about them!</p>
            <p>Passionate about sport, techonology & innovation.</p>
            <p>I hold a bachelor's degree in Economics, where I developed a strong foundation in economic principles and analysis. However, driven by my passion for technology and innovation, I transitioned to pursue a bachelor's degree in Computer Science, where I excelled as the top student in my cohort. Currently, I am furthering my expertise in the field by pursuing a master's degree in Computer Science, focusing on advanced topics and research to contribute meaningfully to the ever-evolving technological landscape.</p>
            </div>

            <div className='projectsSpace'>
                <h2>Projects</h2>
                <div className='projects'>
                    <a className='project' href='https://alvarogarciapiz.github.io/AWS-Certify-Hub/'>AWS Certify Hub</a>
                    <a className='project' href='https://github.com/alvarogarciapiz/IntelliTweet'>IntelliTweet</a>
                    <a className='project' href='https://github.com/alvarogarciapiz/GRIPweb'>GRIP Clothing Store</a>
                    <a className='project' href='https://www.commandshow.lvrpiz.com'>The Command</a>
                    <a className='project' href='https://alvarogarciapiz.github.io/GeniusKeys/'>GeniusKeys</a>
                    <a className='project' href='https://github.com/alvarogarciapiz/MoodWise'>MoodWise</a>
                </div>
            </div>
        </div>
    );
};

export default Content;