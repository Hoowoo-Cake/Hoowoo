import {Container, Row, Col } from 'react-bootstrap'

import UserInfo from './main_content/UserInfo';
import MypageNav from './main_content/MypageNav';
import UserCard from './main_content/UserCard';

export default function MyCancel() {
  return (
    <>
    <Container style={{marginTop: '100px'}}>
        <Row> <UserCard /> </Row>
        <Row style={{marginTop: '100px'}}>
          <Col md={3} className="d-sticky" style={{marginLeft: '30px'}}> <MypageNav /> </Col>
          <Col md={8}> <UserInfo /></Col>
        </Row>
    </Container>
    </>
  );
}
