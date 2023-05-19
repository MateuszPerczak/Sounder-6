export const useApi = (): Window["api"] => {
  // const promiseResolver = () => {
  //   return new Promise((resolve) => {

  //   });
  // }

  return window.api;
};
