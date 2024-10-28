// MyProvider.js
import React, { useState } from 'react';
import { MyContext } from './MyContext';

export const MyProvider = ({ children }) => {
  const [data, setData] = useState("");

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};
