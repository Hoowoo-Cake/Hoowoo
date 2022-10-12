import { Col, Container, Row, Tabs, Tab, Sonnet } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock, faFileInvoice, faChevronRight, faFilePen, faTruck, faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import MypageNav from "./main_content/MypageNav";
import UserCard from "./main_content/UserCard";
import OrderList from "./main_content/OrderList";
import OrderSearch from "./main_content/OrderSearch";
import DateSelect from "./main_content/DateSelect";

export default function MyCancel() {

    return (
        <>
        <Container style={{marginTop: '100px'}}>
            <Row> <UserCard /> </Row>
            <Row style={{marginTop: '100px'}}>
                <Col md={3} className="d-sticky" style={{marginLeft: '30px'}}><MypageNav /></Col>
                <Col md={8}>
                    <p style={{font: 'bold 19px "sans=serif"', color: '#545454', letterSpacing: '1px'}}>취소/환불</p>
                    <DateSelect />
                    <ul style={{fontSize: '13px', margin: '-55px 0 0 -8px'}}>
                        <li>취소는 주문접수/ 결제완료/ 상품준비중 단계에서 신청하실 수 있습니다.</li>
                        <li>상품준비중 단계에서의 취소신청이 가능하며, 판매자 확인 후 주문상태가 취소완료가 됩니다. 단, 판매자에 의해 거부가 된 경우 취소가 불가능할 수 있습니다.</li>
                        <li>교환/반품은 배송완료 후 7일 이내에만 신청하실 수 있습니다. 7일 경과 후 상품하자 또는 오배송으로 인한 교환/반품은 고객센터로 문의해주세요.</li>
                        <li>고객님의 책임으로 상품이 멸실 또는 훼손으로 인해 상품가치가 하락한 경우 교환이나 반품이 불가합니다.</li>
                    </ul>
                    <OrderSearch />
                </Col>
            </Row>
            <Row className='d-flex flex-column' style={{margin: '200px 0 100px 0'}}>
                <Container style={{margin: '0 0 0 60px'}}>
                    <p><span style={{fontSize: '18px', marginLeft: '5px'}}>취소/반품/교환 안내</span></p>
                    <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-5" justify>
                        <Tab eventKey="home" title="취소/환불" style={{marginLeft: '80px'}}>
                            <Delivery className='d-flex position-relative'>
                            <div className='d-flex flex-column p-4'>
                                <div><FontAwesomeIcon icon={faClock} size='2x'/> <span style={{font: '20px', marginLeft: '10px'}}>취소대기중</span></div>
                                <span style={{color: '#615D5D', marginTop: '10px'}}>판매자가 취소 가능 여부를 판단중에 있습니다. 판매자에 의해 취소가 불가능할 수 있습니다.</span>
                                <span style={{fontSize: '14px', marginTop: '10px'}}>(취소철회 고객센터로 문의)</span>
                            </div>
                            <FontAwesomeIcon icon={faCircleChevronRight} size='2x' style={{color: '#E1D3D0'}} className='arrow'/>

                            <div className='d-flex flex-column p-4'>
                                <div><FontAwesomeIcon icon={faFileInvoice} size='2x'/> <span style={{fontSize: '20px', marginLeft: '10px'}}>취소완료</span></div>
                                <span style={{color: '#615D5D', marginTop: '10px'}}>취소 승인이 완료되었습니다. 결제수단별 환불절차에 따라 환불이 진행됩니다.</span>
                                <span style={{fontSize: '14px', marginTop: '10px'}}>결제수단별 환불 안내 <FontAwesomeIcon icon={faChevronRight} /></span>
                            </div>

                            <div className='d-flex flex-column p-4'>
                                <div><FontAwesomeIcon icon={faFilePen} size='2x'/> <span style={{fontSize: '20px', marginLeft: '10px'}}>반품 접수</span></div>
                                <span style={{color: '#615D5D', marginTop: '10px'}}>택배사로 상품이 전달되어 배송이 시작되었습니다.</span>
                            </div>
                            <FontAwesomeIcon icon={faCircleChevronRight} size='2x' style={{color: '#E1D3D0'}} className='arrow'/>

                            <div className='d-flex flex-column p-4'>
                                <div><FontAwesomeIcon icon={faTruck} size='2x'/>  <span style={{fontSize: '20px', marginLeft: '10px'}}>반품처리중</span></div>
                                <span style={{color: '#615D5D', marginTop: '10px'}}>고객님이 발송하신 상품을 회수하는 중입니다. 반품완료까지 영업일로 약 5일 정도 소요됩니다.</span>
                            </div>
                            </Delivery>
                        </Tab>
                        <Tab eventKey="profile" title="교환">
                        </Tab>
                    </Tabs>
                </Container>
            </Row>
        </Container>
        </>
    )
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
        left: 22%;
      }
      &:nth-of-type(2) {
        left: 72.5%;
      }
    }
`