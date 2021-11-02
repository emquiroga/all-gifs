import { apiKey, apiUrl } from "./settings";

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse;
  return data;
}

export const getTendingTerms = () => {
    const apiURL = `${apiUrl}/trending/searches?api_key=${apiKey}`;
    return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
}
