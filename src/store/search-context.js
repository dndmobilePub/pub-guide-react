import { createContext, useContext, useState } from 'react';

const InputContext = createContext();

export function InputProvider({ children }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
}

export function useInputContext() {
  return useContext(InputContext);
}