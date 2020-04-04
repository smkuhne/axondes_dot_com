import React from 'react';
import PageHeader from '../components/page_header';
import SectionHeader from '../components/section_header';
import VideoWrapper from '../components/video_wrapper';
import AxondesFooter from '../components/axondes_footer';
import { Carousel, Col, Row, Container } from 'react-bootstrap';

class AggieStudios extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
                <PageHeader image="images/aggiestudios/header.png" header="Aggie Studios" className="profile-image">
                    Senior Animator working with Adobe After Effects and Adobe Illustrator
                </PageHeader>

                <section>
                    <Container>
                        <Carousel interval={null} prevIcon={<span aria-hidden="true" className="carousel-icon">&#60;</span>} nextIcon={<span aria-hidden="true" className="carousel-icon">&#62;</span>} indicators={true}>
                            <Carousel.Item>
                                <VideoWrapper src="https://www.youtube.com/embed/Shf_QPwwHnQ"></VideoWrapper>
                                <Carousel.Caption>
                                    <h2 className="text-center"> Basic Needs and Services Referendum </h2>
                                    <p className="spacer">
                                        Helped develop the video from start to finish by contributing to the storyboard, moodboard, illustrations, and animations. The referendum passed
                                        and UC Davis broke voter turnout records for the second year in a row.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <VideoWrapper src="https://www.youtube.com/embed/3_jakiRM9l0"></VideoWrapper>
                                <Carousel.Caption>
                                    <h2 className="text-center"> Unitrans Winter Referendum </h2>
                                    <p className="spacer">
                                        Created various graphics in Illustrator and worked on several scenes, including all those with character animation. This was the first project
                                        made by the Aggie Studios Animation Team. UC Davis broke voter turnout records with the help of this video. This video won an Addy gold award
                                        in Sacramento in 2020.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <VideoWrapper src="https://www.youtube.com/embed/SPBZIWDl__0"></VideoWrapper>
                                <Carousel.Caption>
                                    <h2 className="text-center"> ASUCD Redefined </h2>
                                    <p className="spacer">
                                        This was part of a larger rebranding campaign for ASUCD (Associated Students of the University of California Davis). I helped by creating content
                                        for the majority of scenes and saw through the process from the brainstorming phase to the end result. The rebranding campaign won an Addy gold award
                                        in Sacramento in 2020.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <VideoWrapper src="https://www.youtube.com/embed/Ns-30EaiwXs"></VideoWrapper>
                                <Carousel.Caption>
                                    <h2 className="text-center"> ASUCD Rebrand </h2>
                                    <p className="spacer">
                                        This video was also part of the ASUCD rebrand campaign. Most of my contributions were in the illustration and animation stages, though I did help
                                        a bit with deciding the direction of the video. The rebranding campaign won an Addy gold award in Sacramento in 2020.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </section>  
		
                <section>
                    <SectionHeader>My job</SectionHeader>
                    <Container className="spacer">
                        <Row>
                            <Col md={6} className="spacer">
                                Aggie Studios is a unit of ASUCD (Associated Students of the University of California Davis). We are the video production unit that
                                works as a part of the larger Creative Media department to create various promotional content for on campus activities such as the very
                                popular annual picnic day. Our studio also produces videos which highlight various campus news and things to do in Davis. I am a part of the
                                client media section which focuses on making content for various other ASUCD units as well as outside sources. Together, we create professional
                                content that has been recognized with awards by the American Advertising Agency. We continue to strive towards improvement and regularly
                                release amazing videos.
                            </Col>
                            <Col md={6}>
                                At Aggie Studios, I work as a senior animator, a position I worked myself into and am greatly enjoying. As a senior animator I get to work on
                                high priority projects for clients. As a senior animator, I also take on a leadership position by providing lots of input on the direction videos
                                should take in terms of color schemes, animations, and illustrations. On most videos I will help see the process through from the brainstorming
                                and storyboarding phase all the way to the post-production phase when animated clips are forwarded to an editor.
                            </Col>
                        </Row>
                    </Container>
                </section>
                <AxondesFooter></AxondesFooter>
            </div>
        )
    }
}

export default AggieStudios;