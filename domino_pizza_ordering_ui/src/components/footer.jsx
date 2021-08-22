import { Nav, Navbar, Container } from 'react-bootstrap';

function Footer () {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" >
            <Container>
            <Nav className="me-auto">
                Copyright 2021
            </Nav>
            </Container>
        </Navbar>
    );
}

export default Footer;