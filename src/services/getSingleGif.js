import { apiKey, apiUrl } from "./settings";

const fromApiResponseToGifs = apiResponse => {
    const {data} = apiResponse;
    const {images, title, id} = data;
    const {url} = images.downsized_medium;
    return {url, title, id};
}

const getSingleGif = ({id}) => {
    return fetch(`${apiUrl}/gifs/${id}?api_key=${apiKey}`)
        .then(response => response.json()) 
        .then(fromApiResponseToGifs)
}

export default getSingleGif;