import './home.scss'
import arrowdown from '../../assets/arrowdown.png'
import React from 'react'
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import HttpRoundedIcon from '@material-ui/icons/HttpRounded';

export default function Home() {
    return (
        <div className="home">
            <span className="hovertxt">Hover over the text <img src={arrowdown} alt="-->" /></span> 
            <span className="scroll">Scroll down ---{`>`}</span>
            <div className="flexdiv">
            <div className="gradi"><div className="cover"><a href="#footer" data-tool-tip="shh im working rn">Hi there!</a></div></div>
            </div>
            <div className="sectionTwo">
                <div className="sectionWrapper">
                    <div className="left">
                        <img src="./me.jpeg" alt="me"></img>
                    </div>
                    <div className="right">
                        <h3>Namaste 🙏,</h3>
                        <h1>I'm Karan Sonik</h1>
                        <h2>An ordinary Developer, Designer and 3D Modeler.</h2>
                        <h2>Head over to <i><a href="/projects">projects</a></i> section to check out some of my work!</h2>
                    </div>
                </div>
            </div>
            <div className="sectionThree">
                <div className="up">
                        <h3>How can I help you?</h3>
                        <h1>Services Offered</h1>
                </div>
                <div className="sectionThreeWrapper">
                   
                    <div className="downWrapper">
                        <div className="downOne">
                            <HttpRoundedIcon/>
                            <h2>web dev</h2>
                            <p>I can design and deploy high performance websites with the richness of ReactJS!</p>
                        </div>
                        <div className="downThree">
                            <CategoryRoundedIcon/>
                            <h2>models and designs</h2>
                            <p>Need someone to make realistic customised 3d and 2d game assets, animations or logo designs? Contact me!</p>
                        </div>
                        <div className="downTwo">
                            <AndroidRoundedIcon/>
                            <h2>app dev</h2>
                            <p>I can develop powerful Android applications for you! Database integration included!</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
