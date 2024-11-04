import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {collection, getDocs, onSnapshot} from 'firebase/firestore';
import db from "../config/firebase"

type TSlider = {
  headr?: string

}

type Movies = {
  name:string,
  picture:string,
  rating:string,
  trailerLink:string
}


const Slider = (headr: TSlider) => {
  const [url, setUrl] = useState('https://6720e73498bbb4d93ca6983f.mockapi.io/api/v1/movies')
  const [movies, setMovies] = useState<Array<any>>([])
  useEffect(
    () =>
      onSnapshot(collection(db, "Movies"), (snapshot) =>
        setMovies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    
      ),

    []
  );
  

  console.log()

  return (
    <div className='slidercont'>
      <div className='sliderheadr'>{headr.headr}</div>
      <div className='slidercont2'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={-20}
          slidesPerView={4}
          navigation
          loop={true}
          onSwiper={(swiper: any) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {movies.map((movie, i) => (<SwiperSlide key={i}><Link to={movie.trailerLink}><div className='mockMovie' style={{ backgroundImage: `url(${movie.picture})`, backgroundSize:`cover`, backgroundRepeat:`no-repeat`, backgroundPosition:`50%` }}>{movie.name}(Movie name)<br />Mock image:<br /></div></Link></SwiperSlide>))}

        </Swiper>
      </div>

    </div>
  );
}
//https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg
//{movies.map((movie,i)=>(<SwiperSlide key={i}><div className='mockMovie'>{movie.name}(Movie name)<br/>Mock image:<br/><img src={movie.avatar}></img></div></SwiperSlide>))}
export default Slider;