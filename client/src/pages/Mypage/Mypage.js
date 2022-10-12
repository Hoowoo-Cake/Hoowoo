import MypageCoupon from './Mypage_coupon';
import { Routes, Route } from 'react-router-dom';
import MypageMileage from './Mypage_mileage';
import MyHistory from './My_history';
import MyWish from './My_wish';
import MyWishStore from './My_wishStore';

import MypageMain from './MypageMain';
import MyInfo from './MyInfo';
import MyCancel from './MyCancel';
import MyReview from './MyReview';

export default function Mypage() {
  return (
    <>
    <Routes>
        <Route path='/' element={ <MypageMain /> } />
        <Route path='/myinfo' element={<MyInfo />}/>
        <Route path='/cancel' element={<MyCancel />}/>
        <Route path='/review' element={<MyReview />} />
        <Route path="/coupon" element={<MypageCoupon />} />
        <Route path="/mileage" element={<MypageMileage />} />
        <Route path="/history" element={<MyHistory />} />
        <Route path="/wish" element={<MyWish />} />
        <Route path="/wishStore" element={<MyWishStore />} />
    </Routes>
    </>
  );
}
