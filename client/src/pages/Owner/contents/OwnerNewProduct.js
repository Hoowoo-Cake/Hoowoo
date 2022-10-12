import { useState, } from 'react';
import { colors } from '../../../styles/colors';
import { Form, Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import NewProductPickup from './NewProductPickup';
import NewProductColor from './NewProductColor';
import NewProductFlavor from './NewProductFlavor';
import NewProductSize from './NewProductSize';

export default function OwnerNewProduct() {
    const [delivery, setDelivery] = useState(false);
    const [sizes, setSizes] = useState([false, false, false, false, false]);

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
                            <Form.Check type="checkbox" label="레터링 케이크" />
                            <Form.Check type="checkbox" label="커스텀 케이크" />
                            <Form.Check type="checkbox" label="스페셜 케이크" />
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
                            <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            가격
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Control type="number" placeholder="최소 가격" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            수령 방법
                        </Form.Label>
                        <Col sm={7}>
                            <div className="d-flex align-items-center">
                                <Form.Check type="checkbox" label="택배" onChange={(e) => e.target.checked ? setDelivery(true) : setDelivery(false)} />
                                {
                                    delivery
                                    ? <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" />
                                    : <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" disabled /> 
                                }
                            </div>
                            <Form.Check type="checkbox" label="픽업" />
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
                            <Form.Control as="textarea" rows={5} placeholder="" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            픽업 가능 시간
                        </Form.Label>
                        <NewProductPickup />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            라인 색상
                        </Form.Label>
                        <NewProductColor />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            케이크 맛
                        </Form.Label>
                        <NewProductFlavor />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            케이크 사이즈
                        </Form.Label>
                        <Col sm={7}>
                            <div className="d-flex align-items-center">
                                <Form.Check type="checkbox" label="도시락" onChange={(e) => e.target.checked ? setSizes([true, sizes[1], sizes[2], sizes[3], sizes[4]]) : setSizes([false, sizes[1], sizes[2], sizes[3], sizes[4]])} />
                                {
                                    sizes[0]
                                    ? <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" />
                                    : <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" disabled /> 
                                }
                            </div>
                            <div className="d-flex align-items-center">
                                <Form.Check type="checkbox" label="미니" onChange={(e) => e.target.checked ? setSizes([sizes[0], true, sizes[2], sizes[3], sizes[4]]) : setSizes([sizes[0], false, sizes[2], sizes[3], sizes[4]])} />
                                {
                                    sizes[1]
                                    ? <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" />
                                    : <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" disabled /> 
                                }
                            </div>
                            <div className="d-flex align-items-center">
                                <Form.Check type="checkbox" label="1호" onChange={(e) => e.target.checked ? setSizes([sizes[0], sizes[1], true, sizes[3], sizes[4]]) : setSizes([sizes[0], sizes[1], false, sizes[3], sizes[4]])} />
                                {
                                    sizes[2]
                                    ? <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" />
                                    : <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" disabled /> 
                                }
                            </div>
                            <div className="d-flex align-items-center">
                                <Form.Check type="checkbox" label="2호" onChange={(e) => e.target.checked ? setSizes([sizes[0], sizes[1], sizes[2], true, sizes[4]]) : setSizes([sizes[0], sizes[1], sizes[2], false, sizes[4]])} />
                                {
                                    sizes[3]
                                    ? <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" />
                                    : <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" disabled /> 
                                }
                            </div>
                            <div className="d-flex align-items-center">
                                <Form.Check type="checkbox" label="3호" onChange={(e) => e.target.checked ? setSizes([sizes[0], sizes[1], sizes[2], sizes[3], true]) : setSizes([sizes[0], sizes[1], sizes[2], sizes[3], false])} />
                                {
                                    sizes[4]
                                    ? <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" />
                                    : <Form.Control type="number" placeholder="추가 금액" className="m-2 w-50" disabled /> 
                                }
                            </div>
                        </Col>
                        {/* <NewProductSize /> */}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-5">
                        <Form.Label column sm={4} className="text-center align-self-center">
                            레터링 문구 안내사항
                        </Form.Label>
                        <Col sm={7}>
                            <Form.Control  as="textarea" rows={2} placeholder="" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="text-center p-3">
                        <Button type="submit" className="me-3" style={{backgroundColor: colors.black, borderColor: colors.black}}>등록</Button>
                        <Button style={{backgroundColor: colors.black, borderColor: colors.black}}>취소</Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}