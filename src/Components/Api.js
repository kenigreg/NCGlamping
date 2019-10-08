import axios from 'axios';

export const getSites = () => {
  const url = 'http://localhost:8080/sites';
  return axios.get(url).then(({ data }) => {
    return data;
  });
};
