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
                <PageHeader image="images/projects/header.png" header="Projects">
                    Created using some personal time and self-learned skills
                </PageHeader>

                <section>
                    <ImageWrapper src="images/projects/projects.png"></ImageWrapper>
                </section>

                <section>
                    <SectionHeader>
                        In the Works
                    </SectionHeader>

                    <Container className="spacer">
                        <Row className="spacer">
                            <Col md={6}>
                                <ImageWrapper src="images/projects/onboard.png"></ImageWrapper>
                            </Col>
                            <Col md={6} className="align-self-center">
                                <h2>Onboard Bot</h2>
                                <p className="spacer">
                                    This Discord bot can be used to schedule recurring events on Discord servers and is made, so that it can be deployed to multiple
                                    servers at once. The bot itself was written using Python and uses tools such as AP Scheduler and SQLite3 to run. Due to concerns over
                                    the possibility of SQL injection and overall code structure, I have decided to modify the project for usage with SQL Alchemy, an ORM
                                    that takes out some of the problems with communicating with the SQLite3 database directly.
                                </p>
                                <div className="text-center">
                                    <Button href="https://github.com/smkuhne/onboard_bot" variant="success"> Find on Github </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className="align-self-center">
                                <h2>Geolog</h2>
                                <p className="spacer">
                                    This project was originally created using Android. It serves as a geolocation application which allows you to record GPX tracks which can later be used
                                    to add location metadata to files such as images. The idea was to replace the deprecated MyTracks application by Google and help user move their libraries
                                    over to the new application. My development for this program is being shifted over to Flutter in hopes of making a fully cross-platform application. Currently,
                                    there is not Github repository available. This will be updated as soon as it is.
                                </p>
                            </Col>
                            <Col md={6}>
                                <ImageWrapper src="images/projects/geolog.png"></ImageWrapper>
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