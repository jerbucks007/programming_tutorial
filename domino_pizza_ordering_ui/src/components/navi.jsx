import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navi () {
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
            <Nav className="me-auto">
                
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                
                <NavDropdown title="Orders" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/uploadOrders">Upload Orders</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/inputOrders">Input Orders</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/viewOrders">View Orders</NavDropdown.Item>
                </NavDropdown>

                
            </Nav>
            </Container>
        </Navbar>
        
    );
}

export default Navi;