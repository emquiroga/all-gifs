import { apiKey, apiUrl } from "./settings";

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image;
      const {url} = images.downsized_medium;
      return {url, title, id};
    })
    return gifs;
  }
  return [];
}

export const getGifs = ({limit = 25, keyword = 'morty', page = 0} = {}) => {
    const apiURL = `${apiUrl}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;
    return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
}
