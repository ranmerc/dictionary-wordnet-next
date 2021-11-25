/* context which defines which word 
  meaning is currently open on /define 
  used in bookmark lists
*/
import { useState } from 'react';
import { createContext, useContext } from 'react';

const SenseContext = createContext();

function SenseProvider({ children }) {
  const [sense, setSense] = useState({});

  return (
    <SenseContext.Provider value={[sense, setSense]}>
      {children}
    </SenseContext.Provider>
  );
}

function useSenseContext() {
  const context = useContext(SenseContext);
  if (context === undefined) {
    throw new Error('useSenseContext must be used within a SenseProvider');
  }
  return context;
}

export { SenseProvider, useSenseContext };
