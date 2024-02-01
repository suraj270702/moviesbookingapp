import React, { createContext, useContext, useState } from 'react';

const YourContext = createContext();

export const YourContextProvider = ({ children }) => {
  const [showsData, setShowsData] = useState();

  const contextValue = {
    showsData,
    setShowsData,
  };

  return (
    <YourContext.Provider value={contextValue}>
      {children}
    </YourContext.Provider>
  );
};

export const useYourContext = () => {
  const context = useContext(YourContext);

  if (!context) {
    throw new Error('useYourContext must be used within a YourContextProvider');
  }

  return context;
};
