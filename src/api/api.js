import axios from 'axios';

const API_KEY = '24768464-e1ff0e2674d224e161089b0f2';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = (query, page) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
`,
    )
    .then(res =>
      res.data.hits.map(({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      })),
    );
};

export default { fetchImages };
