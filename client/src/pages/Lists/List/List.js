import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function List(props) {
  let { id } = useParams();
  let findItem = props.item.find((el) => el.id === id)

  const navigate = useNavigate();
  const goToDetail = (el) => { 
    navigate(`/detail/${findItem.item_id}`);
  };

  return (
    <Container className='row m-auto text-center' >
      <div className='p-2 d-flex justify-content-center' >
      {
        props.item.map((a,i) => 
          <Card className='m-1 p-4 border border-2 border-dark rounded d-wrap'>
            <Card.Img variant="top" src={findItem.image_src}/>
            <Card.Body>
              <Card.Title>{findItem.name}</Card.Title>
              <Card.Text> {findItem.content} </Card.Text>
              <Card.Text> 22년 10월 9일 </Card.Text>
              <Card.Text> 별점 : ⭐️⭐️⭐️⭐️</Card.Text>
              <Button onClick={() => {goToDetail()}} variant="dark" className='m-4'>더 보기</Button>
          </Card.Body>
        </Card>
        )
      }
      </div>
</Container>
  )
}



