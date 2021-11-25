import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const RecentContext = createContext();

const RECENT_SIZE = 50;

// state is previous state, action is object passed to dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case 'init_stored':
      return action.value;
    case 'ADD':
      return [action.value].concat(
        state
          .filter((sense) => {
            return sense.offset !== action.value.offset;
          })
          .slice(0, RECENT_SIZE - 1)
      );
    case 'CLEAR':
      return [];
    default:
      throw new Error(`Invalid reducer type '${action.type}'`);
  }
};

function RecentProvider({ children }) {
  // rename state and dispatch properties
  const { state: recent, dispatch: setRecent } = useLocalStorage(
    'recent',
    [],
    reducer
  );
  return (
    <RecentContext.Provider value={{ recent, setRecent }}>
      {children}
    </RecentContext.Provider>
  );
}

// return a wrapped hook to use in components
function useRecentContext() {
  const context = useContext(RecentContext);
  if (context === undefined) {
    throw new Error('useRecentContext must be used within a RecentProvider');
  }
  return context;
}

export { RecentProvider, useRecentContext };
