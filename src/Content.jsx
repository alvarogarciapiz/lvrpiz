import React from 'react';
import './assets/styles/Content.css';
import githubFoundationsBadge from './assets/images/github-foundations-badge.png';
import githubActionsBadge from './assets/images/github-actions-badge.png';
import awsIcon from './assets/images/aws.png';
import commandIcon from './assets/images/command.png';
import gawgIcon from './assets/images/gawg.png';
import intelliTweetIcon from './assets/images/intellitweet.png';
import moodWiseIcon from './assets/images/moodwise.png';
import gutWardenIcon from './assets/images/gutwarden.png';
import stressIcon from './assets/images/stressTracker.png';
import TimeDaylight from './assets/images/TimeDaylight.png';

const Content = () => {

    return (
        <div className='Content'>
            <div className='title'>
            <h1>Álvaro García Pizarro, <span className='color2'>Automation</span>, <span className='color1'>Cloud</span> & <span className='color3'>DevOps</span> engineer</h1>
            </div>

            <div className='contact'>
            <a href="mailto:alvaro@lvrpiz.com">alvaro@lvrpiz.com</a> <a href="https://www.bulletin.lvrpiz.com">Bulletin</a>
            </div>

            <div className='description'>
            <p>Passionate about techonology, sport & innovation. Currently working as Cloud, DevOps, Automation & Systems Infrastructure at Santander. Previously software developer intern at Altia.</p>
            <p>I initially earned a bachelor’s degree in Economics, gaining a solid foundation in economic principles and analysis. However, my passion for technology and innovation led me to switch fields and pursue a bachelor’s degree in Computer Science, where I excelled as the top student in my cohort. Currently, I am deepening my expertise by pursuing a master’s degree in Computer Science</p>
            <p>Most of my free time goes into working on apps and small SaaS projects that I enjoy building. I’ve also set up a little personal mailing list to let people know about what I’m working on.</p>
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
                    <a className='project' href='https://stressapp.lvrpiz.com'>
                        <img src={stressIcon} alt='Stress Tracker' className='project-icon' />
                    </a>
                    <a className='project' href='https://gawg.lvrpiz.com'>
                        <img src={gawgIcon} alt='GAWG' className='project-icon' />
                    </a>
                    <a className='project' href='https://timeindaylight.lvrpiz.com'>
                        <img src={TimeDaylight} alt='Time in Daylight app' className='project-icon' />
                    </a>
                    {/* <a className='project' href='https://gutwarden.lvrpiz.com'>
                        <img src={gutWardenIcon} alt='The Command' className='project-icon' />
                    </a> */}
                    <a className='project' href='https://github.com/alvarogarciapiz/IntelliTweet'>
                        <img src={intelliTweetIcon} alt='IntelliTweet' className='project-icon' />
                    </a>
                    <a className='project' href='https://alvarogarciapiz.github.io/AWS-Certify-Hub/'>
                        <img src={awsIcon} alt='AWS Certify Hub' className='project-icon' />
                    </a>
                    <a className='project' href='https://github.com/alvarogarciapiz/MoodWise'>
                        <img src={moodWiseIcon} alt='MoodWise' className='project-icon' />
                    </a>
                    {/* <a className='project' href='https://commandshow.lvrpiz.com'>
                        <img src={commandIcon} alt='The Command' className='project-icon' />
                    </a> */}
                </div>
            </div>
            
        </div>
    );
};

export default Content;