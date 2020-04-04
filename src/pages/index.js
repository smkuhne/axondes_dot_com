import React from 'react';
import AxondesFooter from '../components/axondes_footer';
import TileRow from '../components/tile_row';
import SquareTile from '../components/square_tile';
import RectangleTile from '../components/rectangular_tile';
import Particle from 'react-particles-js';
import { Jumbotron, Col, Row, Container } from 'react-bootstrap';

class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="particle-index">
                    <Particle
                    height="100%"
                    params={{
                        particles: {
                            number: {
                                value: window.innerWidth / 15,
                            },
                            color: {
                                value: ['#858585']
                            },
                            line_linked: {
                                color: '#0000ff',
                                opacity: 1
                            }
                        }}}/>
                </div>
                
                <Jumbotron className="text-center" style={{
                    overflow: "hidden"
                }}>
                    <Container>
                        <Row>
                            <Col md={8}>
                                <video src="videos/a.mp4" poster="data:image/png,AAAA" type="video/mp4" autoPlay muted loop id="animated-a" className="a"/>
                            </Col>
                            <Col md={4} className="align-self-center">
                                <h1>This is Axondes</h1>
                                <p>Programmer, Student, Animator, Graphic Designer</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>

                <TileRow id="Work">
                    <RectangleTile banner="images/experience/banner.png" href="/experience">Work Experience</RectangleTile>
                    <RectangleTile banner="images/hackathons/banner.png" href="/hackathons">Hackathons</RectangleTile>
                </TileRow>
                <TileRow>
                    <RectangleTile banner="images/aggiestudios/banner.png" href="/aggiestudios">Aggie Studios</RectangleTile>
                    <RectangleTile banner="images/projects/banner.png" href="/projects">Projects</RectangleTile>
                </TileRow>
                <TileRow>
                    <SquareTile banner="images/animationdesign/banner.png" href="/animationdesign">Animation and Design</SquareTile>
                    <SquareTile banner="images/meteorbytes/banner.png" href="/meteorbytes">Meteorbytes</SquareTile>
                    <SquareTile banner="images/coursework/banner.png" href="/coursework">Relevant Coursework</SquareTile>
                </TileRow>
                <TileRow>
                    <RectangleTile banner="images/marbleous/banner.png" href="/marbleous">Marbleous</RectangleTile>
                    <RectangleTile banner="images/swingdraw/banner.png" href="/swingdraw">Swing Draw</RectangleTile>
                </TileRow>

                <section id="About">
                    <Jumbotron>
                        <Container className="text-center">
                            <Row>
                                <Col md={4} className="text-center">
                                    <img className="profile-image" src="images/me.jpg" alt="profile"/>
                                </Col>
                                <Col md={8}>
                                    <h1 className="spacer text-center">About Me</h1>

                                    <p className="spacer">Let me introduce myself! My name is Sven Kuhne, I'm a professional programmer, full time student, and also a professional animator and illustrator.
                                    This website will give you a very good overview of the kinds of projects I am involved in and my accomplishments up until this current point in time. Though most of the website
                                    is aimed at telling you what I've done, this section aims to show you who I am.</p>
							
                                    <p className="spacer">I've always been fond of learning and it is a constant goal of mine to become more knowledgable in different subjects. A lot of my experience comes from
                                    projects that I work on for fun and this mindset has helped me to grow. I'm constantly looking for new opportunities and don't want to limit myself to a singular topic. Now that I am
                                    a University Student, I can take my passions one step forward by participating in various clubs and organizations. Having a full schedule is a must, but it isn't always just work. Spending
                                    time with friends and making time to have fun are also very important to me and help me be even more productive when I am working. I stand with the work hard, play hard philosophy and
                                    want to get the most out of my life in the moment.</p>
							
                                    <p className="spacer">That being said, I am currently looking for internship opportunities for the summer of 2020. I am currently as second year with senior standing and will be
                                    graduating in June of 2021, at which point I will start working full time in the industry.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </section>
		
                <section id="Contact">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h2 className="spacer">Social Media</h2>
                                <h4 className="spacer">Youtube: <a href="https://www.youtube.com/channel/UC_E3C2vBSoJtnEbX6g4HIog">Axondes</a><br/>
                                LinkedIn: <a href="https://www.linkedin.com/in/sven-kuhne/">Sven Kuhne</a><br/>
                                Instagram: <a href="https://www.instagram.com/mr.svenigan/">@mr.svenigan</a></h4>
                            </Col>
                            <Col md={6}>
                                <h2 className="spacer">Contact Information</h2>
                                <h4 className="spacer">Business Email: <a href="mailto:contact@axondes.com">contact@axondes.com</a><br/>
                                School Email: <a href="mailto:smkuhne@ucdavis.edu">smkuhne@ucdavis.edu</a></h4>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <AxondesFooter></AxondesFooter>
            </div>
        );
    }
}

export default Index;