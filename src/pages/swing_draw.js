import React from 'react';
import PageHeader from '../components/page_header';
import SectionHeader from '../components/section_header';
import ImageWrapper from '../components/image_wrapper';
import AxondesFooter from '../components/axondes_footer';
import { Row, Col, Container, Button } from 'react-bootstrap';

class SwingDraw extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
                <PageHeader image="images/swingdraw/header.png" header="Swing Draw">
                Created using J-Pen and Xuggler libraries in Java
                </PageHeader>

                <section>
                    <ImageWrapper src="images/swingdraw/swingdraw.png"></ImageWrapper>
                </section>

                <section>
                    <SectionHeader>
                        The Process
                    </SectionHeader>
                    <Container className="spacer">
                        <Row>
                            <Col md={6}>
                                <p>
                                    This program started with the idea of making a simple drawing app using Java. I was in my school's AP Computer Science class at
                                    the time and I had become somewhat bored by the slow pace of the course, so I started to learn more about Java on my own time. In
                                    my opinion, the best way to learne is by doing, so I set myself a goal for a project, in this case, I was intrigued by the idea of
                                    making a simple drawing program. It would involve a lot of thinking and would leave a lot of room in terms of both starting off the
                                    project and adding more features later on. I spent around two weeks creating the original application that involved the ability
                                    to draw, choose colors, choose different stroke sizes, erase, save, and open images in the program. Using the jpen library, I was also
                                    able to implement functionality for pressure sensitive drawing tablets allowing for variable strokes. This helped me gain a better
                                    understanding of the way files and images work in Java as well as how to create and modify UIs using Swing. This program also involved
                                    learning threading in order to better manage all the separate processes.
                                </p>
                            </Col>
                            <Col md={6}>
                                <p className="spacer">
                                    Towards the end of the year, our teacher asked us to create
                                    a program that would help people in some way, I decided to add onto my drawing program. My math teacher was looking into applications
                                    to record videos which his students would be able to watch at home. With the inspiration of Khan Academy videos, I started to look into
                                    encoding the images into a video as the user draws. For this, I used the xuggler library. I also implemented microphone functionality
                                    and a set of colors which could be exhanged via hotkey. There are two recording modes, one which will record the entire canvas and
                                    one that accounts for zooming in and panning. After many hours and days of troubleshooting, I finally got it to work. To try out the program,
                                    just click out the button and download the program.
                                </p> 
                                <div className="text-center">
                                    <Button href="https://axondes.itch.io/swing-draw" variant="success"> Download on itch.io </Button>
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

export default SwingDraw;