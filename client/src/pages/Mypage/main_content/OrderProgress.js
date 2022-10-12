import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function OrderProgress() {
  return (
    <Wrapper>
      <p style={{font: 'bold 19px "sans=serif"', color: '#6C635F', letterSpacing: '1px'}}>주문내역 조회</p>

      <div className="order_lists d-flex justify-content-around">
          <div className='d-flex flex-column text-center'>
            <span>입금/결제</span>
            <span>0</span>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="3x" className='icon_arrow'/>

          <div className='d-flex flex-column text-center'>
            <span>제작중</span>
            <span>0</span>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="3x" className='icon_arrow'/>

          <div className='d-flex flex-column text-center'>
            <span>픽업/배송중</span>
            <span>0</span>
          </div>
          <FontAwesomeIcon icon={faChevronRight} size="3x" className='icon_arrow'/>

          <div className='d-flex flex-column text-center'>
            <span>픽업/배송완료</span>
            <span>0</span>
          </div>

          <div className="c-bar"></div>
          <div className='d-flex flex-column text-center'>
            <span>주문취소</span>
            <span>0</span>
          </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10px;

    .order_lists {
    border-top: 2.5px solid black;
    border-bottom: 1.5px solid black;

      > div {
        margin: 20px 0;

        span:nth-of-type(1) {
          font-size: 18px;
          font-weight: bold;

          &:hover {
            text-decoration: underline;
          }
        }

        span:nth-of-type(2) {
          font-size: 40px;
          font-weight: bold;
        }
      }

      .icon_arrow {
          transform: translate(0, 50px);
          color: #9b9393;
        }

      .c-bar {
        width: 1px;
        height: 100px;
        background-color: #9b9393;
      }
    }
`;
