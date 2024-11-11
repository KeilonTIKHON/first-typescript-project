
import { useParams } from 'react-router-dom';
import Header from '../component/header';
import { useEffect, useState, FC } from 'react';
import ReactPlayer from 'react-player'
import { collection, getDoc, onSnapshot, doc } from 'firebase/firestore';
import db from "../config/firebase"
import { Footer } from '../component/footer';

type Movie = {
    name?: string,
    picture?: string,
    rating?: string,
    trailerLink?: string
    [key: string]: string | undefined
}

export const Movie: FC<any> = () => {
    const params = useParams()
    const movieName = params.movieId
    const [movi, setMovi] = useState<any>([{ picture: 'data:image/png;base64,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', movieInfo: { releaseYear: 'Loading...', ganres: 'Loading...', director: 'Loading...', country: 'Loading...', ageRest: 'Loading...', length: 'Loading...' } }])
    const [movies, setMovies] = useState<any>([movieName])



    console.log(movieName)
    useEffect(
        () => {
            onSnapshot(collection(db, "Movies"), (snapshot) => {
                setMovies(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setMovi(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((movie1: Movie) => movieName === movie1.name))
            },

            )

            console.log(movi)
        }
        ,
        []
    );
    //const movieI = movies.filter((movie1:Movie)=>movieName===movie1.name)

    //setTimeout(()=>{setMovieInfo(movieI)},600) 




    return (
        <>
            <Header classname={'HeaderMovie'}></Header>
            <div className='backImg'>
                <div className='movie'>

                    <div className='imgsmall' style={{ backgroundImage: `url(${movi[0].picture})` }}></div>
                    <h1 className='movieTitle'>{movi[0].movieName}</h1>
                    <ul className='movieInfo'>

                        <li>Release:{movi[0].movieInfo.releaseYear}</li>
                        <li>Country:{movi[0].movieInfo.country}</li>
                        <li>Director:{movi[0].movieInfo.director}</li>
                        <li>Ganres:{movi[0].movieInfo.ganres}</li>
                        <li>Length:{movi[0].movieInfo.length}</li>
                        <li>Age restriction:{movi[0].movieInfo.ageRest}</li>
                    </ul>
                    <div className='sinopsis'>
                        {movi[0].sinopsis}

                    </div>
                    <div className='movieplayer'>
                        <ReactPlayer url={movi[0].trailerLink} controls={true} width={'100%'} height={'100%'} light={false} playing={false}/>
                    </div>


                </div>
            </div>
            <Footer></Footer>



        </>
    )
}