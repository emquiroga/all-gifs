import React from 'react';
import Gif from 'components/Gif/Gif'
import { useSingleGif } from 'hooks/useSingleGif';
import "./Detail.css"
import Spinner from 'components/Spinner/Spinner';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';

const Detail = ({params}) => {
    const {gif, loading, error} = useSingleGif({id: params.id});
    const title = gif ? gif.title : "";
    
    if (loading) return (
        <>
        <Helmet>
            <title>Loading...</title>
            <meta name="description" content="Loading..." />
        </Helmet>
        <Spinner />
        </>
    );
    if (error) return <Redirect to="/404" />
    if (!gif) return null

    return (
        <>
        <Helmet>
            <title>{title} - GifHub</title>
            <meta name="description" content={title} />
        </Helmet>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
        </>
    )
}

export default Detail
