import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const A = styled.a`
  text-decoration: none;
  color: black;
`;

export default function WishItem({ item }) {
  return (
    <tr class="cart-table-tr__number border-bottom">
      <td class="cart-table-td__check text-center">
        <input type="checkbox" checked />
        <label for="goods_id_1"></label>
      </td>
      <td class="cart-table-td__info p-4" data-title="상품정보">
        <div class="cart-product d-flex">
          <div class="cart-product-img">
            <A href="/@melting_heart" class="cart-product-img__src ">
              <img
                src={item.imageLocate}
                alt="제품"
                style={{ width: '118px' }}
              />
            </A>
          </div>
          <div class="cart-product-info px-4">
            <A href="/@melting_heart" class="d-block border-bottom mb-4">
              <p className="font-weight-bold">{item.name}</p>
            </A>
            <p class="cart-product-info__date">
              가게명 : <span class="font-weight-bold">{item.storeName}</span>
            </p>
          </div>
        </div>
      </td>
      <td class="cart-table-td__number text-center" data-title="주문금액">
        <p class="">
          <span class="cart-jumun-price">{item.price}</span>원
        </p>
      </td>
      <td class="cart-table-td__number text-center" data-title="수량">
        <div class="cart-product-quantity">
          <button type="button" class="cart-product-quantity__plus up btn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </td>
    </tr>
  );
}
