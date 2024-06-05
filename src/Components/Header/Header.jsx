import React from "react";
import { HeaderContent, H1, P, A, HeaderButtons, TypeWriterH1 } from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <Container className="home">
      <HeaderContent>
        <div>
          <H1>Hi 👋 I'm Mukesh Kumar</H1>
          <TypeWriterH1>
            <Typewriter
              options={{
                strings: [
                  "A Software Engineer",
                  "A Problem Solver",
                  "A Full Stack Developer",
                ],
                pauseFor: 1500,
                autoStart: true,
                loop: true,
              }}
            />
          </TypeWriterH1>
          <P>
            A dedicated full-stack developer with 1.5 years of experience in
            frontend development at Softmind. Skilled in the MERN stack through
            training at Masai School, eager to join a startup and contribute
            effectively.
          </P>
          <HeaderButtons>
            <A
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/drive/u/0/folders/16BghUv8_Qkdxm_hX7CLB0hdkn6UZqRw9"
            >
              Resume
            </A>
            &nbsp;&nbsp;&nbsp;
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={300}
            >
              <A>Projects</A>
            </Link>
          </HeaderButtons>
        </div>
      </HeaderContent>
    </Container>
  );
};

export default Banner;
