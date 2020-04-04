import React from 'react';
import PageHeader from '../components/page_header';
import SectionHeader from '../components/section_header';
import MainParticle from '../components/main_particle';
import AxondesFooter from '../components/axondes_footer';
import { Col, Row, Container } from 'react-bootstrap';

class Coursework extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <PageHeader image="images/coursework/header.png" header="Coursework">
                    Relevant work done at UC Davis
                </PageHeader>

                <section className="spacer">
                    <MainParticle></MainParticle>
                </section>

                <SectionHeader>Computer Science Courses</SectionHeader>

                <section className="spacer">
                    <Container>
                        <Row className="spacer">
                            <Col md={6}>
                                <h4>Data Structures</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                This class covered various data structures in C++. Data structures that were covered include arrays, stacks, queues, priotiy queues, trees, graphs, heaps, and hashmaps.
                                We were also introduced to linters and code style guidelines in order to better structure our code.
                            </Col>
                        </Row>
                        <Row className="spacer">
                            <Col md={6}>
                                <h4>Algorithms</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                A variety of algorithmic concepts were covered, starting with big O. We then moved onto how to find big O using recursion, substitution, and masters method. We then covered
                                greedy algorithms, dynamic programming, various graph algorithms, as well as NP.
                            </Col>
                        </Row>
                        <Row className="spacer">
                            <Col md={6}>
                                <h4>Machine-dependent Programming</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                The class was taught using MIPS assembly and we covered how to properly write assembly language. We started off just going through sequential instructions and ended off
                                talking about the kernel space and device interactions.
                            </Col>
                        </Row>
                        <Row className="spacer">
                            <Col md={6}>
                                <h4>Computer Architecture</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                Starting with sequential circuits and simple logic gates, we worked our way up to combinational circuitry, and eventually various CPU components. We used logisim to create
                                circuit diagrams and ended up making a fully functional CPU.
                            </Col>
                        </Row>
                        <Row className="spacer">
                            <Col md={6}>
                                <h4>Theory of Computation</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                We started off the class with finite state machines, worked our way through non-determinism, context-free grammars, and eventually Turing machines. This led us into determinism
                                and the big picture of what problems can be solved.
                            </Col>
                        </Row>
                        <Row className="spacer">
                            <Col md={6}>
                                <h4>Computer Security</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                This class covered a large variety of content, the main four sections were linux privelege escalation, basic webapps, binary exploitation, and cryptography. The basic webapps included
                                exploits such as timed sidechannel attacks and SQL injection. The binary exploitation challenges were hardest and involved buffer overflows and ROP chaining.
                            </Col>
                        </Row>
                        <Row className="spacer">
                            <Col md={6}>
                                <h4>Discrete Math</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                We built up our understanding of mathematics from the very definitions of numbers to using those definitions to absolutely prove something to be true. We covered everything from
                                number theory to sets.
                            </Col>
                        </Row>
                    </Container>
                </section>

                <SectionHeader>Computer Science Clubs</SectionHeader>
                <section className="spacer">
                    <Container>
                        <Row className="spacer">
                            <Col md={6}>
                                <h4>Game Development and Arts Club</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                As a workshop co-manager I help create some of the workshops for the club. Most of my workshops are more technical, but we also do a lot of workshops related to creative
                                thinking and coming up with game ideas.
                            </Col>
                        </Row>
                        <Row className="spacer">
                            <Col md={6}>
                                <h4>Cybersecurity Club</h4>
                            </Col>
                            <Col md={6} className="text-left">
                                As the social media manager, I made the club website and continue to maintain it as meetings are updated, changed, and added.
                            </Col>
                        </Row>
                    </Container>
                </section>
                <AxondesFooter></AxondesFooter>
            </div>
        );
    }
}

export default Coursework;