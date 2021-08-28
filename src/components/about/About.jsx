import React from 'react'
import "./about.scss"
import resume from '../../assets/resume.pdf'

export default function About() {
    return (
        <div className="about">
            <span><a href="#resume">click here to check out my resume!</a></span>
            <h1>About Me</h1>
            <div className="story">
                <h4><span>Hi again!</span></h4>
                <h3>Curious to know more about me? Sit tight, this is a 3-5 min read.</h3>
                <p>Let's begin, <br/>Hearing stories of my grandparents arduous and life-altering journey from Peshawar to Bombay during partition astonishes me every single time to this date. His resilient nature has always inspired me to push back at what life throws at me. He worked all his life, went from rags to sustaining a family of over 20 members as an accomplished Music Composer and forming a duo known as Sonik-Omi, who were well renowned in the music industry for their music in Bollywood movies and private albums. Taking on that responsibility at a stage when you’re completely disoriented and in a strange new place takes a lot of effort, and I believe that such morals and ethics have been passed down to me. Since childhood I have been keen on learning and asking questions to acquire knowledge that will help me grow as an individual and make me a better person. Being among the class representatives and team leaders. I have taken every task seriously and worked diligently towards it.
                </p>
                <p>
                I have completed my Bachelors of Science in Information Technology, from Malini Kishor Sanghvi College, Mumbai (An affiliate of University of Mumbai). As a young boy I have been the one who would fix things and endow information on tech/gadgets, latest or vintage, not just at my humble abode but also in my society. This degree course has taught me Programming languages from basics to core principles, Software Development Ethics {`&`} Green Computing, Embedded Systems, Microprocessor {`&`} Architecture, Data Structures, Discrete Math and other interesting subjects.
                These courseworks have helped me grow and understand the in-depth structure of how a program or a project is planned, worked on, developed, tested on, and later released. For my final year dissertation, I built a Fitness Management Application for Android devices. This project taught me how an app can be built from scratch, concept of time management, choosing an appropriate software design and development model (SDLC), improving the code’s efficiency, principles of unit testing, designing a database schema and so on. What this degree hasn’t taught me is formulating Algorithms, Data Science and Analytics, Artificial Intelligence, Machine Learning and hence I have set my mind to pursue higher education and acquire this knowledge through Masters, wherein I can experience an independent lifestyle and develop the required industrial/work skills. During my time in my college I worked on many personal projects such as building dynamic and responsive websites with backend, Web applications using ReactJS framework, a 4-wheeler bot that has 3 separate modules for different functions, 2D-3D games, animations and models and a lot more. I have always been intrigued by the technological advancements around me, this has led me to raise perplexing questions and the motivation to research and understand them even further than what my academic peers could. My practical knowledge outwits my theoretical reach of the subject since I always think out-of-the-box, and I try my best to eventually cope with the theory.
                With that said, you now know at least 30% about me! Creepy right?.. I hope you enjoyed reading this as much as I did typing and editing it. 
                </p>
            </div>
            <div className="qualifications" id="resume">
                <h2 >Now that's out of the way, here's my resume.</h2>
                <div className="qualificationsWrapper" >
                    <iframe src={resume} frameborder="0" scrolling="no" height="910px" width="100%" title="Resume"></iframe>
                </div>
            </div>
        </div>
    )
}
