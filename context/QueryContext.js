import { useState } from 'react';
import { createContext, useContext } from 'react';

const QueryContext = createContext();

function QueryProvider({ children }) {
  const [query, setQuery] = useState('');

  return (
    <QueryContext.Provider value={[query, setQuery]}>
      {children}
    </QueryContext.Provider>
  );
}

function useQueryContext() {
  const context = useContext(QueryContext);
  if (context === undefined) {
    throw new Error('useQueryContext must be used within a QueryProvider');
  }
  return context;
}

export { QueryProvider, useQueryContext };
