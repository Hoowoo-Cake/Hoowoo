import { useState, useRef } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function NewProductFlavor() {
    const [flavors, setFlavors] = useState([]);

    const nextID = useRef(1);
    const flavorRef = useRef();
    const costRef = useRef();
    
    const onFlavor = () => {
        const newFlavor = {
            flavor: flavorRef.current.value,
            extraCost: costRef.current.value,
            id: nextID.current,
        }

        setFlavors([...flavors, newFlavor]);

        nextID.current++;
        flavorRef.current.value = "";
        costRef.current.value = "";
    }

    const onRemove = (id) => {
        setFlavors(flavors.filter((flavor) => flavor.id !== id));
    }

    return (
        <Col sm={7}>
            {flavors.map((flavor) => (
                <div key={flavor.id} className="d-flex align-items-center">
                    <h5>{flavor.flavor} : </h5>
                    <h5 className="mx-2"> +{flavor.extraCost}원</h5>
                    <Button type="button" variant="link" onClick={() => { onRemove(flavor.id); }}><FontAwesomeIcon icon={faMinus} className="fs-5 text-dark" /></Button>
                </div>
            ))}
            <div className="d-flex align-items-center">
                <Form.Control type="text" placeholder="맛" name="flavor" ref={flavorRef}/>
                <Form.Control type="number" placeholder="추가 금액" name="extraCost" className="mx-3" ref={costRef} />
                <Button type="button" onClick={onFlavor} variant="link"><FontAwesomeIcon icon={faPlus} className="fs-5 text-dark" /></Button>
            </div>
        </Col>
    )
}