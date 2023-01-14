const useLoacatStorage = (key, value) => {
  window.localStorage.setItem(key, value);
  return window.localStorage.getItem(key);
};

export default useLoacatStorage;
