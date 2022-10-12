import Card from 'react-bootstrap/Card';
import coupon from './coupon_data';

function Coupon() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          {coupon[0].couponName} {coupon[0].DCPrice} 할인 쿠폰
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {coupon[0].regDate} ~ {coupon[0].expDate}
        </Card.Subtitle>
        <Card.Text>{coupon[0].couponDetail}</Card.Text>
        <Card.Link href="#">사용하기</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Coupon;
