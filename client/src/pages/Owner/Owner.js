import { colors } from '../../styles/colors';
import { Col, ListGroup, Row, Tab } from 'react-bootstrap';
import Header from './owner-nav/Header';
import Footer from './owner-nav/Footer';
import OwnerReservation from './contents/OwnerReservation';
import OwnerNewProduct from './contents/OwnerNewProduct';
import OwnerSchedule from './contents/OwnerSchedule';
import OwnerEditProduct from './contents/OwnerEditProduct';

export default function Owner() {
  return (
    <>
      <Header />
      <div className="p-3" style={{backgroundColor: colors.light}}>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={3}>
              <div className="d-flex flex-column flex-shrink-0 p-3 bg-light border">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="images/user-solid.svg"
                    width="150"
                    alt="관리자 사진"
                  />
                  <span className="mt-3 fs-4">
                    금쪽이 케이크
                  </span>
                </div>
                <hr />
                <ListGroup className="text-center">
                  <ListGroup.Item action href="#link1">
                    예약 관리
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    일정 관리
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    제품 목록
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    제품 등록
                  </ListGroup.Item>
                </ListGroup>
                <hr />
              </div>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <OwnerReservation />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <OwnerSchedule />
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <OwnerNewProduct />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <Footer />
    </>
  );
}
