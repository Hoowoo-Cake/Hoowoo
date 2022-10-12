// import { useState } from 'react';
import Footer from '../../component/Footer/Footer'
import NavHeader from '../../component/NavHeader/NavHeader'
import Submenu from '../Detail/Submenu/Submenu'
import List from './List/List'

export default function Lists(props) {
  return (
    <>
      <NavHeader/>
      <Submenu/>
      <List item={props.item}/>
      <Footer/>
    </>
  );
}

