import { Component, React } from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './Pages/Home';
import Dota2 from './Pages/Dota2';
// import FormTournament from "C:/Users/ivana/sportsite/src/ComponentsForApi/FormTournament.js"

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            {/* <img
                                src={"https://i.playground.ru/i/pix/1281834/image.jpg"}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"

                            /> */}
                            Turiky
                        </Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/dota2">Dota 2</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/dota2" component={Dota2}/>
                    </Switch>
                </Router>
            </>
        )
    }
}