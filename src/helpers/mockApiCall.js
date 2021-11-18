const mockApiCall = (mockData, delay) => {
  return () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData);
      }, delay);
    });
  };
};

export default mockApiCall;
