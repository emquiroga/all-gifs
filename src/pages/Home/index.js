import React from 'react'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import "./Home.css"
import LazyTrending from 'components/LazyTrending/LazyTrending'
import SearchForm from 'components/SearchForm/SearchForm'
import { Helmet } from 'react-helmet';


const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const {gifs} = useGifs()


    return (
        <>
        <Helmet>
            <title>Home - GifHub</title>
            <meta name="description" content="Home page of GifHub" />
            <link rel="canonical" href="https://gifhub.vercel.app/"/>
        </Helmet>
        <SearchForm />
         <div className="App-main">
             <div className="App-results">
                <h3 className="App-subtitle">Last search</h3> 
                <ListOfGifs gifs={gifs} />
             </div> 
             <div className="App-category">
                <LazyTrending />
             </div>
         </div>
        </>
    )
}

export default Home
