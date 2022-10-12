import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const A = styled.a`
  text-decoration: none;
  color: black;
`;

export default function WishStore({ owner, item }) {
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
                src={item[1].imageLocate}
                alt="제품"
                style={{ width: '118px' }}
              />
            </A>
          </div>
          <div class="cart-product-info px-4">
            <A href="/@melting_heart" class="d-block border-bottom mb-4">
              <p className="font-weight-bold">{owner.storeName}</p>
            </A>
            <p>
              <span style={{ fontSize: '14px' }}>{owner.storeIntro}</span>
            </p>
          </div>
        </div>
      </td>
      <td class="cart-table-td__number text-center">
        <p>
          <span class="cart-jumun-price">{owner.storeAddress}</span>
        </p>
      </td>
      <td class="cart-table-td__number text-center">
        <div class="cart-product-quantity">
          <button type="button" class="cart-product-quantity__plus up btn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </td>
    </tr>
  );
}
