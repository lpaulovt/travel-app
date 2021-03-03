import React, {createContext, useState, useContext} from 'react';

const Context = createContext({});

const ContextProvider = ({children}) => {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <Context.Provider
      value={{
        data: data,
        setData: setData,
        selectedData: selectedData,
        setSelectedData: setSelectedData,
      }}>
      {children}
    </Context.Provider>
  );
};

function use_Context() {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {ContextProvider, use_Context};
