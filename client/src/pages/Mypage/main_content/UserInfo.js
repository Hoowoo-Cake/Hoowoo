import styled from 'styled-components';
import {Dropdown, Button} from 'react-bootstrap'
import SignUp from './SignUp';
import DaumPostcode from 'react-daum-postcode';
import Postcode from './SignUp';

export default function UserInfo() {
  return (
    <>
      <Wrapper>
        <div style={{font: 'bold 19px "sans=serif"', color: '#545454', letterSpacing: '1px'}}>회원정보 수정</div>

        <div className="info_list">
          <div className='d-flex align-items-center'>
            <span>이름</span>
            <input type="text" />
          </div>

          <div className='d-flex align-items-center'>
            <span>전화번호</span>
            <input type="text" />
          </div>

          <div className='d-flex align-items-center'>
            <span>비밀번호</span>
            <input type="text" />

            <Button style={{backgroundColor: '#515151', color: '#fff', fontSize: '15px'}} className='m-4'>비밀번호 변경</Button>
          </div>

          <div className='d-flex align-items-center'>
            <span>이메일</span>
            <input type="text" />
            <span>@</span>
            <input type="text" />

            <Dropdown className='m-4'>
            <Dropdown.Toggle style={{backgroundColor: '#515151'}} variant="success" id="dropdown-basic">
                이메일 주소 
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">naver.com</Dropdown.Item>
                <Dropdown.Item href="#/action-2">nate.com</Dropdown.Item>
                <Dropdown.Item href="#/action-3">gmail.com</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className='d-flex align-items-center'>
            <span>주소</span>
            <SignUp />
          </div>

          <div className='d-flex align-items-center'>
            <span>마케팅 정보</span>
            <input type="radio" />
            <input type="radio" />
          </div>
        </div>

        <Button style={{backgroundColor: '#515151', color: '#fff'}} className='btn'>회원정보 수정</Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1.5px solid black;
    margin: 20px 0 20px 0;

   .info_list {
    margin-top: 12px;

      > div {
        border-bottom: 1px solid rgb(229, 229, 229);
        height: 50px;

        span {
            width: 100px;
            font-size: 16px;
            font-weight: bold;
            padding-left: 20px;
        }

        input {
            width: 130px;
            height: 33px;
            background-color: #EDE9E9;
            margin-left: 50px;
            border: none;
          }

        &:nth-of-type(4) {
          input:nth-of-type(2) {
            margin-left: 8px;
          }

          span:nth-of-type(2) {
            width: 20px;
            margin-left: 10px;
            padding: 0;
          }
        }

        &:nth-of-type(5) {
          height: 100px;

          span {
            width: 100px;
            font-size: 16px;
            font-weight: bold;
            padding-left: 30px;
          }

          .address_info {
            margin-left: 50px;

            input {
              margin-bottom: 10px;
            }
          }
        }

        &:nth-of-type(6) {
          input {
            width: 15px;
            margin-left: 40px;
          }
        }
      }
    }

    >.btn {
        margin: 20px 10px 0 0;
        float: right;
      }
`;
