const mockApiCall = (mockData, delay) => {
  return () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData);
      }, 0);
    });
  };
};

export default mockApiCall;
