import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function MypageNav() {
  return (
    <>
      <Container className="justify-content-center">
        <div>
          <div className="nav_bar">
            <span>
              <Link to="/mypage">나의 주문 내역</Link>
            </span>
            <span>
              <Link to="/mypage">주문 조회</Link>
            </span>
            <span>
              <Link to="/mypage/cancel">취소/환불 현황</Link>
            </span>
          </div>
          <div className="nav_bar">
            <span>
              <Link to="/mypage/coupon">쿠폰/마일리지</Link>
            </span>
            <span>
              <Link to="#">나의 쿠폰</Link>
            </span>
            <span>
              <Link to="#">나의 마일리지</Link>
            </span>
          </div>
          <div className="nav_bar">
            <span>
              <Link to="/mypage/myinfo">회원정보</Link>
            </span>
            <span>
              <Link to="/mypage/myinfo">회원정보 변경</Link>
            </span>
            <span>
              <Link to="#">회원탈퇴</Link>
            </span>
          </div>
          <div className="nav_bar">
            <span>
              <Link to="/mypage/review">상품후기</Link>
            </span>
            <span>
              <Link to="/mypage/review">후기 목록</Link>
            </span>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: sticky;
  top: 10%;

  >div {
    width: 85%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    border: 1px solid #DEDBDB;

    .nav_bar {
      display: flex;
      flex-direction: column;
      margin: 12px 0 20px 20px;

      a {
        text-decoration: none;
        color: black;

        &:hover {
          text-decoration: underline;
        }
      }

      span {
        margin: 10% 0 0 10%;
      }

      span:nth-of-type(1) {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      span:nth-of-type(2),
      span:nth-of-type(3) {
        margin: 8px 0 0 35px;
        color: #A7A4A4;

        &.on {
          font-weight: bold;
        }
      }
    }
  }
`;
