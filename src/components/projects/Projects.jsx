import React from 'react'
import "./projects.scss"
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import projects from '../../data/projectdata'
import ProjectItem from './ProjectItem.jsx';
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation]);

export default function Projects() {
    
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projectWrapper">
                <Swiper id="main"
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 2,
                        },
                        // when window width is >= 1200px
                        1200: {
                          slidesPerView: 3,
                        },
                      }}
                      >
                    {projects.map((project,index) => {
                        if(index >= 3);
                        return (
                            <SwiperSlide key={project.id}>
                                <ProjectItem title={project.name} img={project.img} desc={project.desc}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className="futureWrapper">
                <h1>Future Plans</h1>

                <div className="lrWrapper">
                    <div className="futureleft">
                        <h1>In Process</h1>
                        <ul>
                            <li>Preparing for "AWS Certified Cloud Practitioner" certificate exam.</li>
                            <li>Admission to Masters in Computer Science.</li>
                            <li>Finish Advanced Web Development - 6 Month Bootcamp on Udemy.</li>
                            <li>Preparing for GRE.</li>
                            <li>Learning German. Hallo! Wie geht's?</li>
                        </ul>
                    </div>
                    <div className="futureright">
                        <h1>Next Up</h1>
                        <ul>
                            <li>PMP Certification.</li>
                            <li>Create YouTube video tutorials on Blender and Basic Web Development technologies.</li>
                            <li>Find a job to pay the bills 😭</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="end">
                <h3>You have reached the end of this section</h3>
            </div>
        </div>
    )
}
