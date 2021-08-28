import React from 'react'
import { Link } from 'react-router-dom'
import projectImg from '../../assets/designs.jpg'
import styled from 'styled-components'

const ProjectItemStyles = styled.div`

    .itemWrapper{
        height: 100%;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items:center;

    }
    .projectItemImg{
        height: auto;
        width: auto;
        max-width: 500px;
        border-radius: 14px;
        border: 3px solid black;
        margin-bottom: 1em;
        
        img{
            height: 100%;
            width: 100%;
            border-radius: 11px;
            object-fit: contain;
            display: block;
        }
    }
    .projectItemInfo{
        width: 90%;
        margin-top: 1rem;
        margin: 2px 2px;
        background-color: #262626;
        padding: 0 1rem;
        border-radius: 12px;

        &>a{
            text-decoration:none;

            
        }

        .projectItemTitle{

            margin: 0.5em 0 0 0;
            padding:0;
            text-align: center;
            font-size: 2.2rem;
            text-align: center;
            padding:0;
           
        }
    
        .projectItemDesc{
        font-size: 1.3rem;
        padding:0;
        margin-bottom: 1em;
        color: #c2c2c2;
        font-family:'Lucida Grande', 'Lucida Sans';

        }
    }


    @media only screen and (max-width: 768px){

        .projectItemImg{
            height: 350px;
        }
    }
`

export default function ProjectItem( {
    img = projectImg,
    title = 'Project Name',
    desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae sit at numquam excepturi laudantium sint doloribus velit dolorem ullam!',
}) {
    return (
        <ProjectItemStyles>
            <div className="itemWrapper">
                <Link to="/projects" className="projectItemImg">
                    <img src={img} alt="designs"/>
                </Link>
                <div className="projectItemInfo">
                    <Link to="#" className="title">
                        <h3 className="projectItemTitle">{title}</h3>
                    </Link>
                    <p className="projectItemDesc">{desc}</p>
                </div>
            </div>
        </ProjectItemStyles>
    );
}
