import React from 'react'

import Spiner from '../../components/Spinner/Spiner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'

import { useGifs } from '../../hooks/useGifs'

const SearchResults = ({params}) => {
  const { keyword } = params;
  const {loading, gifs} = useGifs({keyword});
  return (
        <>
           {loading ? <Spiner /> : <ListOfGifs gifs={gifs} />}
        </>
    )
}

export default SearchResults