import React from 'react';
import PageHeader from '../components/page_header';
import SectionHeader from '../components/section_header';
import VideoWrapper from '../components/video_wrapper';
import AxondesFooter from '../components/axondes_footer';
import { Row, Col, Container, Button } from 'react-bootstrap';

class Marbleous extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
                <PageHeader image="images/marbleous/header.png" header="Marbleous">
                    Created using WebGL, Javascript, and HTML in Playcanvas
                </PageHeader>

                <section>
                    <VideoWrapper src="https://playcanv.as/p/jDnjRca6/"></VideoWrapper>
                </section>

                <section>
                    <SectionHeader>
                        The Process
                    </SectionHeader>
                    <Container className="spacer">
                        <Row>
                            <Col md={6}>
                                <p>
                                    This project started off as part of a month-long hackathon, hosted by the company that made this game engine, Playcanvas.
                                    They provided all entrants with some of the initial materials and a theme. These initial materials included the very simple platforms,
                                    a ball, and three scripts, one of which let the camera follow the ball, another one which enabled the teleporters, and the
                                    last one which let the user control the ball. I had only recently discovered the platform, and with my prior knowledge of
                                    Actionscript, which is quite similar in syntax to Javascript, I set out to make the game. I made most of the textures as well
                                    as the UI myself. I only had very limited knowledge at the time and if I were to remake this game now, I would most certainly
                                    change a lot. Even though applying the different ideas was quite difficult, I had a good deal of fun. Yet, the most difficult
                                    part of the project was the guideline that I had established for myself, this being that I would need to publish this app
                                    on the Chrome Web Store. Even beyond that, I decided that it would have to be a game that ran offline instead of one that would
                                    merely consist of an iframe, such as the version of the game playing on this page. Though Playcanvas made it easy to download the app
                                    package, adapting it to Chrome's set of rules was quite difficult.
                                </p>
                            </Col>
                            <Col className="col-md-6">
                                <p className="spacer">
                                    The most challenging part was trying to allow the game to
                                    save it's state. Though cookies are allowed on websites, Chrome had its own way of storing data. And that conflicted with some of
                                    the functions in Playcanvas, so I couldn't just build in the Chrome save functionality in the Javascript files associated with
                                    the Playcanvas API. With a lot of Googling, I figured out that noone had solved this problem yet and I tried to figure it out
                                    on my own. I eventually succeeded, using a separate Javascript file that was not associated with the API and relaying the information
                                    via the inner HTML of an element that was off-screen. It may not have been the best option, but it certainly was a work-around.
                                    I then published my game on the Chrome Web Store and ended up winning the hackathon. With help from the Playcanvas team, I was able
                                    to garner over 15,000 downloads and I ended up creating one of the first 3D offline games on Chrome.
                                </p>
                                <div className="text-center">
                                    <Button href="https://chrome.google.com/webstore/detail/marbleous/jbcgphppffkahpoiobhfdjfpbapbjblh?hl=en-US" variant="success"> Download on Chrome </Button>
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

export default Marbleous;