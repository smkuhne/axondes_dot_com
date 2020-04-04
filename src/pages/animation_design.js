import React from 'react';
import PageHeader from '../components/page_header';
import SectionHeader from '../components/section_header';
import VideoWrapper from '../components/video_wrapper';
import ImageWrapper from '../components/image_wrapper';
import AxondesFooter from '../components/axondes_footer';
import { Carousel, Col, Row, Container } from 'react-bootstrap';

class AnimationDesign extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <PageHeader image="images/animationdesign/header.png" header="Animation and Design">
                Created using Adobe After Effects, Illustrator, and Photoshop
                </PageHeader>

                <section>
                    <Container>
                        <Carousel interval={null} prevIcon={<span aria-hidden="true" className="carousel-icon">&#60;</span>} nextIcon={<span aria-hidden="true" className="carousel-icon">&#62;</span>} indicators={true}>
                            <Carousel.Item>
                                <VideoWrapper src="https://www.youtube.com/embed/E2y67NqQrCY"></VideoWrapper>
                                <Carousel.Caption>
                                    <h2 class="text-center"> Gilleto </h2>
                                    <p className="spacer">
                                        Gilleto is a musician from Greece who produces electronic/EDM music. I gave him a branding overhaul and have created a visualizer for him as well.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ImageWrapper src="images/animationdesign/cjpaghasian.png"></ImageWrapper>
                                <Carousel.Caption>
                                    <h2 class="text-center"> CJ Paghasian </h2>
                                    <p className="spacer">
                                        CJ Paghasian is a design student at the University of California Davis. I helped him establish a portfolio website which he can use in
                                        his job applications.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <VideoWrapper src="https://www.youtube.com/embed/tI5jmroXgaM"></VideoWrapper>
                                <Carousel.Caption>
                                    <h2 class="text-center"> Qwatzro </h2>
                                    <p className="spacer">
                                        Qwatzro is another musician that I work with. I provided him with a full graphics package as well as a custom visualizer which he can use
                                        to publish videos along with his music.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <VideoWrapper src="https://www.youtube.com/embed/N4uJL4_SAt8"></VideoWrapper>
                                <Carousel.Caption>
                                    <h2 class="text-center"> Junior Breakthrough Challenge </h2>
                                    <p className="spacer">
                                        On my own time, I created a video for the junior breakthrough challenge to explain a mathematical concept.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <VideoWrapper src="https://www.youtube.com/embed/tnqf897aDF4"></VideoWrapper>
                                <Carousel.Caption>
                                    <h2 class="text-center"> Blender Bike </h2>
                                    <p className="spacer">
                                        Using assets created in an engineering class that I took my junior year of high school, I created an animation that puts a bike together.
                                        This is a sample from that video.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <VideoWrapper src="https://www.youtube.com/embed/8-rWb7IheCU"></VideoWrapper>
                                <Carousel.Caption>
                                    <h2 class="text-center"> FBLA Digital Video Production </h2>
                                    <p className="spacer">
                                        Together with two team members, I created this video for FBLA and submitted it to the Digital Video Production category. We won fourth place
                                        in the statewide competition.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </section>  
		
                <section className="spacer text-left">
                    <SectionHeader>Commissions</SectionHeader>
                    <Container className="spacer">
                        <Row>
                            <Col md={6} className="spacer">
                                <p className="spacer">I help people establish their brand and their name through graphic design and animation. I specialize in working together with
                                Youtube channels such as those above. The Youtube channel package usually includes a logo, banner, intro, and outro. I can start
                                off with simple questions if you are unsure of which direction you want to go in, and eventually we will narrow things down to a
                                central theme.</p>
						
                                <p className="spacer">More special commissions include websites and visualizers. I can build you a website from the ground up and will make sure to contact
                                you frequently throughout the entire process to make sure that you enjoy the direction in which the website is going.</p>
						
                                <p>Visualizers usually come as part of a full branding package, but if you have already established your brand, you can still ask me for a custom
                                visualizer. If you are interested in any of these services, check out my contact information and estimated prices to the right.</p>
                            </Col>
                            <Col md={6} className="align-self-center">
                                Please know that these prices are negotiable and are only meant as general guidelines. Depending on the size of the project, I might
                                charge more or less.<br/><br/>
						
                                <div className="text-center">
                                    Branding Package: $30<br/><br/>
                                    First Visualizer: $40<br/><br/>
                                    Subsequent Visualizer Videos: $5<br/><br/>
                                    Website: $120<br/><br/>
                                </div>
						
                                Are you interested? Contact me via email: <a href="mailto:contact@axondes.com">contact@axondes.com</a>
                            </Col>
                        </Row>
                    </Container>
                </section> 
                <AxondesFooter></AxondesFooter>
            </div>
        )
    }
}

export default AnimationDesign;