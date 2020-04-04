import React from 'react';
import PageHeader from '../components/page_header';
import SectionHeader from '../components/section_header';
import ImageWrapper from '../components/image_wrapper';
import AxondesFooter from '../components/axondes_footer';
import { Button, Carousel, Col, Row, Container } from 'react-bootstrap';

class Hackathons extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
                <PageHeader image="images/hackathons/header.png" header="Hackathons">
                    Idea to completion in just a matter of days
                </PageHeader>

                <section>
                    <Container>
                        <Carousel interval={null} prevIcon={<span aria-hidden="true" className="carousel-icon">&#60;</span>} nextIcon={<span aria-hidden="true" className="carousel-icon">&#62;</span>} indicators={true}>
                            <Carousel.Item>
                                <ImageWrapper src="images/hackathons/purplejournal.png"></ImageWrapper>
                                <Carousel.Caption>
                                    <h2 className="text-center"> Purple Journal </h2>
                                    <p className="spacer">
                                        I created purple journal along with 3 other people. It is a simple Chrome Extension that utilizes several APIs to find news articles and assign
                                        them sentiment values. This allows users to be more informed as to whether or not their news is biased. We also provide alternative news sources
                                        with different viewpoints to check out as well. This was a submission for HackDavis 2020.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ImageWrapper src="images/hackathons/supplyreport.png"></ImageWrapper>
                                <Carousel.Caption>
                                    <h2 className="text-center"> Supply Report </h2>
                                    <p className="spacer">
                                        Using the Flutter framework, I worked together with a teammate to produce the client-side application. Two other teammates worked on the serverside. I made minor
                                        edits to the serverside code and deployed it to Google App Engine. The application allows users to report and check which items are out of stock at local stores.
                                        This application was made for the COVID-19 Global Hackathon.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ImageWrapper src="images/hackathons/newleaf.png"></ImageWrapper>
                                <Carousel.Caption>
                                    <h2 className="text-center"> New Leaf </h2>
                                    <p className="spacer">
                                        I made this game with another person who usually does artwork for games. This time we switched it up and I worked on the art, while she worked on the coding part of
                                        the game. Two others also helped by contributing some more drawings. We had a lot of fun and submitted this to the Global Game Jam in 2020.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ImageWrapper src="images/hackathons/nutricious.png"></ImageWrapper>
                                <Carousel.Caption>
                                    <h2 className="text-center"> Nutricious </h2>
                                    <p className="spacer">
                                        This application was meant to help people with dietary restrictions view the menu items and content of food at the dining commons at UC Davis. The application was
                                        also structured in such a way that it can be deployed by other organizations as well. This application was made in HackDavis 2019.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </section>  
		
                <section>
                    <SectionHeader>Organization and Responsibilities</SectionHeader>
                    <Container className="spacer">
                        <Row>
                            <Col md={6} className="spacer">
                                As a software engineer, I really enjoy partaking in Hackathons and it really pushes me to my limits, both in terms of learning new concepts
                                and in terms of coming up with good ideas for programs to make. These are usually huge learning experiences for me which force me out of my comfort zone.
                                Every hackathon has helped me grow in some form and have motivated me to take on new projects and take my learning further outside of the hackathon. Working
                                together with other people on software projects isn't always easy, hackathons allow me to meet new people and work with them. This helps me grow as a coder,
                                as collaboration is almost always a necessity in the modern world.        
                            </Col>
                            <Col md={6}>
                                <p className="spacer">
                                    If you want to check out any of the projects listed above, you can check them out here:
                                </p>

                                <Row className="center-content spacer">
                                    <Button variant="success" onClick={() => {window.location = "https://devpost.com/software/purple-journal"}}>Purple Journal</Button>
                                </Row>
                                <Row className="center-content spacer">
                                    <Button variant="success" onClick={() => {window.location = "https://devpost.com/software/supply-report"}}>Supply Report</Button>
                                </Row>
                                <Row className="center-content spacer">
                                    <Button variant="success" onClick={() => {window.location = "https://smallbonsai.itch.io/new-leaf"}}>New Leaf</Button>
                                </Row>
                                <Row className="center-content spacer">
                                    <Button variant="success" onClick={() => {window.location = "https://devpost.com/software/nutricious"}}>Nutricious</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <AxondesFooter></AxondesFooter>
            </div>
        )
    }
}

export default Hackathons;