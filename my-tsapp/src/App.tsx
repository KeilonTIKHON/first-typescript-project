import React, { useEffect, useState } from 'react';
import Card from './component/Card';
import Header from './component/header';

import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import Slider from './component/slider';
import {collection, getDocs, onSnapshot} from 'firebase/firestore';

import db from "./config/firebase"

const App=()=>{
  const [url, setUrl] = useState('https://6720e73498bbb4d93ca6983f.mockapi.io/api/v1/movies')
  const [movies, setMovies] = useState<object[]>([])
  
  //useEffect(()=>{
    //fetch(url)
    //.then(res=>{
     // return res.json()
   //})
    //.then(data=>{
      //console.log(data)
      //setMovies(data)
    //})
    
    //const persons = JSON.parse(usersData)
    //setUser(usersData)
  //},
  //[])
  //useEffect(
    //() =>
      //onSnapshot(collection(db, "players"), (snapshot) =>
        
        //setMovies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      //),

    //[]
  //);
  
  const swiper = useSwiper()

  return (
    <>
    <Header/>
    
    <div>
      <div className='back'></div>
      <div className='slidercont'>
      
      <Slider headr={'Trending Now' as string}></Slider>
      </div>
      <div className='footer'></div>
    
    </div>
    </>
  );
}

export default App;
