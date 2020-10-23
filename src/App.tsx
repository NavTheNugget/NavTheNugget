import React, { useState } from 'react';
import GithubLogo from './assets/GitHub.png';
import TwitterLogo from './assets/Twitter.png';
import InstagramLogo from './assets/Instagram.png';
import PatreonLogo from './assets/Patreon.png';
import DiscordLogo from './assets/Discord.png';
import './app.scss';
import Modal from './components/modal';

const App = () => {
    const [show, setShow] = useState<Boolean>(false);
    const closeCallback = () => setShow(false);
    return (
        <div id="app">
            <Modal show={show} close_callback={closeCallback}>
                <div className="modal-header">Learn More about this Potato</div>
                <p className="modal-text">Welcome my nuggets! I am thicc fat potato sitting in front of a computer. I am 14 years old, look like a giraffe and sleep like a dolphin. Yes I know the previous two sentences don't make sense just like my life. I wake up at 6:45am and go to bathroom to do what you also do, you know on the seat... I wake up at 1:00pm on holidays. <br/>
                I have made two render engines and one physics engine, with all the nerdy stuff done myself. I moved to Australia in 2019, I annoy my teachers and do not take any school work seriously. <br/>
                I moved from India btw, to clear any confussion: I am not a scammer neither is my family, and no I can't fix your computer or washing machine or TV. <br/>
                I like calling myself a dumbass, because I am one. I have been coding since I was eight. I once went about 9 days without pooping, was this relevant? Hell No. <br/>
                I like spending my money on things that don't matter like my life and silly websites about my teachers and sometimes I have to make websites for my assignments to fill up the bibliography... <br/>
                I code on a Macbook Pro 13" 2019 128Gb SSD, 8Gb RAM. I use Airpods 2nd Gen without Wireless Charging, I have a siz year old iPhone 6s 16 Gb which requires a powerbank attached with it all the time. <br/>
                If you are fascinated by this lifeless potato then join his <a href="https://discord.gg/bW5EC6u">Discord Server</a> so that he can have some friends and not just talk to his pillow. <br/>
                You can find this potato on instagram, I like being around people btw.</p>
            </Modal>
            <div id="landing">
                <div className="header">NavTheNugget or Lifeless Potato</div>
                <div className="subheader">Professional Dumbass, Programmer, Potato</div>
                <div className="subheader">Still a High Schooler, lives in Australia. <span id="learn-more" onClick={() => {setShow(true);}}>Learn More</span></div>
                <div id="social-media">
                    <div id="icons">
                        <a href="https://instagram.com/NavTheNugget" target="_blank" rel="noopener noreferrer" className="link"><img src={InstagramLogo} alt="" className="invert" /></a>
                        <a href="https://twitter.com/NavTheNugget" target="_blank" rel="noopener noreferrer" className="link"><img src={TwitterLogo} alt=""/></a>
                        <a href="https://github.com/NavTheNugget" target="_blank" rel="noopener noreferrer" className="link"><img src={GithubLogo} alt=""/></a>
                        <a href="https://discord.gg/bW5EC6u" target="_blank" rel="noopener noreferrer" className="link"><img src={DiscordLogo} alt=""/></a>
                        <a href="https://patreon.com/NavTheNugget" target="_blank" rel="noopener noreferrer" className="link"><img src={PatreonLogo} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;