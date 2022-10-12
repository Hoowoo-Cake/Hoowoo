import styled from "styled-components";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";

import DateAPI from "./DateAPI";

export default function DatSelect() {

    return (
        <>
        <Wrapper className="position-relative">
            <div className="position-absolute">
                <Button variant="right">1주일</Button>
                <Button variant="right">1개월</Button>
                <Button variant="right">3개월</Button>
            </div>
            <div className="d-flex">
                <div className="d-flex"><DateAPI/> <FontAwesomeIcon icon={faCalendar} className="icon"/></div>
                <div className="d-flex"><DateAPI/> <FontAwesomeIcon icon={faCalendar} className="icon"/></div>
            </div>
        </Wrapper>
        </>
    )
}


const Wrapper = styled.div`
    width: 100%;
    height: 90px;
    background-color: #F0F0F0;
    margin: 10px 0 80px 0;

    >div {
        top: 30%;
        left: 20%;

        Button {
        font-size: 13px;
        color: black;
        border: none;
        border-radius: 0px;
        margin-right: 8px;
        background-color: #fff;
        }
    }

    >div:nth-of-type(2) {
        position: absolute;
        top: 30%;
        left: 42%;
        margin-left: 20px;

        >div {
            width: 130px;
            height: 30px;
            background-color: #fff;
            margin-right: 15px;

            .dateBox {
            width: 100px;
            margin: 2px 10px 0 5px;
            border: none;
            }

            .icon {
            font-size: 18px;
            transform: translate(-7px, 6px);
        }
        }
    }

`