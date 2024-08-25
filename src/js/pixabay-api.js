import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages(query, page) {
  const params = {
    key: '45497823-3ee11a5b90ff874601dfe7178',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: page,
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
