import React, {useCallback} from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import "./Home.css"
import LazyTrending from 'components/LazyTrending/LazyTrending'
import SearchForm from 'components/SearchForm/SearchForm'

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [path, pushLocation] = useLocation()
    const {gifs} = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
        <SearchForm 
        onSubmit={handleSubmit}
        />
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
