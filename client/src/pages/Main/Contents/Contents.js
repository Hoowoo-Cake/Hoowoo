import { Container, Card, Carousel, Tab, Tabs,  CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../data'

function Best_main(){
  return(
    <Container style={{ width: '70rem' }} className="m-auto p-3">
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="Custom" title="Custom">
      </Tab>
      <Tab eventKey="Lettering" title="Lettering">
      </Tab>
      <Tab eventKey="Black" title="Black">
      </Tab>
      <Tab eventKey="Cool" title="Cool">
      </Tab>
      <Tab eventKey="Drawing" title="Drawing">
      </Tab>
      <Tab eventKey="Princess" title="Princess">
      </Tab>
    </Tabs>
      Tab형태로 인기 케이크 들어가야함
    </Container>
  )
}

function Tpo_main(){
  let item = data;

  return(
    <Container style={{ width: '42rem' }} className="m-auto p-3">
      <h2 className='text-center'>TPO CAKE</h2>
      {
        item.map((a, i)=>
        <Card.Img style={{ width: '10rem' }} variant="top" src={ item[i].image_src } />
        )
      }
    </Container>
  )
}

function Review_main(){
  let item = data;
  return(
    <Container className='m-auto' style={{ width: '50rem' }}>
      <h2 className='text-center'>REVIEW</h2>
        {
          item.map((a, i)=>
          <CardGroup>
            <Card>
              <Card.Img style={{ width: '10rem' }} variant="top" src={ item[i].image_src } />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
          )
        }
  </Container>
  )
}

export {Best_main, Tpo_main, Review_main}