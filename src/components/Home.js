import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import flowers from './flowers';
import Figure from 'react-bootstrap/Figure';
// import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react';
import api from '../communication/api';

function Home(props){
    const [flowers, setFlowers] = useState(null);

    let clickedImage = (event) => {
        props.clickedQuiz(event.target.id);
    }

    useEffect(() => {
        if(flowers === null) {
            api.getFlowers()
            .then(x => setFlowers(x))
            .catch(e => console.log(e));
        }
    });

    function addFlowers() {
        let images = [];
        let i = 0;
        for (let flower in flowers) {
            images.push(<Link id={i} width="160px" height="120px" to="/quiz">
                <Figure id={i}>
                    <Figure.Image id={i} class="img-fluid" width="150px" height="90px"
                        alt={flowers[flower].name}
                        src={flowers[flower].picture} />
                    <Figure.Caption id={i}>{flowers[flower].name}</Figure.Caption>
                </Figure>
            </Link>)
        }
        return images;
    }

    return (
        <Row>
            <Col>
                <Container fluid="md">
                {addFlowers()}
                </Container>
            </Col>
        </Row>
    );
}

export default Home;