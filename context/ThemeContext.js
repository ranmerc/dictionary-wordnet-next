import { createContext, useContext } from 'react';
import determineGrayScale from '../utils/determineGrayScale';
import colors from '../utils/radix-colors';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext();

// initial theme
const initialColor = 'mint';
const initialDarkMode = false;
const initialTheme = {
  colorName: initialColor,
  grayName: determineGrayScale(initialColor),
  darkMode: initialDarkMode,
  gray: colors[determineGrayScale(initialColor)][
    initialDarkMode ? 'dark' : 'light'
  ],
  color: colors[initialColor][initialDarkMode ? 'dark' : 'light'],
};

// state is previous state, action is object passed to dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case 'init_stored':
      return action.value;
    case 'UPDATE_COLOR':
      return {
        ...state,
        colorName: action.value,
        grayName: determineGrayScale(action.value),
        gray: colors[determineGrayScale(action.value)][
          state.darkMode ? 'dark' : 'light'
        ],
        color: colors[action.value][state.darkMode ? 'dark' : 'light'],
      };
    case 'TOGGLE_MODE':
      return {
        ...state,
        darkMode: !state.darkMode,
        gray: colors[state.grayName][!state.darkMode ? 'dark' : 'light'],
        color: colors[state.colorName][!state.darkMode ? 'dark' : 'light'],
      };
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
