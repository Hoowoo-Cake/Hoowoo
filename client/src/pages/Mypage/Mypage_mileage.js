import { Table } from 'react-bootstrap';
export default function MypageMileage() {
  return (
    <main>
      <section>
        {/* userInfo */}
        <div class="container container--1160">
          {/* 마이페이지 lnb  */}
          <div class="sub-title-box text-center">
            <h2 class="sub-main__title m-3 p-3">쿠폰/마일리지</h2>
          </div>
          <div class="mypage-content">
            <form name="searchForm" id="searchForm" action="?#subtitle">
              <div class="mypage-article">
                <h3 class="sub_title">나의 마일리지</h3>
                <Table striped bordered hover className="text-center">
                  <tbody>
                    <tr>
                      <th>
                        <p>현재 마일리지</p>
                      </th>
                      <th>
                        <p>사용한 마일리지</p>
                      </th>
                      <th>
                        <p>소멸예정 마일리지</p>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <p class="text-size-15 font-weight-black">3,000P</p>
                      </td>
                      <td>
                        <p class="text-size-15 font-weight-black">0P</p>
                      </td>
                      <td>
                        <p class="text-size-15 font-weight-black">0P</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <p class="text-size-14 text-color-1 font-weight-medium">
                  * 마일리지는 상품 구매 후 이벤트에 따라 적립됩니다.
                </p>
                <p class="text-size-14 text-color-1 font-weight-medium mt-1">
                  * 500P이상 적립되신 시점부터 결제수단으로 사용 가능하며,
                  10P단위로 사용 가능합니다. (10P=10원)
                </p>
                <p class="text-size-14 text-color-1 font-weight-medium mt-1">
                  * 적립된 마일리지의 사용기한은 적립일로부터 3년입니다.
                </p>
              </div>

              <div class="mypage-article">
                <div
                  class="mileage__wrap"
                  data-tab="true"
                  data-tab-order="0"
                  data-tab-active="on"
                  data-tab-index="0"
                  data-css="true"
                >
                  {/* <ul class="mileage-tab-list" data-tab-header="">
                    <li class="mx-5 btn btn-dark" style={{ width: '150px' }}>
                      <a href="?mode=1#subtitle" class="text-light">
                        적립
                      </a>
                    </li>
                    <li
                      class="btn btn-ligh border border-dark"
                      style={{ width: '150px' }}
                    >
                      <a href="?mode=2#subtitle" class="text-dark">
                        사용
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
