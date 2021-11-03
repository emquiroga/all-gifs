import React from 'react';
import Gif from 'components/Gif/Gif'
import { useSingleGif } from 'hooks/useSingleGif';
import "./Detail.css"
import Spinner from 'components/Spinner/Spinner';
import { Redirect } from 'wouter';

const Detail = ({params}) => {
    const {gif, loading, error} = useSingleGif({id: params.id});

    if (loading) return <Spinner />;
    if (error) return <Redirect to="/404" />
    if (!gif) return null

    return (
        <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
        </>
    )
}

export default Detail
