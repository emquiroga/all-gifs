import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import "./Home.css"

const Home = () => {
    const POPULAR_GIFS = ["Dune", "Eternals", "Batman"]
    const [keyword, setKeyword] = useState("")
    const [pushLocation] = useLocation()
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
         </form>
         <h3>Last search</h3> 
         <ListOfGifs gifs={gifs} />
         <h3>Trending gifs</h3>
         <ul className="HomeList">
            {POPULAR_GIFS.map(gif => (
            <li>
                <Link to={`/search/${gif}`}>Gifs de {gif}</Link>
            </li>
            ))}  
         </ul>
        </>
    )
}

export default Home
