import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImgList.scss' //scss연결
import '../../../styles/colors';

export default function ImgList(props){
  // const id= props.match.params.id;
  // console.log(id, typeof id);
  let { id } = useParams();

  const [choiceImg, setChoiceImg] = useState(props.item[id].image_src);

  // 전달한 인자가 이미지 주소 값이므로 매개 변수 명을 해당 값을 바로 알 수 있도록 변경
  const showImg = (img_src) => {
    // find 메소드를 이용해서 찾을 값은 전달 받은 이미지 주소 값과 같은 주소 값을 가진 객체를 찾는 것이므로 수식을 아래와 같이 작성
    let findItem = props.item.find((el) => el.image_src === img_src);
    // finde 메소드가 찾은 객체는 findItem 변수에 저장이 되어 있으므로, 상태 변화 함수의 값으로 findItem.image_src 값을 전달하여
    // 이미지를 변경하면서 컴포넌트를 리렌더링 시켜 줌
    setChoiceImg(findItem.image_src);
  };

  return(
    <Container className="row mt-3 d-flex justify-content-cente col-7">
      <Card className="border border-2 border-dark rounded">
        <Card.Img
          src={choiceImg}
          alt="cakeImg"
          width="30%"
          className="img_detail m-auto"
        />
      </Card>
      <Card class="card-body right mt-2 p-4 w-75 d-flex flex-column justify-content-center border border-2 border-dark rounded">
        <p className="fs-5 p-2 fw-bolder">[Preview] 케이크 배경색</p>
        <ul class="p-2 d-flex justify-content-center selectBackgroundColor">
          {props.item.map((el, i) => (
            <li key={el.image_src}>
              <img
                // 이미 props.item 배열에 각각의 이미지 주소가 잘 들어 있으므로
                // map 을 사용에 접근한 각각의 element 의 image_src 값에 이미지 주소를 부여
                src={el.image_src}
                alt=""
                width="140px"
                class="m-1"
                onClick={() => {
                  showImg(el.image_src);
                }}
              />
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  )
}