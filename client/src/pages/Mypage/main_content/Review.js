import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar, faXmark} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Review() {

    return(
    <Wrapper className="position-relative" style={{borderBottom: '1px solid rgb(220, 220, 220)'}}>
        <div className="p-3" style={{height: '115px', borderBottom: '1px solid rgb(220, 220, 220)'}}>
            <img src="http://www.cakenalda.co.kr/shopimages/cakenalda/0640120000132.jpg?1609835682" alt="cake_img" style={{width: '80px', height: '80px'}}/>
            <span className="d-inline">레터링케이크</span>
            <span>2022.09.22</span>
            <p>22000원</p>
        </div>
        <div  className="p-3">
            <div style={{marginBottom: '10px'}}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div style={{width: '450px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ullam. Rerum architecto harum quaerat sed reiciendis quo, aut natus doloribus.</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlN8N0AeXBIOde6cBUd5g3aF42fa7zeHlQ9g&usqp=CAU" alt="" style={{width: '120px', height: '120px'}}/>
            <Button style={{backgroundColor: '#413F3F', borderRadius: '0px'}}>수정하기</Button>
            <FontAwesomeIcon icon={faXmark} className="icon"/>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.div`

    div:nth-of-type(1) {
        img {
            transform: translate(-10%, 0);
            float: left;
        }

        span:nth-of-type(1) {
            font-size: 15px;
            font-weight: bold;
        }

        span:nth-of-type(2) {
            font-size: 12px;
            font-weight: bold;
            color: #a19a9a;
            margin-left: 10px;
        }

        p {
            margin-top: 10px;
            font-size: 15px;
        }
    }

    div:nth-of-type(2) {
        position: relative;
        height: 150px;

        img {
            position: absolute;
            top: 10%;
            left: 60%;
        }

        Button {
            position: absolute;
            top: 40%;
            right: 10%;
            cursor: pointer;
        }

        .icon {
            position: absolute;
            top: 5%;
            right: 1%;
            font-size: 25px;
            color: #938E8E;
            cursor: pointer;
        }
    }
`