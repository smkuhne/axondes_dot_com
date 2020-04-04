import React from 'react';
import AxondesFooter from '../components/axondes_footer';
import TileRow from '../components/tile_row';
import SquareTile from '../components/square_tile';
import RectangleTile from '../components/rectangular_tile';
import { Jumbotron, Col, Row, Container } from 'react-bootstrap';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className="text-center">
                    <Container>
                        <Row>
                            <Col md={8}>
                                <video src="videos/a.mp4" poster="data:image/png,AAAA" type="video/mp4" autoPlay muted loop id="animated-a"/>
                            </Col>
                            <Col md={4} className="align-self-center">
                                <h1>This is Axondes</h1>
                                <p>Programmer, Animator, Graphic Designer</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>

                <TileRow>
                    <RectangleTile banner="images/marbleous/banner.png" href="/marbleous">Marbleous</RectangleTile>
                    <RectangleTile banner="images/swingdraw/banner.png" href="/swingdraw">Swing Draw</RectangleTile>
                </TileRow>
                <TileRow>
                    <SquareTile banner="images/animationdesign/banner.png" href="/animationdesign">Animation and Design</SquareTile>
                    <SquareTile banner="images/meteorbytes/banner.png" href="/meteorbytes">Meteorbytes</SquareTile>
                    <SquareTile banner="images/meteorbytes/banner.png" href="/coursework">Relevant Coursework</SquareTile>
                </TileRow>
                <TileRow>
                    <RectangleTile banner="images/aggiestudios/banner.png" href="/aggiestudios">Aggie Studios</RectangleTile>
                    <RectangleTile banner="images/aggiestudios/banner.png" href="/aggiestudios">Aggie Studios</RectangleTile>
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

                                    <p className="spacer">Let me start this off by saying that I am delighted by the fact that you are here, right now, looking at this page. So let me introduce myself,
                                    my name is Sven Kuhne. And in case you were wondering, I do realize that for such a professionally designed website, made by me of course, this whole
                                    about me section seems rather unprofessional in comparison. But, I do need to express myself somewhere, so I figured this is the perfect place to
                                    do it.</p>
							
                                    <p className="spacer">From the many different panels above, it becomes very obvious that I find myself interested in a large variety of different projects. In the past
                                    I have accumulated skills in the fields of programming, illustration, and animation, which I continue to use in conjunction with each other, even
                                    today. This website alone already acts as an expressive form of my passion for designing clean and modern looking UIs. UI and graphics in general 
                                    have always been of interest to me. How do you tell which pixel to display in which color. What could possibly move and change so fast that the eye can 
                                    barely see it change at all? How is this wonderful world of technology even possible? These are the questions I constantly  ask myself. Yet eventually,
                                    much like with everything I start, I get an answer and an explanation. For me, its only a matter of time. This is why I like taking on so many different
                                    tasks, it helps me explore and understand more about what is going on. It helps me create, it helps me share, and most importantly, it helps me grow.</p>
							
                                    <p className="spacer">I continue to look for these opportunities to help me find new horizons and to allow me to exceed all of my previous expectations. I want to see
                                    where my life will take me, and I am always ready to try something new. So why not give me a go? You can find my contact information below if you
                                    want to offer me internships, or commissions.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </section>
		
                <section>
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