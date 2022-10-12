import { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faCreditCard,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import CartProduct from './CartProduct';
import cartData from './cart_data';
import itemList from '../Mypage/ItemList';

const A = styled.a`
  text-decoration: none;
  color: black;
`;

export default function Cart() {
  const cart = cartData;

  return (
    <main>
      <section className="title">
        <h2 className="text-center m-3 p-3">장바구니</h2>
      </section>
      <section className="cart__section m-3 p-3">
        <div className="cart__container">
          <div className="cart-situation row justify-content-between">
            <p className="cart-quantity fw-bold fs-4 col-1">
              Cart<span className="cart-quantity-number">(1)</span>
            </p>
            <ul className=" d-flex justify-content-around col-5">
              <li className="on d-flex justify-content-between align-items-center">
                <p className="fw-bold fs-5">
                  <FontAwesomeIcon icon={faCartShopping} /> Cart
                </p>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <p>
                  <FontAwesomeIcon icon={faCreditCard} /> Payment
                </p>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <p>
                  <FontAwesomeIcon icon={faCircleCheck} /> Order Complete
                </p>
              </li>
            </ul>
          </div>
          <Table striped bordered hover>
            <form name="listform" method="post" action="?" id="listform"></form>
            <input type="hidden" name="buytype" />
            <colgroup>
              <col width="55px" />
              <col width="*" />
              <col width="15%" />
              <col width="13%" />
              <col width="13%" />
            </colgroup>
            <thead>
              <tr class="border-bottom text-center">
                <th class="">
                  <input type="checkbox" />
                  <label for="check_all22"></label>
                </th>
                <th>상품정보</th>
                <th>수량</th>
                <th>주문금액</th>
                <th>배송구분</th>
              </tr>
            </thead>
            <tbody>
              <CartProduct cart={cart[0]} item={itemList} />
              <CartProduct cart={cart[1]} item={itemList} />
            </tbody>
          </Table>

          <div class="cart-btn__wrap mt-5 mb-5 pb-5">
            <div class="cart-btn__box">
              <button
                type="button"
                class="btn btn-dark"
                onclick="bask_check_del()"
              >
                선택 삭제
              </button>
            </div>
          </div>
          <div class="cart-sum border-top-line border-top border-dark pt-5 pb-5 border-bottom border-dark">
            <div class="cart-sum-list">
              <div class="cart-sum-list__item text-center">
                <div class="cart-sum-list__inner">
                  <p class="fs-3 fw-bold cart-sum-list__price">
                    <span class="font-weight-bold text-color-1 total-price">
                      {/* 체크된 주문금액만 더해서 보여주기 */}
                      50,000
                    </span>{' '}
                    원
                  </p>
                  <p class="fw-bold cart-sum-list__text mb-0">주문금액</p>
                </div>
              </div>
            </div>
          </div>
          <div class="finish d-flex justify-content-center mb-5">
            <div class="btn btn-light mt-5 mb-5">
              <A href="/cakelist/" class="btn-type-01 __line py-4 px-3 px-sm-8">
                쇼핑하러가기
              </A>
            </div>
            <div class="btn btn-dark mt-5 mb-5">
              <A
                href="javascript:bask_check_order()"
                class="text-light"
                style={{ color: '#fff' }}
              >
                선택상품주문
              </A>
            </div>
            <div class="btn btn-dark mt-5 mb-5">
              <A
                href="javascript:bask_all_order()"
                class="text-light"
                style={{ color: '#fff' }}
              >
                전체주문
              </A>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
