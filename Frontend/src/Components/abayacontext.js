
import React, { createContext } from "react";

export const Items = [
  // Your items array
  { id: 1, name: 'ARYA ABAYA', price: 5050, image: '../images/a1.png',material:'leather' },
  { id: 2, name: 'MAKO ABAYA', price: 7500, image: '../images/a2.png' ,material:'silk'},
  { id: 3, name: 'MAHI ABAYA', price: 8000, image: '../images/a3.png' ,material:'deffy'},
  { id: 4, name: 'TURKISH ABAYA', price: 3050, image: '../images/a4.png' ,material:'chiffon'},
  { id: 5, name: 'NASHEE ABAYA', price: 6330, image: '../images/a5.png' ,material:'silk'},
  { id: 6, name: 'HOOK ABAYA', price: 8535, image: '../images/ha5.webp' ,material:'leather'},
  { id: 7, name: 'WASHEE ABAYA', price: 5050, image: '../images/ha2.webp',material:'leather' },
  { id: 8, name: 'NOSH ABAYA', price: 7500, image: '../images/ha3.webp' ,material:'silk'},
  { id: 9, name: 'ALISH ABAYA', price: 9000, image: '../images/ha4.webp' ,material:'deffy'},
  { id: 10, name: 'TAKE ABAYA', price: 5050, image: '../images/ha8.webp' ,material:'chiffon'},
  { id: 11, name: 'NOOR ABAYA', price: 4330, image: '../images/ha6.webp' ,material:'silk'},
  { id: 12, name: 'HAYA ABAYA', price: 8535, image: '../images/ha7.webp' ,material:'leather'}
];

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={Items}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
