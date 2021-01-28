import React, { useState } from 'react';
import GithubLogo from './assets/GitHub.png';
import TwitterLogo from './assets/Twitter.png';
import InstagramLogo from './assets/Instagram.png';
import PatreonLogo from './assets/Patreon.png';
import './app.scss';
import Modal from './components/modal';

const App = () => {
    const [show, setShow] = useState<boolean>(false);

    const closeCallback = () => setShow(false);
    return (
        <div id="app">
            <Modal show={show} closeCallback={closeCallback}>
                <div className="modal-header">Learn More about this Potato</div>
                <p className="modal-text">I'm a thiccc fat potato sitting in front of bloody computer; I am 14; I look like a Giraffe and Sleep like a Dolphin; Yes I know the previous two sentences don't make sense just like my life; I wake up at- Oh yeah I don't wake up, because I don't sleep; I have made two render engines and one physics engine; I have made several authentication mechanisms; I was born in Delhi, India Btw; I moved to Australia in 2019; I'm not scammer, idk about my family; I can't fix your PC or Washing Machine or TV or Ur mom; <br/>I like calling myself a dumbass, because I am one; I have been coding since I was eight; I once went about 9 days without pooping, was this relevant? Hell No; <br/>Russia is the largest country, just behind Ur mom; <br/>I can make a website for your assignment, to fill up your bibliography; <br/>I'm the Creator of <a href="https://dreaminnovationteam.xyz">https://dreaminnovationteam.xyz</a>; https://dreaminnovationteam.xyz is the only thing I'm proud of; I'm a registered Apple, Android, Xbox, Playstation and Microsoft Developer; I learnt English when I was 8, after/during I learnt/was learning to code; Rubber Ducks; I might change this website again after a few months;</p>
            </Modal>

            <div id="landing">
                <div className="header">NavTheNugget or Lifeless Potato</div>
                <div className="subheader">Professional Dumbass, Programmer, Potato</div>
                <div className="subheader">Still a High Schooler, lives in Australia. Hates School btw. <span id="learn-more" onClick={() => {setShow(true);}}>Learn More</span> <span id="affiliates"></span></div>
                <div id="social-media">
                    <div id="icons">
                        <a href="https://instagram.com/NavTheNugget" target="_blank" rel="noopener noreferrer" className="link"><img src={InstagramLogo} alt="" className="invert" /></a>
                        <a href="https://twitter.com/NavTheNugget" target="_blank" rel="noopener noreferrer" className="link"><img src={TwitterLogo} alt=""/></a>
                        <a href="https://github.com/NavTheNugget" target="_blank" rel="noopener noreferrer" className="link"><img src={GithubLogo} alt=""/></a>
                        <a href="https://patreon.com/NavTheNugget" target="_blank" rel="noopener noreferrer" className="link"><img src={PatreonLogo} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;