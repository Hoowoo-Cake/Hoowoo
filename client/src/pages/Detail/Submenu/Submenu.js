import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import colors from '../../../styles/colors';


// detail 페이지의 submenu 부분
export default function Submenu () {
  return(
    <Container className="m-auto p-3 mb-4">
      <div>
        <Title class="d-flex justify-content-center m-3">Hoowoo Cake</Title>
        <ul class="sub-nav d-flex justify-content-center mb-3">
          <SubNav_li><a href="/custom">custom</a></SubNav_li>
          <SubNav_li><a href="/lettering">lettering</a></SubNav_li>
          <SubNav_li><a href="/special">special</a></SubNav_li>
          <SubNav_li><a href="/pickup">today's pick-up</a></SubNav_li>
        </ul>
      </div>
    </Container>
  )
}

// style-components
const Title = styled.p`
  font: 1.7rem/1 'Inter';
  text-align: center;
  margin: 1.5rem;
`

const SubNav_li = styled.li`

  &:not(:last-child)::after{
    content: "|";
    margin: 0 15px;
  }
`


