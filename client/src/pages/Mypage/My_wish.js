import styled from 'styled-components';
import WishItem from './WishItem';
import itemList from './ItemList';

const A = styled.a`
  text-decoration: none;
  color: black;
`;

export default function MyWish() {
  return (
    <main>
      <div class="history row justify-content-around border-bottom text-center">
        <div class="col-4 pt-3 pb-1">
          <A href="./history">최근 본 상품</A>
        </div>
        <div class="col-4 pt-3 pb-3 border-bottom border-dark">
          <A href="./wish">찜한 상품</A>
        </div>
        <div class="col-4 pt-3 pb-3">
          <A href="./wishStore">찜한 가게</A>
        </div>
      </div>
      <section>
        <div className="container">
          <div class="sub-title-box text-center">
            <h2 class="sub-main__title mb-4 mt-5">찜한 상품</h2>
            <p class="mb-5"></p>
          </div>
          <table class="cart-table mb-5" style={{ width: '100%' }}>
            <form name="listform" method="post" action="?" id="listform"></form>
            <input type="hidden" name="buytype" />
            <colgroup>
              <col width="55px" />
              <col width="*" />
              <col width="13%" />
              <col width="13%" />
            </colgroup>
            <thead>
              <tr class="border-bottom text-center">
                <th class="p-3">
                  <input type="checkbox" checked />
                  <label for="check_all22"></label>
                </th>
                <th>상품정보</th>
                <th>상품금액</th>
                <th>위시리스트</th>
              </tr>
            </thead>
            <tbody>
              <WishItem item={itemList[1]} />
              <WishItem item={itemList[2]} />
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
