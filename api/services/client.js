// import { COUNTRY_API_TOKEN } from "../../constants/country-api";

// import { NEWS_API_KEY } from "../../constants/news-api";

const send = async (url, options) => {
  const response = await fetch(url, options);
  return response;
};

const get = async (url, options) => {
  const response = await send(url, {
    ...options,
    method: "GET",
  });
  return response;
};

// const getWithCredentials = async (url, options) => {
//   const requestOptions = {
//     ...options,
//     headers: {
//       authorization: "Bearer " + NEWS_API_KEY,
//     },
//   };

//   return get(url, requestOptions);
// };

const post = async (url, options) => {
  const response = await send(url, {
    ...options,
    method: "POST",
  });
  return response;
};

// const postWithCredentials = async (url, options) => {
//   const requestOptions = {
//     ...options,
//     headers: {
//       authorization: "Bearer " + COUNTRY_API_TOKEN,
//       "Content-Type": "application/json",
//     },
//   };

//   return post(url, requestOptions);
// };

// const putWithCredentials = async (url, options) => {
//   const requestOptions = {
//     ...options,
//     headers: {
//       authorization: "Bearer " + COUNTRY_API_TOKEN,
//       "Content-Type": "application/json",
//     },
//   };

//   return put(url, requestOptions);
// };

const put = async (url, options) => {
  const response = await send(url, {
    ...options,
    method: "PUT",
  });
  return response;
};

const remove = async (url, options) => {
  const response = await send(url, {
    ...options,
    method: "DELETE",
  });
  return response;
};

export { get, post, put, remove };
