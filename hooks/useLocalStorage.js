import { useReducer, useEffect, useLayoutEffect, useMemo } from 'react';

// checks if the str is json
const isJSON = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export default function useLocalStorage(key, initialState, reducer) {
  // https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  useLayoutEffect = typeof window === 'undefined' ? () => {} : useLayoutEffect;

  const [state, dispatch] = useReducer(reducer, initialState);

  // as useLayoutEffect runs before screen is visually updated we
  // use it instead of useEffect here to hide the flash of intialState theme
  // initially after mounting if a theme exists in localstorage, apply it
  useLayoutEffect(() => {
    // because if key doesn't exists getItems returns null
    if (localStorage.getItem(key) && isJSON(localStorage.getItem(key))) {
      dispatch({
        type: 'init_stored',
        value: JSON.parse(localStorage.getItem(key)),
      });
    }
  }, []);

  // subsequently if the state changes, store the changes to localStorage
  useEffect(() => {
    if (state && state !== initialState) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  // return a memoized state, dispatch pair
  // useMemo will remember the returned value from your function.
  // useCallback will remember your actual function.
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return contextValue;
}
