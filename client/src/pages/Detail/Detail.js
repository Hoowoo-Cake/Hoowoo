import { useState } from 'react';
import NavHeader from '../../component/NavHeader/NavHeader'
import Submenu from './Submenu/Submenu'
import ImgList from './ImgList/ImgList'
import Options from './Options/Options'
import TabList from './TabList/TabList'
import Footer from '../../component/Footer/Footer'
// import data from '../data'

export default function Detail(props) {
  // const [item] = useState(data);
  
  return (
    <>
      <NavHeader/>
      <Submenu/>
      <div className="col-9 d-flex m-auto">
        <ImgList item={props.item}/>
        <Options item={props.item}/>
      </div>
      <TabList/>
      <Footer/>
    </>
  );
}

