import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const BookmarkContext = createContext();

const BOOKMARK_SIZE = 20;

// state is previous state, action is object passed to dispatch
const reducer = (state, action) => {
  switch (action.type) {
    // store intial value read from localStorage
    case 'init_stored':
      return action.value;
    case 'ADD':
      // check if word is already in list
      if (
        state.some((sense) => {
          return sense.offset === action.value.offset;
        })
      ) {
        // don't add it if exists already
        return state;
      }
      /*
       add new item to the starting of the list
       and remove elements from the end to fit 
       the max size limit
      */
      return [action.value].concat(state.slice(0, BOOKMARK_SIZE - 1));
    case 'REMOVE':
      // remove only if exists
      if (
        state.some((sense) => {
          return sense.offset === action.value;
        })
      )
        return state.filter((sense) => {
          return sense.offset !== action.value;
        });
      return state;
    case 'CLEAR':
      return [];
    default:
      throw new Error(`Invalid reducer type '${action.type}'`);
  }
};

function BookmarkProvider({ children }) {
  // rename state and dispatch properties
  const { state: bookmark, dispatch: setBookmark } = useLocalStorage(
    'bookmark',
    [],
    reducer
  );
  return (
    <BookmarkContext.Provider value={{ bookmark, setBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

// return a wrapped hook to use in components
function useBookmarkContext() {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('BookmarkContext must be used within a BookmarkProvider');
  }
  return context;
}

export { BookmarkProvider, useBookmarkContext };
