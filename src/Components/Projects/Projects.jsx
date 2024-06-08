import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux, SiHeroku } from "react-icons/si";

import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "Derm Stores",
      image: "projectImages/dermstore.png",
      project_desc:
        "This is an E-Commerce website which was created in 1999 by a dermatologist who wanted to better serve his patients with easier access to the treatments their skin needed. hard-to-find spa care and natural beauty brands, professional hair care and makeup products, and specialty brands from around the world.",
      deploy_link: "https://dermstore-u2.netlify.app/",
      repo_link: "https://github.com/Mukesh16407/Dermstor_Clone",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    },
    {
      id: 2,
      project_name: "Mern-Ecommerce",
      image: "/ProjectImages/mern-ecommercde.png",
      project_desc:
        "Our eCommerce solution provides a seamless, user-friendly experience with an extensive product catalog, including electronics, fashion, and home essentials. Intuitive search, secure payment options, and swift checkout ensure a hassle-free, satisfying shopping experience for modern shoppers.",
      deploy_link:
        "https://ecommerce-frontend-bdrebukv6-mukesh16407s-projects.vercel.app/",
      repo_link: "https://github.com/Mukesh16407/mern-ecommerce",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <SiHeroku />,
        <FaNodeJs />,
        <FaReact />,
        <SiRedux />,
        <SiMongodb />,
      ],
    },
    {
      id: 3,
      project_name: "ebay",
      image: "/projectImages/ebay1.png",
      project_desc:
        "eBay Inc., an American multinational e-commerce corporation headquartered in San Jose, California, facilitates consumer-to-consumer and business-to-consumer sales through its website. Operating in approximately 32 countries as of 2019, eBay is a multibillion-dollar enterprise known for its global presence and diverse marketplace offerings.",
      deploy_link: "https://unit4-ebay.netlify.app/",
      repo_link: "https://github.com/Sweta-Swarnakar/ebay-clone",
      tech_stack: [
        // <SiMaterialui />,
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <SiMongodb />,
        //<SiExpress />,
        <FaJs />,
        <FaNodeJs />,
      ],
    },
    {
      id: 4,
      project_name: "Movie-App",
      image: "/projectImages/entertenment.png",
      project_desc:
        "A Movie platform that allows users to search movies, filter the movies show all details of movies show all crew of the movies and also show trailer of selected movie",
      deploy_link: "https://celebrated-swan-2458ec.netlify.app/",
      repo_link: "https://github.com/Mukesh16407/EntertenmentHub",
      tech_stack: [<FaJs />, <FaReact />, <FaHtml5 />, <FaCss3 />],
    },
    {
      id: 5,
      project_name: "MERN Stack Project",
      image: "/projectimages/mernhomepage.png",
      project_desc:
        "This MERN project showcases search, filtering, pagination, and CRUD operations, enriching data management and enhancing user interaction.",
      deploy_link: "https://willowy-pasca-91d228.netlify.app/",
      repo_link: "https://github.com/Mukesh16407/frontend-primeproject",
      tech_stack: [
        <FaJs />,
        <FaHtml5 />,
        <FaCss3 />,
        <FaReact />,
        <FaNodeJs />,
        <SiMongodb />,
      ],
    },
    {
      id: 6,
      project_name: "Doctor Appointment Booking App",
      image: "/projectImages/doctorAppointment.png",
      project_desc:
        "Separate User Interfaces for Users, Admins, Doctors and also get Notifications in Users, Admin, and Doctors for any update",
      deploy_link: "https://doctorappointment-frontend-snowy.vercel.app/login",

      repo_link: "https://github.com/Mukesh16407/doctorappointment",
      tech_stack: [
        <FaHtml5 />,
        <FaJs />,
        <SiHeroku />,
        <FaNodeJs />,
        <FaReact />,
        <SiRedux />,
        <SiMongodb />,
      ],
    },
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={uuidv4()}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "25px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div key={uuidv4()} className="iconsTechStack">
                        {item}
                      </div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
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
