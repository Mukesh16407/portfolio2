import React from 'react';
import { FaGithub, FaLink, FaNodeJs } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { AiFillGithub } from 'react-icons/ai';
import { FaHtml5, FaReact, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from 'react-icons/si';
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    const projects = [
        {
            id: 1,
            project_name: 'Derm Stores',
            image: 'https://github.com/Mukesh16407/git_2nd/blob/master/dermstore.png?raw=true',
            project_desc:
                'This is an E-Commerce website which was created in 1999 by a dermatologist who wanted to better serve his patients with easier access to the treatments their skin needed. hard-to-find spa care and natural beauty brands, professional hair care and makeup products, and specialty brands from around the world.',
            deploy_link: 'https://dermstore-u2.netlify.app/',
            repo_link: 'https://github.com/Mukesh16407/Dermstor_Clone',
            tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
        },
        {
            id: 2,
            project_name: 'HealthMug',
            image: 'https://github.com/Mukesh16407/git_2nd/blob/master/healthmug.png?raw=true',
            project_desc:
                'HealthMug is an online Homeopathy & Unani medicines and to improve the health of the consumers in a holistic way. With an ever-expanding range of products and services, Healthmug is growing rapidly and seeks to become a one-stop portal for all healthcare needs.',
            deploy_link: 'https://salavisushant.github.io/Healthmug-final.github.io/',
            repo_link: 'https://github.com/shivamongit/Healthmug-clone-cw-project',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <FaNodeJs />,
            ],
        },
        {
            id: 3,
            project_name: 'ebay',
            image: 'https://github.com/Mukesh16407/git_2nd/blob/master/ebay1.png?raw=true',
            project_desc:
                "eBay Inc.which is an American multinational e-commerce corporation based in San Jose, California, that facilitates consumer-to-consumer and business-to-consumer sales through its website.eBay is a multibillion-dollar business with operations in about 32 countries, as of 2019.In addition to eBay's original style sales.",
            deploy_link: 'https://app.netlify.com/sites/unit4-ebay/overview',
            repo_link: 'https://github.com/Sweta-Swarnakar/ebay-clone',
            tech_stack: [
                <SiRedux />,
                // <SiMaterialui />,
                <SiMongodb />,
                // <SiExpress />,
                <AiFillGithub />,
                <FaJs />,
                <FaNodeJs />,
            ],
        },
        {
            id: 4,
            project_name: 'Movie-App',
            image: 'https://github.com/Mukesh16407/git_2nd/blob/master/movies2.png?raw=true',
            project_desc:
                'A Movie platform that allows users to search and watch trailers of a wide variety of movies.',
            deploy_link: 'https://my-moviesapi.netlify.app/',
            repo_link: 'https://github.com/Mukesh16407/movies_api',
            tech_stack: [
                <FaNodeJs />,
                <SiMongodb />,
                <FaJs />,
                <SiHeroku />,
                <FaHtml5 />,
                <FaCss3 />,
            ],
        },
        {
            id: 5,
            project_name: 'Weather And Google',
            image: 'https://github.com/Mukesh16407/git_2nd/blob/master/weatherandGoogle_api.png?raw=true',
            project_desc:
                'A simple App which is used for Seven Day forcasting  weather and location.Also add tempterature and  wind Speed.',
            deploy_link: 'https://my-weathermap.netlify.app/',
            repo_link: 'https://github.com/Mukesh16407/weaterandGoolemap',
            tech_stack: [ <FaJs />, <FaHtml5 />, <FaCss3 />],
        },
        {
            id: 6,
            project_name: 'You-tube Clone',
            image: 'https://github.com/Mukesh16407/git_2nd/blob/master/youtube2.png?raw=true',
            project_desc:
                'Its a app look similar to YouTube. Also add some functionality similar to YouTube',
            deploy_link: '',
            repo_link: 'https://github.com/Mukesh16407/youtube_clone',
            tech_stack: [<FaJs />, <FaHtml5 />, <FaCss3 />],
        },
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%' }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
