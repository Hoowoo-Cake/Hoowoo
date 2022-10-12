import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faTicket,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import {  faUser } from '@fortawesome/free-regular-svg-icons'

export default function UserCard() {
  return (
    <>
      <Wrapper className="container-fluid">
        <div className="row justify-content-center">
          <p>My page</p>

          <div className="col-11 d-flex position-relative" id="user_info">
            <div className="user_img position-absolute">
              <FontAwesomeIcon icon={faUser} size="5x" className="icon" />
            </div>

            <span>
              '닉네임'님
              <span style={{fontSize: '18px', marginLeft: '10px'}}>안녕하세요</span>
              <span>회원정보변경</span>
            </span>

            <div className="d-flex position-absolute">
              <div className="sub_nav d-flex flex-column text-center">
                <FontAwesomeIcon icon={faCartShopping} className="icon" />
                <span className="mt-3" style={{font: 'bold 16px "sans-serif"', color: '#79716E'}}>장바구니</span>
                <span className='mt-2' style={{font: 'bold 30px "sans-serif"', cursor: 'pointer'}}>2</span>
              </div>
              <div className="sub_nav d-flex flex-column text-center">
                <FontAwesomeIcon icon={faTicket} className="icon" />
                <span className="mt-3" style={{font: 'bold 16px "sans-serif"', color: '#79716E'}}>쿠폰</span>
                <span className='mt-2' style={{font: 'bold 30px "sans-serif"', cursor: 'pointer'}}>2</span>
              </div>
              <div className="sub_nav d-flex flex-column text-center">
                <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                <span className="mt-3" style={{font: 'bold 16px "sans-serif"', color: '#79716E'}}>후기</span>
                <span className='mt-2' style={{font: 'bold 30px "sans-serif"', cursor: 'pointer'}}>1</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .row {
    p {
      font: bold 25px 'sans-serif';
      color: #716D6D;
      transform: translate(6%, 7px);
      letter-spacing: 1px;
    }

    #user_info {
      height: 300px;
      border-radius: 20px;
      background-color: #D3CFCF;

      .user_img {
        left: 8%;
        top: 20%;
        width: 150px;
        height: 150px;
        background-color: #fff;
        border-radius: 50%;

        .icon {
          transform: translate(55%, 35%);
          color: #737171;
        }
      }

      > span:nth-of-type(1) {
        position: absolute;
        top: 36%;
        left: 23%;
        font: bold 20px 'sans-serif';

        span:nth-of-type(2) {
          display: inline-block;
          font-size: 16px;
          color: #787878;
          transform: translate(-160px, 40px);

          &:hover {
            text-decoration: underline;
          }
        }
      }

      > div {
        top: 30%;
        right: -3%;

        .sub_nav {
          margin-right: 140px;

          &::after {
            content: "";
            display: block;
            width: 1.5px;
            height: 120px;
            transform: translate(120px, -120px);
            background-color: #B7AEAE;
          }

          &:last-child::after {
          display: none;
          }

          .icon {
            font-size: 40px;
            color: #737171;
          }
        }
      }
    }
  }
`;
