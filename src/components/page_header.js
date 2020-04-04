import React from 'react';
import { Jumbotron, Col, Row, Container } from 'react-bootstrap';

class PageHeader extends React.Component {
    render() {
        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col md={6} className="align-self-center" style={{
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex"
                        }}>
                            <img src={this.props.image} className={`header-image ${this.props.className}`} alt={this.props.header} align="left"/>
                        </Col>
                        <Col md={6} className="align-self-center" align="middle">
                            <h1>{this.props.header}</h1>
                            <p>{this.props.children}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default PageHeader;