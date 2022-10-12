import { useState } from 'react';
import { Container, Tabs, Tab, Card, CardGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {faStar} from "@fortawesome/free-solid-svg-icons";
// import '../../../styles/colors';
import './TabList.scss'
import data from '../../data'

export default function TabList(){
  let item = data;
  // let { id } = useParams();
  // let findItem = props.item.find((el) => el.id === id)

  return(
    <Container className="p-3">
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 col-12"
      fill
    >
      <Tab eventKey="Custom" title="제품상세">
        {
          item.map((a,i) => 
            // const j = item.findIndex((item) => item.item_id === )
            <Card className='d-block text-center'>
              <h2 className='tabTitle'>{ item[i].name }</h2>
              <img src={ item[i].image_src} width='50%'/>
            <DetailText/>
            </Card>
          )
        }
      </Tab>

      <Tab eventKey="Lettering" title="픽업 & 일정">
      <DetailText/>
      </Tab>

      <Tab eventKey="Black" title="취소환불">
      <h2 className='tabTitle'>환불 / 취소</h2>
      <p className='tabText'>고객 요청사항에 맞춰 제작 들어가는 맞춤 제작으로 단순 변심에 의한 예약 취소는 위약금 발생합니다.</p>
      </Tab>

      <Tab eventKey="Cool" title="리뷰">
        <Card>
          <Review/>
        </Card>
      </Tab>

      <Tab eventKey="Drawing" title="가게정보">
      <Card className='d-block text-center'>
          <h2 className='tabTitle'>{ item[0].store }</h2>
          <img src={ item[0].image_id} width='50%'/>
          <DetailText/>
      </Card>
      </Tab>
    </Tabs>
    </Container>
  )
}

const DetailText = () => {
  return(
    <>
    <h2 className='tabTitle'>옵션 안내</h2>
    <p className='tabText'>미니 케이크는 위 문구만 기입 가능합니다.<br/>(판문구 기입 불가)</p>

    <h2 className='tabTitle'>문구 수 안내</h2>
    <p className='tabText'>케이크 위 공간은 한정적으로, 지정된 문구 수 내로만 기입 가능합니다.</p>

    <h2 className='tabTitle'>구성품 안내</h2>
    <p className='tabText'>케이크 박스 / 케이크 칼 / 성냥 / 기본실초</p>

    <h2 className='tabTitle'>옵션 안내</h2>
    <p className='tabText'>
      선물 전 미리 수령 시 냉동 보관 후 선물하는 것을 추천합니다.
      <br/> 제품 특성상 온도에 따라 느껴지는 맛이 다르므로 냉장 보관 후 섭취를 권장합니다.
    </p>
    </>
  )
}

const Review = () => {
  let [item] = useState(data);
  return(
    <Container className='m-auto' style={{ width: '50rem' }}>
      <h2 className='text-center'>REVIEW</h2>
      <CardGroup>
        {
          item.map(() => 
            <Card className='p-2'>
            <Card.Img variant="top" src={ item[0].image_id } />
            <Card.Body>
              <Card.Title>{item[0].name}</Card.Title>
              <Card.Text> {item[0].content} </Card.Text>
              <Card.Text> 22년 10월 9일 </Card.Text>
              <Card.Text> 별점 : ⭐️⭐️⭐️⭐️</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Hoowoo Review</small>
            </Card.Footer>
          </Card>
          )
        }
    </CardGroup>
  </Container>
  )
}