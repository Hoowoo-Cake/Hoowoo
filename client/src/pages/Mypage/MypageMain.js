import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'; 
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleInfo, faCreditCard, faChevronRight, faBox, faTruck, faGift, faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";

import MypageNav from './main_content/MypageNav';
import OrderProgress from './main_content/OrderProgress';
import OrderSearch from './main_content/OrderSearch';
import CartSearch from './main_content/CartSearch'
import UserCard from './main_content/UserCard';
// import {order, review, cart} from './Mydata';

export default function MypageMain() {
  let order = [
    {
        order_id: 1,
        redDate: '2022-10-12',
        count: 1,
        delivery: '배송', // opt status
        kindOf: '도시락',
        color: 'blue',
        flavor: 'flavor',
        size: 'mini',
        price: '11',
        status: '입금확인', // status 4개
        item_id: '',
        user_id: '',
        userName: '',
    },
  ];

 let review = [
    {
        review_id: 1,
        regDate: '2022-03-02',
        title: 'title',
        content: 'content',
        image_id: 1,
        imageLocate: 'imgaeLocate',
        star: '2',
        store_id: 1,
        user_id: 1,
        userName: 'username'
    } 
  ];

  let cart = [
    {
        cart_id: 1,
        regDate: '2022-08-10',
        count: 2,
        price: 10000,
        pickupdate: '2022-11-10',
        item_id: 'a',
        userName: 'b',
        user_id: 1,
        image_id: 2,
        imageLocate: 'f',
    }
  ];

  return (
    <>
    <Container style={{marginTop: '100px'}}>
        <Row> <UserCard /> </Row>
        <Row style={{marginTop: '100px'}}>
            <Col md={3} className="d-sticky" style={{marginLeft: '30px'}}><MypageNav /></Col>
            <Col md={8}>
                <OrderProgress />
                <OrderSearch />
                <CartSearch />
            </Col>
          </Row>
          <Row className='d-flex flex-column' style={{margin: '200px 0 100px 0'}}>
            <Container style={{margin: '0 0 0 100px'}}>
            <p><FontAwesomeIcon icon={faCircleInfo} style={{fontSize: '18px'}}/> <span style={{fontSize: '18px', marginLeft: '5px'}}>안내드립니다</span></p>
            <Delivery className='d-flex position-relative'>
              <div className='d-flex flex-column p-4'>
                <div className='d-flex flex-column' style={{height: '170px', borderBottom: '1.5px solid #FCA59E'}}>
                  <div><FontAwesomeIcon icon={faCreditCard} size='2x'/> <span style={{font: '20px', marginLeft: '10px'}}>결제완료</span></div>
                  <span style={{color: '#615D5D', marginTop: '10px'}}>결제 및 무통장 입금 확인이 완료되었습니다.</span>
                  <span style={{fontSize: '14px', marginTop: '5px'}}>결제수단 안내 <FontAwesomeIcon icon={faChevronRight} /></span>
                </div>
                <span className='text-center m-1' style={{fontSize: '15px', color: '#F36255'}}>취소, 옵션/배송지 변경 가능</span>
              </div>
              <FontAwesomeIcon icon={faCircleChevronRight} size='2x' style={{color: '#E1D3D0'}} className='arrow'/>

              <div className='d-flex flex-column p-4'>
              <div className='d-flex flex-column' style={{height: '170px', borderBottom: '1.5px solid #FCA59E'}}>
                <div><FontAwesomeIcon icon={faBox} size='2x'/> <span style={{fontSize: '20px', marginLeft: '10px'}}>상품준비중</span></div>
                  <span style={{color: '#615D5D', marginTop: '10px'}}>배송을 위한 상품을 준비하고 있습니다.</span>
                  <span style={{fontSize: '14px', marginTop: '5px'}}>배송비 <FontAwesomeIcon icon={faChevronRight} /></span>
                  <span style={{fontSize: '14px'}}>배송지연 <FontAwesomeIcon icon={faChevronRight} /></span>
                </div>
                <span className='text-center m-1' style={{fontSize: '15px', color: '#F36255'}}>취소 가능, 옵션/배송지 변경 불가</span>
              </div>
              <FontAwesomeIcon icon={faCircleChevronRight} size='2x' style={{color: '#E1D3D0'}} className='arrow'/>

              <div className='d-flex flex-column p-4'>
                <div className='d-flex flex-column' style={{height: '170px', borderBottom: '1.5px solid #FCA59E'}}>
                  <div><FontAwesomeIcon icon={faTruck} size='2x'/> <span style={{fontSize: '20px', marginLeft: '10px'}}>배송중</span></div>
                  <span style={{color: '#615D5D', marginTop: '10px'}}>택배사로 상품이 전달되어 배송이 시작되었습니다.</span>
                  <span style={{fontSize: '14px', marginTop: '5px'}}>배송지연 <FontAwesomeIcon icon={faChevronRight} /></span>
                </div>
                <span className='text-center m-1' style={{fontSize: '15px', color: '#F36255'}}>취소, 옵션/배송지 변경 불가< br/>(고객센터로 문의)</span>
              </div>
              <FontAwesomeIcon icon={faCircleChevronRight} size='2x' style={{color: '#E1D3D0'}} className='arrow'/>

              <div className='d-flex flex-column p-4'>
                <div className='d-flex flex-column' style={{height: '170px', borderBottom: '1.5px solid #FCA59E'}}>
                  <div><FontAwesomeIcon icon={faGift} size='2x'/>  <span style={{fontSize: '20px', marginLeft: '10px'}}>배송완료</span></div>
                  <span style={{color: '#615D5D', marginTop: '10px'}}>상품이 고객님께 도착하여 배송이 완료되었습니다.</span>
                  <span style={{fontSize: '14px', marginTop: '5px'}}>반품신청 안내 <FontAwesomeIcon icon={faChevronRight} /></span>
                  <span style={{fontSize: '14px'}}>교환신청 안내 <FontAwesomeIcon icon={faChevronRight} /></span>
                </div>
                <span className='text-center m-1' style={{fontSize: '15px', color: '#F36255'}}>반품/교환 가능<br/>(배송완료 후 7일까지)</span>
              </div>
            </Delivery>
            </Container>
          </Row>
    </Container>
    </>
  );
}


const Delivery = styled.div`
  width: 90%;

  >div {
    width: 250px;
    height: 270px;
    background-color: #F7F5F4;
    margin-right: 20px;
  }

  .arrow {
      position: absolute;
      top: 5%;
      font-size: 35px;

      &:nth-of-type(1) {
        left: 21%;
      }
      &:nth-of-type(2) {
        left: 44%;
      }
      &:nth-of-type(3) {
        left: 68%;
      }
    }
`