const apiKey = "3ViTeM6CqXky65aZurz5qQAR5zQEvnM6";

export const getGifs = ({keyword = 'morty'} = {}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
    .then(res => res.json())
    .then((response) => {
      const {data} = response;
      const gifs = data.map(image => {
        const {images, title, id} = image;
        const {url} = images.downsized_medium;
        return { id, title, url };
      });
      return gifs
    })
    .catch(() => {return []});
}
