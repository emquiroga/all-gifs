import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import "./Home.css"
import LazyTrending from 'components/LazyTrending/LazyTrending'

const Home = () => {
    const [keyword, setKeyword] = useState("")
    const [path, pushLocation] = useLocation()
    const {gifs} = useGifs()

    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    
    return (
        <>
         <form onSubmit={handleSubmit}>
             <input placeholder="Search your gifs..." type="text" value={keyword} onChange={handleChange} />
             <button type="submit">Search</button>
         </form>
         <div className="App-main">
             <div className="App-results">
                <h3 className="App-title">Last search</h3> 
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
