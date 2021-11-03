import React, {useEffect, useRef, useCallback} from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import { useNearScreen } from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

const SearchResults = ({params}) => {
  const { keyword } = params;
  const {loading, gifs, setPage} = useGifs({keyword}); 
  const externalRef = useRef();
  const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once: false});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(debounce(() => setPage(page => page + 1), 250), [setPage]);

  useEffect(() => {
    if(isNearScreen) {
      debounceHandleNextPage();
    }
  },[ isNearScreen, debounceHandleNextPage]);

  return (
        <>
           {loading ? <Spinner /> : 
           <>
           <h3 className="App-title">{decodeURI(keyword)}</h3>
           <ListOfGifs gifs={gifs} />
           <div id="visor" ref={externalRef}></div>
           </>}
           
        </>
    )
}

export default SearchResults