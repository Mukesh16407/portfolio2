import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/mukesh-kumar-464273229/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/Mukesh16407",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://twitter.com/mkvermashk",
    icon: <FaTwitter />,
  },
];
const About = () => {
  return (
    <Container className="about">
      <AboutDiv>
        <Column>
          <Img src="images/my-avatar.png" alt="my image" />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
              With 1.5 years of experience in software engineering, expertise
              lies in application layers, presentation layers, and databases.
              Proficient in problem-solving and possessing a strong aptitude,
              focus remains on continuous improvement. Thriving in dynamic
              environments, collaboration with multidisciplinary teams fosters
              innovation. Passionate about skill refinement and staying updated
              on industry trends. Committed to delivering high-quality software
              products aligning with user requirements and business objectives.
              Embracing challenges and opportunities for growth, aim is to
              positively contribute to projects and organizations engaged with.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
    </Container>
  );
};

export default About;
