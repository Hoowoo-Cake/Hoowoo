import { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faCreditCard,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  color: black;
`;

export default function CartProduct({ cart, item }) {
  const product = item.find((x) => x.item_id === cart.item_id);
  // console.log(cart);
  // console.log(product);

  const [cartItem, setCart] = useState(cart);

  const countDown = () => {
    setCart(cartItem - 1);
  };

  const countUp = () => {
    setCart(cartItem + 1);
  };

  return (
    <tr class="cart-table-tr__number">
      <td class="cart-table-td__check text-center">
        <input type="checkbox" />
        <label for="goods_id_1"></label>
      </td>
      <td class="cart-table-td__info p-4" data-title="상품정보">
        <div class="cart-product d-flex">
          <div class="cart-product-img">
            <A href="#" class="cart-product-img__src ">
              <img
                src={cart.imageLocate}
                alt="제품"
                style={{ width: '118px' }}
              />
            </A>
          </div>
          <div class="cart-product-info px-4">
            <A href="#" class="d-block border-bottom mb-4">
              {/* cart의 item_id와 item의 item_id가 같은 걸 찾아서 item의 name을 보여줘야함 */}
              <p class="cart-product-info__title">{product.name}</p>
            </A>
            <p class="cart-product-info__date">
              픽업 :{' '}
              <span class="font-weight-bold">
                {/* 2022-09-30 (15:00 ~ 16:00) */}
                {cart.regDate}
              </span>
            </p>
            <a
              href="../pop/cart_option_view.html?cart_uid=17463"
              class="cart-product-info__option popup-link btn btn-secondary"
            >
              옵션상세보기 <i class="fa-solid fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </td>
      <td class="cart-table-td__number text-center" data-title="수량">
        <div class="cart-product-quantity d-flex justify-content-around align-items-center">
          <button type="button" onClick={countDown} className="btn">
            -
          </button>
          <span>{cart.count}</span>
          <button type="button" onClick={countUp} className="btn">
            +
          </button>
        </div>
      </td>
      <td class="cart-table-td__number text-center" data-title="주문금액">
        <p class="">
          <span class="cart-jumun-price">{product.price * cart.count}</span>원
        </p>
      </td>
      <td class="cart-table-td__number text-center" data-title="배송구분">
        <p class="underline opacity-7 text-secondary fw-bold">
          픽업 <br />
          2022-09-30 <br />
          15:00 ~ 16:00{' '}
        </p>
      </td>
    </tr>
  );
}
