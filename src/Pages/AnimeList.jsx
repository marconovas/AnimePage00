import { useContext } from "react";
import AnimeContext from "../Context/AnimeContext";
import { Col, Row, Card } from "react-bootstrap";
import { Loader } from "../Components/Loader.jsx";

export default function AnimeList() {
    const { animes, loading } = useContext(AnimeContext);

    return(
        <>
            {loading ? (
                <Loader />
            ) : (
                <Row xs={1} md={2} className="g-4" >
                    {animes.map(a => (
                        <Col key={a.mal_id}>
                            <Card>
                                <Card.Img variant="top" src={a.images.jpg.image_url}/>
                                <Card.Body>
                                    <Card.Title>{a.title}</Card.Title>
                                    <Card.Text>{a.synopsis}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </>

    );
}