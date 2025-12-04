import { Navbar, Container, Nav } from "react-bootstrap"

const NavBar = () => {
    return(
        <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>AnimePage</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link>Inicio</Nav.Link>
                        <Nav.Link>Top Animes</Nav.Link>
                        <Nav.Link>Noticias</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;