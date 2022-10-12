import { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Container, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components';
import './Options.scss'
import OptionColor from '../Optioncolors'
// import data from '../../data'

export default function Options(props){
  // const item = data;
  let { id } = useParams();
  const useform = useForm();

  const colors = OptionColor;
  const [choiceColors, setChoiceColors] = useState('');

  const showColor = (el) => {
    let selectColor = el.value
    setChoiceColors(selectColor);
  }

  const [firstText, setFirstText] = useState('넣고싶은 문구를 작성해주세요');
  const inputValue = useRef();
  const OptionText = (e)=>{
    let userText = inputValue.current.value;
    setFirstText(userText);
  }


  return(
    <Container className="justify-content-between col-5 mt-3 container">
      {/* <div class=""> */}
        <div class="title card-body d-flex flex-column text-start">

        <div className='border border-2 border-dark rounded'>
          <p className='fs-4 fw-bolder p-3 d-flex justify-content-center'>{props.item[0].name}</p>
          <p className='fs-7 fw-normal p-1 d-flex justify-content-center'>{props.item[0].detail}</p>
        </div>

        <form class="selectOption mt-2 p-4 border border-2 border-dark rounded">

          <label for="name" className='p-2 fw-bolder optionDate'>수령날짜</label>
          <div className='p-2 border' w-50>예약일 정할 수 있는 달력 들어올 자리</div>
          <div id="datepicker" class="calendar"></div>
          <hr/>

          <form>
            <label for="label" className='p-2 fw-bolder optionSize'>사이즈</label>
            {/* <input type="radio" name="size" class="m-3"/>도시락
            <input type="radio" name="size" class="m-3"/>미니
            <input type="radio" name="size" class="m-3"/>1호
            <input type="radio" name="size" class="m-3"/>2호
            <input type="radio" name="size" class="m-3"/>3호 */}
            {
              props.item.map((a,i) => 
                <input type="radio" name="size" class="m-3" value={props.item[i].name}/> 
                  
                )
            }
          </form>
          <hr/>

          <form>
            <label for="label" className='p-2 fw-bolder optionFlavor'>맛</label>
            <input type="radio" name="taste" class="m-3"/>요거트
            <input type="radio" name="taste" class="m-3"/>바나나
            <input type="radio" name="taste" class="m-3"/>초코
          </form>
          <hr/>

          <form>            
            <div className='m-3'>
            <label for="label" className='p-2 fw-bolder optionColor'>라인 색상 &nbsp; <div style={{backgroundColor: choiceColors}} type="Select" class="inputbox showColor"/></label>
            {
              colors.map((el,i) => 
              <div style={{ backgroundColor :colors[i].value }} type="Select" class="inputbox" key={i} onClick={()=>{showColor(el)}}/>
              )
            }
            </div>
          </form>
          <hr/>

          <form>
            <label for="label" className='p-2 fw-bolder optionText'>레터링 문구(0/14)</label>
            <p className='p-2 small_text'>한글, 특수문자 7자/ 영어,숫자,기호 14까지 입력가능합니다. / 수정은 불가합니다.</p>
            <input type="text" class="w-100" ref={inputValue} onChange={OptionText} />
            <p className='p-3 midium_text' >✏️ 신청문구(수정불가) ➡️ "{firstText}"</p>
          </form>
          <hr/>

          <label for="label" className='p-2 fw-bolder optionDeliver'>수령방법</label>
          <select name="택배" id="pickup" class="m-2 w-100">
            <option value="택배">택배</option>
            {/* 도착 날짜, 주소 */}
            <option value="픽업">픽업</option>
            <option value="픽업">퀵-셀프신청</option>
            {/* 픽업 날짜, 픽업 시간 */}
          </select>
          <hr/>

          <form>
            <label for="label" className='p-2 fw-bolder optionOther'>기타 요청사항</label>
            <p className='p-2 small_text'>케이크,판 문구수 추가요청은 반영되지 않습니다.<br/>
            옵션에서 선택한 것과 다르게 요청사항 기입 시 옵션선택 기준으로 제작됩니다.</p>
            <input type="text" class="m-2 w-100"/>
          </form>
          <hr/>

          <p className='fs-5 p-4 fw-bolder optionTitle d-flex flex-column text-end'>최종 가격 : {props.item[0].price} 원</p>
          <button class="button-31 m-auto" role="button">주문 신청하기</button>
        </form>
      </div>
    </Container>
  )
}