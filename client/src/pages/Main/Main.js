// import { createContext, useEffect, useState, Suspense } from 'react';
import Footer from '../../component/Footer/Footer'
import NavHeader from '../../component/NavHeader/NavHeader'
import ImgCarousel from './ImgCarousel/ImgCarousel'
import { Best_main, Tpo_main, Review_main } from './Contents/Contents'

export default function Main() {
  return (
    <>
      <NavHeader/>
      <ImgCarousel/>
      <Best_main/>
      <Tpo_main/>
      <Review_main/>
      <Footer/>
    </>
  );
}
