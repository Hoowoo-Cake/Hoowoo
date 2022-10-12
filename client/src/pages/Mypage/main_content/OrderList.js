import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderList() {
  return (
    <>
      <List className='d-flex felx-column'>
        <div className='p-4 d-flex'>
          <div>
            <img style={{width: '140px', height: '140px'}}
              src="http://www.cakenalda.co.kr/shopimages/cakenalda/0640120000132.jpg?1609835682"
              alt="cake_img"
            />
            <span style={{ font: 'bold 17px "sans-serif"'}}>레터링케이크</span>
            <span className='m-2' style={{font: 'bold 14px "sans-serif"', color: '#a19a9a'}}>2022.09.22</span>
            <p className='mt-2'>22000원</p>
            <div style={{width: '330px', height: '100px', marginLeft: '140px'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
                molestiae voluptas porro ad iusto eligendi impedit quaerat error
                vel.
            </div>
          </div>
          <span style={{ font: 'bold 17px "sans-serif"', margin: '70px 0 0 20px'}}>8990253489832</span>
          <span style={{ font: 'bold 17px "sans-serif"', margin: '70px 0 0 90px'}}>입금확인</span>
        </div>
      </List>
    </>
  );
}

const List = styled.div`
  border-bottom: 1px solid #9b9393;

  >div {

    >div {
      img {
        float: left;
        transform: translate(-15%, 0);
      }
    }
  }
`;
