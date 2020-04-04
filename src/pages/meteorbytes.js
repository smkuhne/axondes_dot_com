import React from 'react';
import PageHeader from '../components/page_header';
import SectionHeader from '../components/section_header';
import ImageWrapper from '../components/image_wrapper';
import AxondesFooter from '../components/axondes_footer';
import { Row, Col, Container, Button } from 'react-bootstrap';

class Meteorbytes extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
                <PageHeader image="images/meteorbytes/header.png" header="Meteorbytes">
                Created using Gamemaker Studio and Photoshop
                </PageHeader>

                <section>
                    <ImageWrapper src="images/meteorbytes/meteorbytes.png"></ImageWrapper>
                </section>

                <section>
                    <SectionHeader>
                        The Process
                    </SectionHeader>
                    <Container className="spacer">
                        <Row>
                            <Col md={6} className="spacer">
                                <p>
                                    This project came about, because I wanted to fully utilize the power of Gamemaker Studio. I proceeded to brainstorm and came
                                    to the conclusion that a space arcade-style shooter would be a lot of fun to make.
                                    In comparison to my attempts with previous projects, I had more knowledge of how to go forward with the art aspect of the
                                    project. Because I am only one person, I decided to go with pixel art, and created the simple player model, meteorites, and
                                    enemies. The background was a little more complex, I started by using photoshop to manipulate generated images and made them
                                    look like star clusters.
                                </p>
                            </Col>
                            <Col md={6}>
                                <p className="spacer">
                                    I then pixelated the image to make it look like the rest of the game. The logic was fairly simple
                                    and I made small adjustments and variations that made the game look a little bit more aesthetic. In general, this game was
                                    concerned less with the programming aspect and more with the art aspect. The game is available for download and installation
                                    on devices running Windows.
                                </p>
                                <div className="text-center">
                                    <Button href="https://axondes.itch.io/meteorbytes" variant="success"> Download on itch.io </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>    
                <AxondesFooter></AxondesFooter>
            </div>
        )
    }
}

export default Meteorbytes;