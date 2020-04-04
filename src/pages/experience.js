import React from 'react';
import PageHeader from '../components/page_header';
import SectionHeader from '../components/section_header';
import ImageWrapper from '../components/image_wrapper';
import AxondesFooter from '../components/axondes_footer';
import { Col, Row, Container } from 'react-bootstrap';

class Experience extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
                <PageHeader image="images/experience/header.png" header="Experience">
                    Work experience in software engineering
                </PageHeader>

                <section className="spacer">
                    <ImageWrapper src="images/experience/experience.png"></ImageWrapper>
                </section>

                <SectionHeader>Companies</SectionHeader>

                <section className="spacer">
                    <Container>
                        <Row className="spacer">
                            <Col md={6} className="spacer">
                                <h2>Bouncer</h2>
                                <h3>Software Engineer and Tester (Contract)</h3>
                                <h4>February 2020 - Present</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                As a software engineer, I work together with another student from UC Davis to create webpages for Bouncer. We are currently working on the main webpage and are writing it using a combination
                                of React and Next.js for serverside rendering. We hold regular meetings and have put a lot of thought into the structure of the website as well as our workflow. Some of the components we
                                created are very complex and require minute adjustments of proportions and positioning. It is exceptionally difficult to have the project working for all platforms, as the stylistic components
                                of the website don't necessarily translate over very well to a mobile experience. Bouncer creates a software used in mobile applications to detect credit cards using machine learning. Another
                                part of my job at Bouncer is to test and push the card scanning software to the limits using various combinations of cards, screens, and other mediums to trick and eventually train the model
                                to better recognize cards and stop fraud.
                            </Col>
                        </Row>
                        <Row className="spacer">
                            <Col md={6}>
                                <h2>Navis</h2>
                                <h3>Software Engineering Intern</h3>
                                <h4>June 2019 - September 2019</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                During my time at Navis I learned a lot of different skills that helped me grow as software engineer as well as a team member. I was responsible for regularly meeting with
                                some of my full time colleagues to discuss updates on the project and to check in with the parts of the project they were working on. The project itself also required us to
                                talk directly to customers and to discuss their needs. This led us to translate information from a users perspective into a technical sense. The project itself involved javascript
                                and the UI framework Vue. Together with another intern I helped to create a fully functional HTML5 application which interacted directly with a server to display and modify data.
                                The project introduced me to some technologies I was fairly new to and which now continue to reside in my arsenal of experience. Along with front-end design using frameworks, I also
                                learned a lot about how to properly manage data and how to structure a program in an efficient manner as to get the most use out of it and to have the application run as fast as possible.
                            </Col>
                        </Row>
                    </Container>
                </section>

                <AxondesFooter></AxondesFooter>
            </div>
        );
    }
}

export default Experience;