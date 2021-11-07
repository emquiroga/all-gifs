import React from 'react'
import SearchForm from 'components/SearchForm/SearchForm'
import { Helmet } from 'react-helmet'
import { ErrorPageContainer, ErrorSpanTitle, ErrorMsg, ErrorGif } from './styles'
import Button from 'components/Button/Button'

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];



const Error404 = () => {
    const randomImage = () => {
        return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
    }
    return (
        <>
         <Helmet>
             <title>Error 404 | GifHub</title>
         </Helmet>
         <SearchForm />
            <ErrorPageContainer>
                    <ErrorSpanTitle className="text-gradient">-404-</ErrorSpanTitle>
                    <ErrorMsg>Sometimes getting lost isn't that bad</ErrorMsg>
                    <ErrorGif src={randomImage()} alt="Error 404" />
                    <Button href="/">Return to Home</Button>
            </ErrorPageContainer>
        </>
    )
}

export default Error404