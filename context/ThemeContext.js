import radixColors from '../utils/radix-colors';
import useLocalStorage from '../hooks/useLocalStorage';
import determineGrayScale from '../utils/determineGrayScale';
import { createContext, useContext, useLayoutEffect } from 'react';

const ThemeContext = createContext();

// initial theme
const initialColor = 'mint';
const initialDarkMode = false;
const initialTheme = {
  colorName: initialColor,
  grayName: determineGrayScale(initialColor),
  darkMode: initialDarkMode,
  gray: radixColors[determineGrayScale(initialColor)][
    initialDarkMode ? 'dark' : 'light'
  ],
  color: radixColors[initialColor][initialDarkMode ? 'dark' : 'light'],
};

// state is previous state, action is object passed to dispatch
const reducer = (state, action) => {
  switch (action.type) {
    // if theme is present in localstorage
    case 'init_stored':
      return action.value;
    // update state based on received color name
    case 'UPDATE_COLOR':
      return {
        ...state,
        colorName: action.value,
        grayName: determineGrayScale(action.value),
        gray: radixColors[determineGrayScale(action.value)][
          state.darkMode ? 'dark' : 'light'
        ],
        color: radixColors[action.value][state.darkMode ? 'dark' : 'light'],
      };
    // toggle color mode
    case 'TOGGLE_MODE':
      return {
        ...state,
        darkMode: !state.darkMode,
        gray: radixColors[state.grayName][!state.darkMode ? 'dark' : 'light'],
        color: radixColors[state.colorName][!state.darkMode ? 'dark' : 'light'],
      };
    // update color mode based on recieved value
    case 'UPDATE_MODE':
      if (!['light', 'dark'].includes(action.value))
        throw new Error(`Invalid color mode '${action.value}'`);
      return {
        ...state,
        darkMode: action.value === 'light' ? false : true,
        gray: radixColors[state.grayName][action.value],
        color: radixColors[state.colorName][action.value],
      };
    // in case of unrecognised type
    default:
      throw new Error(`Invalid reducer type '${action.type}'`);
  }
};

function ThemeProvider({ children }) {
  // rename state and dispatch properties
  const { state: theme, dispatch: setTheme } = useLocalStorage(
    'theme',
    initialTheme,
    reducer
  );

  // since this updates theme so it should happen before painting
  // so as to remove flash of intial theme
  useLayoutEffect(() => {
    /*
      this is to update theme intially based on user's preffered
      color scheme. but it does not update the theme if a theme 
      is already present in the localstorage
    */
    if (
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !window.localStorage.getItem('theme')
    ) {
      setTheme({
        type: 'UPDATE_MODE',
        value: 'dark',
      });
    }
    // function that updates theme based on change in
    // prefers-color-scheme
    const onColorSchemeChange = (e) => {
      setTheme({
        type: 'UPDATE_MODE',
        value: e.matches ? 'dark' : 'light',
      });
    };

    const preferColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // add eventlistener to that matchmedia query
    preferColorScheme.addEventListener('change', onColorSchemeChange);

    // cleanup function
    return () => {
      // remove eventlistener for that matchmedia query
      preferColorScheme.removeEventListener('change', onColorSchemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// return a wrapped hook to use in components
function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useThemeContext };
