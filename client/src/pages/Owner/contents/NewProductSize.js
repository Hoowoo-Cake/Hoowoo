import { useState, useRef } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function NewProductSize() {
    const [sizes, setSizes] = useState([]);
    const sizeRef = useRef();
    const costRef = useRef();
    
    const onSize = () => {
        const newSize = {
            size: sizeRef.current.value,
            extraCost: costRef.current.value,
            id: sizes.length + 1,
        }

        setSizes([...sizes, newSize]);
        sizeRef.current.value = "";
        costRef.current.value = "";
    }

    const onRemove = (id) => {
        setSizes(sizes.filter((size) => size.id !== id));
    }

    return (
        <Col sm={7}>
            {sizes.map((size) => (
                <div key={size.id} className="d-flex align-items-center">
                    <h5>{size.size} : </h5>
                    <h5 className="mx-2">+{size.extraCost}원</h5>
                    <Button type="button" variant="link" onClick={() => { onRemove(size.id); }}><FontAwesomeIcon icon={faMinus} className="fs-5 text-dark" /></Button>
                </div>
            ))}
            <div className="d-flex align-items-center">
                <Form.Control type="text" placeholder="사이즈" name="size" ref={sizeRef} />
                <Form.Control type="number" placeholder="추가 금액" name="extraCost" className="mx-3" ref={costRef} />
                <Button type="button" onClick={onSize} variant="link"><FontAwesomeIcon icon={faPlus} className="fs-5 text-dark" /></Button>
            </div>
        </Col>
    )
}