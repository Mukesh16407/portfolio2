import React from 'react';
import { Container } from '../../SharedStyles/SharedStyles';
import { FooterCont, A } from './Styles';

const Footer = () => {
    return (
        <Container>
            {/* </FooterLink> */}
            <FooterCont>
                <A
                    href=' https://muknewportfolio.netlify.app'
                    target='_blank'
                    rel='noreferrer'
                >
                    <strong>Source Code</strong>
                </A>
            </FooterCont>
            {/* </FooterLink> */}
        </Container>
    );
};

export default Footer;
