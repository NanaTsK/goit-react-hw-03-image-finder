import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38687572-8bc90b5796d20c3c60f436eda';

// q = null;
// page = 1;

export const fetchImages = async (searchQuery, page) => {
  //   const q = null;
  const option = {
    headers: {
      'Content-type': 'application/json',
    },
    params: {
      key: API_KEY,
      q: `${searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: `${page}`,
      per_page: 12,
    },
  };
  const data = await axios.get(BASE_URL, option);
  return data;
};

// export const changePage = page => {
//   page += 1;
//   return page;
// };

// export const resetPage = () => {
//   return 1;
// };
// export const resetPage = (page) => {
//   page = 1;
// };

// class PixaBayAPI {
//   #BASE_URL = 'https://pixabay.com/api/';
//   #API_KEY = '38687572-8bc90b5796d20c3c60f436eda';

//   q = null;
//   page = 1;

//   async fetchImages() {
//     const searchParams = new URLSearchParams({
//       key: this.#API_KEY,
//       q: this.q,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page: this.page,
//       per_page: 40,
//     });

//     const apiUrl = `${this.#BASE_URL}?${searchParams}`;
//     console.log('API URL:', apiUrl);

//     const data = await axios.get(apiUrl);
//     return data;
//   }

//   changePage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }

// export { PixaBayAPI };
