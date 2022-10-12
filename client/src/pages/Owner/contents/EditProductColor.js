import { useState, useRef, useEffect } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function EditProductColor({ originColors = [] }) {
    const [colors, setColors] = useState(originColors);
    const colorRef = useRef();
    const costRef = useRef();

    useEffect(() => {
        setColors(originColors);
    }, [originColors]);

    const onColor = () => {
        const newColor = {
            color: colorRef.current.value,
            extraCost: costRef.current.value,
            id: colors.length + 1,
        }

        setColors([...colors, newColor]);

        colorRef.current.value = "";
        costRef.current.value = "";
    }

    const onRemove = (id) => {
        setColors(colors.filter((color) => color.id !== id));
    }

    return (
        <Col sm={7}>
            {colors.map((color) => (
                <div key={color.id} className="d-flex align-items-center">
                    <h5>{color.color} : </h5>
                    <h5 className="mx-2">+{color.extraCost}원</h5>
                    <Button type="button" variant="link" onClick={() => { onRemove(color.id); }}><FontAwesomeIcon icon={faMinus} className="fs-5 text-dark" /></Button>
                </div>
            ))}
            <div className="d-flex align-items-center">
                <Form.Control type="text" placeholder="색상" name="color" ref={colorRef} />
                <Form.Control type="number" placeholder="추가 금액" name="extraCost" className="mx-3" ref={costRef} />
                <Button type="button" onClick={onColor} variant="link"><FontAwesomeIcon icon={faPlus} className="fs-5 text-dark" /></Button>
            </div>
        </Col>
    )
}