import React from 'react';
import { Container } from 'react-bootstrap';
import Particles from 'react-particles-js';

class MainParticle extends React.Component {
    render() {
        return (
            <Container>
                <Particles 
                    width="100%"
                    height="100%"
                    params={{ 
                        particles: { 
                            number: { 
                                value: 200, 
                                density: { 
                                    enable: true, 
                                    value_area: 1000, 
                                } 
                            }, 
                        }, 
                    }}
                    style={{
                    background: '#000000',
                    borderRadius: '30px'}}/> 
            </Container>
        );
    }
}

export default MainParticle;