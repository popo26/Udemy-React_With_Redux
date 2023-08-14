import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID 3SZbdHi2Y7h-FcbDmCVnUS95V7--lnZIlhyGGVeGFs8'
        },
        params: {
            query: term,
        }
    });
  
    return response.data.results;
};

export default searchImages;