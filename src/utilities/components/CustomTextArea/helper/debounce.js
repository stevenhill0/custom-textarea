export const debounce = (fn, delay = 3000) => {
  let timeout;

  return (...args) => {
    const later = () => {
      clearTimeout(timeout);

      fn(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, delay);
  };
};
