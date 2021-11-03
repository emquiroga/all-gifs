import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";
import { useGifs } from "./useGifs";

export const useSingleGif = ({id}) => {
    const {gifs} = useGifs();
    const gifFromCache = gifs.find(gif => gif.id === id);

    const [gif, setGif] = useState(gifFromCache);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!gif) {
            setLoading(true);
            getSingleGif({id})
            .then(gif => {
                setGif(gif);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
        }
    }, [gif, id])

    return {gif, loading, error};
}
