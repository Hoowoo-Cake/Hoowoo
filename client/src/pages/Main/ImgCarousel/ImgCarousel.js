import { Container, Card, Carousel, Tab, Tabs,  CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../data'


function ImgCarousel() {
  let item = data;

  return (
    <Carousel className='w-25 m-auto p-5'>
      {
        item.map((a, i)=>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={ item[i].image_src }
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{item[i].name}</h3>
          <p>L{item[i].content}</p>
        </Carousel.Caption>
        </Carousel.Item>
        )
      }
    </Carousel>
  );
}

export default ImgCarousel