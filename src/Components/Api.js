import axios from 'axios';

export const getSites = () => {
  const url = 'http://localhost:8080/sites';
  return axios.get(url).then(({ data }) => {
    return data;
  });
};

export const getSingleSite = id => {
  const url = `http://localhost:8080/sites/${id}`;
  return axios.get(url).then(({ data }) => {
    return data;
  });
};

export const getLocation = postCode => {
  const url = `https://api.postcodes.io/postcodes/${postCode}`;
  return axios.get(url).then(({ data: { result } }) => {
    return result;
  });
};

export const getSearchSite = searchTerm => {
  console.log(searchTerm);
  const url = 'http://localhost:8080/sites';
  return axios
    .get(url, {
      params: { q: searchTerm }
    })
    .then(({ data }) => {
      return data;
    });
};
