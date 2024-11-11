
import Header from './component/header';



import 'swiper/css';
import Slider from './component/slider';
import { Footer } from './component/footer';

import db from "./config/firebase"

const App=()=>{
 
  
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
  
  

  return (
    <>
    <Header classname={'Header'}/>
    
    <div>
      <div className='back'></div>
      <div className='slidercont'>
      
      <Slider headr={'Trending Now' as string}></Slider>
      </div>
      <Footer></Footer>
    
    </div>
    </>
  );
}

export default App;
