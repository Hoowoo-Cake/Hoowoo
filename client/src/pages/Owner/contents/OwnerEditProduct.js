// import { useState, useRef } from 'react';
import { colors } from '../../../styles/colors';
import { Form, Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import EditProductColor from './EditProductColor';
import EditProductFlavor from './EditProductFlavor'
import EditProductPickup from './EditProductPickup'

const item =
    {
        item_id: 1,
        cakeName: '하트 대잔치 케이크',
        detail: "어쩌구저쩌구",
        delivery: true, // 수정 필요
        pickup: true,
        kindOf: {
            lettering: true,
            custom: false,
            special: false,
        },
        price: 18000,
        pickupTimes: [
            { start: "02:20", end: "03:20", id: 1}
        ],
        colors: [
            { color: "레드", extraCost: 1000, id: 1 }
        ],
        flavors: [
            { flavor: "초코", extraCost: 1000, id: 1 }
        ],
        sizes: [
            { size: "1호", extraCost: 1000, id: 1 }
        ],
        letteringNotice: "어쩌구저쩌구"
    }

export default function OwnerEditProduct() {
    return (
        <>
            <div className="bg-light p-3 border">
                <h2 className="text-center my-3">예약 목록</h2>
                <Form>
                    <h4 className="my-4 ms-3">기본 정보</h4>
                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            케이크 분류
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Check type="checkbox" label="레터링 케이크" defaultChecked={ item.kindOf.lettering } />
                            <Form.Check type="checkbox" label="커스텀 케이크" defaultChecked={ item.kindOf.custom } />
                            <Form.Check type="checkbox" label="스페셜 케이크" defaultChecked={ item.kindOf.special } />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            대표 이미지(1장)
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Control type="file" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            케이크 이름
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Control type="text" placeholder="" defaultValue={ item.cakeName } />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            가격
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Control type="text" placeholder="최소 가격" defaultValue={ item.price } />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            수령 방법
                        </Form.Label>
                        <Col sm={7}>
                            {/* 택배 항목 수정 필요 */}
                            <Form.Check type="checkbox" label="택배" defaultChecked={ item.delivery } />
                            <Form.Check type="checkbox" label="픽업" defaultChecked={ item.pickup } />
                        </Col>
                    </Form.Group>
                    <hr />
                    <h4 className="my-4 ms-3">주문 상세 정보</h4>
                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            상품 이미지
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Control type="file" multiple />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            상품 상세 설명
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Control as="textarea" rows={5} placeholder="" defaultValue={ item.detail } />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            픽업 가능 시간
                        </Form.Label>
                        <EditProductPickup originPickups={item.pickupTimes} />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            라인 색상
                        </Form.Label>
                        <EditProductColor originColors={item.colors} />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            케이크 맛
                        </Form.Label>
                        <EditProductFlavor originFlavors={item.flavors} />
                    </Form.Group>

                    {/* 사이즈 항목 수정 필요 */}
                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            케이크 사이즈
                        </Form.Label>
                        {/* <EditProductSize sizes={item.sizes}/> */}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            레터링 문구 안내사항
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Control as="textarea" rows={2} placeholder="" defaultValue={ item.letteringNotice } />
                        </Col>
                    </Form.Group>

                    <Form.Group className="text-center p-3">
                        <Button type="submit" className="me-3" style={{backgroundColor: colors.black, borderColor: colors.black}}>수정</Button>
                        <Button style={{backgroundColor: colors.black, borderColor: colors.black}}>취소</Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}