/*
  update the gist also
  https://gist.github.com/deadmercury/9d607a5650f33658d7ef50b43b0f5094
*/
import { useReducer, useEffect, useLayoutEffect, useMemo, useRef } from 'react';

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
  // useLayoutEffect and server rendering
  // https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  useLayoutEffect = typeof window === 'undefined' ? () => {} : useLayoutEffect;

  const [state, dispatch] = useReducer(reducer, initialState);

  // for stopping the effect from running on first render
  // https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render
  const firstTime = useRef(true);

  // as useLayoutEffect runs before screen is visually updated we
  // use it instead of useEffect here to hide the flash of intialState theme.
  // initially after mounting if a theme exists in localstorage, apply it
  useLayoutEffect(() => {
    // get the item stored with the key from the localstorage
    const objectFromLocalStorage = localStorage.getItem(key);
    // checking for falseness because if key doesn't exists getItems returns null
    if (
      objectFromLocalStorage &&
      isJSON(objectFromLocalStorage) &&
      // do not update state if locally stored object is same as state
      objectFromLocalStorage !== JSON.stringify(initialState)
    ) {
      dispatch({
        type: 'init_stored',
        value: JSON.parse(objectFromLocalStorage),
      });
    }
  }, []);

  // subsequently if the state changes, store the changes to localStorage
  useEffect(() => {
    // don't do anything on first render
    /* 
      because on first render, state contains the intial state which
      may or may not be same as state stored in localStorage
      which can result in overwriting of user saved state
    */
    if (firstTime.current) {
      firstTime.current = false;
      return;
    }
    // before writing to local storage check if stored object is same as state.
    // prevents unnecessary writes to localStorage
    if (window && window.localStorage.getItem(key) !== JSON.stringify(state)) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  // return a memoized state, dispatch pair.
  // useMemo will remember the returned value from your function.
  // useCallback will remember your actual function.
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return contextValue;
}
