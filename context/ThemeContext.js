import { createContext, useContext } from 'react';
import determineGrayScale from '../utils/determineGrayScale';
import colors from '../utils/radix-colors';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext();

// intial theme
const intialColor = 'mint';
const intialDarkMode = false;
const initialTheme = {
  colorName: intialColor,
  grayName: determineGrayScale(intialColor),
  darkMode: intialDarkMode,
  gray: colors[determineGrayScale(intialColor)][
    intialDarkMode ? 'dark' : 'light'
  ],
  color: colors[intialColor][intialDarkMode ? 'dark' : 'light'],
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
        gray: colors[state.colorName][!state.darkMode ? 'dark' : 'light'],
        color: colors[state.colorName][!state.darkMode ? 'dark' : 'light'],
      };
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
