import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import Index from './pages/index';
import Marbleous from './pages/marbleous';
import SwingDraw from './pages/swing_draw';
import AnimationDesign from './pages/animation_design';
import Meteorbytes from './pages/meteorbytes';
import AggieStudios from './pages/aggie_studios';
import Coursework from './pages/coursework';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Hackathons from './pages/hackathons';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
            <img src="images/logo.png" className="rounded-circle logo" alt="Logo"/>
            <Link to="/"><Navbar.Brand>Axondes</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Link className="nav-link" role="button" to="/">Home</Link>
                    <Nav.Link role="button" href="/documents/sven_kuhne_resume.pdf">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Route render={({location}) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={500}
                    classNames="fade">
                    <Switch location={location}>
                        <Route exact path="/" component={Index}/>
                        <Route path="/experience" component={Experience}/>
                        <Route path="/hackathons" component={Hackathons}/>
                        <Route path="/aggiestudios" component={AggieStudios}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/animationdesign" component={AnimationDesign}/>
                        <Route path="/meteorbytes" component={Meteorbytes}/>
                        <Route path="/coursework" component={Coursework}/>
                        <Route path="/marbleous" component={Marbleous}/>
                        <Route path="/swingdraw" component={SwingDraw}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}/>  
    </div>
  );
}

export default App;
