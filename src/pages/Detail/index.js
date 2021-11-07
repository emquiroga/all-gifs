import React from 'react';
import Gif from 'components/Gif/Gif'
import { useSingleGif } from 'hooks/useSingleGif';
import "./Detail.css"
import Spinner from 'components/Spinner/Spinner';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';
import Button from 'components/Button/Button';

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
        <div className="App-detail">
        <Helmet>
            <title>{title} | GifHub</title>
            <meta name="description" content={title} />
            <link rel="canonical" href="https://gifhub.vercel.app/"/>
        </Helmet>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
        <Button href="/">Back</Button>
        </div>
    )
}

export default Detail
