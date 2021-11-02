import React from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'

const SearchResults = ({params}) => {
  const { keyword } = params;
  const {loading, gifs, setPage} = useGifs({keyword}); 
  const handleNextPage = () => {
    setPage(page => page + 1);
  }
  return (
        <>
           {loading ? <Spinner /> : 
           <>
           <h3 className="App-title">{decodeURI(keyword)}</h3>
           <ListOfGifs gifs={gifs} />
           </>}
           <button onClick={handleNextPage}>Next page</button>
        </>
    )
}

export default SearchResults