import { Button, Form, Table } from 'react-bootstrap';
import { colors } from '../../../styles/colors';

const orders = [
  {
    order_id: 1,
    regDate: "2022-10-04",
    item_id: 1,
    count: 1,
    price: 18000,
    userName: "ebulsok",
    user_id: 1,
    status: "예약 확정", 
  },
  {
    order_id: 2,
    regDate: "2022-10-05",
    item_id: 2,
    count: 1,
    price: 18000,
    userName: "aaa",
    user_id: 2,
    status: "", 
  }
];

const items = [
  {
    item_id: 1,
    name: "aa케이크",
    detail: "어쩌구저쩌구",
    delivery: "배달",
    kindOf: "레터링",
    color: "레드",
    flavor: "초코",
    size: "1호",
    price: "18000",
    regDate: "2022-10-01",
  },
  {
    item_id: 2,
    name: "bb케이크",
    detail: "어쩌구저쩌구",
    delivery: "배달",
    kindOf: "레터링",
    color: "오렌지",
    flavor: "치즈",
    size: "1호",
    price: "18000",
    regDate: "2022-10-02",
  }
]

export default function OwnerReservation() {
  return (
    <div className="bg-light p-3 border">
      <h2 className="text-center mt-2">예약 목록</h2>
      <Form>
        <div className="text-end p-3">
          <Button type="submit" className="me-2" style={{backgroundColor: colors.black, borderColor: colors.black}}>예약 확정</Button>
          <Button type="submit" style={{backgroundColor: colors.black, borderColor: colors.black}}>예약 거절</Button>
        </div>
        <Table className="text-center align-middle">
          <thead>
            <tr>
              <th></th>
              <th>주문 번호</th>
              <th>이름</th>
              <th>예약 일자</th>
              <th>수량</th>
              <th>주문 상태</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order) => {
                const i = items.findIndex((item) => item.item_id === order.item_id);
                return (
                  <tr key={order.order_id}>
                    <td>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" className="mt-3"/>
                      </Form.Group>
                    </td>
                    <td>{order.order_id}</td>
                    <td>{items[i].name}</td>
                    <td>{order.regDate}</td>
                    <td>{order.count}</td>
                    <td>{order.status}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Form>
    </div>
  );
}
