import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return(
        <footer className="bg-dark text-white py-5 mt-5">
            <Container>
                <Row className="gy-4">
                    <Col md={4}>
                        <h5 className="mb-3">AnimePage</h5>
                        <p className="text-white-50">
                            Tu espacio para descubrir, explorar y disfrutar del mundo del anime.
                        </p>
                    </Col>

                    <Col md={2}>
                        <h6 className="mb-3">Secciones</h6>
                        <ul className="list-unstyled">
                            <li><a className="text-white-50 text-decoration-none" href="#">Inicio</a></li>
                            <li><a className="text-white-50 text-decoration-none" href="#">Top Animes</a></li>
                            <li><a className="text-white-50 text-decoration-none" href="#">Noticias</a></li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h6 className="mb-3">Contacto</h6>
                        <p className="text-white-50 mb-1">Email: animepage@example.com</p>
                        <p className="text-white-50 mb-0">Instagram: @animepage</p>
                    </Col>

                    <Col md={3}>
                        <h6 className="mb-3">Seguinos</h6>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-white fs-5"><i className="bi bi-twitter-x"></i></a>
                        </div>
                    </Col>
                </Row>

                <hr className="border-secondary mt-4" />

                <p className="text-center text-white-50 mb-0">
                    © {new Date().getFullYear()} AnimePage — Todos los derechos reservados
                </p>
            </Container>
        </footer>

    )
}

export default Footer;