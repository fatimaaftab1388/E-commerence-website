import React, { createContext, useState } from "react";
export const Items = [
  // Your items array
  { id: 1, name: 'ARYA ABAYA', price: 5050, cat:"abaya", image: '../images/a1.png',material:'leather', selected:false },
  { id: 2, name: 'MAKO ABAYA', price: 7500, cat:"abaya", image: '../images/a2.png' ,material:'silk', selected:false},
  { id: 3, name: 'MAHI ABAYA', price: 8000, cat:"abaya",image: '../images/a3.png' ,material:'deffy', selected:false},
  { id: 4, name: 'TURKISH ABAYA', price: 3050, cat:"abaya",image: '../images/a4.png' ,material:'chiffon', selected:false},
  { id: 5, name: 'NASHEE ABAYA', price: 6330, cat:"abaya",image: '../images/a5.png' ,material:'silk', selected:false},
  { id: 6, name: 'HOOK ABAYA', price: 8535, cat:"abaya",image: '../images/ha5.webp' ,material:'leather', selected:false},
  { id: 7, name: 'WASHEE ABAYA', price: 5050, cat:"abaya",image: '../images/ha2.webp',material:'leather', selected:false},
  { id: 8, name: 'NOSH ABAYA', price: 7500, cat:"abaya",image: '../images/ha3.webp' ,material:'silk', selected:false},
  { id: 9, name: 'ALISH ABAYA', price: 9000, cat:"abaya",image: '../images/ha4.webp' ,material:'deffy', selected:false},
  { id: 10, name: 'TAKE ABAYA', price: 5050, cat:"abaya",image: '../images/ha8.webp' ,material:'chiffon', selected:false},
  { id: 11, name: 'NOOR ABAYA', price: 4330, cat:"abaya",image: '../images/ha6.webp' ,material:'silk', selected:false},
  { id: 12, name: 'HAYA ABAYA', price: 8535, cat:"abaya",image: '../images/ha7.webp' , selected:false},



  {id:13,name:'Chiffon Bubble Purple', price:700.00,image: '../images/hijab1.jpg',cat:'hijab',selected:false},
  {id:14,name:'Chiffon Bubble Blue', price:700.00,image:'../images/hijab2.jpg',cat:'hijab',selected:false},
  {id:15,name:'Chiffon Bubble Green', price:700.00,image:'../images/hijab3.jpg',cat:'hijab',selected:false},
  {id:16,name:'Chiffon Bubble Frozen', price:700.00,image:'../images/hijab4.jpg',cat:'hijab',selected:false},
  {id:17,name:'Chiffon Bubble Skin', price:700.00,image:'../images/hijab5.jpg',cat:'hijab',selected:false},
  {id:18,name:'Chiffon Bubble Yellow', price:700.00,image:'../images/hijab6.jpg',cat:'hijab',selected:false},
  {id:19,name:'Chiffon Bubble Gray', price:700.00,image:'../images/hijab7.jpg',cat:'hijab',selected:false},
  {id:20,name:'Chiffon Bubble Purple', price:700.00,image:'../images/hijab7.webp',cat:'hijab',selected:false},
  {id:21,name:'Chiffon Bubble Blue', price:700.00,image:'../images/hh2.webp',cat:'hijab',selected:false},
  {id:22,name:'Chiffon Bubble Green', price:700.00,image:'../images/hh3.webp',cat:'hijab',selected:false},
  {id:23,name:'Chiffon Bubble Frozen', price:700.00,image:'../images/hh4.webp',cat:'hijab',selected:false},
  {id:24,name:'Chiffon Bubble Skin', price:700.00,image:'../images/hh5.webp',cat:'hijab',selected:false},
  {id:25,name:'Chiffon Bubble Yellow', price:700.00,image:'../images/hh6.webp',cat:'hijab',selected:false},
  {id:26,name:'Chiffon Bubble Gray', price:700.00,image:'../images/hh7.webp',cat:'hijab',selected:false},


  {id:27,name:'Chiffon Bubble Purple', price:700.00,image:'../images/n1.webp',cat:'niqab',selected:false},
  {id:28,name:'Chiffon Bubble Blue', price:700.00,image:'../images/n2.webp',cat:'niqab',selected:false},
  {id:29,name:'Chiffon Bubble Green', price:700.00,image:'../images/n3.webp',cat:'niqab',selected:false},
  {id:30,name:'Chiffon Bubble Frozen', price:700.00,image:'../images/n4.webp',cat:'niqab',selected:false},
  {id:31,name:'Chiffon Bubble Skin', price:700.00,image:'../images/n5.webp',cat:'niqab',selected:false},
  {id:32,name:'Chiffon Bubble Yellow', price:700.00,image:'../images/n6.webp',cat:'niqab',selected:false},
  {id:33,name:'Chiffon Bubble Gray', price:700.00,image:'../images/n7.webp',cat:'niqab',selected:false},
  {id:34,name:'Chiffon Bubble Purple', price:700.00,image:'../images/n8.webp',cat:'niqab',selected:false},
  {id:35,name:'Chiffon Bubble Blue', price:700.00,image:'../images/n9.webp',cat:'niqab',selected:false},
  {id:36,name:'Chiffon Bubble Green', price:700.00,image:'../images/n10.webp',cat:'niqab',selected:false},
  {id:37,name:'Chiffon Bubble Frozen', price:700.00,image:'../images/n11.webp',cat:'niqab',selected:false},
  {id:38,name:'Chiffon Bubble Skin', price:700.00,image:'../images/n12.webp',cat:'niqab',selected:false},
  {id:39,name:'Chiffon Bubble Yellow', price:700.00,image:'../images/n13.webp',cat:'niqab',selected:false},
  {id:40,name:'Chiffon Bubble Gray', price:700.00,image:'../images/n14.webp',cat:'niqab',selected:false},

        {id:41,name:'Chiffon Bubble Purple', price:700.00,image:'../images/bundle1.jpg',cat:'bundles'},
        {id:42,name:'Chiffon Bubble Blue', price:700.00,image:'../images/bundle2.jpg',cat:'bundles'},
        {id:43,name:'Chiffon Bubble Green', price:700.00,image:'../images/bundle3.jpg',cat:'bundles'},
        {id:44,name:'Chiffon Bubble Frozen', price:700.00,image:'../images/bundle4.jpg',cat:'bundles'},
        {id:45,name:'Chiffon Bubble Skin', price:700.00,image:'../images/bundle1.jpg',cat:'bundles'},
        {id:46,name:'Chiffon Bubble Purple', price:700.00,image:'../images/bundle1.jpg',cat:'bundles'},
        {id:47,name:'Chiffon Bubble Blue', price:700.00,image:'../images/bundle2.jpg',cat:'bundles'},
        {id:48,name:'Chiffon Bubble Green', price:700.00,image:'../images/bundle3.jpg',cat:'bundles'},
        {id:49,name:'Chiffon Bubble Frozen', price:700.00,image:'../images/bundle4.jpg',cat:'bundles'},
        {id:50,name:'Chiffon Bubble Skin', price:700.00,image:'../images/bundle1.jpg',cat:'bundles'},

        {id:51,name:'Chiffon Bubble Blue', price:700.00,image:'../images/so2.webp',cat:'cap'},
        {id:52,name:'Chiffon Bubble Green', price:700.00,image:'../images/so3.webp',cat:'cap'},
        {id:53,name:'Chiffon Bubble Frozen', price:700.00,image:'../images/so4.webp',cat:'cap'},
        {id:54,name:'Chiffon Bubble Skin', price:700.00,image:'../images/so5.webp',cat:'cap'},
        {id:55,name:'Chiffon Bubble Purple', price:700.00,image:'../images/so6.webp',cat:'cap'},
        {id:56,name:'Chiffon Bubble Blue', price:700.00,image:'../images/so7.webp',cat:'cap'},
        {id:57,name:'Chiffon Bubble Green', price:700.00,image:'../images/so8.webp',cat:'cap'},
        {id:58,name:'Chiffon Bubble Frozen', price:700.00,image:'../images/so9.webp',cat:'cap'},
        {id:59,name:'Chiffon Bubble Skin', price:700.00,image:'../images/s04.webp',cat:'cap'},
        {id:60,name:'Chiffon Bubble Skin', price:700.00,image:'../images/so10.webp',cat:'cap'},
        {id:61,name:'Chiffon Bubble Skin', price:700.00,image:'../images/so11.webp',cat:'cap'},
        {id:62,name:'Chiffon Bubble Skin', price:700.00,image:'../images/cap1.webp',cat:'cap'},
        {id:63,name:'Chiffon Bubble Skin', price:700.00,image:'../images/cap2.webp',cat:'cap'},
        {id:64,name:'Chiffon Bubble Skin', price:700.00,image:'../images/cap3.webp',cat:'cap'},
        {id:65,name:'Chiffon Bubble Skin', price:700.00,image:'../images/cap4.webp',cat:'cap'},
        {id:66,name:'Chiffon Bubble Purple', price:700.00,image:'../images/so1.webp',cat:'cap'},
];

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [abaya, setAbaya] = useState(Items);
  // const [cart,set]
  const store = { abaya, setAbaya };

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
