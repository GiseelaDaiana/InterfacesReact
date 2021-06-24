import { Fragment, useState } from 'react';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from './components/Movie'

function App() {

  const [movie, setMovie] = useState({});

  const consultarAPI = async () => {
    try{
    const api = await fetch('https://www.superheroapi.com/api.php/4083527108407054/' + Math.floor(Math.random() * (700 - 1 + 1) + 1));
    const movie = await api.json();
    setMovie(movie);
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <Fragment>
      <Container>
      <div
      style={
        {
          paddingTop:"100px",
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }
      }>
      <Row>
        <Col>
        <Button 
            variant="light"
            onClick={consultarAPI}
          >
            DAME UN PERSONAJE!
        </Button>
        </Col>
        </Row>
        <Row>
          <Col>
          <Movie movie = {movie}
          />
          </Col>
        </Row>
      </div>
      </Container>
      </Fragment>

  );
}

export default App;
