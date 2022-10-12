import styled from "styled-components"
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"

import MypageNav from "./main_content/MypageNav"
import UserCard from "./main_content/UserCard"
import Review from "./main_content/Review"
import DateSelect from "./main_content/DateSelect"

export default function MyReview() {

    return (
        <>
        <Container style={{marginTop: '100px'}}>
        <Row> <UserCard /> </Row>
        <Row style={{marginTop: '100px'}}>
            <Col md={3} className="d-sticky" style={{marginLeft: '30px'}}><MypageNav /></Col>
            <Col md={8}>
            <p style={{font: 'bold 19px "sans=serif"', color: '#545454', letterSpacing: '1px'}}>상품 후기</p>

            <DateSelect />

            <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
            <Tab eventKey="home" title="작성가능한 상품평">
            </Tab>
            <Tab eventKey="profile" title="작성한 상품평">
                <div className=".cancel_list d-flex flex-column mt-5">
                    <div style={{borderTop: '2px solid black', borderBottom: '1px solid black', height: '35px', fontWeight: 'bold', lineHeight: '35px'}}>
                        <span style={{font: 'bold 17px "sans-serif"', marginLeft: '10px'}}>리뷰 목록</span>
                    </div>
                    <Review />
                </div>
            </Tab>
            </Tabs>


            </Col>
          </Row>
        </Container>
        </>
    )
}

