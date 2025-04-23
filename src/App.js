import React,{useState} from 'react';
import './App.css';
import Products from './components/products/products';
import CreateProducts from './components/createProduct/createProducts';

function App() {
  
const products  = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 149.99,
    image: 'products/hd.jpg',
    qnty:7
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'products/sm.jpg',
    qnty:10
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 89.99,
    image: 'products/bts.jpg',
    qnty:0
  },
  {
    id: 4,
    name: 'Mobile phones',
    price: 12149.99,
    image: 'products/iphn.jpg',
    qnty:4
  },
  {
    id: 5,
    name: 'Mobile Covers',
    price: 199.99,
    image: 'products/cover.jpg',
    qnty:10
  },
  {
    id: 6,
    name: 'Temperd Glass',
    price: 23289.99,
    image: 'products/tmrd.jpg',
    qnty:0
  }
];
  let [newProduct,addnewProduct]=useState(null);

  function createProduct(product){
    addnewProduct(product);
  }
  return (
    <div>
      <CreateProducts createNewProduct={createProduct}></CreateProducts>
      <Products newProduct={newProduct}></Products>
     </div>
  )
}

export default App;
