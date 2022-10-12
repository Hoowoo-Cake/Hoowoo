import { useState, useRef, useEffect } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function EditProductPickup({ originPickups = [] }) {
    const [pickups, setPickups] = useState(originPickups);
    const startRef = useRef();
    const endRef = useRef();

    useEffect(() => {
        setPickups(originPickups);
    }, [originPickups]);
    
    const onPickup = () => {
        const newPickup = {
            start: startRef.current.value,
            end: endRef.current.value,
            id: pickups.length + 1,
        }

        setPickups([...pickups, newPickup]);

        startRef.current.value = "";
        endRef.current.value = "";
    }

    const onRemove = (id) => {
        setPickups(pickups.filter((pickup) => pickup.id !== id));
    }

    return (
        <Col sm={7}>
            {pickups.map((pickup) => (
                <div key={pickup.id} className="d-flex align-items-center">
                    <h5>{pickup.start}</h5>
                    <h5 className="mx-2"> - </h5>
                    <h5>{pickup.end}</h5>
                    <Button type="button" variant="link" onClick={() => { onRemove(pickup.id); }}><FontAwesomeIcon icon={faMinus} className="fs-5 text-dark" /></Button>
                </div>
            ))}
            <div className="d-flex align-items-center">
                <Form.Control type="time" name="start" ref={startRef} />
                <Form.Control type="time" className="mx-3" name="end" ref={endRef} />
                <Button type="button" variant="link" onClick={onPickup}><FontAwesomeIcon icon={faPlus} className="fs-5 text-dark" /></Button>
            </div>
        </Col>
    )
}
